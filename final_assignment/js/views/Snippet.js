App.Views.Snippet = Backbone.View.extend({
    tagName: "div",
    className: "code",
    rendered: "",
    initialize: function () {
    },
    render: function(){
        var tpl = getTemplate("snippet");

        var rendered = tpl({
            snippet:this.model.toJSON()
        });

        $("#codes").html($("#codes").html()+rendered);

        //console.log(this.$el.html(template));

        return this;
    }

});