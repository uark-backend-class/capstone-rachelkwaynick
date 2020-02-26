const Budget = require('../db').Budget;
const Category = require('../db').Category;
const Item = require('../db').Item;
const Transaction = require('../db').Transaction;

//Item Level
exports.calculateTransactionSum = async (req, res) => {
    // let transactions = await Transaction.findAll({where: {itemId: req.params.id}});

    // let transactionArray = [];

    // for (let i = 0; i < transactions.length; i++){
    //     transactionArray.push(Number.parseFloat(transactions[i].amt)) 
    // }

    // let transactionSum = (transactionArray.reduce((acc, curr) => acc + curr)).toFixed(2)

    // res.send(transactionSum)

    let item = await Item.findByPk(req.params.id);

    let sum = await item.sumTransactions;

    res.send(`${sum}`)
}

exports.calculateItemRemaining = async (req, res) => {
    // let itemObj = await Item.findAll({where: {id: req.params.id}});
    
    // let itemPlanned = itemObj[0].plannedAmt;

    // let transactions = await Transaction.findAll({where: {itemId: req.params.id}});

    // let transactionArray = [];

    // for (let i = 0; i < transactions.length; i++){
    //     transactionArray.push(Number.parseFloat(transactions[i].amt)) 
    // }

    // let transactionSum = (transactionArray.reduce((acc, curr) => acc + curr)).toFixed(2)

    // let itemRemaining = itemPlanned - transactionSum
    // console.log(itemRemaining)

    // res.json(itemRemaining)

    let item = await Item.findByPk(req.params.id);

    let remaining = await item.itemRemaining;

    res.send(`${remaining}`)

}

exports.calculateItemPercentage = async (req, res) => {
    // let itemObj = await Item.findAll({where: {id: req.params.id}});
    
    // let itemPlanned = itemObj[0].plannedAmt;

    // let transactions = await Transaction.findAll({where: {itemId: req.params.id}});

    // let transactionArray = [];

    // for (let i = 0; i < transactions.length; i++){
    //     transactionArray.push(Number.parseFloat(transactions[i].amt)) 
    // }

    // let transactionSum = (transactionArray.reduce((acc, curr) => acc + curr)).toFixed(2)

    // let itemPercentage = transactionSum/itemPlanned;

    // res.json(itemPercentage.toFixed(2))

    let item = await Item.findByPk(req.params.id);

    let percentage = await item.itemPercentage;

    res.send(`${percentage}`)
}

exports.calculateCategoryPlanned = async (req, res) => {
    // let items = await Item.findAll({where: {categoryId: req.params.id}});

    // let itemsPlannedArray = [];

    // for (let i = 0; i < items.length; i++) {
    //     itemsPlannedArray.push(Number.parseFloat(items[i].plannedAmt))
    // }

    // let itemPlannedSum = (itemsPlannedArray.reduce((acc, curr) => acc + curr)).toFixed(2)

    // res.json(itemPlannedSum)

    let category = await Category.findByPk(req.params.id);

    let sumPlanned = await category.catPlanned;

    res.send(`${sumPlanned}`)

}

exports.calculateIncomePlanned = async (req, res) => {
    let budget = await Budget.findAll({
        where: {id: req.params.id},
        include: [{
            model: Category,
            where: {type: "income"}, 
            include: [Item]
        }]
    })

    let itemsPlannedArray = [];

    for(let i = 0; i < budget.length; i++){
        let categoriesArray = await budget[i].categories

        for(let j = 0; j < categoriesArray.length; j++){
            let itemsArray = await categoriesArray[j].items;

            for(let k = 0; k < itemsArray.length; k++){
                itemsPlannedArray.push(Number.parseFloat(itemsArray[k].plannedAmt));
            }
        }
    }
    
    let incomePlannedSum = (itemsPlannedArray.reduce((acc, curr) => acc + curr)).toFixed(2)

    res.json(incomePlannedSum)
}