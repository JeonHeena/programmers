//이상한문자만들기파일
/*
문자열 s = 한 개 이상의 단어로 구성
각 단어 = 하나 이상의 공백문자로 구분되어 있다.
s = "Heena is smart" -> Heena, is, smart
solution 함수 : 단어의 짝수번째 인덱스의 알파벳 -> 대문자, 홀수번째 알파벳 -> 소문자

ex
s = "try hello world"
return "TrY HeLlO WoRlD"

1. 문자열을 단어배열로 바꾸기 (공백으로 나눠져 있음) wordsArr
2. 각 단어의 인덱스를 for문으로 추출해서 짝수면 대문자, 홀수면 소문자로 바꾸기
3. 바꾼걸 다시 sChange에 넣기
*/

const s = "try hello world";
const wordsArr = s.split(" "); //['try', 'hello', 'world']
function solution(s) {
  return;
}
