// service/customer_service.js 기능, 메인!!!
const mariaDB = require('../mapper/mapper.js');


// 전체조회
const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
};


// 단건조회
const findByID = async (custId) => { //await+async
  let info = (await mariaDB.query('selectById', custId))[0]; //비동기작업 괄호는 우선수위
  return info;
};


// 등록
const addCustomer = async (custInfo) => { // 객체
  let columnlist = ['name', 'email', 'phone', 'address']; //별도로 배열로 만듬
  let addInfo = converterAray(custInfo, columnlist);
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
const modifyCustomerInfo = async (custInfo, custId) => { //경로에서 아이디, 바디에서 내용
  let updateInfo = [custInfo, custId];
  let result = await mariaDB.query('updateInfo', updateInfo); //customer.js

  return result;
};


// 삭제
const removeCustomerInfo = async(custId) => {
 let result = await mariaDB.query('deleteInfo', custId);
 return result;
};



module.exports = {
  findAll,
  findByID,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo,
}