var console = require('./lib/consolelog.js');

module.exports = function triangle() {
var z = y = '#';

for(var x = 0; x < 7; x++) {
	console.log(z)
	z = z + y;
}
}
