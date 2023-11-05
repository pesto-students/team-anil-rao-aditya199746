const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction.model');

// Get detailed breakdown of income and expenses for the current financial year
router.get('/detailed-breakdown', async (req, res) => {
  // Implement logic to fetch a detailed breakdown of income and expenses
  try {
    const transactions = await Transaction.find({
      user: demoUserId,
      transactionDate: { $gte: new Date(currentFinancialYearStartDate) },
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get detailed breakdown of income and expenses for a specific year and month
router.get('/detailed-breakdown/:year/:month', async (req, res) => {
  // Implement logic to fetch a detailed breakdown of income and expenses for a specific year and month
  const { year, month } = req.params;
  try {
    const transactions = await Transaction.find({
      user: demoUserId,
      transactionDate: {
        $gte: new Date(`${year}-${month}-01`),
        $lte: new Date(`${year}-${month}-31`),
      },
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;