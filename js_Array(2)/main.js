// Array method

/**
 * 1, forEach()
 * 2, every()
 * 3, some()
 * 4, every()
 * 5, find()
 * 6, filter()
 * 7, map()
 * 8, reduce()
 */

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coins: 280,
  },
  {
    id: 2,
    name: "PHP",
    coins: 1800,
  },
  {
    id: 3,
    name: "Ruby",
    coins: 1200,
  },
  {
    id: 4,
    name: "Java",
    coins: 480,
  },
  {
    id: 5,
    name: "C++",
    coins: 0,
  },
  {
    id: 6,
    name: "Java",
    coins: 100,
  },
];

//1, forEach(): duyệt qua từng phần tử của mảng.

courses.forEach(function (course, index) {
  console.log(index, course);
});

//2, every(): ktra tất cả các phần tử của mảng phải thoả mãn 1 điều kiện nào đó

var isFree = courses.every(function (course, index) {
  return course.coins === 0;
});

console.log(isFree);

//3, some():  kiểm tra trong mảng có 1 phần tử thoả mãn điều kiện nào đó hay không

var isSome = courses.some(function (course, index) {
  return course.coins > 1;
});

console.log(isSome);

//4, find(): Tìm kiếm ròi trả về chính phần tử đó (chỉ trả về 1 phần tử), k có thì trở về undefined

var findCourse = courses.find(function (course) {
  return course.name === "C++";
});

console.log(findCourse);

//5, filter(): trả về tất cả phần tử được tìm kiếm

var filterCourse = courses.filter(function (course) {
  return course.name === "Java";
});

// console.log(filterCourse);

//6, map(): dùng để thay đổi, chỉnh sửa element của array

var newCourse = courses.map(function (course, index, originArray) {
  //course: element, index: key, originArray: array gốc
  return {
    id: `Course: ${course.name}`,
    name: `Beginner ${course.name}`,
    coins: course.coins,
    coinText: `Price: ${course.coins} coins`,
  }; //mảng mới return lại cái gì thì element trong mảng sẽ nhận giá trị ấy
});

console.log(newCourse);

var courseHandler = function (course) {
  return `<h2>${course.name}</h2>`;
};

console.log(courseHandler);

var newCourse = courses.map(courseHandler);

console.log(newCourse.join(""));

document.getElementById("root").innerHTML = newCourse.join("");

//7, reduce(): Để nhận về một giá trị duy nhất sau khi xử lý 1 array

var i = 0;
var coinHandler = function (
  accumulator,
  currentValue,
  currentIndex,
  originArray
) {
  return accumulator + currentValue.coins; // giá trị sau khi xử lý sẽ được lưu vào biến accumulator
};
//khi reduce hoạt động thì sẽ gọi đến function được truyền vào và trả lại các đối số sau:
/**
 * 1, accumulator: biến lưu trữ
 * 2, currentValue: giá trị hiện tại
 * 3, currentIndex: chỉ mục của currentValue trong mảng
 * 4, originArray: array gốc
 */

//trong function reduce return cái gì lữu trữ cái đấy

var totalCoins = courses.reduce(coinHandler, 0);
console.log(totalCoins);
