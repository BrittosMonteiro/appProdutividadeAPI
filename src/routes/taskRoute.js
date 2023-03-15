import express from "express";
import {
  createTaskController,
  readTaskMiniListController,
  readTaskListController,
  readTasksController,
  updateTaskController,
  updateTaskStatusService,
  deleteTaskController,
} from "../controllers/taskController.js";
const TaskRoute = express.Router();

TaskRoute.post("/create", createTaskController);
TaskRoute.get("/readMiniList/:idUser", readTaskMiniListController);
TaskRoute.get("/readList/:idUser", readTaskListController);
TaskRoute.get("/readOne/:idTask", readTasksController);
TaskRoute.put("/update", updateTaskController);
TaskRoute.put("/updateStatus", updateTaskStatusService);
TaskRoute.delete("/delete", deleteTaskController);

export default TaskRoute;
