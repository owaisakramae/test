import { Router } from "express";
import fileUploadController from "../../controller/fileupload/index.js";
const fileRouter = Router();
fileRouter.get("/", fileUploadController.get);
fileRouter.post("/api/upload", fileUploadController.post);

export default fileRouter;
