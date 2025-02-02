import Title from "../models/Title.js";

function deleteTitle(req, res, next) {
    
}

function getTitle(req, res) {

}

async function getTitles(req, res) {
    const titles = await Title.find().limit(3);

    return res.json(titles);
};

function patchTitle(req, res, next) {

}

async function postTitle(req, res) {
    const {name, company, genre} = req.body;
    const title = new Title({name, company, genre});

    await title.save();
    res.json(title);
}

export {deleteTitle, getTitle, getTitles, patchTitle, postTitle};