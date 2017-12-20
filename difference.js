/*
	Return the the first array's values which are not inside in the second array
	Input1: Array
	Input2: Array
	Output: Array

	Input1: [1,2,3,4,5]
	Input2: [1,3,3,5]
	Output: [2,4]
*/


const diff = (arr1, arr2) => {
	const uniqueArr2 = new Set(arr2);
	return arr1.filter(i => !uniqueArr2.has(i))
}

const diff2 = (arr1, arr2) => arr1.filter(i => !(new Set(arr2)).has(i))
