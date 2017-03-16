/*
let x = 12;

let obj = {
	name: "Lilia",
	width: 33,
	height: 400
}

for (let i = 0; i < 5; i++) {
	console.log(i);
}

// alert("fdsfdfsdf");

document.write("it never works");
document.write("it never works");
document.write("it never works");


function Menu (val = 10, {name="Vasya", height, width}, ...rest){
	console.log(name);
	console.log(val);
	console.log(width, height);
	console.log(rest);

}

if (x===12 ){
	function showX(){
		console.log("x = " + x);
	}
	showX(); 
} else {
	x = 12;
	}

Menu (x, obj);

console.log(Menu.name);


let arr = [1, 4, 4, 564];

let showArr = (arr) => {
	arr.forEach (item => {
		console.log(item);
	});
}

showArr(arr);
*/

/*
let x = 12;
let y = "title";

let object = {
	name : "Lilia",
	width: 300,
	height: 343,
	doSmth(){
		console.log("smth");
	}
}


let obj = {
	__proto__: object,
	name: "Rav",
	doDoSmth(){
		super.doSmth();
	}
}

object.doSmth();
obj.doDoSmth();
obj["title"] = "1212";
obj[x+y] = "1212";
console.log(obj);
*/

/*
import Pet, {NewPet} from './classes/pet.js';

let obj = new Pet("Vasya");

obj.roar();

let obj1 = new NewPet("Vasya");

obj1.roar();
*/

// let sym = Symbol("name");

// console.log(sym.toString());

// let sym1 = Symbol.for('name');
// console.log(Symbol.for('name') === sym1);



// let obj = {
// 	name: "dsfa",
// 	age: 13,
// 	[Symbol().for("hide")]:"hide"
// }

// console.log(obj);


/*

let arr = [1,2,3,4,6];

for(let item of "строка"){
	console.log(item);
}



let iterObj = {
	from: 0, 
	to: 10
}

iterObj[Symbol.iterator] = function() {
	let last = this.to;
	let current = this.from;

	return {
		next(){
			if(current <= last){
				return{
					done: false,
					value: current++
				}
			} else {
				return {
					done: true
				}
			}
		}
	}
}

for(let item of iterObj){
	console.log(item);
}
*/

// let map = new Map();

// map.set(1, "number one").set('num', "number two");

// console.log(map.get(1));
// console.log(map.size);
// map.delete(1);

/*
let set = new Set();

var one ="51",
two= '454',
three = '4';

set.add(one).add(two).add(three).add(two).add(one);

console.log(set.size);

let weak = new WeakMap();
*/

// function getDataArray(callback){
// 	let arr = [23,1,43424];

// 	callback(arr);
// }
// getDataArray((arr)=>{
// 	console.log(arr);
// });

function getDataArray(){
	let arr = [23,1,43424];
	resolve(arr);
}

let prom = new Promise((resolve, reject) => {
	let arr = [23,1,43424];
	resolve(arr);
});

console.log(prom);

prom.then((data)=>{
	console.log(data);
},
(sadData) =>{
	console.log(data);
});