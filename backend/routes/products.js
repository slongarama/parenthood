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
  const photo_name = req.body.photo;
  const retail_price = Number(req.body.retail_price);
  const cost_price = Number(req.body.cost_price);
  const likenew_price = Number(req.body.likenew_price);
  // const preloved_price = Number(req.body.preloved_price);
  // const resell_price = Number(req.body.resell_price);
  // const model_number = Number(req.body.model_number);
  // const release_date = Date.parse(req.body.release_date);
  // const weight = Number.parse(req.body.weight);
  // const width = Number.parse(req.body.width);
  // const height = Number.parse(req.body.height);
  // const depth = Number.parse(req.body.depth);
  const type = req.body.type;
  const date_acquired = Date.parse(req.body.date_acquired);

  const newProduct = new Product({
    name: name,
    description: description,
    brand: brand,
    photo: photo_name,
    pricing: {
      retail_price: retail_price,
      cost_price: cost_price,
      likenew_price: likenew_price,
      // preloved_price: preloved_price,
      // resell_price: resell_price
    },
    // manufacture_details: {
    //   model_number: model_number,
    //   release_date: release_date
    // },
    // shipping_details: {
    //   weight: weight,
      // width: width,
      // height: height,
      // depth: depth,
    // },
    tags: {
      // price_range: price_range,
      brand: brand,
      product_type: type
    },
    product_history: {
      acquiring_history: {
        date_acquired: date_acquired
      }
    }

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

router.route('/shop').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
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
      product.photo = req.body.photo;
      product.retail_price = Number(req.body.retail_price);
      product.cost_price = Number(req.body.cost_price);
      product.likenew_price = Number(req.body.likenew_price);
      // product.preloved_price = Number(req.body.preloved_price);
      // product.resell_price = Number(req.body.resell_price);
      // product.model_number = Number(req.body.model_number);
      // product.release_date = Date.parse(req.body.release_date);
      // product.weight = Number.parse(req.body.weight);
      // const width = Number.parse(req.body.width);
      // const height = Number.parse(req.body.height);
      // const depth = Number.parse(req.body.depth);
      product.type = req.body.type;
      product.date_acquired = Date.parse(req.body.date_acquired);

      product.save()
        .then(() => res.json('Product updated!'))
        // .then(() => console.log('Submitted'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
