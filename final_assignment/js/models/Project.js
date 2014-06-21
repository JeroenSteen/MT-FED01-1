//Project		= Naam van het project									(String)
//Website		= Webadres waar het project is terug te vinden			(String)

var Client = function(client, project, website){
	
	//Properties voor Langs variable
	Object.defineProperty(this, "project",{
		get:function(){
			return project;
		},
		set:function(langs){
			project = project;
		},
		enumarable: true
	});

	//Properties voor Langs variable
	Object.defineProperty(this, "website",{
		get:function(){
			return website;
		},
		set:function(website){
			website = website;
		},
		enumarable: true
	});
	
}