exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.boolean('is_author').notNullable().defaultTo(false);
      table.string('password').notNullable();
      table.enu('role', ['admin', 'user']);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  }