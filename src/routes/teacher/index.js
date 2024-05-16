import { Router } from "express";
import TeacherController from "../../controller/teacher/index.js";

const TeacherRouter = Router();

TeacherRouter.get("/teachers", TeacherController.getAll);

TeacherRouter.get("/teacher/:id", TeacherController.getSingle);

TeacherRouter.post("/teacher", TeacherController.create);

TeacherRouter.put("/teacher/:id", TeacherController.update);

TeacherRouter.delete("/teacher/:id", TeacherController.delete);

export default TeacherRouter;
