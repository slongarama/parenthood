const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  new_price: { type: Number, required: true },
  used_price: { type: Number, required: true },
  trial_price: { type: Number, required: true },
  inventory: { type: Number, required: true },
  date_added: { type: Date, required: true },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
