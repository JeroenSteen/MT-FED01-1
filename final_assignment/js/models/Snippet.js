//Name		= Naam van de snippet									(String)
//Raw		= Volledige code snippet met format; tabs ect.			(String)
//Langs		= Programmeertalen die gebruikt zijn bij snippet		(Array)
//Freelance	= Freelance oftewel vrij werk of in opdracht gemaakt	(Boolean)	

//name, raw, langs, freelance
App.Models.Snippet = Backbone.Model.extend({

    defaults:{
        name: "Nameless Snippet",
        raw: "<code>I am RAW!</code>",
        langs: "php, js",
        freelance: 0

    },
    initialize:function(){
    }

	/*
	//Properties voor Name variable
	Object.defineProperty(this, "name",{
		get:function(){
			return name;
		},
		set:function(name){
			name = name;
		},
		enumarable: true
	});
	
	
	//Properties voor Raw variable
	Object.defineProperty(this, "raw",{
		get:function(){
			return raw;
		},
		set:function(raw){
			raw = raw;
		},
		enumarable: true
	});
	
	//Properties voor Langs variable
	Object.defineProperty(this, "langs",{
		get:function(){
			return langs;
		},
		set:function(langs){
			langs = langs;
		},
		enumarable: true
	});

	//Properties voor Langs variable
	Object.defineProperty(this, "freelance",{
		get:function(){
			return freelance;
		},
		set:function(freelance){
			freelance = freelance;
		},
		enumarable: true
	});
     ,*/


});