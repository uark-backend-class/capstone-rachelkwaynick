const router = require('express').Router();

const userController = require('../controllers/user.controller');
const budgetController = require('../controllers/budget.controller');


//Register User
router.route('/api/registerUser')
    .post(userController.registerUser)
    .get(userController.getAllUsers); // What should the GET be for registerUser?

//Get Users 


//Log In User


//Budget Routes
router.get('/api/getAllBudgets', budgetController.getAllBudgets);

router.post('/api/updateBudget', budgetController.updateBudget);

module.exports = router;