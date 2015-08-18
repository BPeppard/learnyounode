var filter = require('./filterDirectory');
var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function(err, data) {
  if (err) console.log('Error filtering directory');
  data.forEach(function(item) {
    console.log(item);
  });
});
