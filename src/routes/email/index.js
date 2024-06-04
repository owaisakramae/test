import { Router } from "express";
import emailController from "../../controller/email/index.js";
const EmailRouter = Router();
EmailRouter.post("/email", emailController.sendEmail);

export default EmailRouter;
