/*
var inputs = this.$el.serializeArray();
var amount = inputs.length;
console.log(amount);

var flatten = "{";
$.each(inputs, function(index, value){
    flatten = flatten+"'"+value["name"]+"': ";

    if(index+1 == amount){
        flatten = flatten+"'"+value["value"]+"'";
    } else {
        flatten = flatten+"'"+value["value"]+"',";
    }

});
//var flatten = flatten.replace("'", "\"");
flatten = flatten+"}";
*/