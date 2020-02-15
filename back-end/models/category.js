module.exports = (sequelize, Sequelize) => {
    return sequelize.define('category', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
        }, 
        name: Sequelize.STRING,
        type: Sequelize.STRING,
    }, {freezeTableName: true});
}