const homeRouter = require('./home');
const accountRouter = require('./account');

module.exports = (app) => {
  app.use('/', homeRouter);
  app.use('/account', accountRouter);
}
