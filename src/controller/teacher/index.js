import TeacherModel from "../../model/teacher/index.js";
const TeacherController = {
  getAll: async (req, res) => {
    try {
      const payload = req.body;
      const teachers = await TeacherModel.findAll({
        where: {
          firstName: payload.firstName,
        },
        order: ["createdAt"],
        limit: payload.limit,
      });
      res.json({
        teachers,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getSingle: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      // const teacher = teachers.find((teacher) => teacher.id === id);
      const teacher = await TeacherModel.findByPk(id);
      if (!teacher) {
        return res.status(404).json({ message: "Error id not found" });
      }
      res.status(200).json({
        teacher,
      });
    } catch (error) {
      res.status(500).json({ message: "Error id not found" });
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;
      const teacher = new TeacherModel();
      teacher.firstName = payload.firstName;
      teacher.lastName = payload.lastName;
      teacher.subject = payload.subject;
      await teacher.save();
      // const id = parseInt(req.params.id);
      // const teacher = teachers.find((teacher) => teacher.id === id);
      // if (!teacher) {
      //   const newteacher = {
      //     id: id,
      //     name: payload.name,
      //     subject: payload.subject,
      //   };
      //   teachers.push(newteacher);
      res.status(200).json({
        message: "Teacher Added",
        teacher,
      });
      // }
      // res.status(404).json({
      //   message: "Teacher with id already exits",
      //   id,
      // });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      // const teacher = teachers.find((teacher) => teacher.id === id);
      // const indexOfTeacherToRemove = teachers.indexOf(teacher);
      const teacher = await TeacherModel.findByPk(id);
      if (!teacher) {
        return res.status(404).json({
          message: "Error no teacher found with this id.",
          id,
        });
      }
      teacher.firstName = payload.firstName
        ? payload.firstName
        : teacher.firstName;
      teacher.lastName = payload.lastName ? payload.lastName : teacher.lastName;
      teacher.subject = payload.subject ? payload.subject : teacher.subject;
      await teacher.save();
      res.status(200).json({
        message: "Teacher data with id updated",
        teacher,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const teacher = await TeacherModel.findByPk(id);
      if (!teacher) {
        return res.status(404).json({ message: "No Teacher with this id" });
      }
      await teacher.destroy();
      res.status(200).json({
        message: "Teacher with id deleted",
        id,
        teacher,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default TeacherController;
