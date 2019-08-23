import { createServer } from "net";

const server = createServer(socket => {
  socket.end('hello world')
})

server.on('error', err => {
  console.log(err)
})

server.listen(9000, () => {
  console.log('listen', server.address())
})