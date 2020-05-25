import express from "express";

const PORT = 3000;

const app = express();

/**
 *
 *  Math 객체
 *
 *      1. around 함수
 *      2. floor  함수
 *      3. random 함수
 *
 *          Math.around(실수데이터)
 *              => 실수 데이터를 반올림하여 리턴한다.
 *              => const number = Math.around(3.666);
 *              number 안에는 4가 존재한다.
 *
 *
 *          Math.floor(실수데이터)
 *              => 실수데이터를 버림 하여 리턴한다.
 *
 *
 *          Math.random();
 *              => 0.1 ~ 0.9 까지 난수를 생성하여 리턴한다.
 *
 *
 */

const testMath = () => {
  const number = 6.8;
  const result = Math.round(6.8);
  console.log(`반올림 한 값은 ${result} 입니다.`);

  const result2 = Math.floor(number);
  console.log(`내림 한 값은 ${result2} 입니다.`);

  console.log(Math.random() * 10 + 1);
};

/**
 *
 *  getRandomValue 라는 이름의 함수를 만들고
 *  1부터 50까지의 난수를 얻어온다.
 *  해당 데이터의 반올림 값과 내림의 값을 각각 console에 출력하세요.
 *
 *  1부터 50까지 데이터를 반복문을 통해 5번 구하되, 구할 때마다 미리 선언된 배열 numArr 에 넣는다.
 *  반복문이 끝난 후 , numArr를 console에 출력한다.
 */

const getRandomValue = () => {
  return Math.random() * 50 + 1;
};

const val = getRandomValue();
console.log(Math.round(val));
console.log(Math.floor(val));

const numArr = [];

for (let i = 0; i < 5; i++) {
  numArr[i] = Math.floor(getRandomValue());
}

console.log(numArr);

app.listen(PORT, () => {
  console.log(`${PORT} Server Start`);

  // testMath();
});
