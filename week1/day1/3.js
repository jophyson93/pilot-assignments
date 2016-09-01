var console = require('./lib/consolelog.js');

module.exports = function chessboard() {
var a = '# ';
var b = ' #';
var c = ''; 
var d = '';
var counter = 1;
var size =8;
for( var x = 0; x < size; x++) {
	if( x % 2 === 0) {
		for( var y = 0; y < (size / 2); y++) {
			c = c + a;
		}
	} else {
		for( var y = 0; y < (size / 2); y++) {
			c = c + b;
		}
	}
	if( x !== (size-1)) {
		c = c + '\n';
	}
}



 // or 

/* 
var a = '# ';
var b = ' #';
var c = ''; 
var size =8;
for( var x = 0; x < size; x++) {
	for( var y = 0; y < (size / 2); y++) {
		if(x % 2 === 0) {
			c = c + a; 
		} else {
			c = c + b;
		}
	}
	if( x !== (size - 1)) {
		c = c + '\n';
	}
}
console.log(c)

*/




console.log(c)
}