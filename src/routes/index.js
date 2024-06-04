import authRouter from "./auth/index.js";
import EmailRouter from "./email/index.js";
import fileRouter from "./fileUpload/index.js";
import markRouter from "./marks/index.js";
import categoryRouter from "./products/category.js";
import productRouter from "./products/index.js";
import salesRouter from "./sales/index.js";
import StudentRouter from "./students/index.js";
import TeacherRouter from "./teacher/index.js";

const allRouter = [
  StudentRouter,
  TeacherRouter,
  markRouter,
  salesRouter,
  categoryRouter,
  productRouter,
  authRouter,
  EmailRouter,
  fileRouter,
];

export default allRouter;
