var dgram = require("dgram");

var SERVER_PORT = 62000;

function notify(msg){
	var socket = dgram.createSocket("udp4");
	socket.send(msg, 0, msg.length, SERVER_PORT, "localhost", function(err){
		if( err ){
			console.log("ERROR:", err);
		}
		socket.close();
	});
}

function inquire(msg){
	var socket = dgram.createSocket("udp4");
	socket.on("listening", function(){
		socket.setBroadcast(true);
	});
	socket.send(msg, 0, msg.length, SERVER_PORT, "192.168.11.255", function(err){
		if( err ){
			console.log("ERROR:", err);
		}
	});
}

inquire("where is server?");


