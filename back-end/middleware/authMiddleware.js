const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler');
const User = require('../models/userModel');

//Protect Routes
const protect = asyncHandler(async (req, res, next) => {
    let token
    //Read the jwt from cookie
    token = req.cookie.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (e) {
            console.log(e);
            res.status(401);
            throw new Error('Not Authorized, token failed')
        }
    }
    else {
        res.status(401);
        throw new Error('Not authorized, no token')
    }
})
// Admin Middleware
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    }
    else {
        res.status(401);
        throw new Error('Not authorized as admin')
    }
}

module.exports = admin, protect;