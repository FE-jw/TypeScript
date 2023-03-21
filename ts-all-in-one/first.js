"use strict";
const a = 5;
const b = 'hello world';
const c = true;
const d = undefined;
const e = null;
const f = 123123; // 다 됨(타입스크립트를 쓸 이유가 없어지기 때문에 잘 안 씀)
const g = true; // 무조건 true
const h = 'hello'; // 무조건 'hello'
// 매개변수 바로 뒤에 return 값 타입 지정
function add(x, y) {
    return x + y;
}
// 화살표 함수인 경우 return의 타입은 => 다음에 적는다
const add1 = (x, y) => x + y;
const add2 = (x, y) => x + y;
const obj = {
    lat: 37.5,
    lon: 127.5
};
const arr1 = ['123', '456'];
const arr2 = [123, 456];
const arr3 = [123, 456]; // 제네릭
const arr4 = [123, 456, 'hello']; // 튜플
