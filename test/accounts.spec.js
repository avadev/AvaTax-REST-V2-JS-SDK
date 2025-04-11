/**
 * Avalara © 2017
 * file: test/accounts.spec.js
 */

import Avatax from 'avatax';
import { account } from './test_creds';
import nock from 'nock';
import accountResponse from './fixtures/account_response';
import loadCreds from './helpers/load_creds';

describe('Avatax Accounts', () => {
  const baseUrl = 'https://sandbox-rest.avatax.com';
  const client = new Avatax(loadCreds());

  describe('Getting accounts by id', () => {

    beforeEach(() => {
      nock(baseUrl)
        .get(`/api/v2/accounts/${account}`)
        .reply(200, accountResponse);
    });
    
    it('should return account by id', () => {
      return client.getAccount({ id: account })
        .then(res => {
          expect(res).toEqual(accountResponse);
        });
    });
  });
});

