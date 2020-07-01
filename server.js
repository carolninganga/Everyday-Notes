var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


require("./routes/apiRoutes.js")(app);
require("./routes/html-routes.js")(app); 

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


