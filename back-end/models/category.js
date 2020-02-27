module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    'category',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      type: Sequelize.STRING,
    },
    {
      freezeTableName: true,
      getterMethods: {
        async catPlanned() {
          let items = await this.getItems();

          let sum = 0;

          for (let item of items) {
            sum += Number.parseFloat(item.plannedAmt);
          }

          return sum;
        },
      },
    },
  );
};
