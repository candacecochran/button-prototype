//a very very simple server

<<<<<<< HEAD
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);
=======
var express = require('express');
var app = express();
var server = server.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})
var io = require('socket.io')(server);    //http://socket.io/docs/

app.use(express.static('public'));
>>>>>>> origin/master

io.sockets.on('connection', function (socket) {
  console.log("Client ID"+socket.id+" connected");

  app.get('/trigger_1', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("trigger 1 pressed");
    socket.emit('trigger_1');
  })

  app.get('/trigger_2', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("trigger 2 pressed");
    socket.emit('trigger_2');
  })
})
