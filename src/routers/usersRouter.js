import express from "express";

import {
  see,
  githubLoginStart,
  githubLoginFinish,
  logout,
  edit,
  editPost,
  leave,
  changePassword,
  changePasswordPost,
} from "../controllers/usersController";

import {
  protectorMiddleware,
  publicOnlyMiddleware,
  avatarUpload,
} from "../middlewares";

const usersRouter = express.Router();

usersRouter.get("/:id", see);
usersRouter.get("/github/start", publicOnlyMiddleware, githubLoginStart);
usersRouter.get("/github/finish", publicOnlyMiddleware, githubLoginFinish);
usersRouter.get("/logout", protectorMiddleware, logout);
usersRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(edit)
  .post(avatarUpload.single("avatar"), editPost);
usersRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(changePassword)
  .post(changePasswordPost);
usersRouter.get("/delete", protectorMiddleware, leave);

export default usersRouter;
