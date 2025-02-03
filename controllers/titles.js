import Title from "../models/Title.js";

async function deleteTitle(req, res, next) {
    const title = await Title.deleteOne({"title_id" : req.params.id});

    res.json(title);
}

async function getTitle(req, res) {
    const title = await Title.find({"title_id" : req.params.id});

    if (title)
        res.json(title);
}

async function getTitles(req, res) {
    const titles = await Title.find();

    res.json(titles);
};

async function patchTitle(req, res, next) {
    const title = await Title.updateOne({"title_id" : req.params.id}, {
        $set : {"name" : req.body.name, "company" : req.body.company, "genre" : req.body.genre}
    });

    res.json(title);
}

async function postTitle(req, res) {
    const {title_id, name, company, genre} = req.body;
    const title = new Title({title_id, name, company, genre});

    await title.save();
    res.json(title);
}

export {deleteTitle, getTitle, getTitles, patchTitle, postTitle};