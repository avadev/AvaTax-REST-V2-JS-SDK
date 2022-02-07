/**
 * Avalara © 2017
 * file: lib/utils/basic_auth.js
 */

export function createBasicAuthHeader(account, licenseKey) {
  const base64Encoded = new Buffer(`${account}:${licenseKey}`).toString(
    'base64',
  );
  return `Basic ${base64Encoded}`;
}
