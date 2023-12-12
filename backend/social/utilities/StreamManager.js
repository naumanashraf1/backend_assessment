const TenantProfile = require('../models/TenantProfile');
const UserProfile = require('../models/UserProfile');
const tenant_created = 'tenant_created';
const user_created = 'user_created';
const processMessage = async (kafkaMessage) => {
  // Start working here
  try {
    const { properties } = kafkaMessage;
    if (kafkaMessage.event_name === tenant_created) {
      properties['address'] = { address: properties.address };
      console.log(properties);
      await TenantProfile.query().insert(properties);
    }
    if (kafkaMessage.event_name === user_created) {
      properties['address'] = { address: properties.address };
      await UserProfile.query().insert(properties);
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { processMessage };
