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



router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deletetUser).get(getUserById).put(updateUser);

module.exports = router;