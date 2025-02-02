import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    description : {
        type : String
    }
});

const Genre = mongoose.model("Genre", genreSchema);

export default Genre;