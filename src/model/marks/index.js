import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const MarksModel = sequelize.define(
  "Mark",
  {
    English: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Urdu: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Maths: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {}
);

export default MarksModel;
