'use strict'

$(document).ready(function () {

    // Manages color changes for both 'li' and 'a' elements at once.
    $("nav > a, nav > div:not(#about-drop-down-content), div > a").mouseover(function () { 
        $(this).css(
            {
            "color": "white",
            "background-color": "#ad9058",
            "cursor": "pointer"
            }
        );
    }).mouseout(function () { 
        $(this).css(
            {
            "color": "black",
            "background-color": "white"
            }
        );
    });

    $("#about-drop-down, #about-drop-down-content").mouseover(function () {
        $("#about-drop-down-content").css({
            "visibility": "visible"
        });

        // rotate #chevron to 180 degrees
        $("#chevron").stop();
        $("#chevron").animate(
            { deg: 180 },
            {
                duration: 500,
                step: function(now) {
                $(this).css({ transform: 'rotateX(' + now + 'deg)' });
            }
        });
    }).mouseout(function () {
        $("#about-drop-down-content").css(
            {
            "visibility": "hidden"
            }
        );

        $("#chevron").stop();
        $("#chevron").animate(
            { deg: 360},
            {
                duration: 500,
                step: function(now) {
                $(this).css({ transform: 'rotateX(' + now + 'deg)' });
            }
        });
    });
});
