const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const MailModel = require("../models/mail.model");
require("dotenv").config();

const NODEMAILER_USER = process.env.NODEMAILER_USER;
const NODEMAILER_PASS = process.env.NODEMAILER_PASS;
const NODEMAILER_CC = process.env.NODEMAILER_CC;
const NODEMAILER_USER_DIFF_FORMAT = process.env.NODEMAILER_USER_DIFF_FORMAT;

let transporter = nodemailer.createTransport({
  service: "outlook",
  secureConnection: false,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
});

router.post("/send-email", (req, res, next) => {
  let { email, orderData, name, total } = req.body;
  let subject = "Lovro Dev NODEMAILER";
  let secondMail = NODEMAILER_CC;

  console.log(`send MAIL: ${email}, ${name}, ${total}, ${orderData}`);

  transporter
    .sendMail({
      from: `${NODEMAILER_USER_DIFF_FORMAT}`,
      to: email,
      subject: subject,
      name: name,
      total: total,
      cc: secondMail,
      orderData: orderData,
      html: `<h1>Thank you ${name} for ordering!</h1><p>You have ordered following items: ${orderData}</p><h2>Your total was ${total} €</h2>
      <h3>Hope to see you soon, Yours Guitar Shop</h3>`,
    })
    .then(() =>
    console.log('SEND mail everything ok!')
    )
    .catch((error) => console.log(error));

  MailModel.create({
    email: email,
    subject: subject,
    name: name,
    total: total,
    orderData: orderData,
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
