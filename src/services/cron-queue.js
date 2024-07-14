require('dotenv').config();
const { Queue,  } = require('bullmq');
const { cron: { queue: { name, connection } } } = require('../config/app.config')

// create a separate queue for each job type if concurrency if high, for simplicity
// I created one queue for all cron jobs!
const cronQueue = new Queue(name, { connection });

module.exports = cronQueue;
