export const getAllAbrigos = async()=>{
  const res = await fetch("../db/all.json");
  const data = res.json()

 return data
  
}

console.log(getAllAbrigos())
