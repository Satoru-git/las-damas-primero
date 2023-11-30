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
    {
      userName: 'user1',
      id: 5,
      salt: 'a1b92z7',
      hashed_password:
        '41daafda9a68bcbbe970606097cc1c3155603210cadd4a0799527c1cc3427c46',
    },
  ]);
};
