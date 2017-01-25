/**
 * Avalara © 2017
 * file: test/basic_auth.spec.js
 */

import { createBasicAuthHeader } from '../lib/utils/basic_auth';

describe('BasicAuth Header', () => {

  it('should create a basic auth header', () => {
    const account = '12345';
    const licenseKey = '54321';
    const expectedHeader = 'Basic MTIzNDU6NTQzMjE=';
    
    const basicAuthHeader = createBasicAuthHeader(account, licenseKey);

    expect(basicAuthHeader).toBe(expectedHeader);
  });
});

