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


import Pet, {NewPet} from './classes/pet.js';

let obj = new Pet("Vasya");

obj.roar();

let obj1 = new NewPet("Vasya");

obj1.roar();