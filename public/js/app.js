var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

console.log(name + ' wants to join ' + room);

var $roomTitle = jQuery('.room-title');
$roomTitle.text(room);

socket.on('connect', function(){
  console.log('Connected to Socket.io server !');
});

socket.on('message', function(message){
    var momentTimeStamp = moment.utc(message.timestamp);
    var $message = jQuery('.messages');

    console.log('New Message:');
    console.log(message.text);

    $message.append('<p><strong>' + message.name + ' ' + momentTimeStamp.local().format('h:mm a')  + '</strong></p>');
    $message.append('<p>' + message.text +  '</p>');
});


var $form = jQuery('#message-form');
$form.on('submit', function(event){
    event.preventDefault();
    $message = $form.find('input[name=message]');
    socket.emit('message', {
      name: name,
      text: $message.val(),
    });

    $message.val("");
});
