// models/UserProfile.js
const { Model } = require('objection');
const TenantProfile = require('./TenantProfile');
const { knex } = require('../db');

Model.knex(knex);
class UserProfile extends Model {
  static get tableName() {
    return 'User_Profile';
  }

  static get relationMappings() {
    return {
      tenantProfile: {
        relation: Model.BelongsToOneRelation,
        modelClass: TenantProfile,
        join: {
          from: 'User_Profile.tenant_id',
          to: 'Tenant_Profile.tenant_id',
        },
      },
    };
  }
}

module.exports = UserProfile;
