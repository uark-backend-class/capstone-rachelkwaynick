const User = require('../db').User;

// const passport = require('passport');

exports.registerUser = (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let personalBudgetId = req.body.personalBudgetId;
    let familyBudgetId = req.body.familyBudgetId;

    console.log('register function running')

    User.register(firstName, lastName, email, password, personalBudgetId, familyBudgetId, (error, registeredUser) => {
        if (error) {
            console.log(error.message);
            return res.status(500).send(error.message);
        }
        res.send("Created user: " + email);
    });
}

exports.getAllUsers = async (req, res) => {
    let users = await User.findAll();
    res.json(users);
    console.log(users);
}