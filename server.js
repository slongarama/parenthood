const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json(path.join(__dirname, "client", "build")))
app.use(express.static(path.join(__dirname, "client", "public")))

// app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use('/products', productsRouter);
app.use('/users', usersRouter);

// app.use(express.static(path.join(__dirname, '../public/index.html')));
// app.get('*', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
// });
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

