export const getAllcarrito = async()=>{
    const res = await fetch("http://172.16.101.146:5999/carrito");
    const data = res.json()
  
   return data
    
  }
  
  console.log(getAllcarrito())