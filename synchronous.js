function f1(){
    console.log("First");
}
function f2(){
    console.log("Second");
}
function f3(){
    console.log("Third");
}

f1();
setTimeout(f2,2000)//setTimeout makes the function asynchronous
f3()
var h="heelo"