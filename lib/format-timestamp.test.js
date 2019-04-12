/**
 * @overview    Format timestamp tests
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const times = require('lodash/times')
const random = require('lodash/random')

const formatTimestamp = require('./format-timestamp')
const parseTimestamp = require('./parse-timestamp')

const minMonthDay = 1
const maxMonthDay = 31
const minHours = 0
const maxHours = 23
const minMinutes = 0
const maxMinutes = 59

describe('Timesamps', () => {
	const timestamps = times(500, () => ({
		monthDay: random(minMonthDay, maxMonthDay)
		, hours: random(minHours, maxHours)
		, minutes: random(minMinutes, maxMinutes)
	}))

	test.each(timestamps)(`%o is valid`, timestamp => {
		const formatedTimestamp = formatTimestamp(timestamp)
		const parsedTimestamp = parseTimestamp(formatedTimestamp)
		const {monthDay, hours, minutes, z} = parsedTimestamp

		expect(parsedTimestamp).toMatchObject(timestamp)
		expect(monthDay).toBeWithin(minMonthDay, maxMonthDay + 1)
		expect(hours).toBeWithin(minHours, maxHours + 1)
		expect(minutes).toBeWithin(minMinutes, maxMinutes + 1)
		expect(z).toMatch('Z')
	})
})
