const AsyncAwaitError = require("./AsyncAwaitError");
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

exports.AuthenticateTheUser = AsyncAwaitError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(res.status(401).json({
            success: false,
            message: "Please Login/Register to Shop Your Favorite Products 👻"
        }))
    }
    const decodedData = jwt.verify(token, "Kuch Bhi")

    req.ourUser = await User.findById(decodedData.id);
    next();
})

exports.AuthorizedPerson = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.ourUser.role)) {
            return next(res.status(403).json({
                success: false,
                message: `Role: ${req.ourUser.role} isn't allowed to access this resource`
            }))
        }
        next();
    };
};