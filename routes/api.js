const express = require('express');
const router = express.Router();
const {
  createEntry,
  getAllEntries,
  getEntryById,
  updateEntry,
  deleteEntry,
  getAverageUnits,
  getMostProjectsWard,
  getTotalAffordableUnits,
  getUnderConstructionCount,
  getMostFrequentAgency,
  getMedianUnits,
  getProjectsOver100,
  getHighestAverageWard
} = require('../controllers/dataController');

// 🔧 CRUD Routes
router.post('/data', createEntry);
router.get('/data', getAllEntries);
router.get('/data/:id', getEntryById);
router.put('/data/:id', updateEntry);
router.delete('/data/:id', deleteEntry);

// 📊 Analytical Question Endpoints
router.get('/questions/average-units', getAverageUnits);
router.get('/questions/most-projects-ward', getMostProjectsWard);
router.get('/questions/total-affordable-units', getTotalAffordableUnits);
router.get('/questions/under-construction-count', getUnderConstructionCount);
router.get('/questions/most-frequent-agency', getMostFrequentAgency);
router.get('/questions/median-units', getMedianUnits);
router.get('/questions/projects-over-100', getProjectsOver100);
router.get('/questions/highest-average-ward', getHighestAverageWard);

module.exports = router;
