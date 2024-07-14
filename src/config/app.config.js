module.exports = {
  cron: {
    queue: {
      name: process.env.CRON_QUEUE_NAME || 'cron-queue',
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
      }
    }
  }
}
