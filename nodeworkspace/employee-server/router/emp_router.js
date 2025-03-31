// router/employees_router.js
// 라우터 모듈
// 메뉴판 
//라우터는 엔드포인트 제공하는 서비스응답

const express = require('express');
const router = express.Router();
const empService = require('../service/emp_service.js');

// customers 고객에 대해서
// 전체조회 GET + '/customers'
// 메소드 구분 GET POST PUT DELETE
router.get('/employees', async (req, res) => {
  let empList = await empService.findAll();
  res.send(empList);
});
// 단건조회 GET + '/employees/:id' GET 2개 이상이면 충돌나므로 단건은 경로로 넘어옥[] 
router.get('/employees/:id', async (req, res) => {
  let empId = req.params.id;
  let empInfo = await empService.findByID(empId);
  res.send(empInfo);

});
// 등록 POST + '/employees' + JSON 바디를 기반으로 데이터를 받으므로 아무런 제약이 없음
router.post('/employees', async(req, res) => {
  let addEmp = req.body;
  let result = await empService.addEmp(addEmp);
  res.send(result);
});

// 수정     : PUT + '/employees/:id' + JSON
router.put('/employees/:id', async (req, res) => {
  let empId = req.params.id;
  let empUpInfo = req.body; //json 영역은 바디에서 가져옴
  let result = await empService.modifyEmpInfo(empUpInfo, empId ); 
  res.send(result);

});
// 삭제     : DELETE + '/employees/:id'
router.delete('/employees/:id', async(req, res) => { //해당아이디값을 기반으로 삭제
  let empId = req.params.id;
  let result = await empService.removeEmpInfo(empId);  //통채로 서비스로 넘김
  res.send(result);

});

module.exports = router;