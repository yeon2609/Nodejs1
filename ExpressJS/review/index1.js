const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ice/:id', (req, res) => {
  const {id} = req.params;
  if (+id == 1) {
    res.send('초코 아이스!')
  }
  else if (+id == 2) {
    res.send('딸기 아이스!')
  }
  else if (+id == 3) {
    res.send('쿠키앤크림 아이스!')
  }
  else {
    res.send('그런 아이스 없음!')
  }
})

app.get('/cookie/:id', (req, res) => {
  const {id} = req.params;
  cookieList = {
    1 : '초코쿠키',
    2 : '바닐라쿠키',
    3 : '민트쿠키'
  }
  res.send(`${cookieList[+id] || '해당없음'}`)
})

app.get('/coffee/:id', (req, res) => {
  const {id} = req.params;
  const {size, shots} = req.query;
  coffeeList = {
    1 : '아이스아메리카노',
    2 : '라떼',
    3 : '아샷추'
  }
  sizeList = {
    small : '스몰',
    midium : '미디움',
    large : '라지'
  }
  // http://localhost:3000/coffee/1?size=midium&shots=2 => 주문하신 사이즈 미디움의 샷 2번인 아이스아메리카노가 나왔습니다.
  // http://localhost:3000/coffee/2?shots=1&size=large => 주문하신 사이즈 라지의 샷 1번인 라떼가 나왔습니다.
  res.send(`주문하신 사이즈 ${sizeList[size]}의 샷 ${shots}번인 ${coffeeList[+id]}가 나왔습니다.`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
