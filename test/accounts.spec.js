/**
 * Avalara © 2017
 * file: test/accounts.spec.js
 */

import Avatax from '../';
import { account, licenseKey } from './test_creds';
import nock from 'nock';
import accountResponse from './fixtures/account_response';

describe('Avatax Accounts', () => {
  const baseUrl = 'https://sandbox-rest.avatax.com';
  const client = new Avatax({ account, licenseKey });

  describe('Getting accounts by id', () => {

    beforeEach(() => {
      nock(baseUrl)
        .get(`/api/v2/accounts/${account}`)
        .reply(200, accountResponse);
    });
    
    it('should return account by id', () => {
      return client.getAccountById({ id: account })
        .then(res => {
          expect(res).toEqual(accountResponse);
        });
    });
  });
});


