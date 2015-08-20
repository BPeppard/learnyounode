"use strict";

var fs = require("fs");

var dir = process.argv[2];
var extension = process.argv[3];
//console.log('Looking for: '+extension);

fs.readdir(dir, function(err, data) {
  if (err) {
    return err;
  }
  data.forEach(function(file) {
    //console.log('file: '+file);
    if (file.indexOf("." + extension) >= 0) {
      console.log(file);
    }
  });
});
