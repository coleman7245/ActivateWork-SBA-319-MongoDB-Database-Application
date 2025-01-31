import express from "express";

import {getTitles, getTitle, postTitle, patchTitle, deleteTitle} from "../controllers/titles.js";

const router = express.Router();

router.route("/")
    .get(getTitles)
    .post(postTitle);

router.route("/:id")
    .get(getTitle)
    .patch(patchTitle)
    .delete(deleteTitle);

export default router;