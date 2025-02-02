import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    country : {
        type : String
    },
    active : {
        type : Boolean
    }
});

const Company = mongoose.model("Company", companySchema);

export default Company;