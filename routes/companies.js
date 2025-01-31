import express from "express";

import {getCompanies, getCompany, postCompany, patchCompany, deleteCompany} from "../controllers/companies";

const router = express.Router();

router.route("/")
    .get(getCompanies)
    .post(postCompany);

router.route("/:id")
    .get(getCompany)
    .patch(patchCompany)
    .delete(deleteCompany);

export default router;