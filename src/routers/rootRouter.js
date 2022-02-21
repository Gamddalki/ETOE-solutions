import express from "express";

import {
  home,
  etoe,
  solution,
  cloud,
  contact,
  career,
  search,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/etoe", etoe);
rootRouter.get("/solution", solution);
rootRouter.get("/cloud", cloud);
rootRouter.get("/contact", contact);
rootRouter.get("/career", career);
rootRouter.get("/search", search);

export default rootRouter;
