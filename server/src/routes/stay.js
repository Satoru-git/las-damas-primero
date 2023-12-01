const router = require('express').Router();
const knex = require('../../db/index.js');

router.get('/:username', async (req, res) => {
  const userName = req.params.username;
  try {
    const userHistory = await knex
      .select('hotel_no')
      .from('customer')
      .innerJoin('travel', 'customer.id', 'travel.customer_id')
      .where({ userName: userName });
    await res.status(200).send(userHistory);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
