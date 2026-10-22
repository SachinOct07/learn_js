function* generator(){
  yield 1;
  yield 2;
  yield 3;
}

let gen1 = generator();
console.log(gen1.next().value);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());