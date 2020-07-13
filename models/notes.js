const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const notesSchema = new Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
        required: "Enter title for note"
    },
    text: {
        type: String,
        required:"Enter note"
    }
});