export default class Pet {
	constructor(name = "Rusty"){
		this.name = name;
	}

	roar () {
		alert(this.name + " рычит");
	}
}

export let NewPet = class extends Pet {
	constructor(name, id){
		super('Шарик');
	}
}
