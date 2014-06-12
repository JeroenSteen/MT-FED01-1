var snippets = [
    {
        name: "Pre example",
        raw: "Text in a pre element is displayed in a fixed-width font, and it preserves both spaces and line breaks",
        langs: ["html"],
		freelance: 0
    },
    {
        name: "Pre example",
        raw: "<?php $name = 'Jeroen'; echo $name;?>",
        langs: ["php"],
		freelance: 1
    },
];

$.get("js/templates/snippet.html", function(template) {
	var result = "<% _.each(snippets, function(snippet) { %> _.template(template, snippet); <% }); %>"; //Template
	console.log(result);
});

