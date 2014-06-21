//Client		= Naam van de opdrachtgever								(String)
//Company		= Naam van het bedrijf									(String)
//Email			= E-mail adres van opdrachtgever						(String)
//Website		= Webadres van de opdrachtgever, niet perse van project	(String)

var Client = function(client, Company, email, website){
	
	//Properties voor Client variable
	Object.defineProperty(this, "client",{
		get:function(){
			return client;
		},
		set:function(raw){
			client = client;
		},
		enumarable: true
	});
	
	//Properties voor Company variable
	Object.defineProperty(this, "company",{
		get:function(){
			return company;
		},
		set:function(company){
			company = company;
		},
		enumarable: true
	});

	//Properties voor Email variable
	Object.defineProperty(this, "email",{
		get:function(){
			return email;
		},
		set:function(email){
			email = email;
		},
		enumarable: true
	});

	//Properties voor Website variable
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