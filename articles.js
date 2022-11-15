/* https://learn.jquery.com/using-jquery-core/document-ready/ */
$(document).ready(function () {
    /* Assigns the link of the full article to the button */
    document.getElementById("view-article-1").addEventListener("click", function () {
        window.open("https://www.morningstar.com/articles/878449/how-to-escape-from-a-lousy-health-savings-account", "_blank");
    });
});

