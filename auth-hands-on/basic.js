const express = require('express');
const app = express();

const PORT = 3000;
const USERNAME = 'admin';
const PASSWORD = 'password123';

// Middleware zur Authentifizierung
app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).send('Authorization header required');

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  if (username === USERNAME && password === PASSWORD) {
    next();
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/protected', (req, res) => {
  res.send('Willkommen im geschützten Bereich!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
