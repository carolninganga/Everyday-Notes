var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var app = express();

// require mongoose and install as dependency
const mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//add connection to db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/notesapp", {
  useNewUrlParser: true,
  useFindAndModify: false
});


require("./routes/apiRoutes.js")(app);
require("./routes/html-routes.js")(app); 

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


