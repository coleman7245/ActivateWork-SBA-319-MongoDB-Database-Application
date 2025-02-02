import Genre from "../models/Genre.js";

async function deleteGenre(req, res) {
    console.log(req.params);

    const genre = await Genre.deleteOne({"name" : req.params.name});

    res.json(genre);
}

async function getGenre(req, res) {
    const genre = await Genre.find({"name" : req.params.name});

    if (genre)
        res.json(genre);
};

async function getGenres(req, res) {
    const genre = await Genre.find().limit(3);

    res.json(genre);
}

async function patchGenre(req, res) {
    const genre = await Genre.updateOne({"name" : req.params.name}, {
        $set : {"name" : req.body.name, "description" : req.body.country}
    });

    res.json(genre);
}

async function postGenre(req, res) {
    const {name, description} = req.body;
    console.log(req.body);
    const genre = new Genre({name, description});
    console.log(genre);

    await Genre.insertMany([genre]);

    res.json(genre);
}

export {deleteGenre, getGenre, getGenres, patchGenre, postGenre};