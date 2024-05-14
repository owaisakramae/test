const marks = [
  {
    id: 1,
    mark: [10, 12, 12, 12, 15],
  },
  {
    id: 2,
    mark: [10, 10, 2, 20, 5],
  },
  {
    id: 3,
    mark: [8, 5, 15, 9, 16],
  },
];
const markController = {
  getAll: (req, res) => {
    try {
      res.json({
        marks,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getSingle: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const mark = marks.find((mark) => mark.id === id);
      if (!mark) {
        return res.status(404).json({ message: "Error id not found" });
      }
      res.status(200).json({
        mark,
      });
    } catch (error) {
      res.status(500).json({ message: "Error id not found" });
    }
  },
  create: (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      const mark = marks.find((mark) => mark.id === id);
      if (!mark) {
        const newmark = {
          id: id,
          mark: payload.mark,
        };
        marks.push(newmark);
        res.status(200).json({
          message: "mark Added",
          marks,
        });
      }
      res.status(404).json({
        message: "mark with id already exits",
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
      const mark = marks.find((mark) => mark.id === id);
      const indexOfmarkToRemove = marks.indexOf(mark);
      if (indexOfmarkToRemove === -1) {
        return res.status(404).json({
          message: "Error no marks found with this id.",
        });
      }
      marks[indexOfmarkToRemove].mark = payload.mark;
      res.status(200).json({
        message: "mark data with id updated",
        marks,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  delete: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const mark = marks.find((mark) => mark.id === id);
      const indexOfmarkToRemove = marks.indexOf(mark);
      if (!mark) {
        return res.status(404).json({ message: "No mark with this id" });
      }
      marks.splice(indexOfmarkToRemove, 1);
      res.status(200).json({
        message: "mark with id deleted",
        id,
        marks,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default markController;
