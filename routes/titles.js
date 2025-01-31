import express from "express";

import {getTitles, getTitle, postTitle, patchTitle, deleteTitle} from "../controllers/titles";

const router = express.Router();

router.route("/")
    .get(getCompanies)
    .post(postCompany);

router.route("/:id")
    .get(getCompany)
    .patch(patchCompany)
    .delete(deleteCompany);

export default router;