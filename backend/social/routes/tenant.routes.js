// server.js (continued)
const {
  createTenantProfile,
  getAllTenantProfiles,
  getTenantProfileById,
  updateTenantProfileById,
  deleteTenantProfileById,
} = require('../controllers/tenant.controller');

const router = require('express').Router();
// Create a new tenant profile
router.post('/tenant-profiles', createTenantProfile);

// Get all tenant profiles
router.get('/tenant-profiles', getAllTenantProfiles);

// Get a tenant profile by ID
router.get('/tenant-profiles/:id', getTenantProfileById);

// Update a tenant profile by ID
router.patch('/tenant-profiles/:id', updateTenantProfileById);

// Delete a tenant profile by ID
router.delete('/tenant-profiles/:id', deleteTenantProfileById);

module.exports = router;
