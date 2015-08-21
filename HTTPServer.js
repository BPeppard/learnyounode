'use strict';

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var obj = url.parse(req.url, true);
  console.log(obj);

  if (obj.pathname.indexOf('parsetime') >= 0) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(getParsetime(obj.query.iso)));
  } else if (obj.pathname.indexOf('unixtime') >= 0) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(getUnixtime(obj.query.iso)));
  } else {
    res.end(404);
  }
});
server.listen(process.argv[2]);

function getParsetime(dateTime) {
  var rtnObj = {};
  var date = new Date(dateTime);
  rtnObj.hour = date.getHours();
  rtnObj.minute = date.getMinutes();
  rtnObj.second = date.getSeconds();
  return rtnObj;
}

function getUnixtime(dateTime) {
  var date = new Date(dateTime);
  var rtnObj = {};
  rtnObj.unixtime = date.getTime();
  return rtnObj;
}
