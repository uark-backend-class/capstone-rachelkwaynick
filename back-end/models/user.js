const passportLocalSequelize = require('passport-local-sequelize');

module.exports = (sequelize, Sequelize) => {
  let User = sequelize.define(
    'user',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      hash: Sequelize.TEXT,
      salt: Sequelize.TEXT,
      personalBudgetId: Sequelize.INTEGER,
      familyBudgetId: Sequelize.INTEGER,
    },
    { freezeTableName: true },
  );

  passportLocalSequelize.attachToUser(User, {
    usernameField: 'email',
    hashField: 'hash',
    saltField: 'salt',
  });

  return User;
};
