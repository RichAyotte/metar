/**
 * @overview    Airport Terminal Report
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @date        2019-04-12 13:41:15
 * @license     MIT License
 */

/* eslint-disable no-process-exit */

'use strict'

const blessed = require('blessed')
const blessedContrib = require('blessed-contrib')
const stream = require('./lib/random-airport-report-data-stream')

const screen = blessed.screen({
	smartCSR: false
})

const tableOptions = {
	keys: true
	, fg: 'white'
	, selectedFg: 'white'
	, selectedBg: '#004a92'
	, interactive: true
	, label: 'Winds'
	, border: {
		type: 'line'
		, fg: '#004a92'
	}
	, columnSpacing: 10
	, columnWidth: [40, 11, 15]
}

const table = blessedContrib.table(tableOptions)

screen.append(table)
screen.key(['escape', 'q', 'C-c'], () => process.exit(0))
table.focus()

const toTableData = ([icaoCode, reportData]) => [
	`${reportData.airportName} (${icaoCode})`.slice(0, tableOptions.columnWidth[0])
	, reportData.windSpeed.toString().slice(0, tableOptions.columnWidth[1])
	, reportData.windSpeedAverage.toString().slice(0, tableOptions.columnWidth[2])
]

stream
.throttle(1000)
.map(airportData => [...airportData].map(toTableData))
.onValue(tableData => {
	table.setData({
		headers: [`Airport`, `Speed (MPS)`, `Avg Speed (MPS)`]
		, data: tableData
	})
	screen.render()
})
