const teachers = [
  {
    id: 1,
    name: "John Doe",
    subject: "English",
  },
  {
    id: 2,
    name: "Jane Smith",
    subject: "Urdu",
  },
  {
    id: 3,
    name: "Alice Johnson",
    subject: "Maths",
  },
];
const TeacherController = {
  getAll: (req, res) => {
    try {
      res.json({
        teachers,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getSingle: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const teacher = teachers.find((teacher) => teacher.id === id);
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
  create: (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      const teacher = teachers.find((teacher) => teacher.id === id);
      if (!teacher) {
        const newteacher = {
          id: id,
          name: payload.name,
          subject: payload.subject,
        };
        teachers.push(newteacher);
        res.status(200).json({
          message: "Teacher Added",
          teachers,
        });
      }
      res.status(404).json({
        message: "Teacher with id already exits",
        id,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  update: (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      const teacher = teachers.find((teacher) => teacher.id === id);
      const indexOfTeacherToRemove = teachers.indexOf(teacher);
      teachers[indexOfTeacherToRemove].name = payload.name
        ? payload.name
        : teachers[indexOfTeacherToRemove].name;
      teachers[indexOfTeacherToRemove].subject = payload.subject
        ? payload.subject
        : teachers[indexOfTeacherToRemove].subject;
      res.status(200).json({
        message: "Teacher data with id updated",
        teachers,
      });
      if (!teacher) {
        return res.status(404).json({
          message: "Error no teacher found with this id.",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  delete: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const teacher = teachers.find((teacher) => teacher.id === id);
      const indexOfTeacherToRemove = teachers.indexOf(teacher);
      if (!teacher) {
        return res.status(404).json({ message: "No Teacher with this id" });
      }
      teachers.splice(indexOfTeacherToRemove, 1);
      res.status(200).json({
        message: "Teacher with id deleted",
        id,
        teachers,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default TeacherController;
