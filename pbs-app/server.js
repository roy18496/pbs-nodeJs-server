var express = require("express");
var app = express();
var server = require("http").createServer(app);

app.use(express.static("app"));
server.listen(process.env.PORT || 3000, ()=> console.log("server is up"));