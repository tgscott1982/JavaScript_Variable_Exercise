



const firstName = "Travis";
let lastName = "Gersch";
var age = 40;
let e1 = document.getElementById("e1");
e1.innerHTML = `${firstName}</br>${lastName}</br> ${age}`;

//firstName = "John"; //results in error
lastName = "Wick";
age = 50;
let e2 = document.getElementById("e2");
e2.innerHTML = `${firstName}</br>${lastName}</br> ${age}`;

let language = "JavaScript";
let createdYear = 1995;
let isCaseSensetive = true;
let e3 = document.getElementById("e3");
e3.innerHTML = `${language}</br>${createdYear}</br> ${isCaseSensetive}`;

let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";
let e4 = document.getElementById("e4");
e4.innerHTML = `${price}</br>${isOnSale}</br> ${salePercentage} <br/> ${stock} <br/> ${inStock} <br/> ${selectedSize}`;

let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;
let e5 = document.getElementById("e5");
e5.innerHTML = `${title}</br>${author}</br> ${pageCount} <br/> ${bookmark} <br/> ${hasRead}`;
