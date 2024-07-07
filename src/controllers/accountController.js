const asyncHandler = require("express-async-handler");
const db = require('../db/models');

exports.updateBalance = asyncHandler(async (req, res) => {
  // TODO: use validation middlewares and DTOs
  const { userId, amount } = req.body;
  if (!userId || !parseInt(amount)) {
    return res.status(400).send('Invalid params');
  }

  const [[updated]] = await db.Account.increment(
    { balance: amount },
    { where: { id: userId } },
  );
  res.send(updated);
});
