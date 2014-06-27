App.Views.Snippet = Backbone.View.extend({
    tagName: "div",
    className: "code",
    initialize: function (snippet) {
        console.log(snippet)
    },
    events: {
        'click .remove': 'removeSnippet'
    },
    render: function () {
        //Haal template op van een Snippet
        var tpl = getTemplate("snippet");

        //Render snippet met template en model data
        var rendered = tpl({
            snippet: this.model.toJSON()
        });

        $("#codes").html($("#codes").html() + rendered);

        //console.log(this.$el.html(template));

        return this;
    },
    removeSnippet: function (e) {
        console.log("Remove " + e);
    }

});

$(window).load(function() {
    //console.log($(".remove"));
});
