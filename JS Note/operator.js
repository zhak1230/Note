// 자바스크립트 4. 코딩의 기본 operator, if, for loop 코드리뷰 팁 | 프론트엔드 개발자 입문편 (JavaScript ES6)

'use strict';

// 1. String concatenation
console.log('my' + ' cat'); /* 문자 + 문자 */
console.log('1' + 2); /* 문자 + 순자 */
console.log(`String literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric oper (더하기, 빼기, 나누기, 곱하기, 나머지값, 제곱)
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const perIncrement = ++counter;
// counter = counter + 1;
// perIncrement = counter;
console.log(counter);
console.log(perIncrement);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(counter);
console.log(postIncrement);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; /* x = x + y */
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
// < , <= , > , >=

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), find the first truthy value (첫번째 true 값만 찾는다, true가 나올시 뒤에값 x, 가벼운 논리부터 넣는게 좋다)
{
  console.log(`or: ${value1 || value2 || check()}`);

  function check() {
    for (let i = 0; i < 10; i++) {
      // wasting time
      console.log('sad');
    }
    return true;
  }
}

// and (&&), find the first falsy value (첫번째 false 값만 찾는다 = 모두 true여야 함, false가 나올시 뒤에값 x, 가벼운 논리부터 넣는게 좋다)
{
  console.log(`and: ${value1 && value2 && check()}`);

  // often used to copress long if-statement
  // nullavleObject && nullavleObject.somthing
  // if (nullavleObject != null) {
  //   nullavleObject.somthing;
  // }

  function check() {
    for (let i = 0; i < 10; i++) {
      // wasting time
      console.log('sad');
    }
    return true;
  }
}

// ! (not) 값을 반대로 변경
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, wiht type conversion (reference참조만 같으면 O, 타입은 상관 X)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, wiht type conversion (reference참조와 타입 모두 같아야 함)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equallty by reference
const ellie1 = { name: 'elle' };
const ellie2 = { name: 'elle' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 == ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
{
  const name = 'jj';
  if (name === 'Ellie') {
    console.log('Welcome, Ellie!');
  } else if (name === 'coder') {
    console.log('You are amazing coder');
  } else {
    console.log('unkwon');
  }
}

// 9. Ternary operator: ?
// condition ? value1 : value2;(~가 ? 맞으면 1 :아니면 2)
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Swich statement
// use for multiple if check
// use for enum-like value check
// use for multiple type check in TS
{
  const browser = 'IE';
  switch (browser) {
    case 'IE':
      console.log('a');
      break;
    case 'Chrome':
    case 'Firefox':
      console.log('b');
      break;
    default:
      console.log('c');
      break;
  }
}

// 11 Loops
// while loop, while the condition is tusthy, (조건이 false가 나오기 전까지 무한 반복)
// body code is executed.(조건문이 맞을 때 블럭 실행)
{
  let i = 3;
  {
    while (i > 0) {
      console.log(`while: ${i}`);
      i--;
    }
  }

  // do while loop, body code is executed first,
  // then check the condition(블럭 실행 후 조건 설정)
  {
    do {
      console.log(`do while: ${i}`);
      i--;
    } while (i > 0);
  }

  // for loop, for(begin; condition; step)
  for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
  }

  for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaraition
    console.log(`for: ${i}`);
  }

  // nested loops
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`i: ${i}, j:${j}`);
    }
  }
}

// break, continue (Quiz)
// 01. iterate from 0 to 10 and print only even numbers (use continue)
{
  let j = '';
  for (let i = 0; i <= 10; i = i + 2) {
    if (i === 10) {
      continue;
    }
    j = j + i;
  }
  console.log(j);
}

// 정답
{
  for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(`q1. ${i}`);
  }
}

// 02. iterate from 0 to 10 and print numbers untill reaching 8 (use break)
{
  let i = 0;

  while (i <= 10) {
    if (i < 8) {
      break;
    }
    i = i + 1;
  }

  console.log(i);
  // expected output: 3
}

// 정답
{
  for (let i = 0; i < 11; i++) {
    if (i > 8) {
      break;
    }
    console.log(`q2. ${i}`);
  }
}
