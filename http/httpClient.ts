import { request } from 'http'

const options = {
  host: '127.0.0.1',
  port: 8000,
  path: '/',
}

const req = request(options, res => {
  let data = ''
  
  res.on('data', chunk => data += chunk)
  res.on('end', () => console.log(data))
})

req.end()