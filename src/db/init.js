import MarksModel from "../model/marks/index.js";
import SaleProductModel from "../model/sales/salesProduct.js";
import SalesModel from "../model/sales/index.js";
import StudentModel from "../model/student/index.js";
import TeacherModel from "../model/teacher/index.js";
import ProductsModel from "../model/product/index.js";
import CategoryModel from "../model/product/category.js";
import sequelize from "./config.js";
import UserModel from "../model/user/index.js";

const syncDB = async () => {
  // await sequelize.sync({ alter: true, force: true });
  await StudentModel.sync({ alter: true, force: false });
  await TeacherModel.sync({ alter: true, force: false });
  await MarksModel.sync({ alter: true, force: false });
  await CategoryModel.sync({ alter: true, force: false });
  await ProductsModel.sync({ alter: true, force: false });
  await SalesModel.sync({ alter: true, force: false });
  await SaleProductModel.sync({ alter: true, force: false });
  await UserModel.sync({ alter: true, force: false });
};

export default syncDB;
