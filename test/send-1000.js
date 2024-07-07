const axios = require('axios');
const endpoint = 'http://localhost:3000/account/balance';
(async () => {
  const result = { success: 0, fail: 0 };
  await Promise.all(Array.from({ length: 1_000 }).map(async () => {
    try {
      await axios.put(endpoint, { userId: 1, amount: -2 });
      result.success += 1;
    }
    catch (e) {
      result.fail += 1;
    }
  }));
  console.log('done', result);
})();
