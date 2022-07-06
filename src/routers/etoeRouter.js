import express from "express";

import { vision } from "../controllers/rootController";

const etoeRouter = express.Router();

etoeRouter.get("/vision", vision);

export default etoeRouter;
