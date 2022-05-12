const express = require("express");
const bodyParser = require("body-parser");
const typescript = require("./routes/typescript");
const javascript = require("./routes/javascript");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/typescript", typescript);
app.use("/javascript", javascript);

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
