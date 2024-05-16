import { Router } from "express";
import markController from "../../controller/marks/index.js";
const markRouter = Router();
markRouter.get("/marks", markController.getAll);
// Get mark with id
markRouter.get("/mark/:id", markController.getSingle);
//create mark
markRouter.post("/mark", markController.create);
//update mark
markRouter.put("/mark/:id", markController.update);
// Delete mark with id
markRouter.delete("/mark/:id", markController.delete);

export default markRouter;
