/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('customer').del();
  await knex('customer').insert([
    { customer_id: 'takasan', salt: 'abc', hashed_password: 'takasanabc' },
    { customer_id: 'bucchi', salt: 'abc', hashed_password: 'bucchiabc' },
    { customer_id: 'gonsan', salt: 'abc', hashed_password: 'gonsanabc' },
    { customer_id: 'kunosan', salt: 'abc', hashed_password: 'kunosanabc' },
  ]);
};
