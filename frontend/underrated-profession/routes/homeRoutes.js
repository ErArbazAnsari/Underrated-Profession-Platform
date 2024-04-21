const express = require('express');
const router = express.Router();

// Define route for home page
router.get('/', (req, res) => {
  res.send('Welcome to Underrated Professions!');
});

module.exports = router;
