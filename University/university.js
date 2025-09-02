const {createClient} = require("@supabase/supabase-js");
const URL = "https://ekmhgyrtanafcnwzppbk.supabase.co"
const KEY = ""
const supabase = createClient(URL, KEY)

const promptSync = require("prompt-sync");
const prompt = promptSync();

const select = async() => {
  console.log("start!")
  const {data} = await supabase.from("university").select("*");
  console.table(data)
}

const addStudent = async() => {
  console.log("start!")
  const id = prompt("id: ")
  const name = prompt("name: ")
  const year = prompt("year: ")
  const major = prompt("major: ")
  await supabase.from("university").insert({id, name, year, major, expelled: 0})
}

const num = prompt("1. 학생등록 2. 학생전체확인")
if (num == 1) {
  addStudent();
}
else if(num == 2) {
  select();
}
else {
  console.log("프로그램 오류!")
}