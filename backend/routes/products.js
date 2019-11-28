const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const brand = req.body.brand;
  const new_price = Number(req.body.new_price);
  const used_price = Number(req.body.used_price);
  const trial_price = Number(req.body.trial_price);
  const inventory = Number(req.body.inventory);
  const date_added = Date.parse(req.body.date_added);

  const newProduct = new Product({
    name,
    description,
    brand,
    new_price,
    used_price,
    trial_price,
    inventory,
    date_added,
  });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/view/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.name = req.body.name;
      product.description = req.body.description;
      product.brand = req.body.brand;
      product.new_price = Number(req.body.new_price);
      product.used_price = Number(req.body.used_price);
      product.trial_price = Number(req.body.trial_price);
      product.inventory = Number(req.body.inventory);
      product.date_added = Date.parse(req.body.date_added);

      product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
