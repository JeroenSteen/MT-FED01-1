App.Views.Snippets = Backbone.View.extend({
    el: $("#codes"),

    initialize: function () {
        this.render();

        this.$el.css("min-height", "40px");
        this.$el.css("background-color", "grey");

        console.log(this.$el);
    },

    render: function() {
        //Doorloop heel de collectie
        this.collection.each(function(snippet){

            //Maak nieuwe view aan met model snippet
            var snippetView = new App.Views.Snippet({
                model: snippet
            });

            //Voeg item toe aan lijst
            this.$el.append(snippetView.render().el);

        }, this);

        //Voor chaining
        return this;
    }
});