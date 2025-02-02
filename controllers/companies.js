import Company from "../models/Company.js";

async function deleteCompany(req, res) {
    const company = await Company.deleteOne({"company_id" : req.params.id});

    res.json(company);
};

async function getCompanies(req, res) {
    const companies = await Company.find().limit(3);

    res.json(companies);
};

async function getCompany(req, res) {
    const company = await Company.find({"company_id" : req.params.id});

    if (company)
        res.json(company);
};

async function patchCompany(req, res) {
    const company = await Company.updateOne({"company_id" : req.params.id}, {
        $set : {"name" : req.body.name, "country" : req.body.country, "active" : req.body.active}
    });

    res.json(company);
};

async function postCompany(req, res) {
    const {company_id, name, country, active} = req.body;
    const company = new Company({company_id, name, country, active});

    await company.save();

    res.json(company);
};

export {deleteCompany, getCompanies, getCompany, patchCompany, postCompany};