import mongoose from "mongoose";
import express from "express";
import "dotenv/config";

//Models from the database
import companyModel from "./models/companies";
import genreModel from "./models/genres";
import titleModel from "./models/titles";

//Routes for the API
import companies from "./routes/companies";
import genres from "./routes/genres";
import titles from "./routes/titles";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/companies", companies);
app.use("/genres", genres);
app.use("/titles", titles);

mongoose
    .connect(MONGO_URI)
    .then(console.log("MongoDB connected!"));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});