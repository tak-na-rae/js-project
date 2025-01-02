// npm i express
// npm i cors

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json()); //json 데이터 처리 설정
app.use(cors()); //브라우저 이슈 막기

app.get('/products', (req, res)=> {
  res.send('업로드된 상품');
})
app.post('/products', (req, res)=> {
  res.send('상품 등록 완료');
})

app.listen(port, ()=>{
  console.log("pet server 정상");
} )