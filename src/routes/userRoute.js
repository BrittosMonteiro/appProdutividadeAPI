import express from "express";
import {
  readUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController.js";
const UserRoute = express.Router();

UserRoute.get("/read/:idUser", readUserController);
UserRoute.put("/update", updateUserController);
UserRoute.delete("/delete", deleteUserController);

export default UserRoute;
