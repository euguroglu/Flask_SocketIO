var socket = io.connect('http://127.0.0.1:5000')

// Code to send message to flask server
socket.on('connect',function() {
  socket.send('I am now connected!');
// Code to receive message from flask server
  socket.on('message', function(msg) {
    alert(msg);
  });
});
