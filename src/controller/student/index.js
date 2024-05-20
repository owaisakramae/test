import StudentModel from "../../model/student/index.js";
const StudentController = {
  getAll: async (req, res) => {
    try {
      const payload = req.body;
      const students = await StudentModel.findAll({
        where: {
          firstName: payload.firstName,
        },
        order: [["createdAt", "DESC"]],
        limit: payload.limit,
      });
      res.json({
        students,
      });
    } catch (error) {
      console.log(error);
      console.log();
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getSingle: async (req, res) => {
    try {
      const id1 = parseInt(req.params.id);
      // const student = students.find((student) => student.id === id);
      const student = await StudentModel.findOne({
        where: {
          id: id1,
        },
      });
      res.json({
        student,
      });
    } catch (error) {
      res.status(404).json({ message: "Error id not found" });
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;
      // const student = await StudentModel.create({
      //   firstName: payload.firstName,
      //   lastName: payload.lastName,
      //   phone: payload.phone,
      // });
      const student = new StudentModel();
      student.firstName = payload.firstName;
      student.lastName = payload.lastName;
      student.phone = payload.phone;
      await student.save();
      res.status(200).json({
        message: "Student Created",
        student,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  update: async (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      // const student = students.find((student) => student.id === id);
      // const indexOfStudentToRemove = students.indexOf(student);
      const student = await StudentModel.findByPk(id);
      if (!student) {
        return res.status(404).json({
          message: "There is no student with this id",
          id,
        });
      }
      (student.firstName = payload.firstName
        ? payload.firstName
        : student.firstName),
        (student.lastName = payload.lasttName
          ? payload.lastName
          : student.lastName),
        (student.phone = payload.phone ? payload.phone : student.phone),
        await student.save();
      res.status(200).json({
        message: "Student data with id updated",
        student,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server error",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const student = await StudentModel.findByPk(id);
      if (!student) {
        return res.status(404).json({
          message: "Student does not exsits",
        });
      }
      await student.destroy();
      res.status(200).json({
        message: "Student with id deleted",
        student,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};

export default StudentController;
