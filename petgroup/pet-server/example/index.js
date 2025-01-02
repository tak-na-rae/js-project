// https://nodejs.org/docs/latest/api/path.html
// ESM : 최신버전


const {user1,user2,user3} = require("./users1");
const hello = require("./hello");

hello(user2);
// hello(user1,user2,user3);