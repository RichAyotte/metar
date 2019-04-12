/**
 * @overview    Parse Wind Info
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

module.exports = formattedWindoInfo => {
	const windInfoPattern = /^(\d{3})(\d{2,3})(G\d{2})?(MPS|KT)$/
	const [, direction, speed, gusts, unit] = formattedWindoInfo.match(windInfoPattern)
	return {
		direction: parseInt(direction, 10)
		, speed: parseInt(speed, 10)
		, gusts: parseInt(gusts.slice(1), 10)
		, unit
	}
}
