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
    }).mouseout(function () {
        $("#about-drop-down-content").css(
            {
            "visibility": "hidden"
            }
        );  
    });
});
