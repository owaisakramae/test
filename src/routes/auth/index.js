import { Router } from "express";
import AuthController from "../../controller/auth/index.js";
import authValidators from "../../validators/auth/index.js";
const authRouter = Router();
authRouter.post("/auth/signup", authValidators.signUp, AuthController.signup);
// // Get mark with id
authRouter.post("/auth/signin", AuthController.signin);

export default authRouter;
