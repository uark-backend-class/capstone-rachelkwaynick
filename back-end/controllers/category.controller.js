const Category = require('../db').Category;
const Budget = require('../db').Budget;

exports.addCategory = async (req, res) => {
 let budget = await Budget.findOne({
   where: { userId: req.user.id },
 });
  res.render('add-edit-category', {budget})
}

exports.getAllCategories = async (req, res) => {
  let categories = await Category.findAll();
  res.json(categories);
  console.log(categories);
};

exports.updateCategory = async (req, res) => {


  
  
  await Category.upsert(req.body);

  res.redirect('/main')
  
}

// exports.updateCategory = async (req, res) => {
//   await Category.upsert(req.body);
//   let category = await Category.findAll({ where: { id: req.body.id } });
//   res.send(category);
// };

exports.getOneCategory = async (req, res) => {
  let category = await Category.findAll({ where: { id: req.params.id } });
  console.log(category);
  res.send(category);
};

exports.getAllBudgetCategories = async (req, res) => {
  let categories = await Category.findAll({
    where: { budgetId: req.params.id },
  });
  console.log(categories);
  res.send(categories);
};
