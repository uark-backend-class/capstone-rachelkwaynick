const Budget = require('../db').Budget;
const Category = require('../db').Category;
const Item = require('../db').Item;
const Transaction = require('../db').Transaction;

//Item Level
exports.calculateTransactionSum = async (req, res) => {
    let transactions = await Transaction.findAll({where: {itemId: req.params.id}});

    let transactionArray = [];

    for (let i = 0; i < transactions.length; i++){
        transactionArray.push(Number.parseFloat(transactions[i].amt)) 
    }

    let transactionSum = (transactionArray.reduce((acc, curr) => acc + curr)).toFixed(2)

    res.send(transactionSum)
}

exports.calculateItemRemaining = async (req, res) => {
    let itemObj = await Item.findAll({where: {id: req.params.id}});
    
    let itemPlanned = itemObj[0].plannedAmt;

    let transactions = await Transaction.findAll({where: {itemId: req.params.id}});

    let transactionArray = [];

    for (let i = 0; i < transactions.length; i++){
        transactionArray.push(Number.parseFloat(transactions[i].amt)) 
    }

    let transactionSum = (transactionArray.reduce((acc, curr) => acc + curr)).toFixed(2)

    let itemRemaining = itemPlanned - transactionSum
    console.log(itemRemaining)

    res.json(itemRemaining)
}