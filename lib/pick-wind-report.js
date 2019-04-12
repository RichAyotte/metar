/**
 * @overview    Transform metar data to wind data
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

/**
 * Pick the wind data out of the metar report
 * @param  {Object} metarReport metar data
 * @return {Object}             wind data
 */
module.exports = metarReport => ({
	icaoCode: metarReport.icaoCode
	, windSpeed: metarReport.windInfo.speed
	, windUnit: metarReport.windInfo.unit
})
