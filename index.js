import mongoose from "mongoose";
import express from "express";
import "dotenv/config";

//Routes for the API
import companies from "./routes/companies.js";
import genres from "./routes/genres.js";
import titles from "./routes/titles.js";

const app = express();

app.use(express.json());

app.use("/api/companies", companies);
app.use("/api/genres", genres);
app.use("/api/titles", titles);

mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("MongoDB connected!"));

app
    .route("/api")
    .get((req, res) => {
        res.send("Yeah.");
    });

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});