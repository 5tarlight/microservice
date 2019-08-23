import { connect } from "net";

const options = {
  port: 9000,
  host: '127.0.0.1'
}

const client = connect(options, () => {
  console.log('connected')
})

client.on('data', data => {
  console.log(data.toString())
})

client.on('end', () => {
  console.log('disconnected')
})