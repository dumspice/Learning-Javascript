//DOM Style: set css inline cho element

var boxElement = document.querySelector(".box");
console.log(boxElement.style);

// boxElement.style.width = "100px";
// boxElement.style.height = "100px";
// boxElement.style.backgroundColor = "red";

Object.assign(boxElement.style, {
  width: "200px",
  height: "200px",
  backgroundColor: "green",
}); //Object.assign() dùng để ghép nhiều thuộc tinh với nhau

// có 2 đối số cơ bản:
// Object.assign(Object, {})
//1, Object: object mục tiêu
//2, {}: object dùng để gán cho object mục tiêu

console.log(boxElement.style.width);
// cách để get value của element dom css
// cách này chỉ lấy ra giá trị của thuộc tính css chứ k phải của đối tượng
