

const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/delteTodo');


//define API routes 
router.post("/createTodo", createTodo);  //matlab ki/createTodo is path ko maine controller createTodo se map kara diy hai
router.get("/getTodos", getTodo)
router.get("/getTodos/:id", getTodoById)
router.put("/updateTodo/:id", updateTodo)
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;