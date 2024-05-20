import ProductsModel from "../../model/product/product.js";
const productController = {
  create: async (req, res) => {
    try {
      const payload = req.body;
      const product = new ProductsModel();
      product.productName = payload.productName;
      product.productStock = payload.productStock;
      product.rate = payload.rate;
      await product.save();
      res.status(200).json({
        message: "Product Added",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
};

export default productController;
