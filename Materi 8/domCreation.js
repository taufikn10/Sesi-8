// pertama, kita seleksi terlebih dahulu <body>
var body = document.body;

// Kemudian, kita buat sebuah element HTML <div> menggunakan createElement
var mainDiv = document.createElement("div");

// untuk membuat <div id="main">, maka kita harus emmbuat HTML atribute id
var mainDivAttrId = document.createAttribute("id");

// Untuk memberikan nilai kepada id, maka kita gunakan .value
mainDivAttrId.value = "main";

// id="main" kita sudah siap. sekarang harus menambahkan attribute tersebut ke mainDiv
mainDiv.setAttributeNode(mainDivAttrId);

//mainDiv Sudah menjadi <div id="main". saatnya tambahan kedalam <body>
// karena akan meletakkan <div id="main"> di dalam <body>, maka gunakan appendchild

body.appendChild(mainDiv);
