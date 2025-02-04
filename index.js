import mongoose from "mongoose";
import express from "express";
import "dotenv/config";

//Routes for the API
import companies from "./routes/companies.js";
import genres from "./routes/genres.js";
import titles from "./routes/titles.js";

const app = express();

app.use(express.json());

app.use("/video_games/companies", companies);
app.use("/video_games/genres", genres);
app.use("/video_games/titles", titles);

mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("MongoDB connected!"));

app
    .route("/video_games")
    .get((req, res) => {
        let categories = {categories : [
            "company",
            "genre",
            "title",
        ]};

        res.send(categories);
    });

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});