/*
	Return the unique values from an array
	Input: Array
	Output: Array

	Sample:
	Input: [1,2,3,4,4,5,6,5,7]
	Output: [1,2,3,6,7]
*/

const unique = arr => arr.filter((i => arr.indexOf(i) === arr.lastIndexOf(i)));