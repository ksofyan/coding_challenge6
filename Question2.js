// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together,
//  give the target number. For example: answer([1,2,3], 4)should return [1,3]


let numArray = [3,5,66,7,23,45,12,1]

const twoSum = (arr, target) => {
	let results = new Array(2);
	let len = arr.length;
	for (let i=0; i<len; i++){
		for(let j=1+1; j<len; j++){
			if (arr[i] + arr[j] === target){
				results[0] = arr[i];
				results[1] = arr[j];
				return results;
			}
		}
	}
	return results;
}

console.log(twoSum(numArray,8));



