const nodemailer = require("nodemailer");
const express = require("express");
const sendEmail = require("./controllers/sendEmail");
const cors = require("cors");
const app = express();

app.use(cors());
let PORT = 5000;

app.get("/sendEmail", sendEmail);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
