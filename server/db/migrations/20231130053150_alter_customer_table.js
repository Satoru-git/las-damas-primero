/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('customer', (table) => {
    table.dropColumn('customer_id');
    table.dropColumn('password');
    table.string('userName');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('customer', (table) => {
    table.string('customer_id').alter();
    table.string('password').alter();
    table.dropColumn('userName');
  });
};
