/* https://learn.jquery.com/using-jquery-core/document-ready/ */
$(document).ready(function () {
    /* Assigns the link of the full article to the button */
    document.getElementById("view-article-1").addEventListener("click", function () {
        window.open("https://www.morningstar.com/articles/878449/how-to-escape-from-a-lousy-health-savings-account", "_blank");
    });

    /* Uses magnific popup to display the video in an iframe */
    $(".play-video").magnificPopup({
        type: 'iframe',
    });

    /* https://stackoverflow.com/questions/13637223/how-do-you-make-a-div-tabbable */
    /* Makes the tabbable div clickable with the space or enter key */
    $(document).on('keydown', '#turn-out-noise-image', function(e){
        if (e.keyCode == 13 || e.keyCode == 32) {
            $(this).click();
        }
    });
});

