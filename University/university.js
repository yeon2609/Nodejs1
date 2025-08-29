const {createClient} = require("@supabase/supabase-js");
const URL = "https://ekmhgyrtanafcnwzppbk.supabase.co"
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbWhneXJ0YW5hZmNud3pwcGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTI0MDYsImV4cCI6MjA3MTg2ODQwNn0._6MUdAZ-4Bbhwe9iivsmyeUhSeAfUpRHKZMOvczDkPU"
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