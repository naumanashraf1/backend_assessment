const { celebrate } = require('celebrate');
const UserProfile = require('../models/UserProfile');
const { userProfileSchema } = require('../validations/validation.schema');

const createUserProfile = celebrate(
  { body: userProfileSchema },
  async (req, res, next) => {
    try {
      const userProfile = await UserProfile.query().insert(req.body);
      res.status(201).json(userProfile);
    } catch (error) {
      next(error);
    }
  }
);

const getAllUserProfiles = async (req, res, next) => {
  try {
    const userProfiles = await UserProfile.query();
    res.json(userProfiles);
  } catch (error) {
    next(error);
  }
};

const getUserProfileById = async (req, res, next) => {
  try {
    const userProfile = await UserProfile.query().findById(req.params.id);
    if (userProfile) {
      res.json(userProfile);
    } else {
      res.status(404).json({ message: 'User profile not found' });
    }
  } catch (error) {
    next(error);
  }
};

const updateUserProfileById = celebrate(
  { body: userProfileSchema },
  async (req, res, next) => {
    try {
      const userProfile = await UserProfile.query().patchAndFetchById(
        req.params.id,
        req.body
      );
      if (userProfile) {
        res.json(userProfile);
      } else {
        res.status(404).json({ message: 'User profile not found' });
      }
    } catch (error) {
      next(error);
    }
  }
);

const deleteUserProfileById = async (req, res, next) => {
  try {
    const deletedCount = await UserProfile.query().deleteById(req.params.id);
    if (deletedCount > 0) {
      res.json({ message: 'User profile deleted successfully' });
    } else {
      res.status(404).json({ message: 'User profile not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserProfile,
  getAllUserProfiles,
  getUserProfileById,
  updateUserProfileById,
  deleteUserProfileById,
};
