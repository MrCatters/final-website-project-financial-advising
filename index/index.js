/* https://learn.jquery.com/using-jquery-core/document-ready/ */
$(document).ready(function () {
    /* Gives the button at the top and two buttons at the bottom the links to Calendly. */
    document.getElementById("top-schedule-meeting").addEventListener("click", function () {
        window.open("https://calendly.com/johnpalko/", "_blank");
    });
    document.getElementById("intro-phone-call").addEventListener("click", function () {
        window.open("https://calendly.com/johnpalko/30min", "_blank");
    });
    document.getElementById("intro-meeting").addEventListener("click", function () {
        window.open("https://calendly.com/johnpalko/60min", "_blank");
    });
});



