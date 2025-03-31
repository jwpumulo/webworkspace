// app.js
require('dotenv').config({path : './mapper/dbConfig.env'});
//console.log(process.env); //노드가 가지고 있는 내장 모듈 중에 하나
const express = require('express');
const app = express();
const empRouter = require('./router/emp_router.js'); // 아래 use 메서드 기반으로 앱에 등록해주기

// 미들웨어
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}));
// application/json
app.use(express.json());

app.listen(3000, ()=>{
  console.log('Server Start');
  console.log('http://localhost:3000');
});

//라우팅 기본적으로 등록하는게 좋음
app.get('/', (req, res)=>{
  res.send('Welcome!!');
});

app.use('/', empRouter); 