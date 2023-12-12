// server.js (continued)
const {
  createUserProfile,
  getAllUserProfiles,
  getUserProfileById,
  updateUserProfileById,
  deleteUserProfileById,
} = require('../controllers/user.controller');

const router = require('express').Router();

// Create a new user profile
router.post('/user-profiles', createUserProfile);

// Get all user profiles
router.get('/user-profiles', getAllUserProfiles);

// Get a user profile by ID
router.get('/user-profiles/:id', getUserProfileById);

// Update a user profile by ID
router.patch('/user-profiles/:id', updateUserProfileById);

// Delete a user profile by ID
router.delete('/user-profiles/:id', deleteUserProfileById);

module.exports = router;
