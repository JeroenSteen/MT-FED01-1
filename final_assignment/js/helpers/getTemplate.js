function getTemplate(url){
    var compiledTemplate;

    url = "js/templates/"+ url + ".html";

    //Vraag template bestand op!
    $.ajax({
        "url":url,
        "async":false,
        "complete": function(source){
            //Compile template voor gebruik met Handlebars!
            compiledTemplate = Handlebars.compile(source.responseText);
        }
    });

    //Is function check
    if(typeof(compiledTemplate) === "function"){
        return compiledTemplate;
    }

}