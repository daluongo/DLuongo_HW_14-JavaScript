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

var originalTable = data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



  // Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    function filterDate(d) {
      return d.datetime == inputValue
    }
    var results = tableData.filter(filterDate)
  



    console.log(results);
})



  // Set the span tag in the h1 element to the text
  // that was entered in the form
//   d3.select("h1>span").text(inputValue);
// });