const express = require('express')
const app = express()
const port = 3000
const {menus, staffs, positions} = require('./data.js');
const { makeResponseGetOK, makeResponseError, makeResponsePostOK, makeResponsePutOK, makeResponseDeleteOK } = require('./format.js');
const { vaildateNumber } = require('./util.js');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const {createClient} = require('@supabase/supabase-js');
const URL = 'https://ekmhgyrtanafcnwzppbk.supabase.co';
const KEY = '';
const supabase = createClient(URL, KEY);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/menus', async (req, res) => {
  const {data} = await supabase.from('menus').select('*');
  res.json(makeResponseGetOK(data))
})

app.post('/menus', async (req, res) => {
  const {name, price, kcal} = req.body;
  if (!name) {
    return res.json(makeResponseError('name이 빈 값입니다.'))
  }
  if (vaildateNumber(price)) {
    return res.json(makeResponseError(`price의 데이터가 유효하지 않습니다.`))
  }
  if (vaildateNumber(kcal)) {
    return res.json(makeResponseError(`kcal의 데이터가 유효하지 않습니다.`))
  }
  const {statusText} =  await supabase.from('menus').insert({name, price: +price, kcal: +kcal})
  res.json(makeResponsePostOK(`${statusText}`))
})

app.put('/menus/:id', async (req, res) => {
  const {id} = req.params;
  const {name, price, kcal} = req.body;
  const {data} = await supabase.from('menus').select('*');
  const target = data.find((v) => v.id == +id);

  if (!target) {
    return res.json(makeResponseError(`${id}번째의 메뉴는 존재하지 않습니다.`))
  }
  if (!name) {
    return res.json(makeResponseError('name이 빈 값입니다.'))
  }
  if (vaildateNumber(price)) {
    return res.json(makeResponseError(`price의 데이터가 유효하지 않습니다.`))
  }
  if (vaildateNumber(kcal)) {
    return res.json(makeResponseError(`kcal의 데이터가 유효하지 않습니다.`))
  }
  const {statusText} = await supabase.from('menus').update({name, price: +price, kcal: +kcal}).eq("id", +id);
  res.json(makeResponsePutOK(`${statusText}`))
})

app.delete('/menus/:id', async (req, res) => {
  const {id} = req.params; // id 가져오기
  const {data} = await supabase.from('menus').select('*'); // id번째 메뉴 가져오고 data에 변수넣기 
  const target = data.find((v) => v.id == +id)

  if (!target) {
    return res.json(makeResponseError(`${id}번째의 메뉴는 존재하지 않습니다.`))
  }
  const {statusText} = await supabase.from('menus').delete().eq("id", +id)
  res.json(makeResponseDeleteOK(`${statusText}`))
})

app.get('/staffs', async (req, res) => {
  const {data} = await supabase.from('staffs').select('*');
  res.json(makeResponseGetOK(data))
})

app.post('/staffs', async (req, res) => {
  const {name, age, position} = req.body;
  if (!name) {
    return res.json(makeResponseError(`name이 빈 값입니다.`))
  }
  if (vaildateNumber(age)) {
    return res.json(makeResponseError(`age의 데이터가 유효하지 않습니다.`))
  }
  if (!positions.includes(position)) {
    return res.json(makeResponseError(`그런 ${position}은 존재하지 않습니다.`))
  }
  const {statusText} = await supabase.from('staffs').insert({name, age: +age, position});
  res.json(makeResponsePostOK(`${statusText}`))
})

app.put('/staffs/:id', async (req, res) => {
  const {id} = req.params;
  const {name, age, position} = req.body;
  const {data} = await supabase.from('staffs').select('*');
  const target = data.find((v) => v.id == +id);
  if (!target) {
    return res.json(makeResponseError(`${id}번째 스태프는 존재하지 않습니다.`))
  }
  if (!name) {
    return res.json(makeResponseError(`name이 빈 값입니다.`))
  }
  if (vaildateNumber(age)) {
    return res.json(makeResponseError(`age의 데이터가 유효하지 않습니다.`))
  }
  if (!positions.includes(position)) {
    return res.json(makeResponseError(`그런 ${position}은 존재하지 않습니다.`))
  }
  const {statusText} = await supabase.from('staffs').update({name, age: +age, position}).eq("id", +id);
  res.json(makeResponsePutOK(`${statusText}`))
})

app.delete('/staffs/:id', async (req, res) => {
  const {id} = req.params;
  const {data} = await supabase.from('staffs').select('*');
  const target = data.find((v) => v.id == +id);
  if (!target) {
    return res.json(makeResponseError(`${id}번째 스태프는 존재하지 않습니다.`))
  }
  const {statusText} = await supabase.from('staffs').delete().eq('id', +id);
  res.json(makeResponseDeleteOK(`${statusText}`))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})