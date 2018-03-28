// when user draws,                   send position to network
// when we get position from network, draw it on screen

console.log("sketch.js", process.argv);

var osc = require('node-osc');

var client;
// var client = new osc.Client('127.0.0.1', 3333);
var oscServer = new osc.Server(3333, '0.0.0.0');

var remoteColor = "white";
var x = undefined;
var y = undefined;

oscServer.on("message", function (msg, rinfo) {
  // runs whenever we get message from the network
  console.log(msg);
  if(msg[0] == "/brush-x") {
    x = msg[1];
    if(y != undefined) {
      ellipse(x, y, 10);
      x = undefined;
      y = undefined;
    }
    
  } else if(msg[0] == "/brush-y") {
    y = msg[1];
    if(x != undefined) {
      ellipse(x, y, 10);
      x = undefined;
      y = undefined;
    }
  }
  
  // not the protocol
  // if(msg[0] == "/brush") {
  //   var x = msg[1];
  //   var y = msg[2];
  //   ellipse(x, y, 10);
  // }
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10)
  stroke(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function mouseDragged() {
  // user drew something
  // send position to network here
  if(client != undefined) {
    client.send('/brush-x', mouseX);
    client.send('/brush-y', mouseY);
  }
  // not the protocol
  // client.send('/brush', mouseX, mouseY);

  line(mouseX, mouseY, pmouseX, pmouseY)
  return false;
}

function draw() {
  
}