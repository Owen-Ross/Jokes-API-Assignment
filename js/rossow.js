
function loadCategories() {
 
    var opt = document.createElement("option");
    var opt2 = document.createElement("option");
    var opt3 = document.createElement("option");

    $(document).ready(function() {
            $.getJSON("http://api.icndb.com/categories", function(result){
                  opt.innerHTML = result.value[0];
                  $("#categories").append(opt);
                  opt.setAttribute("value", result.value[0]);
                  opt.setAttribute("id", result.value[0]);

                  opt2.innerHTML = result.value[1];
                  $("#categories").append(opt2);
                  opt2.setAttribute("value", result.value[1]);
                  opt2.setAttribute("id", result.value[1]);

                  opt3.innerHTML = "Select an Option";
                  $("#categories").append(opt3);
                  opt3.setAttribute("value", "Any");
                  opt3.setAttribute("id", "any");
    });  
});
}

$(document).ready(function() {
  $("#getJoke").click(function() {

    let category = document.getElementById("categories").selectedIndex;

    

    let jokeUrl;

    if(category == 0){
      jokeUrl = "http://api.icndb.com/jokes/random?limitTo=%5bexplicit";
    } else if(category == 1) {
      jokeUrl = "http://api.icndb.com/jokes/random?limitTo=%5bnerdy";
    } else if(category == 2) {
      jokeUrl = "http://api.icndb.com/jokes/random";
    }

    let chuckJoke;
    let jokeCatagory;

    $.ajax({
        url: jokeUrl,
        data: {format : "json"},
        success: function(data) {
    
          chuckJoke = data.value.joke;
          jokeCatagory = data.value.categories[0];

          saveDataToLS(chuckJoke, jokeCatagory);
    
           location.assign("./pages/quote.html");

        },
        error: function() {
          alert("An error occured");
        },
        dataType: "jsonp",
        type: "GET"
      });
 
  });
});

function saveDataToLS(jokeStr, category) {
  localStorage.setItem("Joke", jokeStr);
  if(category == undefined) {
    localStorage.setItem("Category", "Any");
  } else {
    localStorage.setItem("Category", category);
  }
}
