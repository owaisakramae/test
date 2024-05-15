import { Router } from "express";
import StudentController from "../../controller/student/index.js";
const StudentRouter = Router();
StudentRouter.get("/students", StudentController.getAll);
// Get student with id
StudentRouter.get("/student/:id", StudentController.getSingle);
//create student
StudentRouter.post("/student", StudentController.create);
//update student
StudentRouter.put("/student/:id", StudentController.update);
// Delete student with id
StudentRouter.delete("/student/:id", StudentController.delete);

export default StudentRouter;
