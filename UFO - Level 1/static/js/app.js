// from data.js
var tableData = data;

// Get a reference to the table body

var tbody = d3.select("tbody");

// // Console.log the weather data from data.js

console.log(tableData);

// Step 1: Loop Through `data` and console.log each object

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
});


// data.forEach(function(weatherReport) {
//     console.log(weatherReport);
//   });

// Step 2:  Use d3 to append one table row `tr` for each object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.


// Step 3:  Use `Object.entries` to console.log each object value

// Step 4: Use d3 to append 1 cell per ufo sighting value (weekday, date, high, low)

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)


data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



  // Select the button
// var button = d3.select("#filter-btn");

// button.on("click", function() {
    
//     var inputElement = d3.select("#datetime");

//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
// })



  // Set the span tag in the h1 element to the text
  // that was entered in the form
//   d3.select("h1>span").text(inputValue);
// });