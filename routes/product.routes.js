const express = require("express");
const router = express.Router();
const ProductModel = require("../models/product.model");

router.get("/products", (req, res) => {
  ProductModel.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log("FAILED getting products: ", err);
      res.status(500).json({ message: "Server Error" });
    });
});

router.get("/products/:id", (req, res) => {
  ProductModel.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.patch("/products", (req, res, next) => {
  const { products } = req.body;
  let myPromises = [];
  products.forEach((elem) => {
    let singlePromise = ProductModel.findOneAndUpdate(
      { name: elem.name },
      { stock: elem.stock }
    );
    myPromises.push(singlePromise);
  });
  Promise.all(myPromises)
    .then(() => {
      return ProductModel.find();
    })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      //throw error message
      next(err);
    });
});

module.exports = router;
