const User = require('../db').User;
const passport = require('passport');

exports.isLoggedIn = function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  req.session.redirectTo = req.url;

  res.redirect('/login')
};

exports.welcomePage = (req, res) => {
  res.render('welcome');
}

exports.registerPage = (req, res) => {
  res.render('register');
}

exports.loginUser = (req, res, next) => {
  res.render('login')
}

exports.logoutUser = (req, res) => {
  req.logout();

  res.redirect('/welcome')
}

exports.authenticateUser = passport.authenticate(
  'local', {
    successRedirect: '/main', 
    failureRedirect: '/login'
  }
)