const Budget = require('../db').Budget;

exports.getAllBudgets = async (req, res) => {
    let budgets = await Budget.findAll();
    res.json(budgets);
    console.log(budgets);

}

exports.updateBudget = async (req, res) => {
    await Budget.upsert(req.body);
    let budget = await Budget.findAll({where: {id: req.body.id}} );
    res.send(budget)
}

exports.getOneBudget = async (req, res) => {
    let budget = await Budget.findAll({where: {id: req.params.id}} );
    console.log(budget);
    res.send(budget)
}



