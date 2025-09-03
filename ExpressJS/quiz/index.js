const express = require('express')
const app = express()
const port = 3000
const city = require("./data.js")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/korea', (req, res) => {
  res.send('Hello korea!')
})

app.get('/japan/:id', (req, res) => {
  const {id} = req.params;
  const result = !!city.japan[+id] ? `${city.japan[+id]}입니다!` : '그 외에는 없는 도시 입니다.'
  res.send(result);
})

app.get('/usa/:id', (req, res) => {
  const {id} = req.params;
  const result = !!city.usa[+id] ? `${city.usa[+id]}입니다!` : '그 외에는 없는 도시 입니다.'
  res.send(result);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
