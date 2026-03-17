import dotenv from "dotenv";
import express from "express";
import { connectToMongo } from "./config/connection.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

connectToMongo();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
