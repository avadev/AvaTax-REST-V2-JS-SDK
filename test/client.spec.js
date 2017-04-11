/**
 * Avalara © 2017
 * file: test/client.spec.js
 */

// import Avatax from '../';
import Avatax from '../lib/AvaTaxClient';

describe('Avatax Client', () => {
  
  it('should configure client account and license key', () => {
    // arrange
    const accountId = '12345';
    const licenseKey = '54321';
    const appName = 'myapp';
    const appVersion = '1.0';
    const environment = 'sandbox';
    const machineName = 'mbp';

    const client = new Avatax({ appName, appVersion, environment, machineName })
      .withSecurity({ accountId, licenseKey });

    // assert
    // expect(client.account).toBe(accountId);
    // expect(client.licenseKey).toBe(licenseKey);
    // todo: verify base64 computed header from accountId + licenseKey
  });
});

