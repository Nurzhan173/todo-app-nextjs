const express = require('express');
const { PrismaClient } = require('@prisma/client');
const protect = require('../middlewares/authMiddleware'); // Middleware to verify JWT tokens

const prisma = new PrismaClient();
const router = express.Router();

// Get All Tasks for Logged-in User
router.get('/', protect, async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' }, // Optional: Sort by creation date
    });
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a New Task
router.post('/', protect, async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        userId: req.user.id,
      },
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { title, status } = req.query;

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task || task.userId !== req.user.id) {
      return res.status(404).json({ error: 'Task not found or unauthorized.' });
    }

    // Update the task with new data
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title: title !== undefined ? title : task.title,
        status: status !== undefined ? status === 'true' : task.status,
      },
    });

    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Server error.' });
  }
});


// Delete a Task
router.delete('/:id', protect, async (req, res) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task || task.userId !== req.user.id) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await prisma.task.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send(); // No content
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
