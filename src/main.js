require('dotenv').config();
const app = require('./app');
const startCronJobs = require('./jobs/cron');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server running on port:', port);
  startCronJobs();
});
