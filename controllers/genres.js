import Genre from "../models/Genre.js";

function deleteGenre(req, res, next) {

}

async function getGenre(req, res) {
    
};

async function getGenres(req, res) {
    const genre = await Genre.find().limit(3);

    return res.json(genre);
}

function patchGenre(req, res, next) {

}

async function postGenre(req, res, next) {
    const {name, description} = req.body;
    const genre = new Genre({name, description});

    await genre.save();

    res.json(genre);
}

export {deleteGenre, getGenre, getGenres, patchGenre, postGenre};