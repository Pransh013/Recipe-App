import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/users.mjs";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use('/auth', userRouter)
mongoose.connect(
  process.env.MONGO_URI
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App started at ${PORT}`);
});
