App.Collections.Snippets = Backbone.Collection.extend({
    //model: App.Models.Snippet,
    initialize: function(){
        console.log("new");

        this.bind("add", function(model){
            console.log("add");

            //console.log(model.toJSON()); //this.model = model;

            var SnippetView = new App.Views.Snippet({
                model: model
            });

            //console.log(SnippetView.model);

            SnippetView.render();

        });

    }
});