import Genre from "../models/Genre.js";

async function deleteGenre(req, res) {
    const genre = await Genre.deleteOne({"genre_id" : req.params.id});

    res.json(genre);
}

async function getGenre(req, res) {
    const genre = await Genre.find({"genre_id" : req.params.id});

    if (genre)
        res.json(genre);
};

async function getGenres(req, res) {
    const genre = await Genre.find().limit(3);

    res.json(genre);
}

async function patchGenre(req, res) {
    const genre = await Genre.updateOne({"genre_id" : req.params.id}, {
        $set : {"name" : req.body.name, "description" : req.body.country}
    });

    res.json(genre);
}

async function postGenre(req, res) {
    const {genre_id, name, description} = req.body;
    const genre = new Genre({genre_id, name, description});

    await Genre.insertMany([genre]);

    res.json(genre);
}

export {deleteGenre, getGenre, getGenres, patchGenre, postGenre};