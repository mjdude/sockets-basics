// Get time using moment
// Add timestap to message in UTC but display in local
// var now = moment();
var socket = io();

socket.on('connect', function(){
  console.log('Connected to Socket.io server !');
});

socket.on('message', function(message){
    console.log('New Message:');
    console.log(message.text);
    jQuery('.messages').append('<p>' + message.time + ' '+ message.text + '<p>');
});

// Handles submitting of new messages
var $form = jQuery('#message-form');
$form.on('submit', function(event){
    event.preventDefault();

    // var timestampMoment = moment.utc(now.format());
    // var utcTimeStamp = timestampMoment.valueOf();
    $message = $form.find('input[name=message]');
    socket.emit('message', {
      text: $message.val(),
      // time: 0
      // time: timestampMoment.valueOf()
    });

    $message.val("");
});
