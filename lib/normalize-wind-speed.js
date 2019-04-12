/**
 * @overview    Normaliz wind speed
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

/**
 * Convert wind speed from KT to MPS
 * @param  {String} options.icaoCode  ICAO code
 * @param  {Number} options.windSpeed speed
 * @param  {String} options.windUnit  unit
 * @return {Object}                   Normalized speed
 */
module.exports = ({icaoCode, windSpeed, windUnit}) => {
	if (windUnit === 'KT') {
		return {
			icaoCode
			, windSpeed: Math.round(windSpeed / 1.944)
			, windUnit: 'MPS'
		}
	}

	return {
		icaoCode
		, windSpeed
		, windUnit
	}
}
