var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#movies-view").empty();

    for (var i = 0; i < movies.length; i++) {
        var a = $("<button>");
        a.addClass("movie");
        a.attr("data-name", movies[i]);
        a.text(movies[i]);
        $("#movies-view").append(a);
    }
}




$("#add-movie").on("click", function (event) {
    event.preventDefault();
    var movie = $("#movie-input").val().trim();
    movies.push(movie);

    var queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&api_key=dc6zaTOxFJmzC";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });


    renderButtons();
});




// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();