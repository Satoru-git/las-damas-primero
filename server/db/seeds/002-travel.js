/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('travel').del();
  await knex('travel').insert([
    {
      customer_id: 3,
      hotel_name: 'hotel1',
      checkin: '2023-11-28',
      people: 2,
      days: 2,
    },
    {
      customer_id: 4,
      hotel_name: 'hotel2',
      checkin: '2023-11-26',
      people: 4,
      days: 3,
    },
    {
      customer_id: 2,
      hotel_name: 'hotel3',
      checkin: '2023-11-29',
      people: 2,
      days: 6,
    },
  ]);
};
