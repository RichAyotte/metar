/**
 * @overview    Create random METAR report
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const {oneLine} = require('common-tags')

const formatTimestamp = require('./format-timestamp')
const formatWindInfo = require('./format-wind-info')
const getRandomIcaoCode = require('./get-random-icao-code')
const getRandomWindInfo = require('./get-random-wind-info')

module.exports = () => oneLine`
	${getRandomIcaoCode()}
	${formatTimestamp()}
	${formatWindInfo(getRandomWindInfo())}
`
