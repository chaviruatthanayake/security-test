const express = require('express');
const app = express();

// This will trigger SEC-001: Hardcoded secret
const SECRET_KEY = "AKIAIOSFODNN7EXAMPLE";

// This will trigger SEC-002: SQL injection
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query);
});

// This will trigger SEC-004: Dangerous eval
app.post('/calc', (req, res) => {
  const result = eval(req.body.code);
  res.json({ result });
});

app.listen(3000);
// testing webhook
