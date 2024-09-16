//Bài 1: Flat: làm phẳng mảng từ Depth Array
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (output, item) {
  return output.concat(item);
}, []);

console.log(flatArray);
//Bài 2: Lấy ra các khoá học đưa vào một mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        name: "HTML, CSS",
      },
      {
        id: 2,
        name: "Javascript",
      },
    ],
  },
  {
    topics: "Back-end",
    courses: [
      {
        id: 3,
        name: "NodeJS",
      },
      {
        id: 4,
        name: "Php",
      },
    ],
  },
];

var listTopics = topics.reduce(function (course, topics) {
  return course.concat(topics.courses);
}, []);

console.log(listTopics);

var html = listTopics.map(function (course) {
  return `
        <div>
            <h2>Course: ${course.name}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

console.log(html.join(""));

document.getElementById("root").innerHTML = html.join("");
