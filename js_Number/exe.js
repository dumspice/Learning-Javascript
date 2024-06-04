// Tạo một hàm readNumber nhập một số cho đến khi khách nhập một giá trị số hợp lệ.

// Giá trị kết quả phải được trả về dưới dạng số.

// Khách truy cập cũng có thể dừng quá trình bằng cách nhập một dòng trống hoặc nhấn “HỦY”. Trong trường hợp đó, hàm sẽ trả về null.

function ReadNumber() {
  while (true) {
    var userInput = prompt("Nhap vao so a: ", " ");
    if (userInput === " " || userInput.toLowerCase == "huỷ") {
      return null;
    }
    var num = Number(userInput);
    if (!isNaN(num)) {
      return num;
    }
    alert("Nhap lai vi khong hop le");
  }
}

var number = ReadNumber();

if (number != null) {
  document.write("So ban da nhap la: " + number);
} else {
  document.write("Nguoi dung da nhap huy hoac nhap khoang trang");
}

// //Viet ham viet hoa chu cai dau tien cua mot chuoi duoc truyen vao
function ucFirst(str) {
  if (!str) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.write(ucFirst("john"));

//Tạo một tập lệnh nhắc khách nhập hai số và sau đó hiển thị tổng của chúng.

var a = promt("Nhap vao so a: ", " ");
var b = promt("Nhap vao so b: ", " ");
a = Number(a);
b = Number(b);
document.write("Sum of a and b: " + (a + b));

function isNumber(value) {
  if (typeof value == "number" && !isNaN(value)) {
    return true;
  }
  return false;
}

console.log(isNumber(999)); // true
console.log(isNumber("abc")); // false
console.log(isNumber("100")); // false
console.log(isNumber(" "));

//Kiem tra nam nhuan

// var year = prompt("Enter year: ", " ");

year = Number(year);
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      alert("Name nhuan");
    } else {
      alert("Khong phai nam nhuan");
    }
  } else {
    alert("Khong phai nam nhuan");
  }
} else {
  alert("Khong phai nam nhuan");
}

//Cach 2 kiem tra nam nhuan
var year = prompt("Enter year: ", " ");
var isLeapYear = false;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      isLeapYear = true;
    }
  }
} else {
  isLeapYear = true;
}

if (isLeapYear) {
  alert("Khong phai nam nhuan");
} else {
  alert("Nam nhuan");
}

//Su dung cau lenh dieu kien if..else

var Str = prompt("Enter a string: ");

if (Str == "ECMAScript") {
  alert("Right!");
} else {
  alert("Didn't know? ECMAScript?");
}

//Kiem tra username password use javascript

var username = prompt("Enter your username:");

if (username == "Admin") {
  var pass = prompt("Enter your password:");
  if (password == "TheMaster") {
    alert("Welcome");
  } else if (password == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (username == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}

//Luyen tap cau truc switch...case
var browser = prompt("Enter a browser");

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;
  case "Chrome":
  case "FireFox":
  case "Safari":
  case "Opera":
    alert("Okey we support these browser too");
    break;
  default:
    alert("We hope that this page looks ok!");
    break;
}

//Bai nua luyen ve cau truc switch..case

var a = prompt("a?", "");

switch (a) {
  case "0":
    alert("0");
    break;
  case "1":
    alert("1");
    break;
  case "2":
  case "3":
    alert("2, 3");
    break;
  default:
    alert("null");
}

//bai 6: luyen cau truc if...else

var num = prompt("Enter a num: ", " ");

num = Number(num);

if (num > 0) {
  document.write("1");
} else if (num < 0) {
  document.write("-1");
} else {
  document.write("0");
}

//tinh tong 2 so dung toan tu 3 ngoi

var a = prompt("Enter a", "");
var b = prompt("Enter b", "");

a = Number(a);
b = Number(b);

var Sum = a + b < 4 ? "Below" : "Over";

document.write(Sum);
