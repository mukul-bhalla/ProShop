const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken')
// @desc Auth user and get token
// @route POST/api/users/login
// @access PUBLIC
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }
    else {
        res.status(401);
        throw new Error('Invalid Email or Password');
    }
})


// @desc register user 
// @route POST/api/users/
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
    // res.send("register user")
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400);
        throw new Error('User already exists')
    }

    const user = new User({ name, email, password })
    await user.save()


    if (user) {
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin

        })
    }
    else {
        res.status(400);
        throw new Error('Invalid user data')
    }
})


// @desc Logout user and clear cookie 
// @route POST/api/users/logout
// @access PRIVATE
const logoutUser = asyncHandler(async (req, res) => {
    // res.send("logout  user")
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' });
})


// @desc Get userprofile
// @route GET/api/users/profile
// @access PUBLIC
const getUserProfile = asyncHandler(async (req, res) => {
    res.send("Get user profile")
})


// @desc UPDATE userprofile
// @route PUT/api/users/profile   (Token is used instead of id )
// @access PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("Update user profile")
})


// @desc  get all users
// @route GET/api/users/
// @access PRIVATE/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send("All user Admin")
})

// @desc  Get user by id
// @route  GET/api/users/:id
// @access PRIVATE/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send("Get user by ID Admin")
})

// @desc  Delete user
// @route DELETE/api/users/:id
// @access PRIVATE/Admin
const deletetUser = asyncHandler(async (req, res) => {
    res.send("Delete a user  Admin")
})


// @desc  UPDATE users
// @route  PUT/api/users/:id
// @access PRIVATE/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send("Update user  Admin")
})



module.exports = { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deletetUser, updateUser };
