var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var numOfNewLinesArray = buffer.toString().split('\n');
console.log(numOfNewLinesArray.length-1);
