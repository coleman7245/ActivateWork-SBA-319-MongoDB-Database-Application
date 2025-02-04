import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    genre_id : {
        type : String,
        unique : true,
        required : true
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    description : {
        type : String
    }
});

genreSchema.index({genre_id : "text"});

const Genre = mongoose.model("Genre", genreSchema);

export default Genre;