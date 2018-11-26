// Question 1: 
//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
// should return [[1,2], ["2", "3"]]

//Arrays of numbeer
let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let arr1 = arr.sort((a,b) => a-b);

let emptyArray =[];
let resultArray = [];

arr1.forEach(function (value, i) {
    if (value === arr1[i + 1]) {
        emptyArray.push(value);

    } else if (value === arr1[i - 1]){
    	emptyArray.push(value);
    	resultArray.push(emptyArray);
    	emptyArray = [];
    } else {
    	resultArray.push(value);
    };
});

console.log(resultArray);

// BONUS  


var input = [1, 2, "2", 4, 591, "10", "591", 392, 391, 2, 5, 10, 2, 1, "10",1, 1, "15", 20, 20];

var stringArray = input.filter(value =>{
	return typeof value === "string";
})

var numberArray = input.filter(value =>{
	return typeof value === "number";
})

var stringSorted = stringArray.sort((a,b) => a-b);
var numberSorted = numberArray.sort((a,b) => a-b);

let answer = [stringArray, numberArray]

console.log(answer);

