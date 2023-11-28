/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('customer').del();
  await knex('customer').insert([
    {
      customer_id: 'takasan',
      password: 'abc',
      salt: 'abc',
      hashed_password: 'takasanabc',
    },
    {
      customer_id: 'bucchi',
      password: 'abc',
      salt: 'abc',
      hashed_password: 'bucchiabc',
    },
    {
      customer_id: 'gonsan',
      password: 'abc',
      salt: 'abc',
      hashed_password: 'gonsanabc',
    },
    {
      customer_id: 'kunosan',
      password: 'abc',
      salt: 'abc',
      hashed_password: 'kunosanabc',
    },
  ]);
};
