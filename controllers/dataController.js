// HW2 logic implemented by Katherine Mendez

const CityData = require('../models/dataModel');

// 🔧 CRUD Operations

exports.createEntry = async (req, res) => {
  try {
    const entry = new CityData(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await CityData.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEntryById = async (req, res) => {
  try {
    const entry = await CityData.findById(req.params.id);
    if (!entry) return res.status(404).json({ error: 'Entry not found' });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const updated = await CityData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Entry not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const deleted = await CityData.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Entry not found' });
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📊 Analytical Question Endpoints

exports.getAverageUnits = async (req, res) => {
  const entries = await CityData.find();
  const totalUnits = entries.reduce((sum, e) => sum + (e.totalUnits || 0), 0);
  const average = (totalUnits / entries.length).toFixed(2);
  res.json({ question: 'Average units per project', answer: average });
};

exports.getMostProjectsWard = async (req, res) => {
  const entries = await CityData.find();
  const wardCounts = {};
  entries.forEach(e => {
    wardCounts[e.ward] = (wardCounts[e.ward] || 0) + 1;
  });
  const topWard = Object.entries(wardCounts).reduce((a, b) => b[1] > a[1] ? b : a);
  res.json({ question: 'Ward with most projects', answer: `${topWard[0]} (${topWard[1]} projects)` });
};

exports.getTotalAffordableUnits = async (req, res) => {
  const entries = await CityData.find();
  const total = entries.reduce((sum, e) =>
    sum + (e.units_0_30_AMI || 0) + (e.units_31_50_AMI || 0) +
    (e.units_51_60_AMI || 0) + (e.units_61_80_AMI || 0), 0);
  res.json({ question: 'Total affordable units', answer: total });
};

exports.getUnderConstructionCount = async (req, res) => {
  const count = await CityData.countDocuments({ status: /under construction/i });
  res.json({ question: 'Projects under construction', answer: count });
};

exports.getMostFrequentAgency = async (req, res) => {
  const entries = await CityData.find();
  const agencyCounts = {};
  entries.forEach(e => {
    const agency = e.agency || 'Unknown';
    agencyCounts[agency] = (agencyCounts[agency] || 0) + 1;
  });
  const topAgency = Object.entries(agencyCounts).reduce((a, b) => b[1] > a[1] ? b : a);
  res.json({ question: 'Most frequent agency', answer: `${topAgency[0]} (${topAgency[1]} projects)` });
};

exports.getMedianUnits = async (req, res) => {
  const entries = await CityData.find();
  const units = entries.map(e => e.totalUnits || 0).sort((a, b) => a - b);
  const mid = Math.floor(units.length / 2);
  const median = units.length % 2 === 0
    ? ((units[mid - 1] + units[mid]) / 2).toFixed(0)
    : units[mid];
  res.json({ question: 'Median units per project', answer: median });
};

exports.getProjectsOver100 = async (req, res) => {
  const count = await CityData.countDocuments({ totalUnits: { $gt: 100 } });
  res.json({ question: 'Projects with more than 100 units', answer: count });
};

exports.getHighestAverageWard = async (req, res) => {
  const entries = await CityData.find();
  const wardStats = {};
  entries.forEach(e => {
    const ward = e.ward || 'Unknown';
    wardStats[ward] = wardStats[ward] || { total: 0, count: 0 };
    wardStats[ward].total += e.totalUnits || 0;
    wardStats[ward].count += 1;
  });
  const best = Object.entries(wardStats).reduce((a, b) => {
    const avgA = a[1].total / a[1].count;
    const avgB = b[1].total / b[1].count;
    return avgB > avgA ? b : a;
  });
  const avg = (best[1].total / best[1].count).toFixed(2);
  res.json({ question: 'Ward with highest average units per project', answer: `${best[0]} (${avg} units/project)` });
};
