import express from "express";
import {deleteCompany, getCompanies, getCompany, patchCompany, postCompany} from "../controllers/companies.js";

const router = express.Router();

router.route("/")
    .get(getCompanies)
    .post(postCompany);

router.route("/:name")
    .get(getCompany)
    .patch(patchCompany)
    .delete(deleteCompany);

export default router;