import mongoose from "mongoose";
import express from "express";

import "dotenv/config";

const app = express();
const port = 8080;

app.use(express.json());

mongoose
    .connect(MONGO_URI)
    .then(console.log("MongoDB connected!"));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});