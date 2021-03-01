const express = require("express");
const router = express.Router();
const OrderModel = require("../models/order.model");

router.get("/orders", (req, res) => {
  OrderModel.find()
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});

router.post("/newOrder", (req, res) => {
  if (
    !req.body.userEmail ||
    !req.body.userName ||
    !req.body.userLastName ||
    !req.body.userStreet ||
    !req.body.userCity
  ) {
    res.status(500).json({
      errorMessage: "Info missing!",
    });
    return;
  }
  OrderModel.create({
    userEmail: req.body.userEmail,
    userName: req.body.userName,
    userLastName: req.body.userLastName,
    userStreet: req.body.userStreet,
    userCity: req.body.userCity,
    orderDetails: req.body.orderDetails,
    total: req.body.total,
  })
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

module.exports = router;
