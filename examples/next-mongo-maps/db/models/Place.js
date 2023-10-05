import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    coordinates: [Number],
  },
  { timestamps: true }
);

const Place = models?.Place || model("Place", placeSchema);
export default Place;
