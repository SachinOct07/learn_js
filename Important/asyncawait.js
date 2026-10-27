

let prom = new Promise((resolve, reject)=>{
  let data = false;
  if(data){
    resolve("Data is available");
  }
  else{
    reject("Data is not available");
  }
})

// prom.then((message)=>{
//   console.log(message);
// })
async function f1(){
  try{
  let message = await prom
    console.log(message);
  }catch(error){
    console.error(error);
  }finally{
    console.log("Promise is settled");
  }
}

f1();
console.log("last line of code");