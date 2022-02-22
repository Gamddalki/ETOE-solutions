import express from "express";

import {
  technology,
  middleware,
  support,
  consulting,
} from "../controllers/rootController";

const solutionRouter = express.Router();

solutionRouter.get("/technology", technology);
solutionRouter.get("/middleware", middleware);
solutionRouter.get("/support", support);
solutionRouter.get("/consulting", consulting);

export default solutionRouter;
