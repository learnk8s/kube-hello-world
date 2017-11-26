const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/version', (req, res) => {
  res.send(process.env.VERSION || 'No version')
})

app.get('/healthz', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
