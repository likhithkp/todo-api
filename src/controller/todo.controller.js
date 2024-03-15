const Todo = require("../models/todoSchema");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get task by id
const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Add new task
const addTodo = async (req, res) => {
  try {
    const task = await Todo.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update the task
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const taskToBePatched = await Todo.findByIdAndUpdate(id, req.body);
    if (!taskToBePatched) {
      res.status(404).json({
        message: "You are trying to update the task which doesn't exist!",
      });
    } else {
      const updatedTask = await Todo.findById(id);
      res.status(200).json(updatedTask);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete the task
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const taskToBeDeleted = await Todo.findByIdAndDelete(id);
    if (!taskToBeDeleted) {
      res.status(404).json({ message: "Task does not exist!" });
    } else {
      res.status(200).json({ message: "Task deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo,
};
