const mongoose = require("mongoose");

// Use the actual MONGODB_URL from your environment variable
const MONGODB_URL = "mongodb+srv://Ushangame:Q8nsCUzzr8XwrnOK@products.gay1l.mongodb.net/?retryWrites=true&w=majority&appName=Products";

// Connect to the DB
const connectDB = async () => {
  try {
    // Connect without deprecated options
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB connection success!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
