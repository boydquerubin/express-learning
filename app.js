const express = require("express");

const app = express();

// Logs on every request to the server
app.use((req, res, next) => {
  console.log("This always runs!");
  next();
});

// Handles requests to "/add-product"
app.get("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send('<h1>The "Add Product" Page</h1>');
});

// Handles requests to the root "/"
app.get("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

// Starts the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
