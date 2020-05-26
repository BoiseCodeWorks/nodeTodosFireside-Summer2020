import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Todo = new Schema(
  {
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Todo;
