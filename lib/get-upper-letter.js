/**
 * @overview    Get upper letter
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

/**
 * Upper letter numbers are from A (65) to Z (90)
 * @param  {Number} options.code Between 65 and 90
 * @return {String}              Letter between A and Z
 */
module.exports = ({code}) => {
	if (code < 65 || code > 90) {
		throw new Error(`Letter code must be between 65 and 90. Received: ${code}`)
	}
	return String.fromCharCode(code)
}
