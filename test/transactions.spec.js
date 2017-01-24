/**
 * Avalara © 2017
 * file: test/transactions.spec.js
 */

import Avatax from '../';
import nock from 'nock';
import transactionRequest from './fixtures/transaction_request';
import transactionResponse from './fixtures/transaction_response';

describe('Avatax Transactions', () => {
  const account = '12345';
  const licenseKey = '54321';
  const client = new Avatax({ account, licenseKey });

  describe('Creating new transactions', () => {
    const baseUrl = 'https://sandbox-rest.avatax.com';

    beforeEach(() => {
      nock(baseUrl)
        .post('/api/v2/transactions/create', transactionRequest)
        .reply(201, transactionResponse);
    });

    it('should create a new transaction', () => {
      return client.createTransaction(transactionRequest)
        .then(actualResponse => {
          expect(actualResponse).toEqual(transactionResponse);
        });
    });
  });
});

