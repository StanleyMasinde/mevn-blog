exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function(table) {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.text('content', ['longtext']);
      table.boolean('is_published').notNullable().defaultTo(false);
      table.integer('user_id')
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts');
  }