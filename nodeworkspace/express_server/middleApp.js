// middleApp.js
const express = require('express');
const app = express();
// 미들웨어 등록
const session = require('express-session');
const cors = require('cors');
let sessiontSetting = session({
  secret : 'rhdudtjrhdudtjrhdudtjrhdudtj',
  resave : false,
  saveUninitialized : true,
  cookie : {
    httpOnly : true,
    secure : false,
    maxAge : 60000 //유효기간
  }
})

app.use(sessiontSetting); //세션세팅을 서버에 등록

app.use(express.json());  //어떤 타입으로 데이터를 받을지

// CORS 설정
// 1) 모든 origin과 모든 요청에 응답
//app.use(cors());

// 2) 지정한 요청에 대해서만 응답
const corsOption = {
  origin :'http://192.168.0.29:5500',
  optionSuccessStatus : 200,
}

app.use(cors(corsOption));


app.listen(3000, ()=>{
  console.log('http://localhost:3000');
});

app.post('/login', (req, res)=>{
  const { id, pwd } = req.body;
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save(function(err){   //포인트
    if(err) throw err;
    //res.redirect('/');
  });
});

app.get('/', (req,res)=>{
  res.send(req.session.user);
});

app.get('/logout', (req,res)=>{
  req.session.destroy();
  res.redirect('/');
});