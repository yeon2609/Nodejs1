const promptSync = require('prompt-sync');
const prompt = promptSync();

const name = prompt("what's your name?");
console.log(`hello, ${name}`);

