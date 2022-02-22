import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

import rootRouter from "./routers/rootRouter";
import etoeRouter from "./routers/etoeRouter";
import solutionRouter from "./routers/solutionRouter";
import cloudRouter from "./routers/cloudRouter";
import careerRouter from "./routers/careerRouter";
import usersRouter from "./routers/usersRouter";
import videosRouter from "./routers/videosRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/etoe", etoeRouter);
app.use("/solution", solutionRouter);
app.use("/cloud", cloudRouter);
app.use("/career", careerRouter);
app.use("/users", usersRouter);
app.use("/videos", videosRouter);

export default app;
