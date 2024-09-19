// ClassList property: là thuộc tính của element node, chỉ element mới chọc tới thuộc tính này

/**
 * add: Thêm class vào element
 * contain: Kiểm tra một class có nằm trong một element hay không
 * remove: Xoá class ra khỏi element
 * toggle: nếu mà có class trong element thì gọi toggle sẽ xoá, còn nếu không có thì toggle sẽ thêm class vào element
 */

var boxElement = document.querySelector(".box");

console.log(boxElement.classList);

//nếu trùng class thì length không đổi
//thuộc tính classList sẽ trả lại một đối tượng DomTokenList

var h1Element = document.querySelector("h1");

h1Element.classList.add("red", "font-10"); // Thêm class red vào thẻ h1

//muốn thêm nhiều class, phải cách nhau bằng dấu ','

// contain: kiểm tra một class có nằm trong một element hay không
console.log(h1Element.classList.contains("red"));
console.log(h1Element.classList.contains("font-10"));
console.log(h1Element.classList.contains("blue"));

//remove: xoá class
//nếu không có class thì k có lỗi, cũng k có chuyện gì xảy ra

// setTimeout(() => {
//   h1Element.classList.remove("font-10");
// }, 3000);

//toggle: thêm hoặc xóa class

setInterval(() => {
  h1Element.classList.toggle("red");
}, 1000);
