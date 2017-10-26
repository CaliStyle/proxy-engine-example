'use strict'

/**
 * Proxy Engine Configuration
 * (app.config.proxyEngine)
 *
 * Configure the profiles and allowed tasks
 */

module.exports = {
  /**
   * The profile to use for tasks, cron jobs, events etc.
   * Set profile connection info in config/env/<profile>.js for the NODE_ENV variable
   */
  profile: 'example',
  live_mode: false
}
