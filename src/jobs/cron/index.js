const q = require('../../services/cron-queue');

module.exports = async () => {
  try {
    await Promise.all([
      // need more context to correctly configure the job nd the queue!
      q.add('j1', { foo: 'bar' }, {
        jobId: 'j1',
        repeat: { pattern: '*/30 * * * * *' }
      }),
      // add more jobs as you need...
    ]);
    // logging
    console.log('cron jobs started successfully');
  }
  catch (err) {
    // log and alert
  }
}
