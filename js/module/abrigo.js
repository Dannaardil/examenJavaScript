export const getAllAbrigos = async()=>{
  const res = await fetch("http://172.16.101.146:5999/abrigo");
  const data = res.json();

 

  

   

return console.log(data)
}

getAllAbrigos()
