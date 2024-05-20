import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const SalesModel = sequelize.define(
  "Sales",
  {
    totalAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

export default SalesModel;
