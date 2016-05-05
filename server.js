var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');


app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    console.log('User connected via socket.io!');

    socket.on('message', function(message) {
      var now = moment();
      var timestampMoment = moment.utc(now.format());
      var utcTimeStamp = timestampMoment.valueOf();
      timestampMoment.local();
      message.time = timestampMoment.format('h:mm a');

        console.log('Message Recieved: ' + message.text + ' at ' + message.time);
        io.emit('message', message);
    });

    var now = moment();
    var timestampMoment = moment.utc(now.format());
    var utcTimeStamp = timestampMoment.valueOf();
    timestampMoment.local();

    socket.emit('message', {
        text: 'Welcome to the chat application',
        time: timestampMoment.format('h:mm a')
    });
});

http.listen(PORT, function() {
    console.log('Server started!');
});
