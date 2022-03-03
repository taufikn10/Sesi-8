/*
===================================================
Menseleksi DOM bedasarkan hubungan Parent - Child
===================================================
*/

// menseleksi element <body>
var body = document.body;

// mendapatkan element childern dari <body>
let bodyChilds = body.children;

// menampilkan DOM yang menjadi child dari <body> dalam bentuk array
console.log(bodyChilds); //h1, dic
// id = "contoh-div-1", div id ="contoh-div-2", script js

//menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById("contoh-div-1");
// mendapatkan element childern dari <div id="contoh-div-1"> dalam bentuk array

var contohDiv1Childs = contohDiv1.children;

console.log(contohDiv1Childs); // <p id="contoh-p-1">..</p>
