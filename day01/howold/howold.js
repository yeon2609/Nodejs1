const promptSync = require('prompt-sync');
const prompt = promptSync();

const age = prompt('how old are you?')
const date = new Date();
const newYear = date.getFullYear();
console.log(`You were born in ${newYear - +age}`)

prompt("Enter any key if you want to exit this program.")