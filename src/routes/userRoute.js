import express from "express";
import {
  readUserController,
  updateUserController,
  updatePasswordController,
  deleteUserController,
} from "../controllers/userController.js";
const UserRoute = express.Router();

UserRoute.get("/readOne/:idUser", readUserController);
UserRoute.put("/update", updateUserController);
UserRoute.put("/updatePassword", updatePasswordController);
UserRoute.delete("/delete", deleteUserController);

export default UserRoute;
