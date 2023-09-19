import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ratings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Rating",
      },
    ],
  },
  { timestamps: true }
);

const Pet = models?.Pet || model("Pet", petSchema);
export default Pet;
