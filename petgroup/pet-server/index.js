// npm i express
// npm i cors

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
// app.use(cors());
// app.use(express.json()); //json 데이터 처리 설정
// app.use(cors()); //브라우저 이슈 막기
// const models = require("./models/index");

app.use(express.json());//json형식의 데이터 처리할수 있도록 설정하는 코드
app.use(cors({
  origin: ['http://localhost:3000'], //허용하는 출처 목록
  credentials: true
})) //브라우저 이슈 막기위한것



const models = require('./models');
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/"); //질문
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

app.post('/image', upload.single('image'), (req, res) => {
  const file = req.file;
  res.send({
    imgUrl: file.path
  })
})

//=== (Product.jsx) 컴포넌트 고정 데이터
// app.get("/products", (req,res)=>{
//   // res.send('업로드된 상품');
//   res.send({
//     products:[
//       {id:1, name:"고양이 사료1", imgUrl:"/img/cat01.jpg", price:32000, seller:"캣컵"},
//       {id:2, name:"고양이 사료2", imgUrl:"/img/cat02.jpg", price:25000, seller:"캣컵"},
//       {id:3, name:"고양이 사료3", imgUrl:"/img/cat03.jpg", price:28000, seller:"캣컵"},
//       {id:4, name:"고양이 사료4", imgUrl:"/img/cat04.jpg", price:45000, seller:"캣컵"},
//     ]
//   })
// } )

//=== (Product.jsx) 컴포넌트 SQL 연결
app.get('/products', (req, res) => {
  models.Product.findAll()
    .then((result) => {
      console.log("prd==", result);
      res.send({
        products: result
      })
    })
    .catch((err) => { console.error(err) })
})

app.post('/products', (req, res) => {
  const prdBody = req.body;
  const { name, imgUrl, price, seller, desc } = prdBody;
  if (!name || !imgUrl || !price || !seller || !desc) {
    res.send("모든 필드값을 입력하세요");
  }

  models.Product.create({ //per-server > models > product.js(Product)
    name, imgUrl, price, seller, desc
  })
    .then((result) => {
      console.log(result)
      res.send({ result, })
    })
    .catch((err) => {
      console.error(err);
      res.send("상품 업로드 실패");
    })

  res.send({ body: prdBody });
  // res.send('상품 등록 완료');
})

app.use("/upload", express.static("upload"));

//=== (Detail.jsx) 컴포넌트 고정 데이터
// app.get("/detail/:id", (req, res) => {
//   const {id} = req.params;
//   const product = {
//     id: id,
//     name: `고양이 사료${id}`,
//     imgUrl: `/img/cat0${id}.jpg`,
//     price: 30000 + id * 1000,
//     seller: "캣컵"
//   };
//   res.send(product);
// });

//=== (Detail.jsx) 컴포넌트 SQL 연결
app.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  models.Product.findOne({
    where: {
      id: id,
    }
  })
    .then((result) => {
      console.log(result);
      res.send({
        product: result
      })
    })
    .catch((err) => {
      console.error(err);
      res.send("상품조회에러");
    })
});

// app.get("/products/:id/event/:eventId", (req,res)=>{
//   const params = req.params;
//   const {id, eventId} = params;
//   res.send(`아이디 : ${id}/${eventId}`);
// } )



const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const seceretKey = crypto.randomBytes(32).toString("hex");


//회원가입
app.post('/users', async (req, res) => {
  const loginBody = req.body;
  const { user_id, pw, name, phone, email, birth, marketingChecked } = loginBody;
  if (!user_id || !pw || !name || !phone || !email || !birth || !marketingChecked) {
    res.send('모든 필드를 입력해주세요')
  }
  try {
    const existringUser = await models.User.findOne({ where: { user_id } })
    if (existringUser) {
      return res.status(400).send({ success: false, messasge: '이미사용중인 아이디입니다.' })
    }
    const newUser = models.User.create({
      user_id,
      pw,
      name,
      phone,
      email,
      birth,
      marketingChecked
    });
    res.send({ success: true, user: newUser })
  } catch (error) {
    console.error(error)
    res.status(400).send('회원가입실패')
  }

  // models.User.create({
  //   user_id,
  //   pw,
  //   name,
  //   phone,
  //   email,
  //   birth,
  //   marketingChecked
  // }).then((result)=>{
  //   console.log('회원가입성공:', result);
  //   res.send({result, })
  // }).catch((error)=>{
  //   console.error(error)
  //   res.status(400).send('회원가입실패')
  // })
})

//로그인
app.post("/users/login", (req, res) => {
  const loginBody = req.body;
  console.log('loginBody:', loginBody);  // 로그인 요청 본문을 콘솔에 출력합니다.
  const { user_id, pw } = loginBody; //입력값
  // const { user_id: inputUserId, pw: inputPassword } = loginBody; // inputUserId로 이름 변경

  // models.User.findOne({ where: { user_id } })
  //   .then((result) => {
  //     if (result && result.pw === pw) {
  //       const user = { id: result.user_id, username: result.user_id };
  //       const accessToken = jwt.sign(user, secretKey, { expiresIn: '1h' });
  //       res.send({
  //         user: result.user_id,
  //         accessToken: accessToken,
  //       });
  //     } else {
  //       res.status(401).send({ message: '로그인 실패' });
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     res.status(500).send('서버 오류');
  //   });


  models.User.findOne({
    where: {
      user_id: user_id, //(좌)DB : (우)입력값
    }
  })
  .then((result)=>{
    console.log("정보==", result);
    console.log("아이디==", result.user_id, user_id);
    console.log("비밀번호==", result.pw, pw);

    if(result.user_id === user_id && result.pw === pw){
      console.log("로그인 성공");
      const user = {
        id: user_id,
        username: user_id,
      }
      const accessToken = jwt.sign(user, seceretKey, {expiresIn: '1h'});
      return res.send({
        user: result.user_id,
        accessToken: accessToken
       });
    } else{
      console.log("로그인 실패");
      return res.status(401).send({
        user: 'False',
        message: '비밀번호가 틀렸습니다.'
      }); 
    }
  })
  .catch((err)=>{
    console.log(err);
    return res.status(500).send('서버 에러가 발생했습니다.')
  })
})


app.post("/auth", (req, res) => {
  const loginBody = req.body;
  const { accessToken } = loginBody;
  if (!accessToken) {
    console.error("No access token provided.");
    return res.send({ result: false });  // accessToken이 없으면 false 반환
  } else {
    try {
      const decoded = jwt.verify(accessToken, seceretKey);
      if (decoded && decoded.exp > Math.floor(Date.now() / 1000)) { //.exp = 만료시간
        console.log("Token is valid:", decoded);
        return res.send({ result: decoded });
      } else {
        console.error("검증실패 Token expired");
        return res.send({ result: false });
      }
    } catch (err) {
      console.erre(err);
      return res.send({ result: false });
    } //검증실패
  }
})

//중복확인
app.get('/users/check-id', (req, res) => {
  const { user_id } = req.query;
  if (!user_id) {
    return res.status(400).send({ success: false, message: '아이디를 입력해주세요' })
  }
  //데이터베이스에서 아이디 검색
  models.User.findOne({
    where: { user_id },
  }).then((user) => {
    if (user) {
      res.send({ success: false, message: '이미 사용중인 아이디 입니다.' })
    } else {
      res.send({ success: true, message: '사용가능한 아이디 입니다.' })
    }
  }).catch((error) => {
    console.error(error);
    res.send({ success: false, message: '서버 오류가 발생했습니다.' })
  })
})

app.listen(port, () => {
  console.log("pet server 정상");
  models.sequelize
    .sync() //db연결
    .then(() => {
      console.log("DB연결 성공")
    })
    .catch((err) => {
      console.error(err);
      process.exit();
    })
})