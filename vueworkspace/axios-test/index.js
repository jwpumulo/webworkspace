// index.js
const axios = require('axios'); //모듈 불러오기

// fetch 페치를 쓸 때는 무조건 2번 쓰기
fetch('http://localhost:3000/customers')
  .then(res => res.json()) //첫번째
  .then(result => { // 두번째
    console.log('fetch, GET');
    console.log(`\t`, result);
  })
  .catch(err => console.log(err));

// axios , JSON에 특화, rest 서버에 가장 적합
axios('http://localhost:3000/customers')
  .then(result => {
    console.log('axios, GET');
    console.log(`\t`, result.data);
  })
  .catch(err => console.log(err));

// 단건조회 , 경로가 중요함
axios.get('http://localhost:3000/customers/1') //경로
  .then(result => {
    console.log('axios, 단건조회');
    console.log(`\t`, result.data);
  })
  .catch(err => console.log(err));

// 등록
let insertInfo = {
  name: 'Jennie',
  email: 'Jennie@gmail.com',
  phone: '010-0000-0116',
  address: 'null'
};


// 1) fetch
fetch('http://localhost:3000/customers', //객체방식으로 표시
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(insertInfo),
    })

  .then(res => res.json())
  .then(result => {
    console.log('fetch, POST');
    console.log(`\t`, result);
  })
  .catch(err => console.log(err));



  // 2) axios
  axios.post('http://localhost:3000/customers', insertInfo)
  .then(result => {
    console.log('axios, 등록');
    console.log(`\t`, result.data);
  })
  .catch(err => console.log(err));
