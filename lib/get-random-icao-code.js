/**
 * @overview    Get random ICAO code
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @license     MIT License
 */

'use strict'

const sample = require('lodash/sample')
const airports = require('../data/airports.json')

/**
 * Return random ICAO Code
 * This is a string in the ASCII range of upper-case letters. It is at least one
 * such character. It is terminated by a space after the final character.
 *
 * Examples:
 *
 * YYZ
 * A
 * LAX
 * BIRK
 * @return {String} ICAO Code
 */
module.exports = () => sample(airports).icaoCode
