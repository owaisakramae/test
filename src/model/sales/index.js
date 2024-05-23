import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import StudentModel from "../student/index.js";

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
StudentModel.hasMany(SalesModel);
SalesModel.belongsTo(StudentModel);
export default SalesModel;
