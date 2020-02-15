module.exports = (sequelize, Sequelize) => {
    return sequelize.define('transaction', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
        }, 
        desc: Sequelize.STRING,
        date: Sequelize.DATE,
        amt: Sequelize.STRING,
    }, {freezeTableName: true});
}