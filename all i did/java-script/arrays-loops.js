/*
let list = [5,6,7,7,7,7,7];
let doubleList= [];
for (let i=0; i< list.length; i++){
	const num = list[i];
	doubleList.push(num*2);
}
console.log(doubleList);

let anArray = [1,2,3];
const [firstValue] = anArray;
console.log(firstValue);

let anotherArray = ['pranav','c',6];
const [first,second] = anotherArray;
console.log(first);
console.log(second);
*/
/*
const nums = [10,20,30];
console.log(nums);
nums[2]= 40;
console.log(nums);

function getLastValue(array){
	let lastIndex = array[array.length-1];
	return lastIndex;
}

console.log(getLastValue([1,20,22,44,56,77]));
console.log(getLastValue(['hi','hello','good']));

let array = [];
for(let i=5;i>=0;i--){
	if(i%2===0){
		array.push(i);
	}
}
console.log(array);


let i=5;
while(i>0){
		console.log(i);
	i++;
}

let i=5;
while(i>=0){
	console.log(i);
	i--;
}
*/

/*
function arraySwap(array){
	let temp = '';
	temp=array[0];
	array[0]=array[array.length-1];
	array[array.length-1]=temp;
	return array;
}

console.log(arraySwap([1,4,3,5,6]));
console.log(arraySwap(['hi','hello']));
*/
//"strict mode";

/*
function addNum(oldArray,num){
	newArray = [];
	for(let i=0;i<oldArray.length;i++){
		value = oldArray[i]+num;
		newArray.push(value);
	}
	return newArray;
}
console.log(addNum([1,2,3,-2,0,99],2))

function addArrays(arr1,arr2){
	let arr3 = [];
	for(let i=0;i<arr1.length;i++){
		value = arr1[i]+arr2[i];
		arr3.push(value);
	}
	return arr3;
}

console.log(addArrays([1,4,3,2],[2,5,3,2]));
console.log(addArrays([1,1,2,4],[1,1,3]));
*/

/*
function countPositive(nums){
	let count = '';
	for(let i=0;i<nums.length;i++){
		if(nums[i]>0){
			count++;
		}
	}
	return count;
}

console.log(countPositive([1,5,4,-1,-2,5]));
*/
/*
let cont = {
	min: '',
	max : ''
};
function minMax(arr){
	for(let i=0;i<arr.length;i++){
		if(arr[i]<arr[i+1]){
			cont.min = arr[i];
			cont.max = arr[i+1];
		}else if(arr[i]>arr[i+1]){
			cont.min = arr[i+1];
			cont.max = arr[i];
		}
	}
	return cont;
}
*/

/*
function minMax(arr){
	let cont = {
		min : null,
		max : null
	}
	for(let i=0;i<arr.length;i++){
		let value = arr[i];
		if(cont.min===null || value<cont.min){
			cont.min = value;
		}
		if(cont.max===null || value>cont.max){
			cont.max = value;
		}
	}
	return cont;
}
console.log(minMax([3,5,6]));
*/
/*
function countWords(words) {
	const result = {};

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		// result[word] adds/accesses a property using whatever is
		// saved inside the 'word' variable.
		// If word = 'apple', result[word] will do result['apple']
		// If word = 'grape', result[word] will do result['grape']
		if (!result[word]) {
			result[word] = 1;
		} else {
			result[word]++;
		}
	}

	return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple','mango']));
*/
/*
let obj={
	height : 180,
	weight : 60
};
let x = 'height';
console.log(obj[x])
*/

/*
function countWords(arr){
	let obj = {};
	for(let i=0;i<arr.length;i++){
		let word = arr[i];
		if(obj[word]){
			obj[word]++;
		}
		else{
			obj[word]=1;
		}
	}
	return obj;
}
console.log(countWords(['apple', 'grape', 'apple', 'apple','mango']));

let arrStr = ['search','search','x','y','z'];
for(let i=0;i<arrStr.length;i++){
	value = arrStr[i];
	if(value==='search'){
		console.log(i);
		break;
	}
	console.log(-1);
}

function findIndex(arr,word){
	for(let i=0;i<arr.length;i++){
		value = arr[i];
		if(value===word){
			return i;
		}
	}
	return -1;
}
console.log(findIndex(['green','red','yellow','red','blue'],'red'));

function removeEgg(foods){
	let result = []
	let eggCount = 0;
	for (i in foods){
		if(foods[i]==='egg' && eggCount<2){
			eggCount++;
			continue;
		}else{
			result.push(foods[i])
		}
	}
	return result;
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));

function backEgg(foods){
	let revFoods = foods.reverse();
	let result = [];
	let eggCount = 0;
	for(let i in revFoods){
		if(revFoods[i]==='egg' && eggCount<2){
			eggCount++;
			continue;
		}
		result.push(revFoods[i]);
	}
	return result.reverse();
}

console.log(backEgg(foods));

//let arr = [1,23,44];
//arr2 = arr.reverse();
//console.log(arr2);
//console.log(arr);

function copyArr(foods){
	let revFoods = foods.slice().reverse();
	result = [];
	eggCount = 0;
	for(let i in revFoods){
		if(foods[i]==='egg' && eggCount<2){
			eggCount++;
			continue;
		}
		result.push(foods[i]);
	}
	return result.reverse();
}

console.log(copyArr(foods));
*/
/*
let arr=[];
for(let i=1;i<21;i++){
	if(i%3===0&&i%5===0){
		arr.push('FizzBuzz');
		continue;
	}
	if(i%3===0){
		arr.push('Fizz');
		continue;
	}
	if(i%5===0){
		arr.push('Buzz');
		continue;
	}
	arr.push(i)
}
console.log(arr);

for (let i = 1; i <= 20; i++) {
	// The trick to this problem is to check if
	// the number is divisible by 3 and 5 first.
	// Otherwise, it will always display 'Fizz'.
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	}
	if (i % 3 === 0) {
		console.log('Fizz');
	}
	if (i % 5 === 0) {
		console.log('Buzz');
	}
	console.log(i);
}
*/

function findIndex(arr,word){
	for(i in arr){
		if(arr[i]===word){
			return i;
		}
	}
	return -1;
}

let arrEx = ['hi','hi','red','red']
console.log(findIndex(arrEx,'red'));

function unique(array){
	let result = [];
	for(let i in array){
		if(findIndex(result,array[i])===-1){
			result.push(array[i]);
		}
	}
	return result;
}
console.log(unique(arrEx));

function reverseArr(array){
	let result = [];
	for(let i=array.length-1;i>-1;i--){
		result.push(array[i]);
	}
	return result;
}

console.log(reverseArr([4,3,2,6,7]));

//single - line reverse function
let reverse = (arr) => arr.reverse();
console.log(reverse([1,4,3,25,6,7,8]));