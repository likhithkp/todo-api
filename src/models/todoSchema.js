const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "Please enter the task"],
    },
    completed: {
      type: Boolean,
      required: [true, "Please enter the task status"],
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
