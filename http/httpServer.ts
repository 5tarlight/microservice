import { createServer } from 'http'

const server = createServer((req, res) => {
  res.end('hello world')
})

server.listen(8000)