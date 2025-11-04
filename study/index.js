const names = ["alice", "bob", "david"];

// 자주 사용되는 배열 함수

// 1. map: 기존 배열의 요소들을 조작하여 새로운 배열을 리턴
// 대문자로 변환하여 배열 리턴
const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

// 2. falter: 배열안의 요소들 중에서 특정 조건을 만조갛는 요소들로 새로운 배열을 리턴
// 글자수가 4글자 이상인 요소들만 필터링
const filterNames = names.filter((name) => name.length >= 4);
console.log("🚀 ~ filterNames:", filterNames);

// 3. find: 배열안의 요소들 중 특정 조건을 만족하는 첫번째 요소를 리턴
// 조건을 만족하는 요소가 없다면 undefined리턴
const findName = names.find((name) => name.length >= 4);
console.log("🚀 ~ findName:", findName);

// 4. some/every:
// some: 배열의 요소 중 하나라도 주어진 조건을 만족하면 true, 아니면 false
// every: 배열의 모든 요소가 주어진 조건을 만족하면 true, 아니면 false
const isSomeName = names.some((name) => name.length >= 4);
console.log("🚀 ~ isSomeName:", isSomeName);

const isEveryName = names.every((name) => name.length >= 4);
console.log("🚀 ~ isEveryName:", isEveryName);
