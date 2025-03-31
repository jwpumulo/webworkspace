// router/emp_routers.js
const express =require('express');
const router = express.Router();
const {query} = require('../mapper/emp-map.js');  //중괄호는 객체 구조분해할당 ctrl눌렀을 때 가장 마지막

// REST API
// 전체조회 : GET + '/emps'
router.get('/emps', (req, res)=>{ // end point
  let list = query('SELECT'); // 서비스
  res.send(list); // 응답형태
});// 경로를 설정하는 첫번째 매개변수


// 단건조회 : GET + '/emps/100' 조건은 100건
router.get('/emps/:empId',(req, res)=>{ //:콜론은 저위치에 있는 값을 받는 변수
  let searchId = req.params.empId;
  let info = query('SELECT', null, { id : searchId });
  res.send(info[0]); //배열
});

// 등록 : POST + '/emps' + JSON
router.post('/emps', (req,res)=>{ //get>post 변경 부메
  let addInfo = req.body;
  query('INSERT', addInfo);
  res.send({'result' : 'success'});
});


// 수정: PUT + '/emps/100' + JSON 
// 수정은 두가지가 동시에 동작, 경로에 값이넘어가고 동시에 바디에도
router.put('/emps/:eId', (req,res)=>{
  let searchId = req.params.eId;
  let updateInfo = req.body;
  query('UPDATE', updateInfo, { id : searchId});
  res.send({'reuslt' : 'success', 'id' : searchId});
});

// 삭제 : DELETE + '/emps/100' 단건조회와 비슷
router.delete('/emps/:empId',(req,res)=>{
  let searchId = req.params.empId;
  query('DELETE', null, {id : searchId});
  res.status(204).send('Completed');
});

module.exports = router;