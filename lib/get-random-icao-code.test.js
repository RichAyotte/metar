/**
 * @overview    Get random ICAO code tests
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const times = require('lodash/times')
const getRandomICAOcode = require('./get-random-icao-code')

describe('Random ICAO code', () => {
	const codePattern = /^[A-Z]{1,4}$/
	const codes1 = times(100, getRandomICAOcode)
	const codes2 = times(100, getRandomICAOcode)
	test.each(codes1)(`"%s" is 4 upper letters`, code => {
		expect(code).toMatch(codePattern)
	})
	test.each(codes2)(`"%s" is 4 upper letters`, code => {
		expect(code).toMatch(codePattern)
	})
	it('is confidently random', () => {
		expect(codes1).not.toMatchObject(codes2)
	})
})
