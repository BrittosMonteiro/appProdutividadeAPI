import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now() },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  surname: { type: String, required: false },
  updatedAt: { type: Date, required: true, default: Date.now() },
  username: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
