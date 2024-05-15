import StudentModel from "../../model/student/index.js";

const students = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    grade: "A",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 22,
    grade: "B",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 21,
    grade: "C",
  },
];
const StudentController = {
  getAll: (req, res) => {
    try {
      res.json({
        students,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getSingle: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const student = students.find((student) => student.id === id);
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
  update: (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      const student = students.find((student) => student.id === id);
      const indexOfStudentToRemove = students.indexOf(student);
      if (!student) {
        return res.status(404).json({
          message: "There is no student with this id",
          id,
        });
      } else {
        const newstudent = {
          id: id,
          name: payload.name,
          age: payload.age,
          grade: payload.grade,
        };
        students.splice(indexOfStudentToRemove, 1, newstudent);
        res.status(200).json({
          message: "Student data with id updated",
          students,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server error",
      });
    }
  },
  delete: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const student = students.find((student) => student.id === id);
      const indexOfStudentToRemove = students.indexOf(student);
      if (!student) {
        return res.status(404).json({
          message: "Student does not exsits",
        });
      }
      students.splice(indexOfStudentToRemove, 1);
      res.status(200).json({
        message: "Student with id deleted",
        students,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};

export default StudentController;
