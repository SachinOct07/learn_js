

function traverse(){
  let getparent = document.querySelector(".child1")

console.log(getparent.parentElement)

console.log(getparent.parentNode)

let getchild = document.querySelector("html")

console.log(getchild.parentElement)

console.log(getchild.parentNode)

}

function traverse2(){
  let getelement = document.querySelector(".parent")

  console.log(getelement.childElementCount)
  console.log(getelement.childNodes)
  console.log(getelement.children)
  console.log(getelement.firstElementChild)
  console.log(getelement.firstChild)
}

function traverse3(){
  let child = document.querySelector(".child1")
  console.log(child.nextSibling)
  console.log(child.nextElementSibling)
  console.log(child.previousSibling)
  console.log(child.previousElementSibling)
}
traverse3()