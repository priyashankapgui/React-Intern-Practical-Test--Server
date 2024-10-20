const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const productRouter = require("./routes/productRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
