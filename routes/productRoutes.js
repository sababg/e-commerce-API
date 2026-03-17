import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);

    const newProduct = await product.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const singleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await Product.findById(id);

    if (!productById) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    res.json(productById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const options = { new: true };
  try {
    const updateProductById = await Product.findByIdAndUpdate(
      id,
      req.body,
      options,
    );

    if (!updateProductById) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    res.json(updateProductById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

router.post("/", createProduct);
router.get("/:id", singleProduct);
router.put("/:id", updateProduct);

export default router;
