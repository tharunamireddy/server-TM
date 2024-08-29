const express = require('express');
const router = express.Router();
const { tasks } = require('../models/Task');

// GET /tasks - Fetch all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST /tasks - Create a new task
router.post('/', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    ...req.body,
  };
  tasks.push(newTask);
  res.json(newTask);
});

// PUT /tasks/:id - Update a task by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id == id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// DELETE /tasks/:id - Delete a task by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id == id);
  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

module.exports = router;
