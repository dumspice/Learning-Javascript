//DOM attribute

var headingElement = document.querySelector("h1");

console.log(headingElement);

//Thêm thuộc tính thì chọn dom element rồi thêm thuộc tính

headingElement.style.fontSize = "20px";
headingElement.title = "Heading";

//setter: gán trực tiếp cho element bằng toán tử gán '='

//getAttribute(): hàm truy xuất thuộc tính
//setAttribute(): hàm thay đổi thuộc tính
//get hay set attribute đều phải lấy từ element.

headingElement.setAttribute("class", "heading"); //setAttribute('thuộc tính', 'giá trị')
headingElement.setAttribute("style", "color: red");
headingElement.setAttribute("style", "font-size: 100px");

//getAttribute(): truy xuất giá trị của thuộc tính
var headingClassAttribute = headingElement.getAttribute("class");

console.log(headingClassAttribute.length);

//get, set attribute có thể thêm và lấy dữ liệu với attribute không cần hợp lệ của element
