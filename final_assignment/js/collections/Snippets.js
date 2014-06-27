App.Collections.Snippets = Backbone.Collection.extend({
    model: App.Models.Snippet,
    initialize: function(){
    },
    on: {
        'add': function(){
            console.log("Add");
        }
    }

});