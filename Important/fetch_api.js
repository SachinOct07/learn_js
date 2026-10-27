


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response)=>{
  if(!response.ok){
    throw new Error("Network response was not ok");
  }
  else{
    console.log(response.ok);
    return response.json();
  }
}).then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.error(error.message);
});

async function fetchData(){
  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    else{
      console.log(response.ok);
      let data = await response.json();
      console.log(data);
    }
  }
  catch(error){
    console.error(error.message);
  }
}
fetchData();