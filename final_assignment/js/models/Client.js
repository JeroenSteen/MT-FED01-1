//Client		= Naam van de opdrachtgever								(String)
//Company		= Naam van het bedrijf									(String)
//Email			= E-mail adres van opdrachtgever						(String)
//Website		= Webadres van de opdrachtgever, niet perse van project	(String)


App.Models.Client = Backbone.Model.extend({
    defaults:{
        client: "Jeroen van der Steen",
        company: "Groothandel van der Steen",
        email: "info@jeroensteen.nl",
        website: "www.jeroensteen.nl"
    },
    initialize:function(){ }
});