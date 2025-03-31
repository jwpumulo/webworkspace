// app.js
const express = require('express');
const app = express();



app.listen(5000, () => {
  console.log('Server Start!');
  console.log('http://localhost:5000'); //프로토콜 고정
});

/*
  content-type       | express
  GET + QueryString  | request.query
  POST + QueryString | request.body
  JSON               | request.body
  경로에 값을 전달   | requset.params
*/

//미들웨어 등록 
//서버 등록할 때 아래 2가지는 필수!!!!!!!!!!!
// application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: false
}));
// application/json  기본세팅은 이걸로
app.use(express.json());

const empRouter = require('./router/emp_routes.js');
app.use('/', empRouter);


// Error handler
app.use(function (err, req, res, next) {
  res.staus(500).json({
    statusCode: res.statusCode,
    errMessage: err.message

    // res.status(500).sendFile('error.html');
  });


});

app.get('/error', (req, res, next) => {
  next(new Error('Process Fail! Check Data!'));
});





//정적파일 (css, html, js, image등) 처리
//app.use(express.static('./fruits')); //같은 경로에 있는 폴더 http://localhost:5000/apple.jpg 폴더명은 루트가 됨
app.use('/img', express.static('./fruits'));