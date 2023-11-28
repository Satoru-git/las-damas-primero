const express = require('express');
const knex = require('../db');

const setUpServer = () => {
  const app = express();
  app.use(express.json());
  app.get('/data', async (req, res) => {
    const customerList = await knex('customer').select();
    res.status(200).send(customerList);
  });
  app.post('/data', (req, res) => {
    res.status(200).send(req.body);
  });

  return app;
};

module.exports = { setUpServer };
