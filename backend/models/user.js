import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  status: {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
  department: {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
  country: {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
});

export const User = mongoose.model("User", UserSchema);
