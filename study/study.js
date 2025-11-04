// function sayHello() {
//   console.log("안녕하세요");
// }

// const sayHello = (username) => {
//   console.log(`안녕하세요, ${username}님!`);
// };

// sayHello("배홍진");
// sayHello("후츠릿");

// const plus = (a, b) => {
//   // const c = a + b;
//   // console.log(`${a} + ${b} = ${a + b}`);
//   return a + b;
// };

// const result = plus(1, 8);
// console.log("🚀 ~ result:", result);

// console.log("🚀 ~ plus(6, 5):", plus(6, 5));

const score = 50;

// if (score >= 60) {
//   // 조건식이 true인 경우 실행되는 구문
//   console.log("합격");
// } else {
//   // 조건식이 false인 경우 실행되는 구문
//   console.log("불합격");
// }

// // 삼항 연사자
// score >= 60 ? console.log("합격") : console.log("불합격");

// 배열과 객체
const daysOfWeek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
// 화요일 뽑아오기

// console.log("🚀 ~ daysOfWeek[1]:", daysOfWeek[1]);

// const person = {
//   name: "이승한",
//   mbti: "ISTJ",
// };

// MBTI 뽑아오기
// console.log(`🚀 ~ person["mbti"]:`, person["mbti"]);

// console.log("🚀 ~ person.mbti:", person.mbti);

const names = ["alice", "bob", "david"];

names.forEach((name, index) => {
  console.log(`${index}번째: ${name}`);
});
