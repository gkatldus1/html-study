//   var nums = new Array(1, 2, 3, 4, 5);
//   //   nums.splice(2, 1);
//   nums.splice(3, 0, 100);
//   console.log(nums);

//   var exam = new Object();
//   exam.kor = 30;
//   exam.eng = 70;
//   console.log(exam);
//   delete exam["kor"];
//   console.log(exam);
//   var exam = { kor: 30, eng: 70, math: 90 };
//   console.log(exam);

//   var notices = [
//     { id: 1, title: "hello json" },
//     { id: 2, title: "hi json" },
//     { id: 3, title: "json is ..." },
//   ];

//   console.log(notices[1]);
//   console.log(notices[1].title);

//   var data = '{"kor":10, "eng":20}';
//   var exam = JSON.parse(data);

//   exam.math = 30;
//   console.log(exam);

//   var json = JSON.stringify(exam);
//   console.log(json);

//   var temp = "a";

//   var kor = temp || 10;
//   //   var kor = temp ?? 10;

//   var eng = 30;

//   var total = kor + eng;

//   console.log(total);

//   var arr = [4, 5, 6, 3, 6, 7, 53, 5];

//   for (var i in arr) console.log(arr[i]);
//   console.log("========================");
//   for (var v of arr) console.log(v);

//   var exam = { kor: 10, eng: 20, math: 30 };
//   for (var k in exam) console.log(exam[k]);

//   var add = new Function("x, y", "return x + y;");
//   console.log(add(3, 4));
//   var add = function (x, y) {
//     console.log(arguments.length);
//     return arguments[0] + arguments[1];
//     //return x + y;
//   };

//   console.log(add(3, 4, 5, 6, 7, 8));
//   a = 1;
//   alert(a);

//   var a = 3;
//   console.log(window.a);

//   var f1 = function () {
//       a = 1;
//       console.log(window.a);
//       var a;
//   };

//   f1();

//   function f1() {
//     a = 1;
//   }
//   f1();
//   alert(a);

// var funcs = [];

// funcs[0] = function () {
//   console.log(0);
// };

// funcs[1] = function () {
//   console.log(1);
// };

// funcs[2] = function () {
//   console.log(2);
// };

// funcs[0]();
// funcs[1]();
// funcs[2]();

/* <h1>노드 선택방법</h1>--------------------------- */
window.addEventListener("load", function () {
  var section = document.getElementById("s1");
  var input = section.getElementsByClassName("input")[0];
  var button = section.getElementsByClassName("button")[0];

  button.onclick = function () {
    input.value = "안녕하세요";
  };
});

// ------------------------------------------------------
var funcs = [];
function getList() {
  for (var i = 0; i < 3; i++) {
    funcs[i] = (function (x) {
      return function () {
        console.log(x);
      };
    })(i);
  }
}
getList();
funcs[0]();
funcs[1]();
funcs[2]();

(function (x, y) {
  return x + y;
})(3, 4);

// var nums = [4, 7, 3, 1, 6, 3, 2, 11, 9];
// console.log(nums);
// nums.sort(function (a, b) {
//   return a - b; //오름차순
// });
// console.log(nums);

// var nums = [
//   { kor: 68, eng: 30 },
//   { kor: 25, eng: 34 },
//   { kor: 30, eng: 70 },
// ];
// nums.sort(function (a, b) {
//   return a.kor - b.kor;
// });
// console.log(nums);

// for (var i in funcs) funcs[i]();
window.addEventListener("load", function () {
  var btnPrint = document.getElementById("btn-print");

  function printResult() {
    var x, y;
    x = prompt("x값을 입력하세요", 0);
    y = prompt("y 값을 입력하세요", 0);
    x = parseInt(x);
    y = parseInt(y);
    alert(x + y);
    btnPrint.value = x + y;
  }

  btnPrint.onclick = printResult;
});

// var answer;
// answer = confirm("정말로 삭제하시겠습니까?");
// if (answer) alert("삭제되었습니다.");
