/*
	Fibonacci Generator
	Input: Integer
	Output: Array

	Sample:
	Input: 5
	Output: [0,1,1,2,3]

*/

const fibonacci = num =>
					Array(num)
					.fill(0)
					.reduce((acc, cur, idx) =>
						acc.concat(idx > 1 ? acc[idx - 1] + acc[idx - 2] : idx), []);