const express = require("express");
const mongoose = require("mongoose");
const homeRoutes = require('./routes/homeRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', homeRoutes);



// Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017/underrated-profession", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch(error => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

