/**
 * @overview    Parse METAR report
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const parseTimestamp = require('./parse-timestamp')
const parseWindInfo = require('./parse-wind-info')

module.exports = metarReport => {
	const [icaoCode, timestamp, windInfo] = metarReport.split(' ')

	return {
		icaoCode
		, timestamp: parseTimestamp(timestamp)
		, windInfo: parseWindInfo(windInfo)
	}
}
