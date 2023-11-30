/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('travel', (table) => {
    table.increments('id').primary();
    table.integer('hotel_no');
    table.date('checkout');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('travel', (table) => {
    table.dropColumn('id');
    table.dropColumn('hotel_no');
    table.dropColumn('checkout');
  });
};
