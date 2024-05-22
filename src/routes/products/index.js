import { Router } from "express";
import productController from "../../controller/product/index.js";
productController;
const productRouter = Router();
productRouter.get("/products", productController.getAll);
// // Get sales with id
productRouter.get("/product/:id", productController.getSingle);
// productRouter.get("/sale", productController.getSingleName);
// //create sales
productRouter.post("/product", productController.create);
//update sales
productRouter.put("/product/:id", productController.update);
// // Delete sales with id
productRouter.delete("/product/:id", productController.delete);

export default productRouter;
