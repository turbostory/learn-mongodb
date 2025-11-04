// admin 페이지 접근 여부
/**
 * admin페이지 접근 조건
 * 1. login된 사용자
 * 2. role이 admin이어야 함
 */

const user = {
  isLoggedIn: false,
  role: "admin", // 다(른값으로 user, guest
};

// admin 페이지 접근
if (user.isLoggedIn && user.role === "admin") {
  // 로그인 된 사용자 이면서 role이 admin인 경우
  console.log("관리자 페이지에 접근할 수 있습니다");
} else {
  console.log("관리자 페이지에 접근할 수 없습니다");
}

// main 페이지 접근
if (user.isLoggedIn || user.role === "admin") {
  console.log("메인 페이지에 접근할 수 있습니다.");
} else {
  console.log("메인 페이지에 접근할 수 없습니다.");
}

const sayHello = (username = "사용자") => {
  console.log(`안녕하세요 ${username}님!`);
};

sayHello();
sayHello("배홍진");

// 구조분해할당
const names = ["alice", "bob", "david"];

const [first, second] = names;

console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);

// 객체
const person = {
  name: "후츠릿",
  mbti: "ENTJ",
};

const { name: username, mbti } = person;
console.log("🚀 ~ mbti:", mbti);
console.log("🚀 ~ username:", username);

// Spread Syntax
// 배열이나 객체를 개별 요소로 분해하거나 결합할대 사용
const copyNames = [...names, "kelly"];
console.log("🚀 ~ copyNames:", copyNames);

const todoItem = {
  text: "mongoDB 학습",
  isComplete: false,
};

const copyTodoItem = {
  ...todoItem,
  description: "DB 공부 함께 할거예요",
  isComplete: true,
};
console.log("🚀 ~ copyTodoItem:", copyTodoItem);
