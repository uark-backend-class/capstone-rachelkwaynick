module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    'budget',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      family: Sequelize.BOOLEAN,
    },
    { freezeTableName: true },
  );
};
