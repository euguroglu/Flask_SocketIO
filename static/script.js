var socket = io.connect('http://127.0.0.1:5000')

// Code to send message to flask server
socket.on('connect',function() {
  socket.send('I am now connected!');

// Code to send custom message to flask server
  socket.emit('custom event', 'The custom event message!');

// Code to send custom json message to flask server
  socket.emit('custom event2',{'name':'Enes'})

// Code to receive custom message from flask server
  socket.on('from flask',function(msg) {
    alert(msg);
  });
// Code to receive json messahe from  flask server
  socket.on('from flask2',function(msg) {
    alert(msg['extension']);
  });

// Code to receive message from flask server
  socket.on('message', function(msg) {
    alert(msg);
  });
});
