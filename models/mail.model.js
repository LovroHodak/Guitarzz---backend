const mongoose = require("mongoose");
const Schema = mongoose.Schema

const mailSchema = new Schema({
  email: String,
  subject: String,
  orderData: [String],
  name: String,
  total: String
});

const Mail = mongoose.model("mail", mailSchema);

module.exports = Mail;