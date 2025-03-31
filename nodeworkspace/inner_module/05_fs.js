// inner_modul/05_fs.js 에러가 발생하면 매개변수가 넘어옴 비동기

const fs = require('fs');

const data = 'Hello, World!';

fs.writeFile('./sample.txt', data, 'latin1',
  (err) => {
    if (err) {
      throw err;
    }
    console.log('파일쓰기 완료!');
  });





fs.readFile('./sample.txt', 'latin1', (err, result) => {  // 비동기작업 writeFile, readFile 동시에 진행
  if (err) throw err;
  console.log(result);
});