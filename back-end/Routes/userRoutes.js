const express = require('express');
const router = express.Router();
const { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deletetUser,
    updateUser } = require('../controllers/userController');

const { admin, protect } = require('../middleware/authMiddleware');


router.route('/').post(registerUser).get(protect, admin, getUsers);

router.post('/logout', logoutUser);

router.post('/auth', authUser);

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

router.route('/:id').delete(protect, admin, deletetUser).get(protect, admin, getUserById).put(protect, admin, updateUser);

module.exports = router;