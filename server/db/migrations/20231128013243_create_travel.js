/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('travel', (table) => {
    table.foreign('customer_id').references('id').inTable('customer');
    table.string('hotel_name');
    table.date('start_date');
    table.date('end_date');
    table.integer('number_people');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('travel');
};
