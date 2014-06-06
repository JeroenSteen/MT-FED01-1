//Self envoking
(function (){
	
	app.init = function(){
		new app.views.block(document.getElementById("box"));
		new app.views.click(document.getElementById("button"));
		
		console.log("Main");
	};
	
	
})();