import mongoose from "mongoose";
import express from "express";
import "dotenv/config";

//Models from the database
import genreModel from "./models/genres.js";
import titleModel from "./models/titles.js";

//Routes for the API
import companies from "./routes/companies.js";
import genres from "./routes/genres.js";
import titles from "./routes/titles.js";

const app = express();

app.use(express.json());

app.use("/companies", companies);
app.use("/genres", genres);
app.use("/titles", titles);

mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("MongoDB connected!"));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});