/*
function ex(arr) {
    return arr.push();
}

console.log(ex([1,4,32,'pranav',false]));
*/

//let arr = [1,4,32,'pranav',false];
//console.log(arr.push());

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);
console.log(fruits.unshift());
console.log(fruits.shift());
console.log("----------------"); 
fruits.unshift('pranav');
console.log(fruits);
console.log(fruits.unshift());
console.log(fruits.shift()); 
*/

let arr = [1,4,2,3];
delete arr[1];
console.log(arr);

//its like push
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter");
console.log(myChildren);