
//Named export is used to export multiple values from a module. 
// Each value is exported with its own name, allowing you to import only the specific values you need in other modules. 
// In this case, we have two named exports: `sign` from `signup.js` and `login` from `login.js`.
// export let login={
//   name:"sachin",
//   password:"1234",
// }

export let id="1234";

let login={
  name:"sachin",
  password:"1234",
}
export function loginUser(){
  console.log(login);
}