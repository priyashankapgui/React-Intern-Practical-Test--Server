const mongoose = require("mongoose");
MONGODB_URL="mongodb+srv://Ushangame:Q8nsCUzzr8XwrnOK@products.gay1l.mongodb.net/?retryWrites=true&w=majority&appName=Products"

//Connect the DB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection success!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
