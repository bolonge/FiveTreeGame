var express = require("express");
var app = express();
var path = require("path");
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var port = process.env.PORT || 3000;

// Routing
app.use(express.static(path.join(__dirname, "public")));

var numUsers = 0;

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});
