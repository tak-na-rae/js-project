// https://www.npmjs.com/package/express

const express = require('express'); //express 모듈을 가져옴
const app = express(); //app이라는 서버를 만들겠다

const router = express.Router();
app.use(express.json()); //json설정
app.use(express.urlencoded({extended:true}))

app.get('/', function (req, res) { //(get)조회
  res.send('Hello World');
})

router.route("/contact")
.get((req,res)=> {
  res.send("/내용");
} )
.post((req,res)=>{
  console.log(req.body);
  const { name,email } = req.body;
  if(!name || !email){
    return res.send('필수 입력값을 입력해주세요')
  }
  res.send("/내용수정")
} )

router.route('/contact')
  .get( (req, res)=>{
    res.send('/contact내용');
  })
  .post((req, res)=>{
    console.log(req.body);
    res.send("생성된 페이지");
  })
  // .put((req, res) { //(put)수정
  //   res.send(`Contact id가져오기 ${req.params.id}`);
  // })
  // .delete((req, res) { //(delete)삭제
  //   res.send(`파라미터 내용 하나 삭제 ${req.params.id}`);
  // })

router.route('/contact/:id')
  .get((req, res) => {
    res.send(`Contact id가져오기 ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Contact id 수정 ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Contact id 삭제 ${req.params.id}`);
  });



// app.get('/contact/:id', function (req, res) { //(get)조회
//   res.send(`Contact id가져오기 ${req.params.id}`);
// })

// app.put('/contact/:id', function (req, res) { //(put)수정
//   res.send(`Contact id가져오기 ${req.params.id}`);
// })

// app.delete('/contact/:id', function (req, res) { //(delete)삭제
//   res.send(`파라미터 내용 하나 삭제 ${req.params.id}`);
// })

app.listen(3000, ()=>{
  console.log("서버실행중");
} )
app.use(router);
