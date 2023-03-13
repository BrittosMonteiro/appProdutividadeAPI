import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now() },
  description: { type: String, required: false },
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  item: { type: Array, required: false },
  priority: { type: Number, required: true, default: 0 },
  title: { type: String, required: true },
  updatedAt: { type: Date, required: true, default: Date.now() },
});

const ListModel = mongoose.model("list", listSchema);

export default ListModel;
