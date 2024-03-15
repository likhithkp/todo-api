const express = require("express");
const router = express.Router();
const {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo.controller");

//routes
router.get("/todos", getTodos);
router.get("/todo/:id", getTodoById);
router.post("/todo/new", addTodo);
router.put("/todo/update/:id", updateTodo);
router.delete("/todo/delete/:id", deleteTodo);

module.exports = router;
