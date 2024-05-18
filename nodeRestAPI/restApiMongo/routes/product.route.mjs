import express from "express";
const router = express.Router();

import {
  createProduct,
  deleteUser,
  getProduct,
  getProducts,
  updateUser,
} from "../controllers/product.controller.mjs";

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export { router };
