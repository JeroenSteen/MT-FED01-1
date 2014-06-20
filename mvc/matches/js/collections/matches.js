site.collections.matches = Backbone.collections.extend({
    model: Match,
    url: "http://docent.cmi.hr.nl/moora/imp03/api/wedstrijden",

    initialize: function(){
        this.fetch({
            success: this.fetchSucces,
            error: this.fetchError
        })
    },

    fetchSucces: function (response){
        console.log(response);
    }
});
