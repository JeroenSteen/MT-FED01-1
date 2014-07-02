App.Views.SnippetForm = Backbone.View.extend({
    el: "#snippetform",
    initialize: function () {
    },
    events: {
        'change select' : 'workToggle',
        'submit' : 'addSnippet'
    },
    workToggle: function(){
        //Toggle voor het werk formulier

        var workForm = $("#in_opdracht_form");
        var open = false;

        if (workForm.hasClass("dn")) {
            //Verwijder de display none class
            workForm.removeClass("dn"); //Toon
            open = true;
        } else {
            //Voeg de display none class toe
            workForm.addClass("dn"); //Verberg
            open = false;
        }
        open = false;

    },
    addSnippet: function(event){
        //Gebruiker klikte op Add knop
        event.preventDefault();

        //Maak van alle invoer object
        input = doFlatten(this.$el);
        if(input.langs == ""){
            //input.langs = App.Models.Snippet.defaults.langs; / Undefined op defaults :S
            input.langs = "php, js";
        }

        var SnippetModel = new App.Models.Snippet( input );
        //console.log(SnippetModel);

        //Maak nieuwe view aan voor Snippet
        //var SnippetView = new App.Views.Snippet({
        //    model: SnippetModel
        //});

        //Maak met input nieuwe Snippet aan; add aan Collectie
        this.collection.add(SnippetModel);

        //snippetView.render();
        //this.$el.append(snippetView.render().el);

        doHighlight();
    }
});
