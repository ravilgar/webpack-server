export default class Pet {
	constructor(name = "Rusty"){
		this.name = name;
	}

	roar () {
		alert(this.name + " рычит");
	}
}


