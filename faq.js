//Helps with appending the same element to multiple other elements.
//https://stackoverflow.com/questions/42297986/appending-the-same-element-to-different-elements
function cloneNode(node) {
    return node.cloneNode(true);
}


// Creates a chevron icon that is placed at the end of each FAQ question. 
var img = new Image();
img.src = "./images/chevron-down.png";
img.alt = "Chevron";

$(document).ready(function () {
    const dropDownItems = document.querySelectorAll(".dropdown > :nth-child(odd)");
    dropDownItems.forEach(element => {
        // Adds the chevron icon to the end of each FAQ question.
        element.appendChild(cloneNode(img));
        // Adds an "active" class to the FAQ question when clicked.
        element.addEventListener("click", function () {
            // Closes clicked FAQ container.
            if (element.classList.contains("active")) {
                element.classList.remove("active");
            } else {
                // Opens clicked FAQ container and closes the rest.
                dropDownItems.forEach(element => {
                    element.classList.remove("active");
                });
                this.classList.toggle("active");
            }
        });
    })
});