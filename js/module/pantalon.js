export const getAllPantalones = async()=>{
    const res = await fetch("http://172.16.101.146:5999/camiseta");
    const data = res.json()
  
   
    return data
    
  }
  
  console.log(getAllPantalones())