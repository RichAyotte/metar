/**
 * @overview    Udpate airport report
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const find = require('lodash/find')
const get = require('lodash/get')
const airports = require('../data/airports')

module.exports = (airportReport, {icaoCode, windSpeed}) => {
	const lastReport = airportReport.get(icaoCode)
	return airportReport.set(icaoCode, {
		airportName: find(airports, {icaoCode}).name
		, windSpeed
		, windSpeedCount: 1 + get(lastReport, 'windSpeedCount', 0)
		, windSpeedSum: windSpeed + get(lastReport, 'windSpeedSum', 0)
		, get windSpeedAverage() {
			return Math.round(this.windSpeedSum / this.windSpeedCount)
		}
	})
}
