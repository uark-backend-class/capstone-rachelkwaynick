const router = require('express').Router();

const userController = require('../controllers/user.controller');

router.route('/registerUser')
    .post(userController.registerUser);
    // .get(userController.getAllUsers);

// router.route('/createBudget')
//     .post(budgetController.)

module.exports = router;