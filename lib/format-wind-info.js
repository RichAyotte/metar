/**
 * @overview    Format wind info
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const {oneLineTrim} = require('common-tags')

/**
 * Wind Info
 *
 * This one is a little tricky. The METAR format specifies wind speeds in two
 * different units: knots or meters per second. To complicate matters there is
 * an optional gusts value.
 *
 * <direction><speed><gusts?><unit>
 * Eg:
 *
 * 18027KT
 * 180120MPS
 * 01323G30MPS
 * The components of the format can be parsed as follows:
 *
 * direction: 3 digits
 * speed: 2-3 digits, minimum 00
 * gusts?: 2 digits, optional. When it appears, parsed as G23
 * unit: Either KT or MPS
 *
 * @return {String} formatted wind info
 */

module.exports = ({direction, speed, gusts, unit}) => {
	const formattedDirection = direction
	.toString()
	.padStart(3, '0')

	const formattedSpeed = speed
	.toString()
	.padStart(2, '0')

	const formattedGusts = gusts
	.toString()
	.padStart(2, '0')

	return oneLineTrim`
		${formattedDirection}
		${formattedSpeed}
		G${formattedGusts}
		${unit}
	`
}
