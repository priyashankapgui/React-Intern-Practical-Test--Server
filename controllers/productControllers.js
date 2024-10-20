const Product = require("../models/Product");
const Counter = require("../models/Counter");

// Add a new product
exports.addProduct = async (req, res) => {
    try {
      let counter = await Counter.findByIdAndUpdate(
        { _id: "productid" },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
      );
  
      const newProductId = `E${counter.sequence_value}`;
  
      const {
        title,
        description,
        price,
        discountPercentage,
        images,
        category,
        rating,
        stock,
        warrantyInformation,
        brand,
        shippingInformation,
      } = req.body;
  
      const newProduct = new Product({
        productId: newProductId,
        title,
        description,
        price,
        discountPercentage,
        images,
        category,
        rating,
        stock,
        warrantyInformation,
        brand,
        shippingInformation,
      });
  
      await newProduct.save();
      res.json("Product added with ID: " + newProductId);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error adding product" });
    }
  };


// Get all products
exports.getAllProducts = (req, res) => {
    Product.find()
      .then((products) => res.json(products))
      .catch((err) => {
        console.log(err);
        res.status(500).json("Error fetching products");
      });
  };
  
  // Delete a product by productId
  exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({ productId: req.params.productId })
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.json("Product deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json("Error: " + err);
      });
  };
  