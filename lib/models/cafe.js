const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  food: {
    type: Boolean
  }
});

module.exports = mongoose.model('Cafe', schema);