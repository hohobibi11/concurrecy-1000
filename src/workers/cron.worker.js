/**
 * launch this script as many times as you need in different processes/containers/machines,
 * this will create concurrent workers, pay attention to race conditions!
 */

const q = require('../services/cron-queue');
const { Worker } = require('bullmq');

const worker = new Worker(q.name, async (job) => {
  await new Promise((res) => {
    setTimeout(res, 10_000);
  });
  console.log(job.data);
  // do other stuff...
}, { connection: q.client });

worker.on('error', (err) => {
  // log error to a logging system
  // do other logic
});

// use global event listening using q.on if the logic is the same for all jobs
worker.on('completed'/* active, failed, */, (job) => {
  // log to a logging system
  // add to a history db table?
  // do other logic
});
