(function(){
    App.init = function (){

        var Snippet = new App.Models.Snippet();

        var snippets = new App.Collections.Snippets([
            {
                title: "Pre example",
                raw: "Text in a pre element\n is displayed in a fixed-width\n font, and it preserves\n both      spaces and\n line breaks",
                langs: ["html"],
                freelance: 0
            },
            {
                title: "Php echo",
                raw: "<?php $name = 'Jeroen'; echo $name;?>",
                langs: ["php"],
                freelance: 1
            }
        ]);

        $.get("js/templates/snippet.html", function(template) {
            //Compile template voor gebruik met Handlebars
            snippetTemplate = Handlebars.compile(template);

            //View voor enkele snippet
            new App.Views.Snippet({
                model:Snippet,
                t:snippetTemplate
            });

            //View voor alle snippets
            new App.Views.Snippets({collection:snippets})
        });

        //Formulier voor toevoegen snippets
        new App.Views.SnippetForm();


        //String var voor alle rendered templates //var t = "";
        //Doorloop alle snippets
        /*for(var key in snippets){
         //Mustache geprobeerd; doet auto html escaping ( bij php :( )
         //var output = Mustache.render(template, snippets[key]);

         //Haal de snippet door template; render save in t
         t = t + template(snippets[key]);
         }
         snippetEl = $("#codes").html(t);*/

    };


    App.$document.on('ready', App.init);

})();

