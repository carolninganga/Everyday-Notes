const fs = require("fs");
const path = require("path");
var dataNote = require("../db/db.json");


module.exports = function (app) {
  //reading the JSON file

  app.get("/api/notes", function (req, res) {
    return res.json(dataNote);
  });
  // API Post Request
  //hanldes  new data that is being posted 
}