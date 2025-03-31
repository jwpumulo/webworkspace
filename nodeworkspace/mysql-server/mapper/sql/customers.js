// mapper/sql/cutomers.js
// Table : cutomers

const selectAll =
  `SELECT id
       ,name
       ,email
       ,phone
       ,address
FROM customers
ORDER BY id`; //추가 추가


const selectById =
  `SELECT id
       ,name
       ,email
       ,phone
       ,address
FROM customers
WHERE id = ?`; // ?는 다른 값으로 대체된다 


const insertInfo = //values는 1 > 여러개의 값을 가질 수 있게 배열사용
  `INSERT INTO customers(name, email, phone, address)
VALUES (?,?,?,?)`; //배열

// {name: 'H', address = 'daegu'}
// SET name = 'H', address = 'daegu'


const updateInfo =
  `UPDATE customers 
SET ?
WHERE id = ?`; //배열 [ 객체 , 단일 값]


const deleteInfo =
  `DELETE FROM customers
  WHERE id = ?`; //순수하게 아이디 값 전달 받으면 됨



/*
1) ? 갯수
1-1) 1개 : 단일 값
1-2) 2개 이상 : 배열

2) ? 앞에 컬럼의 유무
2-1) 컬럼이 존재하는 경우 기본 데이터 값(문자, 숫자, 날짜 등)
2-2) 컬럼이 없는 경우 객체
*/




module.exports = { //여기 등록되면 프라이빗 > 퍼블릭
  selectAll, // 'selectAll' : selectAll
  selectById,
  insertInfo,
  updateInfo,
  deleteInfo,
}