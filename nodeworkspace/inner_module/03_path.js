// inner_module/03_path.js
//전역변수, 절대경로

console.log(__filename);
console.log(__dirname);

const path = require('path');

console.log('폴더정보', path.dirname(__filename));
console.log('실제 파일명: %s', path.basename(__filename));
console.log('확장자', path.extname(__filename));

// 경로가 생각보다 중요함!
// 경로에 따라서 어떤 모듈, 라이브러리를 사용하는지 알아둬야함


