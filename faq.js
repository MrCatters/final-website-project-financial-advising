$(document).ready(function () {
    $("#accordian").accordion({
        active: false,
        collapsible: true,
        icons: {
            "header": "ui-icon-triangle-1-e",
            "activeHeader": "ui-icon-triangle-1-s"
        },
        heightStyle: "content"
    });
});