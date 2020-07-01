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

     //this handles the delete req when submits the form to the server

     app.delete("/api/notes/:id", function (req, res) {

        console.log("next", req.params)
        var noteId = req.params.id
        dataNote = dataNote.filter(x => x.id != noteId)
  
        // dataNote = []
        // console.log(dataNote)  
        // dataNote.filter(req.params.id);
  
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(dataNote), function (
          err
        ) {
          if (err) throw err;
          console.log('Filtered note saved')
        });
  
        res.json(true);
      });
  
      app.get("/", function (req, res) {
        //res.sendFile(path.join(__dirname, "../public/index.html"));
        res.sendFile(path.join(__dirname, "/index.html"));
  
      });
}