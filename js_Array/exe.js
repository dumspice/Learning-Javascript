/**
 * Bai tap ve arra
 */

//lay phan tu cuoi cung cua mang

function getLastIndex(array) {
  if (array.length == 0) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}

var animals = ["Dog", "Cat", "Elephant"];
var result = getLastIndex(animals);

console.log(result);

//su dung push de them phan tu vao cuoi mang
let fruits = ["Apples", "Pears", "Oranges"];

fruits.push("Banana");
console.log("Mang sau khi push: ", fruits);

/**
 * Hãy thử 5 phép toán trong mảng.

Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
Thêm “Rock-n-Roll” vào cuối.
Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
Tách giá trị đầu tiên của mảng và hiển thị nó.
Thêm trước Rap và Reggae vào mảng.
 */

var styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
console.log("Them Rock-n-Roll vao cuoi: ", styles);

function replaceMiddleIndex(array, changeValue) {
  if (array.length % 2 == 0 || array.length == 0) {
    return array;
  } else {
    const middleIndex = Math.floor(array.length / 2);
    array[middleIndex] = changeValue;
    return array;
  }
}

console.log(
  "Thay phan tu o giua voi Classics: ",
  replaceMiddleIndex(styles, "Classics")
);

styles.splice(0, 1);
console.log("Mang sau khi tach gia tri dau tien ", styles);

styles.unshift("Reggae", "Rap");
console.log("Mang sau khi them 2 phan tu moi vao head: ", styles);

/**
 * Viết hàm sumInput() rằng:

Yêu cầu người dùng nhập các giá trị bằng cách sử dụng prompt và lưu trữ các giá trị trong mảng.
Kết thúc yêu cầu khi người dùng nhập một giá trị không phải số, một chuỗi trống hoặc nhấn “Hủy”.
Tính toán và trả về tổng của các mục mảng.
 */
function readNumber() {
  while (true) {
    var userInput = prompt("Enter a number: ", " ");
    if (userInput === " " || userInput.toLowerCase() == "huỷ") {
      return null;
    } else {
      var num = Number(userInput);
      if (!isNaN(num)) {
        return num;
      }
    }
    alert("Nhap lai");
  }
}

var arr = [];
var sum = 0;
arr.push(readNumber());
for (var param of arr) {
  sum += param;
}
console.log(sum);
sumInput();
