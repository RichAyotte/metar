/**
 * @overview    Parse METAR report
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const times = require('lodash/times')
const getRandomMetarReports = require('./get-random-metar-report')
const parseMetarReport = require('./parse-metar-report')
const windUnits = require('./wind-units')

describe('Metar report', () => {
	const reports = times(100, getRandomMetarReports)
	const windUnitsPattern = new RegExp(`${[...windUnits.values()].join('|')}`)

	test.each(reports)(`%o is valid`, report => {
		const parsedReport = parseMetarReport(report)
		const desiredReport = {
			icaoCode: expect.stringMatching(/[A-Z]{4}/)
			, timestamp: {
				monthDay: expect.toBeWithin(1, 32)
				, hours: expect.toBeWithin(0, 24)
				, minutes: expect.toBeWithin(0, 60)
				, z: 'Z'
			}
			, windInfo: {
				direction: expect.toBeWithin(0, 1000)
				, speed: expect.toBeWithin(10, 1000)
				, gusts: expect.toBeWithin(10, 100)
				, unit: expect.stringMatching(windUnitsPattern)
			}
		}
		expect(parsedReport).toMatchObject(desiredReport)
	})
})
