// start our router
// import express
const express = require('express')
// Only the router non of the other app stuff
const router = express.Router()
const dataController= require('../../controllers/api/todos')



//API Routes
// API Routes
// Index /api/todos
router.get('/', dataController.indexNotComplete, dataController.jsonTodos)
// Index /api/todos/completed
router.get('/completed', dataController.indexComplete, dataController.jsonTodos)
// Delete /api/todos/:id
router.delete('/:id', dataController.destroy, dataController.jsonTodo)
// Update /api/todos/:id
router.put('/:id', dataController.update, dataController.jsonTodo)
// Create /api/todos
router.post('/', dataController.create, dataController.jsonTodo)
// Show /api/todos/:id
router.get('/:id', dataController.show, dataController.jsonTodo)


module.exports = router