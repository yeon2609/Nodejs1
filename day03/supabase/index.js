const {createClient} = require("@supabase/supabase-js");
const URL = "https://ekmhgyrtanafcnwzppbk.supabase.co"
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbWhneXJ0YW5hZmNud3pwcGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTI0MDYsImV4cCI6MjA3MTg2ODQwNn0._6MUdAZ-4Bbhwe9iivsmyeUhSeAfUpRHKZMOvczDkPU"
const supabase = createClient(URL, KEY)

const promptSync = require("prompt-sync");
const prompt = promptSync();

// const menuSelect = async() => { // 외부환경 작업이 일어날때 async반드시 사용
//   console.log("start!");
//   const {data} = await supabase.from("menu").select("*")
//   // await는 기다려 달라는 뜻
//   console.table(data);
// };

const menuSelect = async() => {
  console.log("start!");
  const {data} = await supabase.from("menu").select("*")
  console.table(data)
}

const addmenu = async() => {
  console.log("start!")
  const name = prompt("메뉴이름: ");
  const price = prompt("가격: ");
  const kcal = prompt("칼로리: ");
  const result = await supabase.from("menu").insert({name,price,kcal})
  console.log(result);
}

// addmenu();
menuSelect();






