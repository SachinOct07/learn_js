
function manipulateDOM() {
  let input = document.querySelector("input").value;
  
  let element = document.createElement("li");
  element.innerText = input;
  let olist= document.querySelector("ol");
  olist.appendChild(element); 
  //insertBefore
  // olist.insertBefore(element, olist.firstChildren[2]);
  //replaceChild
  // olist.replaceChild(element, olist.firstChildren[2]);
  //removeChild
  // olist.removeChild(olist.firstChildren[2]);
  //prepend
  // olist.prepend(element);
  //dynamic styling or dynamic CSS
  // element.style.color = "red";
  // element.style.fontSize = "20px";
}