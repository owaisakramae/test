import "dotenv/config";
import express from "express";
import allRouter from "./routes/index.js";
import { connectDB } from "./db/config.js";
import syncDB from "./db/init.js";

connectDB();
syncDB().then(() => {
  console.log("working data synced");
});
const app = express();
app.use(express.json());

app.use(allRouter);

app.listen(3000, () => {
  console.log("server started");
});
