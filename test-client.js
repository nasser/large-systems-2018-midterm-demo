var osc = require('node-osc');

var client = new osc.Client('149.31.122.172', 1234);

// /1/xy
// /1/fader1
// /1/fader2
// /1/fader3

// client.send("/1/fader1", 100);
var i = 0;
setInterval(function() {
  client.send("/1/fader1", i);
  i += 1;
}, 100);

// client.send("/brush-y", 10);

// not the protocol
// client.send("/brush", 200, 200);
