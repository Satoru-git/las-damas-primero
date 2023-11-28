/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('travel', (table) => {
    table.integer('customer_id');
    table.foreign('customer_id').references('id').inTable('customer');
    table.string('hotel_name');
    table.date('checkin');
    table.integer('people');
    table.integer('days');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('travel');
};
