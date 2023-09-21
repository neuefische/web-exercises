import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const ratingSchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
  },
  { timestamps: true }
);

const Rating = models?.Rating || model("Rating", ratingSchema);
export default Rating;
