// npm i express
// npm i cors

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(express.json()); //json 데이터 처리 설정
app.use(cors()); //브라우저 이슈 막기

const models = require("./models/index");

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
app.get('/products', (req, res)=> {
  models.Product.findAll()
  .then((result)=>{
    console.log("prd==", result);
    res.send({
      products: result
    })
  })
  .catch((err)=>{ console.error(err) })
})

app.post('/products', (req, res)=> {
  const prdBody = req.body;
  const {name, imgUrl, price, seller, desc} = prdBody;
  if(!name || !imgUrl || !price || !seller || !desc){
    res.send("모든 필드값을 입력하세요");
  }

  models.Product.create({ //per-server > models > product.js(Product)
    name,price,seller,desc
  })
  .then((result)=>{
    console.log(result)
    res.send({result, })
  })
  .catch((err)=>{
    console.error(err);
    res.send("상품 업로드 실패");
  })

  res.send({body:prdBody});
  // res.send('상품 등록 완료');
})

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
  const {id} = req.params;
  models.Product.findOne({
    where: {
      id: id,
    }
  })
  .then((result)=>{ 
    console.log(result);
    res.send({
      product:result
    })
   })
  .catch((err)=>{
    console.error(err);
    res.send("상품조회에러");
  })
});

// app.get("/products/:id/event/:eventId", (req,res)=>{
//   const params = req.params;
//   const {id, eventId} = params;
//   res.send(`아이디 : ${id}/${eventId}`);
// } )


app.listen(port, ()=>{
  console.log("pet server 정상");
  models.sequelize
  .sync() //db연결
  .then(()=>{
    console.log("DB연결 성공")
  })
  .catch((err)=> {
    console.error(err);
    process.exit();
  } )
} )