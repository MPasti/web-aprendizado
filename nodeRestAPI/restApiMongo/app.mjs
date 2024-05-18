import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/product.route.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = 3000;

//middleware
app.use(express.json());
//para poder enviar form
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect(process.env.DB_ROUTE)
  .then(() => {
    console.log("Connect to database!");
    app.listen(port, () => {
      console.log(`server running at http://localhost:3000`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
