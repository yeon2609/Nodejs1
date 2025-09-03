const express = require('express')
const app = express()
const port = 3000
const menu = require('./data.js')
const coffee = require('./data.js')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Get!')
})

app.get('/icecream/:id', (req, res) => {
  const {id} = req.params;
  res.json(menu[+id - 1] || {error : '그런 아이스크림 없습니다.'})
})

app.get('/coffee/:id', (req, res) => {
  const {id} = req.params;
  const {syrup, size} = req.query;

  if (!['m','l'].includes(size)) {
    return res.json({error: '잘못된 size 입니다.'})
  }
  if (0 > syrup || 3 < syrup || isNaN(syrup)) {
    return res.json({error: 'syrup은 0 ~ 3까지 가능합니다.'})
  }

  const coffeeObj = coffee[+id - 1];
  if (!coffeeObj) {
    return res.json({error: '없는 커피 리스트입니다'})
  }

  const addPrice = size == 'l' ? 1000 : 0;
  coffeeObj.price = +coffeeObj.price + addPrice;
  coffeeObj.kcal = +coffeeObj.kcal + 50 * +syrup;
  res.json(coffeeObj)
})

app.post('/coffee', (req, res) => {
  const {name, price, kcal} = req.body;
  coffee.push({name, price, kcal});

  if (!name || !price || !kcal) {
    return res.json({error: 'name/price/kcal 데이터가 올바르지 않습니다'})
  }
  res.json({message: '성공'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
