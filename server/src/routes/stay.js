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
router.post('/:username', async (req, res) => {
  try {
    const userName = req.params.username;
    const hotels = req.body;
    const customerId = await knex
      .select('customer_id')
      .from('customer')
      .innerJoin('travel', 'customer.id', 'travel.customer_id')
      .where({ userName: userName })
      .first();
    const travelHistory = await {
      hotel_no: hotels.hotel_no,
      hotel_name: hotels.hotel_name,
      customer_id: customerId.customer_id,
    };
    await knex('travel').insert(travelHistory);
    await res.status(200).send({ message: 'リスト追加完了しました' });
  } catch (err) {
    res.status(404).send(err);
  }
});
module.exports = router;
