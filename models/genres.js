import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    id : {
        type : Number,
        unique : true,
        require : true
    },
    name : {
        type : String,
        unique : true,
        required : true
    }
});

export default mongoose.model("Genre", genreSchema);