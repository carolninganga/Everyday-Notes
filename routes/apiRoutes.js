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

  app.post("/api/notes", function (req, res) {
    dataNote.push(req.body);
    res.json(true);
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(dataNote), function (err) {
      if (err) throw err;
      //res.json(dataNote);
      console.log('new note saved')
    });
    });
}