//a very very simple server

var app = require('https').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

<<<<<<< HEAD

app.use(express.static('public'));
>>>>>>> origin/master
=======
app.use(express.static('public'));
>>>>>>> parent of 6fb9a2a... updated-server

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
