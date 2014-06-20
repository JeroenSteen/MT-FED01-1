site.views.MatchView = Backbone.View.extend({
  tagName:'li',

  events:{
      'click':'clickHandler'
  },

  initialize: function () {
      this.render();
      console.log(this.model.toJSON());
  },

  template: _.template($("#matchTemplate").html()),

  render:function(){
    var t = this.$el.html(this.template(this.model.toJSON()));
    console.log(t);
    return this;
  },

  clickHandler: function(e){
    e.preventDefault();
      console.log("klik");
  }

});
