/**
 * Avalara © 2017
 * file: lib/utils/basic_auth.js
 */

export function createBasicAuthHeader( account, licenseKey ) {
  const isNode = !!( typeof process !== 'undefined' && process.versions && process.versions.node );
  const authString = `${account}:${licenseKey}`
  const base64Encoded = isNode ? new Buffer( authString ).toString( 'base64' ) : btoa( authString );
  return `Basic ${base64Encoded}`;
}