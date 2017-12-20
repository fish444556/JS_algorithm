/*
	Curry

	Sample:
	Input1: curry(Math.pow)(2)(10)
	Output1: 1024

	Input2: curry(Math.min, 3)(10)(50)(2)
	Output2: 2
*/

const curry = (fn, arity = fn.length, ...args) =>
	arity <= args.length ?	//???
	fn(...args) :
	curry.bind(null, fn, arity, ...args);
