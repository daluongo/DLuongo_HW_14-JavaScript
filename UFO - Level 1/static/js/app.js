// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//Create initial table, reading in all data
function initialTable(data) {
  tbody.html("");
  data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// Create a function to filter by user input 
function filterUFO(){
  let filtered = tableData
  var inputUser = d3.select("#datetime").property("value");
  if (inputUser) {
      filtered = tableData.filter(ufoInfo => ufoInfo.datetime === inputUser)};
  console.log(filtered)
  initialTable(filtered)
};

// Locate button and create event listener
var button = d3.select("#filter-btn");
button.on("click", filterUFO);

initialTable(tableData)

