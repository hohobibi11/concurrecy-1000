const homeRouter = require('./home');
const accountRouter = require('./account');
const cronRouter = require('./cron');

module.exports = (app) => {
  app.use('/', homeRouter);
  app.use('/account', accountRouter);
  app.use('/cron', cronRouter);
}
