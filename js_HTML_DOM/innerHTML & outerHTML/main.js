// Học cách thêm element vào bên trong hay bên ngoài một element

// Dùng innerHTML để thêm element vào bên trong một element
var boxElement = document.querySelector(".box");

// innerHTML có thể thêm được tất cả element, attribute hoặc text vào element muốn thêm
// boxElement.innerHTML = "<h1 style='color: red'>Heading</h1>";

//Lấy ra được nội dung bên trong
console.log(boxElement.innerHTML);

// Dùng outerHTML để thêm element bên ngoài một element
// Dùng outerHTML sẽ ghi đè chính thằng element gọi đến phương thức outerHTML
// Lấy ra được chính thằng element ngoài cùng

boxElement.outerHTML = "<span>HEllO</span>";

console.log(boxElement.outerHTML);
