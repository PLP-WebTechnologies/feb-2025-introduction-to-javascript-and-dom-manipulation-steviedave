// Change the text content of the main heading
document.getElementById("changeTextBtn").addEventListener("click", function() {
    const heading = document.getElementById("main-heading");
    heading.textContent = "This feature enables me to change my text";
    heading.style.color = "#4CAF50";
    heading.style.fontSize = "2rem";
});

// Toggle visibility of the color box
document.getElementById("toggleBoxBtn").addEventListener("click", function() {
    const box = document.getElementById("colorBox");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
});
