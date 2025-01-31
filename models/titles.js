import mongoose from "mongoose";

const titleSchema = new mongoose.Schema({
    id : {
        type : Number,
        unique : true,
        require : true
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    companyId : {
        type : String,
        unique : true,
        required : true
    },
    genreId : {
        type : String,
        unique : true,
        required : true
    }
});

export default mongoose.model("Title", titleSchema);