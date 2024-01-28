const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://shubhamspatilnbr:shubham@cluster0.h6dpqoj.mongodb.net/mini-paytm'
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 30,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 30,
    trim: true,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = { User, Account };
