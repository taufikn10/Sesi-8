/*
let foo = /ab+c/;

console.log(foo); // /ab+c/
console.log(typeof foo); //object

var bar = new RegExp("ab+c");

console.log(bar); // /ab+c/
console.log(typeof bar);
*/

/*
let foo = "Belajar Javascript";
let pola = /JavaScript/;

console.log(pola.test(foo)); //true
console.log(/Belajar/.test(foo)); //true
console.log(/belajar/.test(foo)); //false
*/

/*
let foo = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik";
let pola = /\d+/g;

console.log(pola.exec(foo)); // Array["1"]
console.log(pola.exec(foo)); // Array["60"]
console.log(pola.exec(foo)); // Array["3600"]
console.log(pola.exec(foo)); // null
*/

/*
let foo = "Belajar JavaScript";
console.log(/JavaScript/.test(foo)); //true
console.log(/javaScript/.test(foo)); //false
console.log(/Belajar/.test(foo)); //true
console.log(/belajar/.test(foo)); //false
console.log(/Java/.test(foo)); //true
console.log(/ajar/.test(foo)); //true
*/

let pola = /[abcde]../;

console.log(pola.test("abaa")); //true
console.log(pola.test("fba")); //false
console.log(pola.test("1dd")); //false
console.log(pola.test("add")); //true
console.log(pola.test("dd")); //false
console.log(pola.test("belajar")); //true
