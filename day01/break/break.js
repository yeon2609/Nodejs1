const time = new Date();
const min = time.getMinutes();
const breaktime = 50;

if (breaktime - +min > 0) {
  console.log(`수업시간 입니다. 쉬는시간까지 ${breaktime - +min}분 남았습니다.`)
}
else {
  console.log(`쉬는 시간입니다.`)
}

setTimeout(() => {
  console.log('프로그램 종료!')
}, 10000)
