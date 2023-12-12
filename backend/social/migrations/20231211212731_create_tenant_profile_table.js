// migrations/YYYYMMDDHHMMSS_create_tenant_profile_table.js

exports.up = function (knex) {
  return knex.schema.createTable('Tenant_Profile', function (table) {
    table.increments('id').primary();
    table.string('tenant_id'); // Serial field
    table.string('tenant_name', 255);
    table.json('address');
    table.string('city', 255);
    table.string('state', 255);
    table.string('country', 255);
    table.string('zip_code', 255);
    table.string('phone', 255);
    table.string('web_url', 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('Tenant_Profile');
};
