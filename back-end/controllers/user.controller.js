const User = require('../db').User;

// const passport = require('passport');

exports.registerUser = async (req, res) => {
    // let firstName = req.body.firstName;
    // let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    // let personalBudgetId = req.body.personalBudgetId;
    // let familyBudgetId = req.body.familyBudgetId;

    User.register(email, password, async (error, registeredUser) => {



        if (error) {
            console.log(error.message);
            return res.status(500).send(error.message);
        }


        res.send("Created user: " + email);

        registeredUser.firstName = req.body.firstName;
        registeredUser.lastName = req.body.lastName;
        
        await registeredUser.save();

        
    });
}

exports.getAllUsers = async (req, res) => {
    let users = await User.findAll();
    res.json("get all users");
    console.log(users);
}