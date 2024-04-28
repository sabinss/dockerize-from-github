const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'server is runninres',
  });
});

app.listen(process.env.PORT, () => {
  console.log('server is listeneing');
});
