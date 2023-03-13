import express from "express";
import {
  createListController,
  readMiniListController,
  readListController,
  readItemListController,
  updateListController,
  deleteListController,
} from "../controllers/listController.js";
const ListRoute = express.Router();

ListRoute.post("/create", createListController);
ListRoute.get("/readMiniList/:idUser", readMiniListController);
ListRoute.get("/readList/:idUser", readListController);
ListRoute.get("/readOne/:idList", readItemListController);
ListRoute.put("/update", updateListController);
ListRoute.delete("/delete", deleteListController);

export default ListRoute;
