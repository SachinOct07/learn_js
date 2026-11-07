let input= document.querySelector("input")

function addval(element){
  input.value += element;
}

function clearval(){
  input.value= ""
}

function deleteval(){
  input.value = input.value.slice(0,-1);
}

function evals(){
  input.value = eval(input.value);
}