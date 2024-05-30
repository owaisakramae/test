import { Router } from "express";
import AuthController from "../../controller/auth/index.js";
import authenticateMiddleWear from "../../middlewear/auth.js";
const authRouter = Router();
authRouter.post("/auth/signup", AuthController.signup);
// // Get mark with id
authRouter.post("/auth/signin", authenticateMiddleWear, AuthController.signin);

export default authRouter;
