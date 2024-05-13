const { readFileSync, writeFileSync } = require('fs');

const me = readFileSync('./txt/7.txt', 'utf-8');
console.log(me);
