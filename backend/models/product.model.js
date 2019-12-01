const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const productSchema = new Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   brand: { type: String, required: true },
//   new_price: { type: Number, required: true },
//   used_price: { type: Number, required: true },
//   trial_price: { type: Number, required: true },
//   inventory: { type: Number, required: true },
//   date_added: { type: Date, required: true },
// }, {
//   timestamps: true,
// });
//individula
const productSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	brand: { type: String, required: true },
	photo: { type: String },
	// date_added: { type: Date, required: true },

	manufacture_details: {
	    model_number: { type: String, required: true },
	    release_date: { type: Date, required: true },
	    expiration_date: { type: Date }
	},

	shipping_details: {
		weight: { type: Number, required: true },
		width: { type: Number, required: true },
		height: { type: Number, required: true },
		depth: { type: Number, required: true },
	},

	// quantity:  { type: Number, required: true },
	pricing: {
		retail_price: { type: Number, required: true },
		cost_price: { type: Number, required: true },
		likenew_price: { type: Number, required: true },
		preloved_price: { type: Number },
		resell_price: { type: Number },
		// trial_price: { type: Number, required: true },
	},

	tags: {
		priceRange: { type: String },
		brand: { type: String },
		product_type: { type: String },
	},

	//internal use
	recall_checks: {
		recalled: { type: Boolean }
		last_checked: { type: Date }
	},

	product_history: {
		acquiring_details{
			date_acquired: { type: Date },
			initial_condition: { type: String },
			refurbishing_details: {
				notes: { type: String }
			}
		},
		rental_details: {
			times_rented: { type: Number }
		}
	}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
