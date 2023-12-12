exports.up = function (knex) {
  return knex.schema.createTable('User_Profile', function (table) {
    table.increments('id').primary();
    table.string('first_name', 255);
    table.string('last_name', 255);
    table.string('department', 255);
    table.string('designation', 255);
    table.string('address', 255);
    table
      .integer('tenant_id')
      .unsigned()
      .references('id')
      .inTable('Tenant_Profile')
      .onDelete('CASCADE') // Optional: Cascade deletion if needed
      .nullable(); // Make the column nullable
    table.string('image_url', 255);
    table.string('city', 255);
    table.string('country', 255);
    table.string('bio', 255);
    table.json('social_links');
    table.integer('employee_id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('User_Profile');
};
