import formidable from "formidable";
const fileUploadController = {
  get: async (req, res) => {
    res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
  },
  post: (req, res, next) => {
    const form = formidable({
      keepExtensions: true,
    });
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      res.json({ fields, files });
    });
  },
};

export default fileUploadController;
