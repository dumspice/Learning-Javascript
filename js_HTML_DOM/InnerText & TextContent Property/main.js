//innerText, textContent

//lấy được nội dung text node và sửa đổi nội dung text node

var headingElement = document.querySelector(".heading");

// console.log(headingElement.innerText);
//console.log(headingElement.textContent); //lấy được nội dung của text node ở trong element

//Thay đổi giá trị của text node

//headingElement.textContent = "Heading Text 2"; //Dùng toán tử gán

// console.log(headingElement.textContent);

//innerText và textContent khác gì nhau

//innerText: lấy giá trị text hiển thị trên màn hình
console.log(headingElement.innerText);

//textContent: lấy giá trị nguyên thuỷ của text.
console.log(headingElement.textContent);

//Dùng template String ``

headingElement.innerText = `

Heading

`;

//dùng innerText với template String thì html sẽ hiển thị thẻ br nếu có khoảng trắng
//dùng textContent với template String thì html sẽ hiển thị khoảng trắng thôi
