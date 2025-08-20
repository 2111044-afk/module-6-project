const express = require('express');
const router = express.Router();

let users = []; // In-memory storage

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Invalid user data' });

  const user = { id: users.length + 1, name, email };
  users.push(user);
  res.status(201).json(user);
});

// GET user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// PUT update user
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Invalid user data' });

  user.name = name;
  user.email = email;
  res.json(user);
});

// DELETE user
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: 'User deleted' });
});

module.exports = router;
