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
      start_date: '2023-11-28',
      end_date: '2023-11-29',
      number_people: 2,
    },
    {
      customer_id: 4,
      hotel_name: 'hotel2',
      start_date: '2023-11-25',
      end_date: '2023-11-28',
      number_people: 4,
    },
    {
      customer_id: 2,
      hotel_name: 'hotel3',
      start_date: '2023-11-23',
      end_date: '2023-11-29',
      number_people: 4,
    },
  ]);
};
