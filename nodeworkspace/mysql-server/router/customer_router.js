// router/customer_router.js
// 라우터 모듈
// 메뉴판 
//라우터는 엔드포인트 제공하는 서비스응답

const express = require('express');
const router = express.Router();
const custService = require('../service/customer_service.js');

// customers 고객에 대해서
// 전체조회 GET + '/customers'
// 메소드 구분 GET POST PUT DELETE
router.get('/customers', async (req, res) => {
  let custList = await custService.findAll();
  res.send(custList);
});
// 단건조회 GET + '/customers/:id' GET 2개 이상이면 충돌나므로 단건은 경로로 넘어옥[] 
router.get('/customers/:id', async (req, res) => {
  let custId = req.params.id;
  let custInfo = await custService.findByID(custId);
  res.send(custInfo);

});
// 등록 POST + '/customers' + JSON 바디를 기반으로 데이터를 받으므로 아무런 제약이 없음
router.post('/customers', async(req, res) => {
  let addCust = req.body;
  let result = await custService.addCustomer(addCust);
  res.send(result);
});

// 수정     : PUT + '/customers/:id' + JSON
router.put('/customers/:id', async (req, res) => {
  let custId = req.params.id;
  let custUpInfo = req.body; //json 영역은 바디에서 가져옴
  let result = await custService.modifyCustomerInfo(custUpInfo, custId ); 
  res.send(result);

});
// 삭제     : DELETE + '/customers/:id'
router.delete('/customers/:id', async(req, res) => { //해당아이디값을 기반으로 삭제
  let custId = req.params.id;
  let result = await custService.removeCustomerInfo(custId);  //통채로 서비스로 넘김
  res.send(result);

});

module.exports = router;