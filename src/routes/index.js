import markRouter from "./marks/index.js";
import StudentRouter from "./students/index.js";
import TeacherRouter from "./teacher/index.js";

const allRouter = [StudentRouter, TeacherRouter, markRouter];

export default allRouter;
