import express from "express";

import { consulting } from "../controllers/rootController";

const solutionRouter = express.Router();

solutionRouter.get("/consulting", consulting);

export default solutionRouter;
