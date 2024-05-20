import markRouter from "./marks/index.js";
import productRouter from "./products/index.js";
import salesRouter from "./sales/index.js";
import StudentRouter from "./students/index.js";
import TeacherRouter from "./teacher/index.js";

const allRouter = [
  StudentRouter,
  TeacherRouter,
  markRouter,
  salesRouter,
  productRouter,
];

export default allRouter;
