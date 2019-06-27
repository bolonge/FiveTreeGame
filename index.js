var app = require("express")();
var server = require("http").createServer(app);

var io = require("socket.io")(server);

io.path("/js");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, function() {
  console.log("listening on *:3000");
});
