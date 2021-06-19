const express = require('express');

const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

const config = require('config');

const dburl = config.get('DB_URI');

const cors = require('cors');

// create node app
const app = express();

// apply cors middleware
app.use(cors());

// routes
const itemsRoute = require('./routes/api/items.route');
const usersRoute = require('./routes/api/users.route');
const authRoute = require('./routes/api/auth.route');

// express json middleware
app.use(express.json());

// use routes
app.use('/api/items', itemsRoute);
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);


// connect mongodb
mongoose
  .connect(dburl, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

  // connecting port
app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
})