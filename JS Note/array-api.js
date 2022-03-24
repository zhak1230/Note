'use strict';

// 01. make a string out of an array (주어진 배열을 스트링[문자열]으로 변환해라[하나로 묶어내라])
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' and ');
  console.log(result);
}

// 02. make an array out of a stiring (주어진 스트링[문자열]을 배열로 변환해라)
{
  const fruits = 'apple, kiwi, banana, cherry';
  console.log(fruits);
  const result = fruits.split(',');
  console.log(result);

  const fruits2 = 'apple, kiwi, banana, cherry';
  const result2 = fruits2.split(',', 2);
  console.log(result2);
}

// 03. make this array look like this: [5,4,3,2,1] (배열을 거꾸로해라)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(array);
  console.log(result);
}

// 04. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array);
  // 새로운 배열을 만드는 것이기 때문에 splice X
  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2, 5);
  console.log(result2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// 05. find a student with the score 90 (점수가 90점인 학생을 찾아라.)
{
  const result = students.find((student) => {
    return student.score === 90;
  });
  console.log(result);
}

// 06. make an array of enrolled students (수업에 등록한 학생들만 찾아 배열을 만들어라.)
{
  // const result = students.filter((student) => {
  //   return student.enrolled === true;
  // });
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 07. make an array containing only the students' scores (점수만 있는 새로운 배열을 만들어라)
// result should be : [45, 80, 90, 66, 88]
// map = 배열 내의 요소 한가지 한가지를 다른것으로 변환 (필터 역할도 가능)
{
  const result = students.map((student) => {
    return student.score;
  });
  console.log(result);
}

// 08. check if there is a student with the score lower than 50 (점수가 50점 미만인 학생이 있는지 확인해라)
// some 은 부분 조건
// every 는 전체 조건
// !는 반대로 출력
{
  const result = students.some((student) => {
    return student.score < 50;
  });
  console.log(result);

  const result2 = !students.every((student) => {
    return student.score < 50;
  });
  console.log(result2);
}

// 09. compute sutdents' average score (학생들의 평균을 구하라)
// reduce: 배열을 돌면서 값 누적 (prev 이전의 리턴값 전달, curr 배열 아이텝 값 전달)
{
  const result = students.reduce((prev, curr) => {
    // console.log('------------');
    // console.log(prev);
    // console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// 10. make a string containing all the score (모든 점수를 스트링으로 만들어라.묶어라)
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => {
      return student.score;
    })
    .join();
  // =  const result = student.map((student) => student.score).join();
  console.log(result);
}
// 50점 이상 점수를 하나의 배열로 묶어라.
{
  const result = students
    .map((student) => {
      return student.score;
    })
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do 10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => {
      return student.score;
    })
    .sort()
    // .sort((a, b) => a - b) = 작은 순서대로 , .sort((a, b) => b - a) = 큰 순서대로
    .join();
  console.log(result);
}
