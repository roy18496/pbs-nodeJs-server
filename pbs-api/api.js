const express = require("express");
const bodyparser = require("body-parser");
const routes = require("./routes");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use("/", routes);
// eslint-disable-next-line
server.listen(process.env.PORT || 3001, () => console.log("server is up"));

io.sockets.on("connection", (socket) => {
    // eslint-disable-next-line
    console.log("NOTICE: New user connected");
    socket.on("SEND_BARCODE", (data) => {
        // eslint-disable-next-line
        console.log(data);
    });
  });