/*
	Flatten the array
	Input: Array
	Output: Array

	Input: [1,2,3,4,[5,6,4,[7,8,9]]]
	Output: [1,2,3,4,5,6,4,7,8,9]
*/

const flatten = arr => arr.reduce((acc, cur) =>
						acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);