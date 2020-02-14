const Item = require('../db').Item;

exports.getAllItems = async (req, res) => {
    let items = await Item.findAll();
    res.json(items);
    console.log(items);

}

exports.updateItem = async (req, res) => {
    await Item.upsert(req.body);
    let item = await Item.findAll({where: {id: req.body.id}} );
    res.send(item)
}

exports.getOneItem = async (req, res) => {
    let item = await Item.findAll({where: {id: req.params.id}} );
    console.log(item);
    res.send(item)
}

exports.getAllCategoryItems = async (req, res) => {
    let items = await Item.findAll({where: {categoryId: req.params.id}});
    console.log(items);
    res.send(items)
}