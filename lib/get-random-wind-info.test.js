/**
 * @overview    Get random wind info tests
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const times = require('lodash/times')
const getRandomWindInfo = require('./get-random-wind-info')

describe('Random wind info', () => {
	const winds = times(100, getRandomWindInfo)
	test.each(winds)(`%o is within bounds`, ({direction, speed, gusts, unit}) => {
		expect(direction).toBeGreaterThanOrEqual(0)
		expect(direction).toBeLessThanOrEqual(359)
		expect(speed).toBeGreaterThanOrEqual(0)
		expect(speed).toBeLessThanOrEqual(999)
		expect(gusts).toBeGreaterThanOrEqual(0)
		expect(gusts).toBeLessThanOrEqual(99)
		expect(unit).toMatch(/^(MPS|KT)$/)
	})
})
