var express = require("express");
var bodyparser = require("body-parser");
var connection = require("./connectiondb");
var routes = require("./routes");

var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use("/", routes);
server.listen(process.env.PORT || 3001, ()=> console.log("server is up"));

io.sockets.on("connection", function (socket) {
	
    console.log("NOTICE: New user connected");
    socket.on("SEND_BARCODE", function(data){
        console.log(data);
    })
    
  }); 