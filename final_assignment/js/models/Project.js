//Project		= Naam van het project									(String)
//Website		= Webadres waar het project is terug te vinden			(String)

App.Models.Project = Backbone.Model.extend({
    defaults:{
        client: "Jeroen van der Steen",
        project: "Awesome project",
        website: "www.awesome.nl"
    },
    initialize:function(){ }
});