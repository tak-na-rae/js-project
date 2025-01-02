const path = require('node:path');

//join = chooooo\jee\young.txt
const fullPath = path.join("cho", "jee", "young.txt"); //2개는 경로, 마지막은 내용
console.log(fullPath);

//dirname (경로만 추출) = cho/jee
const dir = path.dirname(fullPath);
console.log(dir);

//basename (작업파일 이름 추출) = path.js
const file1 = path.basename(__filename);
console.log(`작업파일(basename) : ${file1}`);
console.log(`전체경로 : ${__filename}`);

//확장자 제외
const file2 = path.basename(__filename, ".js");
console.log(`확장자 제외 작업파일 : ${file2}`);

