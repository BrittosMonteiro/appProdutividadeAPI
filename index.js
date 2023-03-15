import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5050;
const CONNECT = process.env.MONGO_CONNECT_PROD;
const DATABASE = process.env.MONGO_DATABASE;

import ListRoute from "./src/routes/listRoute.js";
import RoutineRoute from "./src/routes/routineRoute.js";
import TaskRoute from "./src/routes/taskRoute.js";
import UserRoute from "./src/routes/userRoute.js";
import LoginRoute from "./src/routes/loginRoute.js";

app.use("/lists", ListRoute);
app.use("/routines", RoutineRoute);
app.use("/tasks", TaskRoute);
app.use("/users", UserRoute);
app.use("/login", LoginRoute);

try {
  mongoose.set("strictQuery", true);
  mongoose.connect(`${CONNECT}/${DATABASE}`);
} catch (err) {
  console.log(err.message);
}

app.listen(PORT);
