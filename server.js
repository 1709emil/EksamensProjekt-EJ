// import the neccessary libraries
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

// configure express server
app.use(express.static("./"));
app.use(express.json());
const port = 3001;

// configure database connection
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

// configure security parameters
const saltRounds = 10;

// get request at root
app.get("/", (request, response) => {
  response.sendFile("/Index.html");
});


// start server
app.listen(port, () => console.log("Listening on port " + port));
