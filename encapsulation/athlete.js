//Constructor
var createAthlete = function(name){
	//Array
	var athletes = [];

	//call > this, meerdere objecten
	[0,1,2,3].forEach.call(athletes, function(element,index,array){
		console.log(index);
	});
	
	//Object literal
	var athlete = {}; 
	
	Object.defineProperties(athlete, {
		//_name = Data property
		_name:{
			value : "Jeroen",
			writable: true,
			enumarable: true
		},
		//Property
		name: {
			get : function (){
				return this._name;
			},
			set: function (value) {
				this._name = value;
			}
			
		}
	});
	return athlete;
};




