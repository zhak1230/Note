// 자바스크립트 3. 데이터타입, data types, let vs var, hoisting | 프론트엔드 개발자 입문편 (JavaScript ES5+)

// 1. Use strict
// added in ES5
// use this for Valina Javascript.
'use stirict';

// 2. Variable (Mutavle data type) ,rw(read/write 읽고/쓰기 가능)
// let (added in ES6) = 변수 선언
let globlaName = 'global name';
{
  let name = 'wonyong';
  console.log(name);
}
console.log(name);
console.log(globlaName);

// var (don't ever use this!)
// var hoisting (어디에 선언했는지와 상관없이 항상 제일 위로 끌어올리는 것)
// var has no block scope

// 3. Constant ( Inmutavle data type = 값 선언시 변경 불가능 ) ,r(read only 읽기만 가능)
// use const whenever possible.
// only use let if variablle nedds to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutabel data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
//  favor immutable data type always for a few reason:
//   - security (보안성이 좋음 [해커들이 변경하기 어려움])
//   - thread safety (안정성)
//   - reduce human mistakes (실수 방지)

// 4. Variable types
// primitive: single item: number, string, boolean, null, undefiedn, symbol (더이상 나눌 수 없는 한가지 item)
// object: box container (single item를 box로 묶어서 관리)
// funtion: first-class funtion (funtion 변수 할당 가능, 인자 전잘 가능, 리턴 가능)
const count = 17; /* (정수) */
const size = 17.1; /* (소수) => 둘 다 상관없음 */
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric valcues: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string (문자)
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; /* template literals (string) */
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean (참, 거짓)
// false: 0, null, undefined, NaN, ''
// true: any oher value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// sybol, create unique identifiers for objects (고유한 식별자가 필요하거나 동시다발적인 코드에서 우선순위를 줄 때 사용)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(
  `value: ${
    symbol1.description /* (=스트링으로 변환) */
  }, type: ${typeof symbol1}`
);

// 5. Dynamic typing: dynamically type language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' / '5';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); /* error */
// 기호에 따라 type을 다르게 인식
