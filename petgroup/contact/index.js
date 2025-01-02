// https://www.npmjs.com/package/express

const express = require('express'); //express 모듈을 가져옴
const app = express(); //app이라는 서버를 만들겠다

app.get('/', function (req, res) { //(get)조회
  res.send('Hello World');
})

app.get('/contact', function (req, res) { //(get)조회
  res.send('Contact');
})

app.get('/contact/:id', function (req, res) { //(get)조회
  res.send(`Contact id가져오기 ${req.params.id}`);
})

app.post("/contact",(req,res)=>{ //(post)전송 및 데이터생성
  res.send("생성된 페이지");
} )

app.put('/contact/:id', function (req, res) { //(put)수정
  res.send(`Contact id가져오기 ${req.params.id}`);
})

app.delete('/contact/:id', function (req, res) { //(delete)삭제
  res.send(`파라미터 내용 하나 삭제 ${req.params.id}`);
})

app.listen(3000, ()=>{
  console.log("서버실행중");
} )