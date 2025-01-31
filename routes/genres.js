import express from "express";

import {getGenres, getGenre, postGenre, patchGenre, deleteGenre} from "../controllers/genres";

const router = express.Router();

router.route("/")
    .get(getGenres)
    .post(postGenre);

router.route("/:id")
    .get(getGenre)
    .patch(patchGenre)
    .delete(deleteGenre);

export default router;