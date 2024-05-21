export const getAllCamisetas = async()=>{
    const res = await fetch("http://172.16.101.146:5999/camiseta");
    const data = res.json()
    try{

        
    }
  
  catch(error){
    console.log(error)
  }
    
  }
  
  console.log(getAllCamisetas())