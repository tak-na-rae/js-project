const http = require("http");
const server = http.createServer((req, res)=> {
  // console.log("요청==", req);
  res.setHeader("Content-type", "text/planin");
  res.write("hello");
  res.end();
} ) //서버 만들기


server.listen(3000, ()=> { //서버실행 listen()
  console.log("서버실행");
} )