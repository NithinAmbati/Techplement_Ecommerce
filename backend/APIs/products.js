const express = require("express");
const router = express.Router();
const { Products } = require("./startMongoose");

router.get("/", async (req, res) => {
  const products = await Products.find();
  res.status(200).send(products);
});

router.post("/", async (req, res) => {
  const {
    productName,
    description,
    price,
    quantity,
    imageUrl,
    category,
    rating,
    reviews,
    discount,
  } = req.body;
  const newProduct = new Products({
    productName,
    description,
    price,
    quantity,
    imageUrl,
    category,
    rating,
    reviews,
    discount,
  });
  await newProduct.save();
  res.status(200).send(req.body);
});

module.exports = router;
