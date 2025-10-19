const express = require('express');
const app = express();

// SEC-001: Hardcoded AWS secret (will be caught!)
const AWS_KEY = "AKIAIOSFODNN7EXAMPLE";

// SEC-003: Missing helmet (will be caught!)
// app.use(helmet());  // <- This line is missing

app.use(express.json());

// SEC-002: SQL injection vulnerability (will be caught!)
app.get('/user/:id', async (req, res) => {
  const userId = req.params.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  const result = await db.query(query);
  res.json(result);
});

// SEC-004: Dangerous eval usage (will be caught!)
app.post('/calculate', (req, res) => {
  const result = eval(req.body.expression);
  res.json({ result });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
