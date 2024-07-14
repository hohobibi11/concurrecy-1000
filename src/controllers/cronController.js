const asyncHandler = require("express-async-handler");
const q = require('../services/cron-queue');

exports.getAll = asyncHandler(async (req, res) => {
  // TODO: add pagination
  res.send(await q.getRepeatableJobs());
});

exports.getWorkers = asyncHandler(async (req, res) => {
  res.send(await q.getWorkers());
});

exports.getStatistics = asyncHandler(async (req, res) => {
  res.send(await q.getJobCounts());
});
