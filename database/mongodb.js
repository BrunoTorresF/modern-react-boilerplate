/* If using MongoDB, install mongoose with
 * npm install -S mongoose  or
 * yarn add mongoose
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/yourDB');

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
}).on('error', error => {
  console.log('Connection error:', error);
});

//Example mongoose schema
const exampleSchema = Schema({
  name: String,
  password: String,
  location: {
    type: { type: String },
    coordinates: [Number, Number],
  },
  picture: String,
  expenses: Number,
  review: [
    {
      body: String,
      ObjectId: String,
    },
  ],
});

module.exports = {
  db,
  exampleSchema: mongoose.model('example', exampleSchema),
};
