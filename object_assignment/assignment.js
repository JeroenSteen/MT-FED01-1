var Transport = function(owner, weigth){
	
	//Object.getOwnPropertyDescriptor
	
	Object.defineProperty(this, "owner",{
		get:function(){
			return owner;
		},
		set:function(owner){
			owner = owner
		},
		enumarable: true
	});
	
	Object.defineProperty(this, "weigth",{
		get:function(){
			return weigth;
		},
		set:function(weigth){
			weigth = weigth;
		},
		enumarable: true
	});
	this.horn = function(){
		console.log("horn");
	}
}

var Car = function(){
	this.owner,
	this.weigth,
	this.licenseplate
}
Car.prototype = new Transport();
Car.prototype.constructor = Car;

var Ship = function(){
	this.owner,
	this.weigth,
	this.cargo
}

var obj = new Ship();
obj.owner = "Nathan";
console.log(obj);

var tr = new Transport("Nathan", "90");
console.log(tr.owner);

//Maak functie aan voor "tr"
Transport.prototype.horn = function(){
	console.log("Horn");
}
tr.horn();
//Overschrijf functie in object, voor instantie
tr.horn = function(){
	console.log("Tuur");
}
tr.horn();
console.log(tr);

console.log(new Car());
