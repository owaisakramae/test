import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "out",
  auth: {
    user: "owaisakram78@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

var mailOptions = {
  from: "owaisakram78@gmail.com",
  to: "r.owaisakram@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Sending the test email",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

export default transporter;
