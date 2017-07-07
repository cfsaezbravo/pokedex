$(document).ready(function($){
        $.ajax({
            url: 'http://pokeapi.co/api/v2/pokemon/',
            type: 'GET',
            datatype: 'json',
            data: {
                limit : '719'
            },
        })
        .done(function(response) {
            for (var i = 1; i < 719; i++) {
            var pokePic = $("<div class = 'col l3 m3 s3 xs1'><img class = 'pokepoke' src=http://pokeapi.co/media/img/" + i + ".png id=" + i +"></div>");
            $('.pokemon').append(pokePic);
            }
        });
        .fail(function(){
            console.log('error');
        })
        .always(function(){
            console.log('complete');
        });
    });
