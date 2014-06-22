function doHighlight(el){
    //Hightlight enkel/specifiek element
    if(el != undefined){

        hljs.highlightBlock(el);

    } else {

        //Hightlight alle elementen
        $('pre').each(function(index, element) {
            hljs.highlightBlock(element);
        });

    }



}