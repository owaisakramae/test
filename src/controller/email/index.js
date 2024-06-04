import nodemailer from "nodemailer";
const MessageController = {
  sendEmail: async (req, res) => {
    const payload = req.body;
    console.log(payload);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "owaisakram78@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });
    var mailOptions = {
      from: "owaisakram78@gmail.com",
      to: payload.Email,
      subject: "New Email",
      text: payload.Text,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({ message: "Email Send Successfully" });
      }
    });
  },
};
export default MessageController;
