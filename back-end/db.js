const Sequelize = require('sequelize');

const UserModel = require('./models/user');
const BudgetModel = require('./models/budget');
const CategoryModel = require('./models/category');
const ItemModel = require('./models/item');
const TransactionModel = require('./models/transaction');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = UserModel(sequelize, Sequelize);
const Budget = BudgetModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Item = ItemModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize,Sequelize);

User.hasOne(Budget);
Budget.belongsTo(User);
Budget.hasMany(Category);
Category.belongsTo(Budget);
Category.hasMany(Item);
Item.belongsTo(Category);
Item.hasMany(Transaction);
Transaction.belongsTo(Item);
Transaction.belongsTo(Budget);



sequelize.sync({force: true})
    .then(() => console.log('Tables are created'))


module.exports = {
    User,
    Budget,
    Category, 
    Item, 
    Transaction
}