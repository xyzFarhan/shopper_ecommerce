const port = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://fahimfarhan12358:1234567890@cluster0.adjetsv.mongodb.net/mydatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

// MongoDB Schema Example (Replace with your own schema)
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  imageUrl: String
});

const Product = mongoose.model('Product', ProductSchema);

// Image Storage Configuration with Multer
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload = multer({ storage: storage });

// Serving Static Files (Images)
app.use('/images', express.static('upload/images'));

// API Routes
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Example Upload Endpoint
app.post("/upload", upload.single('productImage'), async (req, res) => {
  try {
    const { filename } = req.file;
    const imageUrl = `http://localhost:${port}/images/${filename}`;
    
    // Save image URL to MongoDB or perform other operations
    // Example: Saving to MongoDB
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      imageUrl: imageUrl
    });
    
    await newProduct.save();
    
    res.json({
      success: 1,
      message: "Image uploaded successfully",
      imageUrl: imageUrl
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({
      success: 0,
      message: "Error uploading image"
    });
  }
});

// Start Server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port", port);
  } else {
    console.log("Error:", error);
  }
});
