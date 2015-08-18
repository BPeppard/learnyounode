var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) return;
  var ary = data.split('\n');
  console.log(ary.length-1);
});
