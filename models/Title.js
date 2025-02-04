import mongoose from "mongoose";

const titleSchema = new mongoose.Schema({
    title_id : {
        type : String,
        unique : true,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    genre : {
        type : String
    }
});

titleSchema.index({title_id : "text"});

const Title = mongoose.model("Title", titleSchema);

export default Title;