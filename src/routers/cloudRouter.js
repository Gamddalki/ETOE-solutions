import express from "express";

import { database, service } from "../controllers/rootController";

const cloudRouter = express.Router();

cloudRouter.get("/database", database);
cloudRouter.get("/service", service);

export default cloudRouter;
