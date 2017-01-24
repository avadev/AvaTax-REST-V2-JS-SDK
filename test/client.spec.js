/**
 * Avalara © 2017
 * file: test/client.spec.js
 */

import Avatax from '../';

describe('Avatax Client', () => {
  
  it('should configure client account and license key', () => {
    // arrange
    let account = '12345';
    let licenseKey = '54321';
    const client = new Avatax({ account, licenseKey });

    // assert
    expect(client.account).toBe(account);
    expect(client.licenseKey).toBe(licenseKey);
  });
});

