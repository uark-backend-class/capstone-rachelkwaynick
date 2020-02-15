module.exports = (sequelize, Sequelize) => {
    return sequelize.define('item', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
        }, 
        name: Sequelize.STRING,
        plannedAmt: Sequelize.STRING,
        date: Sequelize.DATE, 
        type: Sequelize.STRING, 
        note: Sequelize.STRING,

    }, {
        freezeTableName: true,
        getterMethods: {
            async itemTransactions() {
                let transactions = await this.getTransactions();
                
                console.log(transactions)

                return transactions.map(transaction => transaction.amt);
            }
        }
    });
}