(function(){
    App.init = function (){
        //Maak model aan; Snippet
        var Snippet = new App.Models.Snippet();

        //Maak van Snippet data Collection; Snippets
        App.Collections.Snippets = new App.Collections.Snippets([
            {
                title: "Pre example",
                raw: "Text in a pre element\n is displayed in a fixed-width\n font, and it preserves\n both      spaces and\n line breaks",
                langs: "html",
                freelance: 0
            },
            {
                title: "Php echo",
                raw: "<?php $name = 'Jeroen'; echo $name;?>",
                langs: "php",
                freelance: 1
            }
        ]);

        var snippets = App.Collections.Snippets;

        //Maak view aan voor alle snippets
        new App.Views.Snippets({model:Snippet,collection:snippets});

        //Maak formulier voor toevoegen snippets
        new App.Views.SnippetForm({model:Snippet,collection:snippets});


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

