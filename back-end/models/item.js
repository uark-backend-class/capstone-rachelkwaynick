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
            async sumTransactions() {
                console.log('sumTrans')
                let transactions = await this.getTransactions();
                
                let sum = 0;

                for (let transaction of transactions){
                    sum += Number.parseFloat(transaction.amt)
                }

                console.log(sum)

                return sum;
            }
        }
    });
}