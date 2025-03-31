// service/customer_service.js 기능, 메인!!!
const mariaDB = require('../mapper/mapper.js');


// 전체조회
const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
};


// 단건조회
const findByID = async (empId) => { //await+async
  let info = (await mariaDB.query('selectById', empId))[0]; //비동기작업 괄호는 우선수위
  return info;
};


// 등록
const addEmp = async (empInfo) => { // 객체
  let columnlist = ['first_name', 'last_name', 'email', 'gender', 'ip_address']; //별도로 배열로 만듬
  let addInfo = converterAray(empInfo, columnlist);
  let result = await mariaDB.query('insertInfo', addInfo);
  return result;
};


// 객체 -> 배열
const converterAray = (target, list) => {
  //target = { no : 1, name: 'hong', email : 'h@goog'};
  let aray = [];
  for (let field of list) {
    let val = target[field]; //target['name']을 기준으로
    aray.push(val); // 'Hong'
  }
  return aray; //['Hong', 'h@goog', ...]
}


// 수정
const modifyEmpInfo = async (empInfo, empId) => { //경로에서 아이디, 바디에서 내용
  let updateInfo = [empInfo, empId];
  let result = await mariaDB.query('updateInfo', updateInfo); //customer.js

  return result;
};


// 삭제
const removeEmpInfo = async(empId) => {
 let result = await mariaDB.query('deleteInfo', empId);
 return result;
};



module.exports = {
  findAll,
  findByID,
  addEmp,
  modifyEmpInfo,
  removeEmpInfo,
}