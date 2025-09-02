const express = require('express')
const app = express()

// localhost:3000[get]
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//localhost:3000/icecream/123
app.get('/icecream/:id', (req, res) => {
  const {id} = req.params;
  if (+id == 1) {
    res.send('초코 아이스크림!')
  }
  else if (+id == 2) {
    res.send('딸기 아이스크림')
  }
  else if (+id == 3) {
    res.send('쿠키앤크림 아이스크림')
  }
  else {
    res.send('그런 아이스크림 없음')
  }
})

app.get('/cookie/:id', (req, res) => {
  const {id} = req.params;
  const menu = {
    1 : '초코쿠키',
    2 : '바닐라쿠키',
    3 : '민트쿠키'
  };
  res.send(`${menu[+id] || '없음 쿠키'}`)
})

app.get('/cookie', (req, res) => {
  res.send('Cookie world!')
})

app.get('/coffee/:id', (req, res) => {
  const {id} = req.params;
  const {size} = req.query;
  const {shots} = req.query;
  
  const coffee = {
    1 : '아이스 아메리카노',
    2 : '라떼',
    3 : '아샷추'
  };

  const sizeList = {
    small : '스몰',
    medium : '미디움',
    large : '라지'
  };

  res.send(`주문하신 사이즈 ${sizeList[size]}의 샷${shots}번인 ${coffee[+id]}가 나왔습니다!`)
})

app.get('/coffee', (req, res) => {
  res.send('coffee world!')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
