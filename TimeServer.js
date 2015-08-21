'use strict';

var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  var now = new Date();
  var rtnStr = strftime('%Y-%m-%d %H:%M', now);

  socket.end(rtnStr+'\n');
});
server.listen(process.argv[2]);
