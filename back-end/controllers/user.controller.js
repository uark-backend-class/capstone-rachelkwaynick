const User = require('../db').User;
const Budget = require('../db').Budget;

// const passport = require('passport');


exports.registerUser = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  User.register(email, password, async (error, registeredUser) => {
    

    if (error) {
      console.log(error.message);
      return res.status(500).send(error.message);
    }

    // res.send('Created user: ' + email);

    
    
    registeredUser.firstName = req.body.firstName;
    registeredUser.lastName = req.body.lastName;

    let budget = new Budget();

    budget.userId = registeredUser.id;

    await budget.save();

    await registeredUser.save();

    next();
  });

};


exports.getAllUsers = async (req, res) => {
  let users = await User.findAll();
  res.json(users);
  console.log(users);
};
