const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routers')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'connecting',
}));

module.exports = app;
