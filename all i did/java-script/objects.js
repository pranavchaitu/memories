
let obj1 = {
	name : 'pranav',
	price : 18
}
let obj2 = {
	name : 'pranav',
	price : 18
}

function isSameProduct(product1,product2){
	if(product1.name===product2.name){
		if(product1.price===product2.price){
			return true;
		}
	}
	return false;
}
console.log(isSameProduct(obj1,obj2));
let myString ='PRANAV'
let lowerCase = myString.toLowerCase();
console.log(lowerCase.repeat(2));
