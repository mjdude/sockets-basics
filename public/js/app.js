var socket = io();
socket.on('connect', function(){
  console.log('Connected to Socket.io server !');
});

socket.on('message', function(message){
    console.log('New Message:');
    console.log(message.text);
});

// Handles submitting of new messages
var $form = jQuery('#message-form');
$form.on('submit', function(event){
    event.preventDefault();
    $message = $form.find('input[name=message]');
    socket.emit('message', {
      text: $message.val()
    });

    $message.val("");
});
