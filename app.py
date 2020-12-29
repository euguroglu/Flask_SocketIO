from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secretkey'
app.config['DEBUG'] = True

socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

#Command to receive message from javascript client
@socketio.on('message')
def receive_message(message):
    print('#######: {}'.format(message))
#Command to send message from Flask to javascript client
    send('This is a message from Flask')

if __name__ == "__main__":
    socketio.run(app)
