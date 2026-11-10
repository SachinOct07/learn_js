

document.getElementById("form").addEventListener('submit', function(event){
  
  event.preventDefault()
  let uname= document.getElementById("name").value.trim()
  let email= document.getElementById("mail").value.trim()
  let pass= document.getElementById("password").value.trim()
  let cpass= document.getElementById("cpassword").value.trim()

  let isValid= true;
  let upat = /^[A-Za-z]+ [A-Za-z]$/
  if(uname === ""){
    document.getElementById("s1").innerText= "Name is Required"
    isValid= false
  }else if(!upat.test(uname)){
    document.getElementById("s1").innerText= "Enter your Full Name"
    isValid= false
  }else{
    document.getElementById("s1").innerText= ""
    isValid= true
  }
  if(email ===""){
    document.getElementById("s2").innerText= "Email is Required"
    isValid= false
  }else{
    document.getElementById("s2").innerText= ""
    isValid= true
  }
  if(pass === ""){
    document.getElementById("s3").innerText= "Password is Required"
    isValid= false
  }else if(pass.length <3 || pass.length >9 ){
    document.getElementById("s3").innerText= "Password length between 3 to 10"
    isValid= false
  }else{
    document.getElementById("s3").innerText= ""
    isValid= true
  }
  if(cpass === ""){
    document.getElementById("s4").innerText= "Confirm is Required"
    isValid= false
  }else if(cpass !== pass){
    document.getElementById("s4").innerText= "Password is Not Matched"
    isValid= false
  }else{
    document.getElementById("s4").innerText= ""
    isValid= true
  }


  if(isValid === true){
    alert("Form Submitted Successfully");
  }

})