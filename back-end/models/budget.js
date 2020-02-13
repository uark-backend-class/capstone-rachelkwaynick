module.exports = (sequelize, Sequelize) => {
    return sequelize.define('budget', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
        }, 
        userId: Sequelize.INTEGER, 
        family: Sequelize.BOOLEAN,
    }, {freezeTableName: true});
}