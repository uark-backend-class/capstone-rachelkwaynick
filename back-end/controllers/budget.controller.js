const Budget = require('../db').Budget;

exports.getAllBudgets = async (req, res) => {
    let budgets = await Budget.findAll();
    res.json(budgets);
    console.log(budgets);

}

exports.updateBudget = async (req, res) => {
    // req.body.userId = req.body.id
    await Budget.upsert(req.body);
    res.send()
}

