import dotenv from "dotenv";
import express from "express";
import { connectToMongo } from "./config/connection.js";
import router from "./routes/productRoutes.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

connectToMongo();

app.use("/api/products", router);

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
