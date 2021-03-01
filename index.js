const express = require("express");
const app = express();

require("dotenv").config();
require("./config/db.config");

const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["https://guitarzz.herokuapp.com"],
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //crucial for post requests from client

var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const productRoutes = require("./routes/product.routes");
app.use("/api", productRoutes);

const orderRoutes = require("./routes/order.routes");
app.use("/api", orderRoutes);

const nodemailerRoutes = require('./routes/nodemailer.routes')
app.use('/api', nodemailerRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}, dirname ${__dirname}`)
);
