var console = {log: args => args}

module.exports = function chessboard() {
var a = '#';
var b = ' ';
var c = '';
var counter = 0; 
var size = 8;
var gridSize = size * (size + 1); 


console.log(gridSize) 

for(var x = 0; x < gridSize; x++) {
	counter++;
	if( x % 2 !== 0 && counter !== (size + 1)) {
		c = c + b; 
	} else if ( x % 2 === 0 && counter !== (size + 1)) {
		c = c + a;
	} else if ( x === (gridSize - 1)) {
		break;
	} else {
		c = c + '\n'
		counter = 0;
	}
}
console.log(c)
}
