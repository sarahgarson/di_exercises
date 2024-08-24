const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5012;

app.use(cors());
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/world', (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.message}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


