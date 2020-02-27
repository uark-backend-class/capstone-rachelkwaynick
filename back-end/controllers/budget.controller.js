const Budget = require('../db').Budget;
const Category = require('../db').Category;
const Item = require('../db').Item;
const Transaction = require('../db').Transaction;

exports.showUserBudget = (req, res) => {
  res.render('budget')
}

exports.getAllBudgets = async (req, res) => {
  let budgets = await Budget.findAll();
  res.json(budgets);
  console.log(budgets);
};

exports.updateBudget = async (req, res) => {
  await Budget.upsert(req.body);
  let budget = await Budget.findAll({ where: { id: req.body.id } });
  res.send(budget);
};

exports.getOneBudget = async (req, res) => {
  let budget = await Budget.findAll({ where: { id: req.params.id } });
  console.log(budget);
  res.send(budget);
};

//Get all budgets and all corresponding categories

exports.getAllBudgetInfoForUser = async (req, res) => {
  let budgetInfo = await Budget.findAll({
    where: { userId: req.params.id },
    include: [
      {
        model: Category,
        include: [
          {
            model: Item,
            include: [
              {
                model: Transaction,
              },
            ],
          },
        ],
      },
    ],
  });

  res.send(budgetInfo);
};
