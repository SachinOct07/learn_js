
// This is the main module that imports the `login` and `sign` objects from their respective modules.
// import {login as data} from "./login.js";
// import sign from "./signup.js";
import {loginUser as data,id} from "./login.js";
import signUser from "./signup.js";

function application(){
  console.log(id);
  data();
  signUser();
}
application();