const express = require('express');
const knex = require('../db');

const setUpServer = () => {
  const app = express();
  app.use(express.json());
  app.get('/data', async (req, res) => {
    const customerList = await knex('customer').select();
    res.status(200).send(JSON.stringify(customerList));
  });

  return app;
};

module.exports = { setUpServer };
