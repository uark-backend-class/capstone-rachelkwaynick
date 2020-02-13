const User = require('../db').User;
const passport = require('passport');

exports.isLoggedIn = function isLoggedIn (req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
}