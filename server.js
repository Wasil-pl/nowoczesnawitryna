const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const server = app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running...");
});

app.use(express.static(path.join(__dirname, "/client/dist")));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

let transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.post("/email", (req, res) => {
  const { title, email, message } = req.body;

  if (!title || !email || !message) {
    return res.status(422).json({ error: "All fields are required" });
  }

  console.log("email:", email);
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: title,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal error" });
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.json({ message: "Message received" });
});

app.use((req, res) => res.status(404).send("404 not found..."));
