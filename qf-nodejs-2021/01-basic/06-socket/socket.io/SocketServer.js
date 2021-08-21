var express = require('express')
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http)

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send('hello')
})

io.on('connection', (socket) => {
  // console.log('a user connected')

  socket.on('receive', (data) => {
    socket.broadcast.emit('message', data)
  })
})

http.listen(3000, 'localhost', () => {
  console.log('listening on *:3000');
})