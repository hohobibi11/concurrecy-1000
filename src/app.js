const express = require('express');
const cors = require('cors');
const registerRouters = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
registerRouters(app);
app.use(errorHandler);

module.exports = app;
