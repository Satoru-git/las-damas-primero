/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('travel').del();
  await knex('customer').del();
  await knex('customer').insert([
    {
      userName: 'takasan',
      id: 1,
      salt: 'abc',
      hashed_password: 'takasanabc',
    },
    {
      userName: 'bucchi',
      id: 2,
      salt: 'abc',
      hashed_password: 'bucchiabc',
    },
    {
      userName: 'gonsan',
      id: 3,
      salt: 'abc',
      hashed_password: 'gonsanabc',
    },
    {
      userName: 'kunosan',
      id: 4,
      salt: 'abc',
      hashed_password: 'kunosanabc',
    },
  ]);
};
