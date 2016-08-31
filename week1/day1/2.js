var console = {log: args => args}

module.exports = function fizzBuzz() {
var fizz = 'fizz'
var buzz = 'buzz'
var fizzbuzz = 'fizzbuzz'

for (x = 1; x < 101; x++) {
	if(x % 3 === 0 && x % 5 !== 0) {
		console.log(fizz)
	} else if (x % 5 === 0 && x % 3 !== 0) {
		console.log(buzz)
	} 
	else if (x % 3 === 0 && x % 5 === 0) {
		console.log(fizzbuzz)
	} else {
		console.log(x)
	}
}
}
