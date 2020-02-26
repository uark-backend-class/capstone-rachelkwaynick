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
                let transactions = await this.getTransactions();
                
                let sum = 0;

                for (let transaction of transactions){
                    sum += Number.parseFloat(transaction.amt)
                }

                return sum;
            },
            async itemRemaining() {
                let transactions = await this.getTransactions();

                let sum = 0;

                for (let transaction of transactions){
                    sum += Number.parseFloat(transaction.amt)
                }

                let plannedAmt = this.plannedAmt;

                let remaining = plannedAmt - sum;

                return remaining
            },
            async itemPercentage() {
                let transactions = await this.getTransactions();

                let sum = 0;

                for (let transaction of transactions){
                    sum += Number.parseFloat(transaction.amt)
                }

                let plannedAmt = this.plannedAmt;

                let percentage = sum / plannedAmt;

                return percentage;
            }
        }
    });
}