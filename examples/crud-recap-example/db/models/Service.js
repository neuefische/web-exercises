import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    offerer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Service = models?.Service || model("Service", schema);
export default Service;
