import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../Models/Users.mjs";

const router = express.Router();
const secretKey = process.env.SECRET_KEY;

router.post("/register", async (req, res) => {
  const {
    body: { username, password },
  } = req;

  const user = await userModel.findOne({ username });
  if (user) return res.status(401).json("Username is already taken");

  const hashedPassword = await bcrypt.hash(password, 11);
  const newUser = new userModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "Registration Successfull" });
});

router.post('/login', async (req, res) => {
  const {
    body: { username, password },
  } = req;

  const user = await userModel.findOne({username});
  if(!user) return res.status(401).json({ message: "User not found" });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if(!isPasswordCorrect) return res.status(401).json({ message: "Incorrect password" });
  const token = jwt.sign({userId: user.id}, secretKey);
  
  res.json({userId: user.id, token});
})

export { router as userRouter };