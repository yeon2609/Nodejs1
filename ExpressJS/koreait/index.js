const express = require('express')
const { students, courses } = require('./data')
const { makeResponseGetOK, makeResponseError, makeResponsePostOK } = require('./format')
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/course', (req, res) => {
  res.json(makeResponseGetOK(courses));
})

app.get('/students', (req, res) => {
  res.json(makeResponseGetOK(students));
})

app.post('/students', (req, res) => {
  const {name, age, course} = req.body;
  if (!name) {
    return res.json(makeResponseError(`name이 빈 문자 입니다.`))
  }
  if (isNaN(age) && age < 0) {
    return res.json(makeResponseError(`age가 유효하지 않습니다.`))
  }
  if (!courses.includes(course)) {
    return res.json(makeResponseError(`${corse}수업은 없습니다.`))
  }
  students.push({name, age, courses:[course]})

  res.json(makeResponsePostOK(`정상적으로 ${name}학생이 등록되었습니다.`));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
