(function(){
	console.log("view");

	//Init
	window.app = {};
	app.$document = $(document);
	app.events = {};
	app.events = _.clone(Backbone.Events);
	
	//Objects
	app.views.box = Backbone.View.extend({
		events: {
			"click": "aaa",
		},
		initialize: function() {
			console.log("initialize");
			//this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			console.log("render");
		},
		changeColor: function(){
			
			console.log("open");
		}
	});
	
	//Main
	app.init = function () {
		//new app.views.open({el: ".open"});
		
		var settings = new app.models.settings;
		new app.views.box({el: ".box", model: settings});
		
		console.log(app.views.box);
	};
	console.log(app.$document);
	app.$document.ready(app.init);
	
})();