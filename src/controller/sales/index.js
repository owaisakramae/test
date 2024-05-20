import SalesModel from "../../model/sales/index.js";

import SaleProductModel from "../../model/sales/salesProduct.js";
const salesController = {
  getAll: async (req, res) => {
    try {
      const payload = req.body;
      const sale = await SalesModel.findAll();
      res.json({
        sale,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getSingle: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const sale = await SalesModel.findByPk(id, {
        include: [SaleProductModel],
      });
      if (!sale) {
        return res.status(404).json({ message: "Error id not found" });
      }
      res.status(200).json({
        sale,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  
  create: async (req, res) => {
    try {
      const payload = req.body;
      const sale = new SalesModel();
      sale.totalAmount = 0;
      payload.salesProducts.forEach((product) => {
        sale.totalAmount += product.productQuantity * product.rate;
        // console.log(product.productQuantity);
        // console.log(product.rate);
        // console.log(sale.totalAmount);
      });
      await sale.save();

      const salesProduct = payload.salesProducts.map((ele) => {
        return {
          ...ele,
          SaleId: sale.id,
        };
      });
      await SaleProductModel.bulkCreate(salesProduct);
      res.status(200).json({
        message: "sale Added",
        sale,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
  update: async (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      // const sale = sales.find((sale) => sale.id === id);
      // const indexOfsaleToRemove = sales.indexOf(sale);
      const sale = await salesModel.findByPk(id);
      if (!sale) {
        return res.status(404).json({
          message: "Error no sales found with this id.",
        });
      }
      sale.English = payload.English ? payload.English : sale.English;
      sale.Urdu = payload.Urdu ? payload.Urdu : sale.Urdu;
      sale.Maths = payload.Maths ? payload.Maths : sale.Maths;
      await sale.save();
      res.status(200).json({
        message: "sale data with id updated",
        sale,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const sale = await salesModel.findByPk(id);
      // const sale = sales.find((sale) => sale.id === id);
      // const indexOfsaleToRemove = sales.indexOf(sale);
      if (!sale) {
        return res.status(404).json({ message: "No sale with this id" });
      }
      await sale.destroy();
      res.status(200).json({
        message: "sale with id deleted",
        id,
        sale,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getSingleName: async (req, res) => {
    try {
      const payload = req.body;
      const sale = await SaleProductModel.findAll({
        where: {
          productName: payload.productName,
        },
      });
      if (sale.length === 0) {
        return res.status(404).json({ message: "Error product not found" });
      }
      let total = 0;
      let quantity = 0;
      sale.forEach((product) => {
        total += product.productQuantity * product.rate;
        quantity += product.productQuantity;
      });
      res.status(200).json({
        total,
        quantity,
        sale,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default salesController;
