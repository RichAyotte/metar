/**
 * @overview    Metar report analyzer
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const {withInterval} = require('kefir')

const getRandomMetarReport = require('./get-random-metar-report')
const normalizeWindSpeed = require('./normalize-wind-speed')
const parseMetarReport = require('./parse-metar-report')
const pickWindReportData = require('./pick-wind-report')
const updateAirportReport = require('./update-airport-report')

const maxEvents = 200000
let eventCount = 0

module.exports = withInterval(100, emitter => {
	if (eventCount >= maxEvents) {
		emitter.end()
	}
	emitter.emit(getRandomMetarReport())
	eventCount += 1
})
.map(parseMetarReport)
.map(pickWindReportData)
.map(normalizeWindSpeed)
.scan(updateAirportReport, new Map())
