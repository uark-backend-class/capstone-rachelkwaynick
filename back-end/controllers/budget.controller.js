const Budget = require('../db').Budget;

exports.getAllBudgets = async (req, res) => {
    let budgets = await Budget.findAll();
    console.log(budgets);
    res.json(budgets)
}

// exports.createBudget = async (req, res) => {
//     req.body.
// }