/**
 * @overview    Format wind info test
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const times = require('lodash/times')
const getRandomWindInfo = require('./get-random-wind-info')
const formatWindInfo = require('./format-wind-info')
const windUnits = require('./wind-units')

describe('Format wind info', () => {
	const windInfoPattern = new RegExp(`^\\d{3}\\d{2,3}(G\\d{2})?(${[...windUnits.values()].join('|')})$`)
	const windInfos = times(100, getRandomWindInfo)

	test.each(windInfos)(`%o is valid`, windInfo => {
		const formattedWindInfo = formatWindInfo(windInfo)
		expect(formattedWindInfo).toMatch(windInfoPattern)
	})
})
