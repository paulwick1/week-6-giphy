 //creates new buttons based on entered data
 $(document).ready(function() {
      $('#addButton').on("click" , function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('#buttonList').append('<button data-destination="'+toAdd+'">'+ toAdd + '</button>');
        
 // Adding click event listen listener to all buttons
    $("button").on("click", function() {
      // Grabbing and storing the data-destination property value from the button
      var destination = $(this).data("destination");

      // Constructing a queryURL using the destination name
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        destination + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var destinationDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var destinationImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            destinationImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the destinationDiv
            destinationDiv.append(p);
            destinationDiv.append(destinationImage);

            // Prependng the destinationDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(destinationDiv);
          }
        });
        });
    });
    });
