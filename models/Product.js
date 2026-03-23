import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
    min: [0, "Must be at least 0"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Product = mongoose.model("Product", productSchema);
