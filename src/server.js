import express from "express";
import morgan from "morgan";

import rootRouter from "./routers/rootRouter";
import etoeRouter from "./routers/etoeRouter";
import solutionRouter from "./routers/solutionRouter";
import cloudRouter from "./routers/cloudRouter";

const PORT = 8000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/assets", express.static("assets"));
app.use("/", rootRouter);
app.use("/etoe", etoeRouter);
app.use("/solution", solutionRouter);
app.use("/cloud", cloudRouter);

const handleListening = () =>
  console.log(`Server Running!😊 🤍 http://localhost:${PORT} 🤍`);

app.listen(PORT, handleListening);
