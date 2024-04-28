const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'server is runninres',
  });
});

app.listen(3000, () => {
  console.log('server is listeneing');
});
