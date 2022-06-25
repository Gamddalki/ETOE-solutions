import express from "express";
import morgan from "morgan";

import rootRouter from "./routers/rootRouter";
import etoeRouter from "./routers/etoeRouter";
import solutionRouter from "./routers/solutionRouter";
import cloudRouter from "./routers/cloudRouter";
import careerRouter from "./routers/careerRouter";

const PORT = 8000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", rootRouter);
app.use("/etoe", etoeRouter);
app.use("/solution", solutionRouter);
app.use("/cloud", cloudRouter);
app.use("/career", careerRouter);

const handleListening = () =>
  console.log(`Server Running!😊 🤍 http://localhost:${PORT} 🤍`);

app.listen(PORT, handleListening);
