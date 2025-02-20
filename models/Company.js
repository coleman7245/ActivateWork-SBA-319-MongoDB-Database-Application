import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    company_id : {
        type: String,
        required: true,
        unique: true
    },
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

companySchema.index({company_id : "text"});

const Company = mongoose.model("Company", companySchema);

export default Company;