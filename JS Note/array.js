// whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.clear();

// 3. Looping over an array
// print all fruits
//  a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  //       지정  of 배열
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

fruits.forEach((fruit) => {
  console.log(fruit);
});

// 4. Addition, deletion, copy
// push: add an item to the end (뒤에서 추가)
fruits.push('stbarry', 'peach');
console.log(fruits);

// pop: remove an item form the end (뒤에서 제거)
fruits.pop();
fruits.pop();
// pop 1개당 1개
console.log(fruits);

// unshift: add an item to benigging (앞에서 추가)
fruits.unshift('stbarry', 'peach');
console.log(fruits);

// shift: an item to benigging (앞에서 제거)
fruits.shift();
fruits.shift();
// .shift 1개당 1개
console.log(fruits);

// note!! shift, unshift are slower than pop, push
//  : 배열들이 뒤로 밀리기 때문
//  : shift, unshift 보다 pop, push 선호

// splice : remove an item bu index position (지정된 곳에서 제거)
fruits.push('stbarry', 'peach', 'lemon');
console.log(fruits);
// fruits.splice(1);
// console.log(fruits);
// (시작번호, 갯수[생략시 시작 번호 뒤로 모두 선택], '그 자리에 추가')
fruits.splice(1, 1, 'melon', 'watermelon');
console.log(fruits);

// concat: combine two array (두가지 배열 묶기)
const fruits2 = ['mango', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index, 없을 시 -1 출력
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.includes('coconut'));

// includes: 배열에 포함되어있는지 true, false
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

// lastindexOf
console.clear();
fruits.push('apple');
// 기존에 있는 값 추가
console.log(fruits);
console.log(fruits.indexOf('apple'));
// indexOf는 같은 값이 있을 시 첫번째 값 출력
console.log(fruits.lastIndexOf('apple'));
// lastIndexOf는 같은 값이 있을 시 마지막 값 출력
