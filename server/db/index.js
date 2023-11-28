const knex = require('knex');
const knexConfig = require('./knexfile');
require('dotenv').config();
console.log('NODE_ENV', process.env.NODE_ENV);
module.exports = knex(knexConfig[process.env.NODE_ENV]);
