# METAR reports

A METAR report is a loose international semi-standard used by airports for reporting information about wind speeds, humidity, and weather conditions. We’re going to write a program that parses a subset of these reports from a stream and keeps some running aggregates.

## METAR Format

The report format looks like this:

    <ICAO Code> <Timestamp> <Wind Info>

Which breaks down into this:

### ICAO Code

This is a string in the ASCII range of upper-case letters. It is at least one such character. It is terminated by a space after the final character.

Examples:

*   YYZ
*   A
*   LAX
*   BIRK

We’re not concerned about verifying the validity of these codes in this exercise. Parsing them is enough.

### Timestamp

This is a string in the format of:

    <day of month><hours><minutes>Z

Where:

*   _day of month_: 2 digits, the parsed number is in the range of 1-31 inclusive
*   _hours_: 2 digits, the parsed number is in the range of 0-23 inclusive
*   _minutes_: 2 digits, the parsed number in the range of 0-59

### Wind Info

This one is a little tricky. The METAR format specifies wind speeds in two different units: _knots_ or _meters per second_. To complicate matters there is an optional _gusts_ value.

    <direction><speed><gusts?><unit>

Eg:

    18027KT
    180120MPS
    01323G30MPS

The components of the format can be parsed as follows:

*   _direction_: 3 digits
*   _speed_: 2-3 digits, minimum 00
*   _gusts?_: 2 digits, optional. When it appears, parsed as `G23`
*   _unit_: Either `KT` or `MPS`

## Example Reports

    YYZ 122201Z 12023MPS
    LAX 022355Z 09332G78KT
    FR 110232Z 001100G12MPS
