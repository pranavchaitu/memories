/*
function greet(name){
	!name?console.log('\nHi there!'):console.log(`\nHello!\n${name}`);
}
greet('pranav');
greet('kona');
greet('venkat');
greet();

function convertToFahrenheit(celcius){
	fahrenheit = (celcius*9/5)+32;
	return fahrenheit;
}
function convertToCelcius(fahrenheit){
	celcius=(fahrenheit-32)*5/9;
	return celcius;
}

function covertTemperature(degrees,unit){
	if(unit==='C'){
		console.log(`${convertToFahrenheit(degrees)}F`);
	}else if(unit==='F'){
		console.log(`${convertToCelcius(degrees)}C`);
	}
}

covertTemperature(25,'C');
covertTemperature(86,'F');
*/
/*
setTimeout(function(){console.log(1)},2000);
setTimeout(function(){console.log(2)},4000);
setTimeout(function(){console.log(3)},6000);
setTimeout(function(){console.log(4)},8000);
setTimeout(function(){console.log(5)},10000);

for(let i=1;i<100;i++){
	setTimeout(function(){console.log(i)},i*1000);
}
*/
/*
setInterval(function(){
	console.log('pranav');
},500);
*/

/*
let aFunction = param => console.log(param);
aFunction('hi');

let obj = {
	hi(){
		console.log('hello');	
	},
	hello : () => {
		console.log('how are you');
	}
}

obj.hi();
obj.hello();
console.log(obj)

console.log([1,43,-1].filter(value => value>=0));

console.log([1,3,2,1,4,5].map(value => value*2));
*/

let add = () => {
	console.log(2+3);
}

add();
add();

function runTwice(func){
	func();
	func();
}

runTwice(function(){
	console.log('12b');
})

runTwice(add);



