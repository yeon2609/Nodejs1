const {createClient} = require("@supabase/supabase-js");
const URL = "https://ekmhgyrtanafcnwzppbk.supabase.co"
const KEY = ""
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






