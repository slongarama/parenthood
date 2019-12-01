const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	brand: { type: String, required: true },
	photo: { type: String },

	manufacture_details: {
	    model_number: { type: String }, //required: true },
	    release_date: { type: Date }, //required: true },
	    expiration_date: { type: Date }
	},

	shipping_details: {
		weight: { type: Number }, //required: true },
		width: { type: Number }, //required: true },
		height: { type: Number }, //required: true },
		depth: { type: Number }, //required: true },
	},

	quantity_available:  { type: Number, required: true },

	pricing: {
		retail_price: { type: Number },//, required: true },
		cost_price: { type: Number },//, required: true }, //internal use
		likenew_price: { type: Number },//, required: true },
		preloved_price: { type: Number }, //for later
		resell_price: { type: Number } //for later
	},

	tags: {
		priceRange: { type: String },
		brand: { type: String },
		product_type: { type: String }
	},

	//internal use
	recall_checks: {
		recalled: { type: Boolean },
		last_checked: { type: Date }
	},

	number_rented:  { type: Number },
	date_updated: { type: Date, required: true }

	//move to separate model
	// acquiring_details: {
	// 	date_acquired: { type: Date },
	// 	condition_acquired: { type: String }, //brand new, returned items etc
	// 	discount: { type: Number }
	// },

	// rental_details: {
	
	// }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
