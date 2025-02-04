const Transaction = require('../db').Transaction;

exports.showUserTransactions = async (req, res) => {
  res.render('transaction-page')
};

exports.getAllTransactions = async (req, res) => {
  let transactions = await Transaction.findAll();
  res.json(transactions);
  console.log(transactions);
};

exports.updateTransaction = async (req, res) => {
  await Transaction.upsert(req.body);
  let transaction = await Transaction.findAll({ where: { id: req.body.id } });
  res.send(transaction);
};

exports.getOneTransaction = async (req, res) => {
  let transaction = await Transaction.findAll({ where: { id: req.params.id } });
  console.log(transaction);
  res.send(transaction);
};
