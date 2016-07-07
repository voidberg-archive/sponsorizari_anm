var fs = require('fs');
var papa = require('papaparse');
var data = require('./sponsorizari.json');

var csv = papa.unparse(data);
fs.writeFileSync('sponsorizari.csv', csv);
