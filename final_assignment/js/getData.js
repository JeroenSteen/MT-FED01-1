var snippets = [
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
];

$.get("js/templates/snippet.html", function(template) {
    //Compile template voor gebruik met Handlebars
    var template = Handlebars.compile(template);

    //String var voor alle rendered templates
    var t = "";

    //Doorloop alle snippets
    for(var key in snippets){
        //Mustache geprobeerd; doet auto html escaping ( bij php :( )
        //var output = Mustache.render(template, snippets[key]);
        //console.log(output);

        //Haal de snippet door template; render save in t
        t = t + template(snippets[key]);
    }

    console.log(t);
    $("#codes").html(t);
});

