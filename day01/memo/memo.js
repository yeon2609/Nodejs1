const fs = require('fs')
const data = fs.readFileSync('test.text', 'utf-8')
// fs.writeFileSync('test.text', '용돈 기입장')

const promptSync = require('prompt-sync')
const prompt = promptSync();

const text = prompt('내용입력 [예시: 5/1: 30,000won]')
const newdata = data + '\n' + text;
fs.writeFileSync('test.text', newdata)
