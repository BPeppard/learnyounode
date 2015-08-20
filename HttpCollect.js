"use strict";

var http = require("http");
var BufferList = require("bl");

var url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding("utf8");
  response.pipe(BufferList(function(err, data) { //eslint-disable-line
    if (err) { return err; }
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
