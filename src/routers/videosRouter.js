import express from "express";

import {
  watch,
  edit,
  editPost,
  remove,
  upload,
  uploadPost,
} from "../controllers/videosController";

import { protectorMiddleware, videoUpload } from "../middlewares";

const videosRouter = express.Router();

videosRouter.get("/:id([0-9a-f]{24})", watch);
videosRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(edit)
  .post(editPost);
videosRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(remove);
videosRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(upload)
  .post(videoUpload.single("video"), uploadPost);

export default videosRouter;
