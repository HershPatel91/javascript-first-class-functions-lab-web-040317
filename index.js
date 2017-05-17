function countdown(callback){
	setTimeout( () => callback(), 2000)
}

function createMultiplier (n) {
	return function (val) {
		return n * val
	}
}

var doubler = createMultiplier(2) 

var tripler = createMultiplier(3) 

function multiplier (n, x) {
	return n * x
}

var doublerWithBind = multiplier.bind(null,2)
var triplerWithBind = multiplier.bind(null,3)