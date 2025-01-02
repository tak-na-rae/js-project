const http = require("http");
const server = http.createServer((req, res)=> {
  const {url,method} = req;
  res.setHeader("Content-type", "text/planin");

  if(method === "GET" && url === "/home"){
    res.write("hello home");
    res.end();
  }else if(method === "GET" && url === "/about"){
    res.end("About");
  }else{
    res.end("Not Found");
  }
} ) //서버 만들기


server.listen(3000, ()=> { //서버실행 listen()
  console.log("서버실행");
} )