import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const offererSchema = new Schema({
  name: { type: String, required: true },
});

const serviceSchema = new Schema(
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
      type: offererSchema,
      required: true,
    },
  },
  { timestamps: true }
);

const Service = models?.Service || model("Service", serviceSchema);
export default Service;
