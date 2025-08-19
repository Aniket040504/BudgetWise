const Transaction = require('../model/Transaction');

// @desc Get all transactions
// @route  GET /api/transactions
// @access Public
const getTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

const addTransaction = async (req, res) => {
  res.json('hello from controller');
};

const deleteTransaction = async (req, res) => {
  res.json('hello from controller');
};

module.exports = {
  getTransaction,
  addTransaction,
  deleteTransaction,
};
