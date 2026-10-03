const express = require('express');
const router = express.Router();

// Temporary mock auth route handler for Stage 1 setup validation
router.post('/register', (req, res) => {
  const { name, email, password, college, degree, graduationYear, careerGoal } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  return res.status(201).json({
    success: true,
    message: 'User registered successfully (Stage 1 mock endpoint)',
    token: 'mock_jwt_token_stage1',
    user: {
      id: 'mock_user_1',
      name,
      email,
      college: college || 'Sample University',
      degree: degree || 'Computer Science',
      graduationYear: graduationYear || 2026,
      careerGoal: careerGoal || 'Full Stack Developer'
    }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide email and password.' });
  }

  return res.status(200).json({
    success: true,
    message: 'User logged in successfully (Stage 1 mock endpoint)',
    token: 'mock_jwt_token_stage1',
    user: {
      id: 'mock_user_1',
      name: 'John Doe',
      email,
      college: 'State University',
      degree: 'B.S. Computer Science',
      graduationYear: 2026,
      careerGoal: 'Full Stack Developer'
    }
  });
});

router.get('/me', (req, res) => {
  return res.status(200).json({
    success: true,
    user: {
      id: 'mock_user_1',
      name: 'John Doe',
      email: 'john@example.com',
      college: 'State University',
      degree: 'B.S. Computer Science',
      graduationYear: 2026,
      careerGoal: 'Full Stack Developer'
    }
  });
});

module.exports = router;
