import MarksModel from "../../model/marks/index.js";
const markController = {
  getAll: async (req, res) => {
    try {
      const payload = req.body;
      const mark = await MarksModel.findAll();
      res.json({
        mark,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getSingle: async (req, res) => {
    try {
      const id1 = parseInt(req.params.id);
      const mark = await MarksModel.findOne({
        where: {
          id: id1,
        },
      });
      if (!mark) {
        return res.status(404).json({ message: "Error id not found" });
      }
      res.status(200).json({
        mark,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;
      // const id = parseInt(req.params.id);
      // const mark = marks.find((mark) => mark.id === id);
      // if (!mark) {
      //   const newmark = {
      //     id: id,
      //     mark: payload.mark,
      //   };
      //   marks.push(newmark);
      const mark = new MarksModel();
      mark.English = payload.English;
      mark.Urdu = payload.Urdu;
      mark.Maths = payload.Maths;
      await mark.save();

      res.status(200).json({
        message: "mark Added",
        mark,
      });
      // }
      // res.status(404).json({
      //   message: "mark with id already exits",
      //   id,
      // });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
  update: async (req, res) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      // const mark = marks.find((mark) => mark.id === id);
      // const indexOfmarkToRemove = marks.indexOf(mark);
      const mark = await MarksModel.findByPk(id);
      if (!mark) {
        return res.status(404).json({
          message: "Error no marks found with this id.",
        });
      }
      mark.English = payload.English ? payload.English : mark.English;
      mark.Urdu = payload.Urdu ? payload.Urdu : mark.Urdu;
      mark.Maths = payload.Maths ? payload.Maths : mark.Maths;
      await mark.save();
      res.status(200).json({
        message: "mark data with id updated",
        mark,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const mark = await MarksModel.findByPk(id);
      // const mark = marks.find((mark) => mark.id === id);
      // const indexOfmarkToRemove = marks.indexOf(mark);
      if (!mark) {
        return res.status(404).json({ message: "No mark with this id" });
      }
      await mark.destroy();
      res.status(200).json({
        message: "mark with id deleted",
        id,
        mark,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default markController;
