import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectionString = process.env.MONGO_URI;

export const connectToMongo = async () => {
  try {
    const res = await mongoose.connect(connectionString);
    console.log(
      `MongoDB Connected: ${res.connection.host}- port: ${res.connection.port}`,
    );
  } catch (error) {
    console.error("Connection error", err);
  }
};
