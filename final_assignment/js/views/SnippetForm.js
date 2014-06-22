App.Views.SnippetForm = Backbone.View.extend({
    el: "#snippetform",
    initialize: function () {
        console.log(this.$el);
    },
    events: {
        'change select' : 'workToggle',
        'click #add' : 'addSnippet'
    },
    workToggle: function(){
        //Toggle voor het werk formulier

        var workForm = $("#in_opdracht_form");
        var open = false;


        if (workForm.hasClass("dn")) {
            //Verwijder de display none class
            workForm.removeClass("dn"); //Toon
            open = true;
        } else {
            //Voeg de display none class toe
            workForm.addClass("dn"); //Verberg
            open = false;
        }
        open = false;

    },
    addSnippet: function(){
        //Gebruikt klikte op de add knop

        event.preventDefault();

        //Ingevoerde snippet
        var textspace = document.getElementById("textspace").innerHTML;
        //Titel snippet
        var titel = document.getElementById("titel").value;

        //Invoer niet leeg, anders..
        if (textspace != "" && titel != "") {
            //Lijst alle snippets; nieuw element snippet
            var codes = document.getElementById("codes");
            var code_div = document.createElement("div");
            code_div.className = "code"; //Classnaam toevoegen aan snippet

            //Snippet div vullen en toevoegen aan lijst
            code_div.innerHTML = "<span>" + titel + "</span>" + "<pre>" + textspace + "</pre>"; //Vullen
            var btn = document.createElement("button"); //Button
            btn.innerHTML = "Verwijderen"; //Waarde toekennen aan button
            btn.className = "remove";

            code_div.appendChild(btn); //Button toevoegen aan snippet div
            codes.appendChild(code_div); //Toevoegen aan lijst

            addEv(btn, "click", "removeCode");

        } else {
            alert("Invoer is leeg, probeer opnieuw!");
        }

    }
});
