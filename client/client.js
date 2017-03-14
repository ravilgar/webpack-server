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