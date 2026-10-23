
let arr = [1, 2, 3, 4, 5];

// let val1 = arr[0];

// console.log(val1); // Output: 1

//how to destructure first and last element of an array

let[a,,,,b] = arr;

console.log(a); // Output: 1
console.log(b); // Output: 5


let arr1=[10, 20, 30, 40, 50,1,2,3,4,5];

let[x,y,z,...r]=arr1;

console.log(x,y,z,r); // Output: 10 20 30 [40, 50, 1, 2, 3, 4, 5]


//nested destructuring

let arr2=[1,2,[3,4,5,[6,7,8]],9];

let[a1,b1,[c1,d1,e1,[f1,g1,h1]],i1]=arr2;

console.log(a1,b1,c1,d1,e1,f1,g1,h1,i1); // Output: 1 2 3 4 5 6 7 8 9