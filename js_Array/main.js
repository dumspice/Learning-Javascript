//Tao mang
//cach tao mang
//Array trong js chua tat ca cac kieu du lieu co trong JS

//Cach 1:
var languages = [
  "Javascript",
  "Php",
  "Ruby",
  null,
  undefined,
  123,
  function () {},
  {},
];

//cach 2: dung tu khoa new(khong nen dung cach nay)

var languages = new Array(
  "Javascript",
  "Php",
  "Ruby",
  null,
  undefined,
  123,
  function () {},
  {}
);

// console.log(languages);
//muon kiem tra Array la Array hay Object: dung Array.isArray(parameter)
// console.log("Check Array: ", Array.isArray(languages));

//Truy xuat mang
//do dai mang
// console.log("Array length: ", languages.length);

/*
Một số các Array method
1, toString()
2, join()
3, pop()
4, Push
5, Shift
6, Unshift
7, Splicing
8, Concat
9, Slicing
 */

var languages = ["Javascript", "Php", "Ruby"];

//toString(): chuyen mang thanh 1 chuoi, ngan cach voi nhau bang dau ', '
console.log(
  "Chuyen tu Array sang String dung toString(): ",
  languages.toString()
);

//join(): cung la bien array thanh chuoi nhung co the truyen param vao trong de ngan cach chuoi
console.log(
  "Chuyen tu Array sang String dung join(param): ",
  languages.join(" param ")
);

//pop(): xoa di phan tu o cuoi mang roi return lai phan tu do
//khi goi pop mang se giam di 1 element
//khi mang het element thi se pop ra undefined
console.log("Pop: ", languages.pop());
console.log("Pop: ", languages.pop());
console.log("Pop: ", languages.pop());

console.log("Array sau khi pop: ", languages);

//push(): Them 1 hoac nhieu element vao cuoi mang
//khi dung push Array.legth se tang dung voi so element truyen vao
//gia tri tra ve cua push() la do dai array sau khi push them element
console.log(
  "Push: ",
  languages.push("Dart", "JavaScript", "Java", "Php", "C", "C++")
);

console.log("Array sau khi push: ", languages);

//shift(): xoa di phan tu o dau mang r return lai phan tu vua xoa
//khi xoa do dai mang giam di 1
//xoa het thi se shift ra undefined
console.log("Shift: ", languages.shift());

console.log("Array sau khi shift: ", languages);

//unshift(): them 1 hoac nhieu element vao dau mang
//gia tri tra ve la do dai mang sau khi them element
console.log("Unshift: ", languages.unshift("Go"));

console.log("Array sau khi unshift: ", languages);

//splice(): Dung de xoa, chen, them phan tu vao trong array
//splice(start, deleteCount, param): syntax
//start: index cua element muon xoa
//deletecount: so luong element muon xoa sau element duoc chon
//param: phan tu nay de them vao array tai index duoc chon
//splice(1, 1): chi xoa element duoc chon
//splice(1, n): xoa element duoc chon va n element phia sau
var games = ["CSGO", "LOL", "GTA"];

//splice(1, 0, param): chen param vao vi tri index 1
games.splice(1, 0, "Minecraft");

console.log("Array sau khi chen them phan tu dung splice: ", games);

games.splice(1, 1, "Hayday");

console.log("Array sau khi xoa phan tu va chen them 1 phan tu: ", games);

//concat(): dung de noi 2 array
//array1.concat(array2):
//array1: mang goc
//array2: mang noi
var games2 = ["StarCraft", "AOR", "PUBG"];

console.log("Noi array games voi array games2: ", games.concat(games2));

//slice(): Dung de cat mot hoac nhieu hoac toan bo element trong array
//array.slice(star? number, end):
//start: vi tri bat dau
//end: vi tri cuoi
//giong nhu String co the lay xuoi hoac nguoc(dung gia tri am):
