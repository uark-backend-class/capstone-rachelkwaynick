const router = require('express').Router();

const userController = require('../controllers/user.controller');
const budgetController = require('../controllers/budget.controller');
const categoryController = require('../controllers/category.controller');
const itemController = require('../controllers/item.controller');


//Register User
router.post('/api/registerUser', userController.registerUser);

//Get Users 
router.get('/api/getAllUsers', userController.getAllUsers);

//Log In User


//Budget Routes
router.get('/api/getAllBudgets', budgetController.getAllBudgets);

router.post('/api/updateBudget', budgetController.updateBudget);

router.get('/api/getOneBudget/:id', budgetController.getOneBudget);


//Category Routes
router.get('/api/getAllCategories', categoryController.getAllCategories);

router.post('/api/updateCategory', categoryController.updateCategory);

router.get('/api/getOneCategory/:id', categoryController.getOneCategory);

router.get('/api/getAllBudgetCategories/:id', categoryController.getAllBudgetCategories);



//Item Routes
router.get('/api/getAllItems', itemController.getAllItems);

router.post('/api/updateItem', itemController.updateItem);

router.get('/api/getOneItem/:id', itemController.getOneItem);

router.get('/api/getAllCategoryItems/:id', itemController.getAllCategoryItems);

module.exports = router;