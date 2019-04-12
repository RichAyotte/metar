/**
 * @overview    Parse timestamp
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

module.exports = formattedTimestamp => {
	const monthDay = parseInt(formattedTimestamp.slice(0, 2), 10)
	const hours = parseInt(formattedTimestamp.slice(2, 4), 10)
	const minutes = parseInt(formattedTimestamp.slice(4, 6), 10)
	const z = formattedTimestamp.slice(6, 7)

	return {
		monthDay
		, hours
		, minutes
		, z
	}
}
