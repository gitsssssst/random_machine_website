$(function() {

    $(window).scroll(function() {

        topDistance = $(window).scrollTop();

        $('.sticker.first').css({
            'margin-top': topDistance / 4
        });
        $('.sticker.second').css({
            'margin-bottom': -(topDistance / 6)
        });
        $('.sticker.third').css({
            'margin-top': -(topDistance / 6)
        });

    });

});
