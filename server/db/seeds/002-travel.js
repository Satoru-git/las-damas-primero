/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('travel').del();
  await knex('travel').insert([
    {
      id: 1,
      customer_id: 3,
      hotel_name: 'hotel1',
      hotel_no: 1111,
      checkin: '2023-11-25',
      checkout: '2023-11-26',
      people: 2,
      days: 1,
    },
    {
      id: 2,
      customer_id: 4,
      hotel_name: 'hotel2',
      hotel_no: 2222,
      checkin: '2023-11-26',
      checkout: '2023-11-27',
      people: 4,
      days: 1,
    },
    {
      id: 3,
      customer_id: 2,
      hotel_name: 'hotel3',
      hotel_no: 3333,
      checkin: '2023-11-29',
      checkout: '2023-11-30',
      people: 2,
      days: 1,
    },
  ]);
};
