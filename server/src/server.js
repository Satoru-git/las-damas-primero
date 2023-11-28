const express = require('express');
const knex = require('../db');
const cors = require('cors');

const setUpServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.get('/data', async (req, res) => {
    const customerList = await knex('customer').select();
    res.status(200).send(customerList);
  });
  app.get('/', (req, res) => {
    res.send('<div>Hello world</div>');
  });
  app.post('/data', (req, res) => {
    res.status(200).send(req.body);
  });

  return app;
};

module.exports = { setUpServer };
