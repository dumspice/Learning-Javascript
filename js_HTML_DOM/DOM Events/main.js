//DOM Events

// 1, Attribute Events
// 2, Assign event using the element node

// Sử dụng gán event cho element

var h1Element = document.querySelectorAll("h1");

h1Element.onclick = (e) => {
  //khi truyền một đối số vào trong function của 1 event thì đối số đó chính là event của element đó
  console.log(e.target);
};

for (var index of h1Element) {
  index.onclick = (e) => {
    console.log(e.target); //nên dùng e.target để tránh bị lỗi
  };
}
