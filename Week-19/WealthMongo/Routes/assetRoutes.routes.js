const express = require('express');
const router = express.Router();
const Asset = require('../models/Asset.model');

// Get all assets of a user
router.get('/assets', async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new asset
router.post('/assets', async (req, res) => {
  try {
    const asset = new Asset(req.body);
    // asset.user = demoUserId; // Set the user for the asset (demo user in this example)
   
    await asset.save();
    res.status(201).json(asset);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Update an asset
router.put('/assets/:id', async (req, res) => {
  // Implement logic to update an asset for the user
  const { id } = req.params;
  try {
    const asset = await Asset.findOneAndUpdate(
      { _id: id},
      req.body,
      { new: true }
    );
    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }
    res.json(asset);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Delete an asset
router.delete('/assets/:id', async (req, res) => {
  // Implement logic to delete an asset for the user
  const { id } = req.params;
  try {
    const asset = await Asset.findOneAndRemove({ _id: id });
    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }
    res.json({ message: 'Asset deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;