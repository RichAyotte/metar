/**
 * @overview    Random metar report test
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const times = require('lodash/times')
const getRandomMetarReport = require('./get-random-metar-report')

describe('Random METAR report', () => {
	const reports = times(100, getRandomMetarReport)
	test.each(reports)(`"%s" is valid`, report => {
		const [icaoCode, timestamp, windInfo] = report.split(' ')
		expect(icaoCode).toMatch(/^[A-Z]{1,4}$/)
		expect(timestamp).toMatch(/^\d{6}Z$/)
		expect(windInfo).toMatch(/^\d{3}\d{2,3}(G\d{2})?(MPS|KT)$/)
	})
})
