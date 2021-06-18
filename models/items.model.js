const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Items = mongoose.model('item', itemSchema)

module.exports = Items