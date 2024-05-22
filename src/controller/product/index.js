import CategoryModel from "../../model/product/category.js";
import ProductsModel from "../../model/product/index.js";
const productController = {
  getAll: async (req, res) => {
    try {
      const product = await ProductsModel.findAll({
        include: [{ model: CategoryModel, attributes: ["name"] }],
      });
      res.status(200).json({
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  getSingle: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await ProductsModel.findByPk(id);
      res.status(200).json({
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  create: async (req, res) => {
    //
    try {
      const payload = req.body;

      console.log(payload, "payload");

      const product = new ProductsModel();
      product.productName = payload.name;

      await product.save();
      await product.addCategories(payload.categories);

      res.status(200).json({ message: "Product created", product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  update: async (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      const product = await ProductsModel.findByPk(id);
      if (!product) {
        return res.status(404).json({
          message: "Product not found with this id",
          id,
        });
      }
      product.productName = payload.productName
        ? payload.productName
        : product.productName;
      product.productStock = payload.productStock
        ? payload.productStock
        : product.productStock;
      product.rate = payload.rate ? payload.rate : product.rate;
      product.save();
      res.status(200).json({
        message: "Product Updated",
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await ProductsModel.findByPk(id);
      if (!product) {
        return res.status(404).json({
          message: "Product with this id not found",
          id,
        });
      }
      await product.destroy();
      res.status(200).json({
        message: "Product Deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};

export default productController;
