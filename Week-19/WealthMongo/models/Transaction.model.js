const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  transactionDate: Date,
  transactionType: {
    type: String,
    enum: ['Income', 'Expense', 'Savings'],
    required: true,
  },
  amount: Number,
  description: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;