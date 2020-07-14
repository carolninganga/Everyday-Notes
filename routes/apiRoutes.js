const fs = require("fs");
const path = require("path");
var Notes = require('../models/notes.js')


module.exports = function (app) {
 
// added a get request to fetch notes from the database 
  app.get("/api/notes", (req, res) => {
    Notes.find({})
    .then(dbNotes => {
      res.json(dbNotes);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  })
  

  // Added a post request to create the note in the database 
  app.post("/api/notes", ({ body }, res) =>{
    Notes.create(body)
    .then(dbNotes => {
      res.json(dbNotes);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  })
  
    //DELETE a specific note from all notes
    //res.json() used to return a response object
    app.delete("/api/notes/:id", (req, res) => {
      console.log("trash click", req.params.id)
      Notes.deleteOne({id: req.params.id}, 
          function(err, docs){
          if(err) res.json(err);
      });
    });
  
  

     //this handles the delete req when submits the form to the server

    //  app.delete("/api/notes/:id", function (req, res) {

    //     console.log("next", req.params)
    //     var noteId = req.params.id
    //     dataNote = dataNote.filter(x => x.id != noteId)
  
    //     // dataNote = []
    //     // console.log(dataNote)  
    //     // dataNote.filter(req.params.id);
  
    //     fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(dataNote), function (
    //       err
    //     ) {
    //       if (err) throw err;
    //       console.log('Filtered note saved')
    //     });
  
    //     res.json(true);
    //   });
  
      app.get("/", function (req, res) {
        //res.sendFile(path.join(__dirname, "../public/index.html"));
        res.sendFile(path.join(__dirname, "/index.html"));
  
      });
}