import Company from "../models/Company.js";

function deleteCompany(req, res, next) {

};

async function getCompanies(req, res) {
    const companies = await Company.find().limit(3);

    return res.json(companies);
};

function getCompany(req, res) {

};

function patchCompany(req, res, next) {

};

async function postCompany(req, res) {
    const {name, country, active} = req.body;
    const company = new Company({name, country, active});

    await company.save();

    res.json(company);
};

export {deleteCompany, getCompanies, getCompany, patchCompany, postCompany};