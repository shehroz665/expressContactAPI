
const express = require('express');
const dotenv = require("dotenv").config();
const errorHandler = require('./middlewares/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());

app.use("/api/contacts", require('./routes/contactRoutes'));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});