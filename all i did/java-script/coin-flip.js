const randomNumber=Math.random();
let result='';
let randomNumber2=Math.random();
randomNumber < 0.5 ? result=`heads` : result=`tails`;
randomNumber2 < 0.5 ? guess=`heads` : guess=`tails`;
if(guess===result){
	console.log(`You Won!`);
}else{
	console.log(`You Lose!`);
}
console.log(randomNumber2);
console.log(randomNumber);