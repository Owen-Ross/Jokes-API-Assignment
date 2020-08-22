
$(document).ready(function() {

    document.getElementById("joke").innerHTML = localStorage.getItem("Joke");
    document.getElementById("category").append(localStorage.getItem("Category"));

});