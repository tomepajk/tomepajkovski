#!/usr/bin/env node
const clearConsole = require('clear-any-console');

clearConsole();

const packageJSON = require('./package.json');

console.log(`
NAME: ${packageJSON.name}
VERSION: ${packageJSON.version},
DESCRIPTION: ${packageJSON.description},

`);

console.log(`
tomepajk 
`);