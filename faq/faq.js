$(document).ready(function () {
    getFaqData(setAccordion);
});

// Gets the faq data from JSON file and appends it to the accordion.
function getFaqData(_callback) {
    $.getJSON("../faq/faq.json", function (data) {
        $div = $('<div/>',{
            id: 'accordion',
            class: 'jquery-element'
        });
        $.each(data, function (key, val) {
            $div.append('<h3>' + val.question + '</h3>');
            $div.append('<div>' + val.answer + '</div>');
        });
        $('#accordion-container').append($div);
    });
    _callback();
}

function setAccordion() {
    // Timeout needed to allow the accordion to be created.
    setTimeout(function () {
        $("#accordion").accordion({
            active: false,
            collapsible: true,
            icons: {
                "header": "ui-icon-triangle-1-e",
                "activeHeader": "ui-icon-triangle-1-s"
            },
            heightStyle: "content"
        });
        console.log('accordion set');
    }, 100);
};