(function () {
    site.init = function () {
        //Model
        var match = new site.models.Match();

        //View
        new site.views.MatchView({el:"#box", model:match});

        //Collections
        var matches = new site.collections.Matches([
            {'atributes' : 'waarde'},
            {'atributes' : 'waarde'}
        ]);

        matches.create({'atributes' : 'waarde'});

        console.log(matches);

    };

    site.$document.on('ready', site.init);
})();
