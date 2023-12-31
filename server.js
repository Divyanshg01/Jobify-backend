import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
//CUSTOM IMPORTS
import { validateTest } from "./middleware/validationMiddleware.js";
//routers
import jobRouter from "./routes/jobRouter.js";

//middlewares

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.post("/api/v1/test", validateTest, (req, res) => {
  const { name } = req.body;
  res.json({ message: `hello ${name}` });
});

app.use(express.json());
app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log("server is running...");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
