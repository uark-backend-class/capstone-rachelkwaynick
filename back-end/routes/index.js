const router = require('express').Router();

const userController = require('../controllers/user.controller');
const budgetController = require('../controllers/budget.controller');
const categoryController = require('../controllers/category.controller');
const itemController = require('../controllers/item.controller');
const transactionController = require('../controllers/transaction.controller');
const calculateController = require('../controllers/calculate.controller');

//Users
router.post('/api/registerUser', userController.registerUser);
router.get('/api/getAllUsers', userController.getAllUsers);

//Log In User

//Budget Routes
router.get('/api/getAllBudgets', budgetController.getAllBudgets);
router.post('/api/updateBudget', budgetController.updateBudget);
router.get('/api/getOneBudget/:id', budgetController.getOneBudget);
router.get(
  '/api/getAllBudgetInfoForUser/:id',
  budgetController.getAllBudgetInfoForUser,
);

//Category Routes
router.get('/api/getAllCategories', categoryController.getAllCategories);
router.post('/api/updateCategory', categoryController.updateCategory);
router.get('/api/getOneCategory/:id', categoryController.getOneCategory);
router.get(
  '/api/getAllBudgetCategories/:id',
  categoryController.getAllBudgetCategories,
);

//Item Routes
router.get('/api/getAllItems', itemController.getAllItems);
router.post('/api/updateItem', itemController.updateItem);
router.get('/api/getOneItem/:id', itemController.getOneItem);
router.get('/api/getAllCategoryItems/:id', itemController.getAllCategoryItems);
router.get(
  '/api/getAllItemTransactions/:id',
  itemController.getAllItemTransactions,
);

//Transaction Routes
router.get('/api/getAllTransactions', transactionController.getAllTransactions);
router.post('/api/updateTransaction', transactionController.updateTransaction);
router.get(
  '/api/getOneTransaction/:id',
  transactionController.getOneTransaction,
);

//Calculations
router.get(
  '/api/calculateTransactionSum/:id',
  calculateController.calculateTransactionSum,
);
router.get(
  '/api/calculateItemRemaining/:id',
  calculateController.calculateItemRemaining,
);
router.get(
  '/api/calculateItemPercentage/:id',
  calculateController.calculateItemPercentage,
);
router.get(
  '/api/calculateCategoryPlanned/:id',
  calculateController.calculateCategoryPlanned,
);
router.get(
  '/api/calculateIncomePlanned/:id',
  calculateController.calculateIncomePlanned,
);

module.exports = router;
