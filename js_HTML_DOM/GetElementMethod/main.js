// HTML DOM

//1, Element: id, class name, tag, CSS selector, HTML collection
//2, Attribute
//3, Text

var html = document.anchors;
console.log(html);

document.getElementsByClassName("products-list");

document.write("Hello World");

//1. getElementById: trả về trực tiếp element
//2. getElementsByClassName: trả về HTML Collection
//3. getElementsByTagName: trả về HTMl collection
//4. querySelector: trả về trực tiếp element
//5. querySelectorAll: trả về node list

//HTML Collection
//document.write

var h1Element = document.getElementsByTagName("h1");

var h1Selector = document.querySelectorAll(".heading-1");

var h2ClassName = document.getElementsByClassName("heading-1");

var heading1Selector = document.querySelector(".heading-1");

console.log(h1Element);

console.log(h1Selector);

console.log(h2ClassName);

console.log(heading1Selector);

for (var index of h1Element) {
  console.log(index);
}

for (var i = 0; i < h1Selector.length; i++) {
  console.log(h1Selector[i]);
}
