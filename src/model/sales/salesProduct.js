import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import SalesModel from "./index.js";
import ProductsModel from "../product/index.js";

const SaleProductModel = sequelize.define(
  "SaleProduct",
  {
    // productName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {}
);

ProductsModel.hasMany(SaleProductModel);
SaleProductModel.belongsTo(ProductsModel);

SalesModel.hasMany(SaleProductModel);
SaleProductModel.belongsTo(SalesModel);

export default SaleProductModel;
