import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
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
    country : {
        type : String,
        default : ""
    },
    active : {
        type : Boolean,
        default : true
    }
});

export default mongoose.model("Company", companySchema);