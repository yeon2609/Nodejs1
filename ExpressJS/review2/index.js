const express = require('express')
const app = express()
const port = 3000
const city = require('./data.js')
const icecream = require('./data.js')
const coffee = require('./data.js')
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  // send : html 돌려주기
  res.send('오늘 날씨 맑다!')
})

app.get('/icecream/:id', (req, res) => {
  // json : json 돌려주기
  const {id} = req.params;
  res.json(icecream[+id - 1] || {error: '그런 아이스크림 없습니다.'})
})

app.get('/coffee/:id', (req, res) => {
  const {id} = req.params;
  const {size, syrup} = req.query;
  
  if (!['m', 'l'].includes(size)) {
    return res.json({error: 'size가 맞지 않습니다.'})
  }
  if (syrup < 0 || syrup > 3 || isNaN(syrup)) {
    return res.json({error: 'syrup은 0 ~ 3 사이입니다.'})
  }

  const coffeeObj = coffee[+id - 1];
  if (!coffeeObj) {
    return res.json({error: '없는 커피 리스트입니다.'})
  }

  const addPrice = size == 'l' ? 1000 : 0;
  coffeeObj.price = +coffeeObj.price + addPrice;
  coffeeObj.kcal = +coffeeObj.kcal + 50 * +syrup
  res.json(coffeeObj)
})

// 데이터 생성
app.post('/coffee', (req, res) => {
  const {name, price, kcal} = req.body;
  if (!name || !price || !kcal) {
    return res.json({error: 'name/price/kcal 데이터가 올바르지 않습니다'})
  }
  coffee.push({name, price, kcal});
  res.json({message:'성공'})
})

app.get('/korea', (req, res) => {
  res.send('Hello korea!')
})

app.get('/japan/:id', (req, res) => {
  const {id} = req.params;
  const result = city.japan[+id] ? `${city.japan[+id]}입니다` : '그 외에는 없는 도시입니다!' 
  res.send(result);
})

app.get('/usa/:id', (req, res) => {
  const {id} = req.params;
  const result = city.usa[+id] ? `${city.usa[+id]}입니다` : '그 외에는 없는 도시입니다!' 
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

