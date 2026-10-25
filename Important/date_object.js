
console.log("Date object methods");

let d= new Date();
console.log(d); // Output: current date and time

console.log("Date.getFullYear() : ",d.getFullYear());

console.log("Date.getMonth() : ",d.getMonth()+1);

console.log("Date.getDate() : ",d.getDate());

console.log("Date.getDay() : ",d.getDay());

console.log("Date.getHours() : ",d.getHours());

console.log("Date.getMinutes() : ",d.getMinutes());

console.log("Date.getSeconds() : ",d.getSeconds());

d.setFullYear(2022, 11, 31);
console.log("Date.setFullYear(2022) : ",d);

d.setMonth(12,23);
console.log("Date.setMonth(12) : ",d);

console.log(d.toDateString()); // Output: Sat Dec 23 2023
console.log(d.toTimeString()); // Output: 00:00:00 GMT+0530 (India Standard Time)
console.log(d.toLocaleDateString()); // Output: 23/12/2023
console.log(d.toLocaleTimeString()); // Output: 00:00:00 (India Standard Time)