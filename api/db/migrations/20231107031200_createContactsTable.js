exports.up = function (knex) {
  return knex.schema.createTable('contacts', function (table) {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('phone');
    table.string('message');
    table.timestamp(true, true)
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contacts");
};
