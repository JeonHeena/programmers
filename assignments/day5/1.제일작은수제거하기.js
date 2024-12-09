/*arr = 정수를 저장한 배열
solution함수 : arr에서 가장 작은 수를 제거한 배열을 리턴
빈 배열인 경우에는 배열에 -1을 채워서 리턴
arr = [4,3,2,1] -> return [4,3,2]
arr = [10] -> return [-1]
*/

let result = [];
const arr = [1, 22, -4, 6, -40];
function solution(arr) {
  if (arr.length >= 2) {
    const minVal = Math.min(...arr);
    const arrFil = arr.filter((element) => element !== minVal);
    result = arrFil;
  } else {
    result = [-1];
  }
  return result;
}
