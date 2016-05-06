var socket = io();

socket.on('connect', function(){
  console.log('Connected to Socket.io server !');
});

socket.on('message', function(message){
    var momentTimeStamp = moment.utc(message.timestamp);
    console.log('New Message:');
    console.log(message.text);
    console.log(message.time);
    jQuery('.messages').append('<p><strong>'  + momentTimeStamp.local().format('h:mm a') + ': </strong> '+ message.text + '<p>');
});


var $form = jQuery('#message-form');
$form.on('submit', function(event){
    event.preventDefault();
    $message = $form.find('input[name=message]');
    socket.emit('message', {
      text: $message.val(),
    });

    $message.val("");
});
