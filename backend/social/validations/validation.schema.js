// validationSchemas.js
const Joi = require('joi');

const userProfileSchema = Joi.object({
  first_name: Joi.string().max(255).required(),
  last_name: Joi.string().max(255).required(),
  department: Joi.string().max(255),
  designation: Joi.string().max(255),
  tenant_id: Joi.number().integer().required(),
  image_url: Joi.string().max(255),
  city: Joi.string().max(255),
  country: Joi.string().max(255),
  bio: Joi.string().max(255),
  social_links: Joi.object(),
  employee_id: Joi.number().integer(),
});

const tenantProfileSchema = Joi.object({
  tenant_name: Joi.string().max(255).required(),
  address: Joi.object().required(),
  city: Joi.string().max(255).required(),
  state: Joi.string().max(255).required(),
  country: Joi.string().max(255).required(),
  zip_code: Joi.string().max(255).required(),
  phone: Joi.string().max(255).required(),
  web_url: Joi.string().max(255).required(),
});

module.exports = {
  userProfileSchema,
  tenantProfileSchema,
};
