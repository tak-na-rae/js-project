// https://nodejs.org/docs/latest/api/fs.html#fsclosefd-callback

//=== const type
const files = require("fs");
// files.readdir("./", (err,files) => { //전체 파일리스트
//   if(err){ console.log(err) }
//   else { console.log(files) }
// });

files.readFile("./example.txt", "utf8" ,(err,data) =>{ //인코딩(utf-8)
  // if(err){ console.log(err) }
  // else{ console.log(data) }

  files.writeFile("./test.txt", data, (err) => {
    if(err){ console.log(err) }
    console.log(data);
    console.log("test.txt 성공");
  } )
} );




//=== import type
// import { readFile } from "node:fs"
// readFile("./example.txt", "utf8" ,(err,data) =>{
//   if(err){ console.log(err) }
//   else{ console.log(data) }
// } );