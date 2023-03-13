import express from "express";
import {
  createRoutineController,
  readRoutineController,
  readRoutineListController,
  readRoutineMiniListController,
  updateRoutineController,
  deleteRoutineController,
} from "../controllers/routineController.js";
const RoutineRoute = express.Router();

RoutineRoute.post("/create", createRoutineController);
RoutineRoute.get("/readMiniList/:idUser", readRoutineMiniListController);
RoutineRoute.get("/readList/:idUser", readRoutineListController);
RoutineRoute.get("/readOne/:idRoutine", readRoutineController);
RoutineRoute.put("/update", updateRoutineController);
RoutineRoute.delete("/delete", deleteRoutineController);

export default RoutineRoute;
