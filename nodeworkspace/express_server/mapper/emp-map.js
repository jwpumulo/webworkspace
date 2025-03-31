const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.json'); //절대경로생성

// DB 설정
const jsonFile = fs.readFileSync(filePath);
const jsonData = JSON.parse(jsonFile); //JSON > javaScript 

const query = (crud, target, where = null)=>{ //where=null > 조건이 없다
  let result = null;

  let emps = jsonData;
  switch(crud){
  // 조회
  case 'SELECT' :
    result = (where == null) ? emps :  emps.filter(emp => {
      return findEmp(emp, where);
    });
    break;  

  // 등록
  case 'INSERT' :
    emps.push(target);
    break;
  // 수정
  case 'UPDATE' :
    emps.forEach(emp => {
      if(findEmp(emp, where)){
        for(let field in target){
          emp[field] = target[field];
        }
      }
    });
    break;
  // 삭제
  case 'DELETE' :
    let selected = null;
    emps.forEach((emp, idx) => {
      if(findEmp(emp, where)){
        selected = idx;
      }
    });

    emps.splice(selected, 1);
    break;
  }
  return result;
};

function findEmp(emp, where){
  let fieldNum = 0; // 총 검색조건 갯수
  let selected = 0; // true인 검색조건 갯수

  for(let field in where){
    fieldNum++;
    if(emp[field] == where[field]){
      selected++;
    }
  }
  return (fieldNum == selected);
}

module.exports = { // 변수안에 
  query, //"query": qeury, 키, 변수 두번 사용을 줄여서
}

// 자바스크립트 문법 이해하기