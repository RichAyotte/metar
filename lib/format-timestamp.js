/**
 * @overview    Get timestamp
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const {oneLineTrim} = require('common-tags')

/**
 * Timestamp
 *
 * Retruns a string in the format of:
 *
 * <day of month><hours><minutes>Z
 *
 * Where:
 *
 * day of month: 2 digits, the parsed number is in the range of 1-31 inclusive
 * hours: 2 digits, the parsed number is in the range of 0-23 inclusive
 * minutes: 2 digits, the parsed number in the range of 0-59
 *
 * @param  {Date}   options.date date
 * @return {String}              <day of month><hours><minutes>Z
 */

const defaultDate = () => {
	const now = new Date()
	return now.getDate()
}

const defaultHours = () => {
	const now = new Date()
	return now.getHours()
}

const defaultMinutes = () => {
	const now = new Date()
	return now.getMinutes()
}

module.exports = ({
	monthDay = defaultDate()
	, hours = defaultHours()
	, minutes = defaultMinutes()
} = {}) => oneLineTrim`
	${monthDay.toString().padStart(2, '0')}
	${hours.toString().padStart(2, '0')}
	${minutes.toString().padStart(2, '0')}
	Z
`
