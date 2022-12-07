$(document).ready(function () {
    getFaqData(setAccordion);
});

// Gets the faq data from JSON file and appends it to the accordion.
function getFaqData(_callback) {
    // Gets the faq data from the JSON file.
    $.getJSON("../faq/faq.json", function (data) {
        $div = $('<div/>',{
            id: 'accordion',
            class: 'jquery-element'
        });
        // Loops through the faq data and appends it to the accordion.
        $.each(data, function (key, val) {
            $div.append('<h3>' + val.question + '</h3>');
            $div.append('<div>' + val.answer + '</div>');
        });
        $('#accordion-container').append($div);
    })
    .done(function () {
        // Calls the callback function.
        // Timeout needed to allow the accordion to be created.
        _callback();
    })
    .fail(function () {
        // Error handling.
        alert("Error: Could not get faq data.");
    });
}

// Sets the accordion into the page.
function setAccordion() {
    $("#accordion").accordion({
        active: false,
        collapsible: true,
        icons: {
            "header": "ui-icon-triangle-1-e",
            "activeHeader": "ui-icon-triangle-1-s"
        },
        heightStyle: "content"
    });
};