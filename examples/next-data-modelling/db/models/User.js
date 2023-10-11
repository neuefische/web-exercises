import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User = models?.User || model("User", schema);

export default User;
