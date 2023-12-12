// models/TenantProfile.js
const { Model } = require('objection');

class TenantProfile extends Model {
  static get tableName() {
    return 'Tenant_Profile';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        tenant_name: { type: 'string', maxLength: 255 },
        address: { type: 'object' },
        city: { type: 'string', maxLength: 255 },
        state: { type: 'string', maxLength: 255 },
        country: { type: 'string', maxLength: 255 },
        zip_code: { type: 'string', maxLength: 255 },
        phone: { type: 'string', maxLength: 255 },
        web_url: { type: 'string', maxLength: 255 },
      },
    };
  }
}

module.exports = TenantProfile;
