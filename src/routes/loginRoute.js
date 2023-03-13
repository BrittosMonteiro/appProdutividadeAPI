import express from "express";
import {
  createUserController,
  loginController,
} from "../controllers/loginController.js";
const LoginRoute = express.Router();

LoginRoute.post("/createroute", createUserController);
LoginRoute.post("/loginroute", loginController);

export default LoginRoute;
