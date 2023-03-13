import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now() },
  description: { type: String, required: false },
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  priority: { type: Number, required: true, default: 0 },
  title: { type: String, required: true },
  updatedAt: { type: Date, required: true, default: Date.now() },
});

const TaskModel = mongoose.model("task", taskSchema);

export default TaskModel;
