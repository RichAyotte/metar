/**
 * @overview    Parse wind info
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const times = require('lodash/times')
const getRandomWindInfo = require('./get-random-wind-info')
const formatWindInfo = require('./format-wind-info')
const parseWindInfo = require('./parse-wind-info')

describe('Parse wind info', () => {
	const windInfos = times(100, getRandomWindInfo)
	test.each(windInfos)(`%o is valid`, windInfo => {
		const formattedWindInfo = formatWindInfo(windInfo)
		const parsedWindInfo = parseWindInfo(formattedWindInfo)
		expect(parsedWindInfo).toMatchObject(windInfo)
	})
})
