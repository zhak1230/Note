// 자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현 | 프론트엔드 개발자 입문편(JavaScript ES6)
'use strict';

//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing
// naming: doSomething, command, verb (명사 X, 동사 O)
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Paraneters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default Paraneters (added on ES6)
function showMessage(message, from = 'unkown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
{
  function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }

    for (const arg of args) {
      console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
  }

  printAll('dream', 'coding', 'ellie');
}

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);
