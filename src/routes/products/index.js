import { Router } from "express";
import productController from "../../controller/product/index.js";
productController;
const productRouter = Router();
// productRouter.get("/sales", productController.getAll);
// // Get sales with id
// productRouter.get("/sales/:id", productController.getSingle);
// productRouter.get("/sale", productController.getSingleName);
// //create sales
productRouter.post("/product", productController.create);
//update sales
// productRouter.put("/sales/:id", productController.update);
// // Delete sales with id
// productRouter.delete("/sales/:id", productController.delete);

export default productRouter;
