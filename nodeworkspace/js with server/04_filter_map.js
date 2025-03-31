// js with server/04_filter_map.js
let persons = [{
  name: '김지수',
  point: 93,
  city: '서울'
}, {
  name: '김제니',
  point: 65,
  city: '부산'
}, {
  name: '박채영',
  point: 79,
  city: '제주'
}, {
  name: '라리사',
  point: 88,
  city: '방콕'
}]

//1) 점수가 80점 이상인 사람들만 따로 
let score = persons.filter(function (value, index값) { //value값, index값
  return value.point > 80; //boolean 타입
})
console.log(score);



// ps) 객체배열일 경우 새로운 배열과 원본 배열
// 둘 다 데이터 변경 발생
score[0].name = "김지수";
console.log(score);
console.log(persons);


//2) 각 사람들 별로 no를 추가
// => map

let newList = persons.map(function (value, index) {
  return {
    no: ((index + 1) * 100),
    name: value.name,
    city: value.city,
  }
})

console.log(newList);
//ps)
newList[0].name = "홍길동";
console.log(newList);
console.log(persons);