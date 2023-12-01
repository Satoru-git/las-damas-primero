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
      customer_id: 1,
      hotel_name: 'コテージ蒜山の森',
      hotel_no: 142538,
      checkin: '2023-11-25',
      checkout: '2023-11-26',
      people: 2,
      days: 1,
    },
    {
      id: 2,
      customer_id: 1,
      hotel_name: 'あけぼの旅館＜岡山県＞',
      hotel_no: 39915,
      checkin: '2023-11-26',
      checkout: '2023-11-27',
      people: 4,
      days: 1,
    },
    {
      id: 3,
      customer_id: 1,
      hotel_name: 'ザ・シロヤマテラス津山別邸',
      hotel_no: 168420,
      checkin: '2023-11-29',
      checkout: '2023-11-30',
      people: 2,
      days: 1,
    },
    {
      id: 4,
      customer_id: 1,
      hotel_name: 'ホテルグランヴィア岡山',
      hotel_no: 822,
      checkin: '2023-08-29',
      checkout: '2023-08-30',
      people: 2,
      days: 1,
    },
  ]);
};
