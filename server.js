const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');

const dburl = require('./config/keys').DB_URI;

// create node app
const app = express();

app.use(cors());

// routes
const itemsRoute = require('./routes/api/items.route');

// body parser middleware
app.use(bodyParser.json());

app.use('/api/items', itemsRoute);

// connect mongodb
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
})