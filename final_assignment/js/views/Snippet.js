App.Views.Snippet = Backbone.View.extend({
    el: ".code",
    tagName: "div",
    className: "code",
    collection: App.Collections.Snippets,
    model: App.Models.Snippet,
    initialize: function () {
        console.log("view");
        console.log(this.$el.find(".remove"));

        this.model.on('destroy', this.$el.remove)
    },
    events: {
        //'click button.remove': 'removeSnippet'
    },
    render: function () {
        console.log("render");

        //Haal template op van een Snippet
        var tpl = getTemplate("snippet");

        //Render snippet met template en model data
        var rendered = tpl({
            snippet: this.model.toJSON()
        });
        //console.log(rendered);

        $("#codes").html($("#codes").html() + rendered);
		this.delegateEvents();
		
        //Voor chaining
        return this;
    },
    removeSnippet: function (e) {
        //this.model.destroy();
		//this.$el.remove();

        console.log(this.$el);
    }

});