// mapper/mapper.js
const mariaDB = require('mariadb/callback');
const sqlList = require('./sql/employees.js');

const connectionPool = mariaDB.createPool({ //**db에 접속하기 위한 정보**
  // 필수
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,

  connectionLimit: process.env.DB_LIMIT,

  // 선택
  permitSetMultiParamEntries: true,
  insertIdAsNumber: true,
  bigIntAsNumber: true,
  logger: {
    query: (msg) => console.log(msg),
    error: (err) => console.log(err),
  }
});

let testSql = `SELECT * FROM employees`;

const query = (alias, values) => {
  return new Promise((resolve, reject) => {
      let executeSql = sqlList[alias]; //sqlList['selectAll']
      console.log(`sql : ${executeSql}`);
      connectionPool.query(executeSql, values, (err, result) => {
        if (err) {
          reject({
            err
          });
        } else {
          resolve(result);
        }
      });
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

module.exports = {
  query,
}