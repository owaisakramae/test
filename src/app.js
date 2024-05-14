import express from "express";
import allRouter from "./routes/index.js";
import { connectDB } from "./db/config.js";

connectDB();
const app = express();
app.use(express.json());

app.use(allRouter);

app.listen(3000, () => {
  console.log("server started");
});
