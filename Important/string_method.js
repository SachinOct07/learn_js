
//string methods

let str = "Hello, World!";
//charAt() method
console.log("charAt : ",str.charAt(0));// Output: "H"
//charCodeAt() method
console.log("charCodeAt : ",str.charCodeAt(0));// Output: 72

let str1 = "Good Morning";
//concat() method
console.log("concat : ",str.concat(" ",str1)); // Output: "Hello, World!Good Morning"

let str2= "Single threaded";
//includes() method
console.log("includes : ",str2.includes("n",2)); // Output: true
//indexOf() method
console.log("indexOf : ",str2.indexOf("t",5)); // Output: 7
//lastIndexOf() method
console.log("lastIndexOf : ",str2.lastIndexOf("t",8)); // Output: 3
//repeat() method
console.log("repeat : ",str2.repeat(2)); // Output: "Single threadedSingle threaded"
//replace() method
let str3= "Single threaded and multi threaded";
console.log("replace : ",str3.replace("threaded","thread")); // Output: "Single thread and multi threaded"
//replaceAll() method
console.log("replaceAll : ",str3.replaceAll("threaded","thread"));
//slice() method
console.log("slice : ",str3.slice(7,15));
//substring() method
console.log("substring : ",str3.substring(7,15));
console.log("substring : ",str3.substring(-7));
console.log("substring : ",str3.substring(8,0));
//In substring() method, if the first argument is greater than the second argument, it will swap the values and return the substring.
//In substring() method, if we use negative value, it will be treated as 0.

//split() method
let str4 = "My name is Sachin";
console.log("split : ",str4.split(" "));
console.log("split : ",str4.split(" ",3));

//startsWith() method
console.log("startsWith : ",str4.startsWith("My")); // Output: true
console.log("startsWith : ",str4.startsWith("n",3)); // Output: true

//endsWith() method
console.log("endsWith : ",str4.endsWith("n",str4.length)); // Output: true

//toLowerCase() method
console.log("toLowerCase : ",str4.toLowerCase()); // Output: "my name is sachin"

//toUpperCase() method
console.log("toUpperCase : ",str4.toUpperCase()); // Output: "MY NAME IS SACHIN"

//trim() method
let str5 = "   Hello, World!   ";
console.log("trim : ",str5.trim()); // Output: "Hello, World!"

//trimStart() method
console.log("trimStart : ",str5.trimStart()); // Output: "Hello, World!   "

//trimEnd() method
console.log("trimEnd : ",str5.trimEnd()); // Output: "   Hello, World!"