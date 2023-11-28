import mongoose from 'mongoose';
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
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Post = models?.Post || model('Post', schema);

export default Post;
