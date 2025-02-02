import mongoose from "mongoose";

const titleSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    company : {
        type : String,
        unique : true,
        required : true
    },
    genre : {
        type : String
    }
});

const Title = mongoose.model("Title", titleSchema);

export default Title;