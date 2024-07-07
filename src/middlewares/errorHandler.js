module.exports = (err, req, res, next) => {
  // some logging implementation here ...

  if (res.headersSent) return next(err);
  // more sophisticated error handling here...
  res.status(500).send(err);
}
