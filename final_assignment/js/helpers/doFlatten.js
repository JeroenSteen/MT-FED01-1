//Ontvang alle inputs uit formulier
//Maak van array met input objecten
//Enkelvoudig een object met key value's
//Voor gebruik met Backbone.js

function doFlatten(form){

    //Gebruikers input naar Array
    var inputs = form.serializeArray();
    var names = [];
    var values = [];

    //Doorloop alle invoer velden
    $.each(inputs, function (index, value) {
        names.push(value.name);
        values.push(value.value);
    });

    //Maak object met names en values
    var object = _.object(names, values);

    return object;
}