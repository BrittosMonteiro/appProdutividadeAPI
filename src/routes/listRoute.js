import express from "express";
import {
  createListController,
  readMiniListController,
  readListController,
  readItemListController,
  updateListController,
  updateListStatusController,
  deleteListController,
} from "../controllers/listController.js";
const ListRoute = express.Router();

ListRoute.post("/create", createListController);
ListRoute.get("/readMiniList/:idUser", readMiniListController);
ListRoute.get("/readList/:idUser", readListController);
ListRoute.get("/readOne/:idList", readItemListController);
ListRoute.put("/update", updateListController);
ListRoute.put("/updateStatus", updateListStatusController);
ListRoute.delete("/delete", deleteListController);

export default ListRoute;
