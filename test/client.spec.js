/**
 * Avalara © 2017
 * file: test/client.spec.js
 */

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

    const client = new Avatax({
      appName,
      appVersion,
      environment,
      machineName,
    }).withSecurity({ accountId, licenseKey });

    // assert
    // expect(client.account).toBe(accountId);
    // expect(client.licenseKey).toBe(licenseKey);
    // todo: verify base64 computed header from accountId + licenseKey
  });

  it('should handle various environment settings', () => {
    const testCases = [
      { environment: 'sandbox', expected: 'https://sandbox-rest.avatax.com' },
      { environment: 'production', expected: 'https://rest.avatax.com' },
      { environment: undefined, expected: 'https://rest.avatax.com' },
      { environment: 'http://specific-url', expected: 'http://specific-url' },
      {
        environment: 'https://specific-https-url',
        expected: 'https://specific-https-url',
      },
    ];
    testCases.forEach(({ environment, expected }) => {
      const client = new Avatax({
        appName: 'myapp',
        appVersion: '1.0',
        machineName: 'test-run',
        environment,
      });
      expect(client.baseUrl).toBe(expected);
    });
  });
});
