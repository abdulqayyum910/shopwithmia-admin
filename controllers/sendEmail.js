const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { to, subject, text } = req.query;
  const transport = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "Shopwithmia26@gmail.com",
      pass: "y p j x t g j s b o b g k b d j",
    },
  });

  try {
    let info = await transport.sendMail({
      from: "<Shopwithmia26@gmail.com>",
      to,
      subject: subject,
      html: `<h3>${text}</h3>`,
    });
    console.log("Email send", info.messageId);
    res.status(200);
  } catch (err) {
    console.log("ERR", err);
  }
};

module.exports = sendEmail;
