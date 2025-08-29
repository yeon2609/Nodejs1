const promptSync = require('prompt-sync');
const prompt = promptSync();

const won = prompt('원화 입력: ');
const rate = prompt('환율 입력: ')

console.log(`원화: ${won}} => 엔화 ${won*rate}`)

prompt("아무키를 누르면 프로그램 종료!")