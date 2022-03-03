//1.
var pageTitleElement = document.getElementById("page-title");
//1. Menyeleksi DOM bedasarkan Id element dan mempunyai ke dalam variabel. Isinya merupakan object HTML element

//3.
var pageBoxElements = document.getElementsByClassName("page-box");
//3. Menyeleksi DOM bedasarkan nama class element dan menjampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

//4.
var pageHeadings = document.getElementsByTagName("h1");
//4. Menyeleksi DOM bedasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element.

//5.
var pageTitleElementsContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementsContent);
//5. isi dari <div id="page-title"> adalah simple page title

//6.
var pageBoxElementsContents = pageBoxElements.innerHTML;
console.log('isi <div class="page-box">:' + pageBoxElementsContents);
//6. isi <div class="page-box"> adalah undefined!

//7. Melooping array pageBoxElements
for (var i = 0; i < pageBoxElements.length; i++) {
  var currentPageBoxElement = pageBoxElements[i];

  var currentPageBoxElementContent = currentPageBoxElement.innerHTML;

  // Mengambil isi elemen pageBoxElements yang kedua, yaitu index ke 0
  var firstPageBoxElement = pageBoxElements[0];
  var firstPageBoxElementContent = firstPageBoxElement.innerHTML;

  // Mengambil isi elemen pageBoxElements yang kedua, yaitu index ke 1
  var secondPageBoxElement = pageBoxElements[1];
  var secondPageBoxElementContent = secondPageBoxElement.innerHTML;

  // Mengambil isi elemen pageBoxElements yang ketiga, yaitu index ke 2
  var thirdPageBoxElement = pageBoxElements[2];
  var thirdPageBoxElementContent = thirdPageBoxElement.innerHTML;

  // Menampilkan isi elemen dengan console.log
  console.log(
    'isi <div class="page-box"> yang pertama:' + firstPageBoxElementContent
  );
  console.log(
    'isi <div class="page-box"> yang kedua:' + secondPageBoxElementContent
  );
  console.log(
    'isi <div class="page-box"> yang ketiga:' + thirdPageBoxElementContent
  );
}
