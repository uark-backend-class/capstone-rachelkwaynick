const router = require('express').Router();

const userController = require('../controllers/user.controller');
const budgetController = require('../controllers/budget.controller');
const categoryController = require('../controllers/category.controller');
const itemController = require('../controllers/item.controller');
const transactionController = require('../controllers/transaction.controller');
const calculateController = require('../controllers/calculate.controller');
const authController = require('../controllers/auth.controller');



//Log In/Register
router.get('/', authController.welcomePage);
router.get('/register', authController.registerPage);
router.post('/registerUser', userController.registerUser, authController.authenticateUser);
router.get('/login', authController.loginUser);
router.post('/loginUser', authController.authenticateUser);
router.get('/logout', authController.logoutUser);


router.use(authController.isLoggedIn);

router.get('/main', budgetController.showUserBudget);


router.get('/addCategory', categoryController.addCategory);



//Users
router.get('/getAllUsers', userController.getAllUsers);


//Budget Routes
router.get('/getAllBudgets', budgetController.getAllBudgets);
router.post('/updateBudget', budgetController.updateBudget);
router.get('/getOneBudget/:id', budgetController.getOneBudget);
router.get(
  '/getAllBudgetInfoForUser/:id',
  budgetController.getAllBudgetInfoForUser,
);

//Category Routes
router.get('/getAllCategories', categoryController.getAllCategories);
router.post('/updateCategory', categoryController.updateCategory);
router.get('/getOneCategory/:id', categoryController.getOneCategory);
router.get(
  '/getAllBudgetCategories/:id',
  categoryController.getAllBudgetCategories,
);

//Item Routes
router.get('/getAllItems', itemController.getAllItems);
router.post('/updateItem', itemController.updateItem);
router.get('/getOneItem/:id', itemController.getOneItem);
router.get('/getAllCategoryItems/:id', itemController.getAllCategoryItems);
router.get(
  '/getAllItemTransactions/:id',
  itemController.getAllItemTransactions,
);

//Transaction Routes
router.get('/getAllTransactions', transactionController.getAllTransactions);
router.post('/updateTransaction', transactionController.updateTransaction);
router.get(
  '/getOneTransaction/:id',
  transactionController.getOneTransaction,
);
router.get('/transactions', transactionController.showUserTransactions);

//Calculations
router.get(
  '/calculateTransactionSum/:id',
  calculateController.calculateTransactionSum,
);
router.get(
  '/calculateItemRemaining/:id',
  calculateController.calculateItemRemaining,
);
router.get(
  '/calculateItemPercentage/:id',
  calculateController.calculateItemPercentage,
);
router.get(
  '/calculateCategoryPlanned/:id',
  calculateController.calculateCategoryPlanned,
);
router.get(
  '/calculateIncomePlanned/:id',
  calculateController.calculateIncomePlanned,
);

module.exports = router;
