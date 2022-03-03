/*
===================================================
Menseleksi DOM bedasarkan hubungan Sibling
===================================================
*/

//menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById("contoh-div-1");

// Mendapatkan Sibling setelah <dib id="contoh-div-1">
var contohDiv1NextSibling = contohDiv1.nextElementSibling;

console.log(contohDiv1NextSibling); // <div id="contoh-div-2">...</div>

// Mendapatkan Sibling sebelum <div id="contoh-div-1">
var contohDiv1PrevSibling = contohDiv1.previousElementSibling;

console.log(contohDiv1NextSibling); //<h1></h1>
