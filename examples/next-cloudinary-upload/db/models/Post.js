import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    cover: {
      type: new Schema({
        width: Number,
        height: Number,
        url: String,
      }),
      required: true,
    },
  },
  { timestamps: true },
);

const Post = models?.Post || model("Post", schema);

export default Post;
