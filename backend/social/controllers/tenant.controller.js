// controllers/tenantProfileController.js
const { celebrate } = require('celebrate');

const TenantProfile = require('../models/TenantProfile');
const { tenantProfileSchema } = require('../validations/validation.schema');

const createTenantProfile = celebrate(
  { body: tenantProfileSchema },
  async (req, res, next) => {
    try {
      const tenantProfile = await TenantProfile.query().insert(req.body);
      res.status(201).json(tenantProfile);
    } catch (error) {
      next(error);
    }
  }
);

const getAllTenantProfiles = async (req, res, next) => {
  try {
    const tenantProfiles = await TenantProfile.query();

    res.json(tenantProfiles);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getTenantProfileById = async (req, res, next) => {
  try {
    const tenantProfile = await TenantProfile.query().findById(req.params.id);
    if (tenantProfile) {
      res.json(tenantProfile);
    } else {
      res.status(404).json({ message: 'Tenant profile not found' });
    }
  } catch (error) {
    next(error);
  }
};

const updateTenantProfileById = celebrate(
  { body: tenantProfileSchema },
  async (req, res, next) => {
    try {
      const tenantProfile = await TenantProfile.query().patchAndFetchById(
        req.params.id,
        req.body
      );
      if (tenantProfile) {
        res.json(tenantProfile);
      } else {
        res.status(404).json({ message: 'Tenant profile not found' });
      }
    } catch (error) {
      next(error);
    }
  }
);

const deleteTenantProfileById = async (req, res, next) => {
  try {
    const deletedCount = await TenantProfile.query().deleteById(req.params.id);
    if (deletedCount > 0) {
      res.json({ message: 'Tenant profile deleted successfully' });
    } else {
      res.status(404).json({ message: 'Tenant profile not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTenantProfile,
  getAllTenantProfiles,
  getTenantProfileById,
  updateTenantProfileById,
  deleteTenantProfileById,
};
