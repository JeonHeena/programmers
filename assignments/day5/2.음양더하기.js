//음양 더하기
/*
배열 absolutes = 특정 정수들의 절댓값을 차례대로 담은 정수배열
불리언 배열 signs = 이 정수들의 부호를 차례대로 담은 배열
absolutes와 signs = 매개변수
solution 함수 : 실제 정수들의 합을 구하여 return
*/
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

function solution2(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

function solution3(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
