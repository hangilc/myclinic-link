var dgram = require("dgram");
var server = dgram.createSocket("udp4");

var SERVER_PORT = 62000;

server.on("error", function(err){
	console.log("server error", err);
	server.close();
});

server.on("listening", function(){
	var address = server.address();
	console.log("server listening to", address.address, ":", address.port);
});

server.on("message", function(msg, remote){
	console.log("message from", remote.address, ":", remote.port, msg);
});

server.bind(SERVER_PORT);


