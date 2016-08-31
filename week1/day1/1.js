var console = {log: args => args}

module.exports = function triangle() {
var z = y = '#';

for(var x = 0; x < 7; x++) {
	console.log(z)
	z = z + y;
}
}
