
//Default export is used to export a single value from a module.
let sign={
  name:"virat",
  password:"5678",
}

// export default sign;

export default function signUser(){
  console.log(sign);
}