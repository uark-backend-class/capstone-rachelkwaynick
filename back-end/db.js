const Sequelize = require('sequelize');

const UserModel = require('./models/user');
const BudgetModel = require('./models/budget');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = UserModel(sequelize, Sequelize);
const Budget = BudgetModel(sequelize, Sequelize);


sequelize.sync()
    .then(() => console.log('Tables are created'))


module.exports = {
    User,
    Budget,
}