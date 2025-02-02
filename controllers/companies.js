import Company from "../models/Company.js";

async function deleteCompany(req, res) {
    const company = await Company.deleteOne({"name" : req.params.name});

    res.json(company);
};

async function getCompanies(res) {
    const companies = await Company.find().limit(3);

    return res.json(companies);
};

async function getCompany(req, res) {
    const company = await Company.find({"name" : req.params.name});

    if (company)
        res.json(company);
};

async function patchCompany(req, res) {
    const company = await Company.updateOne({"name" : req.params.name}, {
        $set : {"name" : req.body.name, "country" : req.body.country, "active" : req.body.active}
    });

    res.json(company);
};

async function postCompany(req, res) {
    const {name, country, active} = req.body;
    const company = new Company({name, country, active});

    await company.save();

    res.json(company);
};

export {deleteCompany, getCompanies, getCompany, patchCompany, postCompany};