import { Router } from "express";
import salesController from "../../controller/sales/index.js";
import authenticateMiddleWear from "../../middlewear/auth.js";
const salesRouter = Router();
salesRouter.get("/sales", authenticateMiddleWear, salesController.getAll);
// Get sales with id
salesRouter.get("/sales/:id", salesController.getSingle);
salesRouter.get("/sale", salesController.getSingleName);
//create sales
salesRouter.post("/sales", salesController.create);
//update sales
salesRouter.put("/sales/:id", salesController.update);
// Delete sales with id
salesRouter.delete("/sales/:id", salesController.delete);

export default salesRouter;
