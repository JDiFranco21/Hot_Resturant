// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Star Wars Characters (DATA)
// =============================================================
var reservations = [];
var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/resForm", function(req, res) {
  res.sendFile(path.join(__dirname, "resForm.html"));
});


// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:responses?", function(req, res) {
  var response = req.params.responses;

    if(response === "table"){
        return res.json(reservations);
    } else {
        return res.json(waitlist);
    }
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newresrvation);

  characters.push(newreservation);

  res.json(newreservation);
});