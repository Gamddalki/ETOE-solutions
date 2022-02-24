import express from "express";

import { education, welfare, jobs } from "../controllers/rootController";

const careerRouter = express.Router();

careerRouter.get("/education", education);
careerRouter.get("/jobs", jobs);

export default careerRouter;
