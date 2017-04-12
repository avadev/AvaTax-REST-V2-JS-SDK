/**
 * Avalara © 2017
 * file: test/helpers/load_creds.js
 */

import fs from 'fs';

/**
 * This is a test helper function that will layer in default client values with 
 * resolved credentials
 *
 * Credentials will be resolved in the following order:
 * 1. Check environment variables, SANDBOX_USERNAME and SANDBOX_PASSWORD. These 
 *    are primarily used in travis-ci environment but you can set these locally as well 
 * 2. Check for local creds file, 'local_creds.json'. This file can be used for local 
 *    development. The file will be gitignored and NOT checked into source. 
 * 3. If the first two are not present, fall back to mock creds. This will work for the 
 *    unit tests via Nock but the integration tests will not pass without valid creds. 
 */
export default function() {
  // set default client values
  const defaultCreds = {
    appName: 'myapp',
    appVersion: '1.0',
    environment: 'sandbox',
    machineName: 'mbp'
  };

  // look for env creds first, this is primarily used for travis-ci job
  if (process.env.SANDBOX_USERNAME && process.env.SANDBOX_PASSWORD) {
    return {
      ...defaultCreds, ...{
        username: process.env.SANDBOX_USERNAME,
        password: process.env.SANDBOX_PASSWORD,
      }
    };
  } else if (fs.existsSync('local_creds.json')) { // check for local development creds
    const localCreds = require('../../local_creds.json');
    return { ...defaultCreds, ...localCreds }
  } else { // return fake creds, this will work for unit tests via nock
    return {
      ...defaultCreds, ...{
        username: 'mock-user@avalara.com',
        password: 'mocked-password',
      }
    };
  } 
}

