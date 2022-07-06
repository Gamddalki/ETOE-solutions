import express from "express";

import { middleware, support, consulting } from "../controllers/rootController";

const solutionRouter = express.Router();

solutionRouter.get("/middleware", middleware);
solutionRouter.get("/support", support);
solutionRouter.get("/consulting", consulting);

export default solutionRouter;
