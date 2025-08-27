const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

console.log(`현재 시간은 ${hour}시 ${min}분 ${sec}초 입니다.`)

// setTimeout(콜백함수, 숫자) -> 몇초뒤에 콜백함수를 실행시켜줘
setTimeout(() => {
  console.log("프로그램 종료!")
}, 10000)