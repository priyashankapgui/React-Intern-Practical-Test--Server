const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discountPercentage: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    required: false
  },
  category: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: false
  },
  stock: {
    type: Number,
    required: false
  },
  warrantyInformation: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: false
  },
  shippingInformation: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Product', productSchema);
