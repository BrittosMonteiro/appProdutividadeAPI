import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now() },
  description: { type: String, required: false },
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  title: { type: String, required: true },
  updatedAt: { type: Date, required: true, default: Date.now() },
});

const RoutineModel = mongoose.model("routine", routineSchema);

export default RoutineModel;
