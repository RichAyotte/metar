/**
 * @overview    Get random wind info
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const random = require('lodash/random')
const windUnits = require('./wind-units')

/**
 * Wind Info type
 * @typedef {Object} WindInfo
 * @property {Number} direction
 * @property {Number} speed
 * @property {Number} gusts
 * @property {String} unit
 */

/**
 * Return random wind info
 * @return {WindInfo} random wind info
 */
module.exports = () => {
	const direction = random(0, 359)
	const speed = random(10, 999)
	const gusts = random(10, 99)
	const unit = windUnits.get(random(0, 1))

	return {
		direction
		, speed
		, gusts
		, unit
	}
}
