// multerApp.js

const multer = require('multer');
const path = require('path');
const cors = require('cors');





const express = require('express');
const app = express();
app.use(cors());


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) { //유니크한값, 시간을 기준으로 하는게 좋음
    let savedFile = (new Date()).valueOf() + path.basename(file.originalname);
    cb(null, savedFile); 

  }
});

const upload = multer({
  storage: storage
});

app.listen(5000, () => {
  console.log('Server Startg!!');

});

app.post('/profile', upload.single('avatar'), (req, res) => { //미들, 필드명 아바타
  console.log(req.file);
  console.log(req.body);
});

app.post('/photos', upload.array('photos', 8), (req, res) => { //8개로 갯수 제한 or 용량 제한 
  for (let file of req.files) {
    console.log(file);

  }
})