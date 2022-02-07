/**
 * Avalara © 2017
 * file: test/transactions.spec.js
 */

import Avatax from '../lib/AvaTaxClient';
import nock from 'nock';
import transactionRequest from './fixtures/transaction_request';
import transactionResponse from './fixtures/transaction_response';
import transactionsListResponse from './fixtures/transactions_list_response';

const baseUrl = 'https://sandbox-rest.avatax.com';

describe.skip('Avatax Transactions', () => {
  const username = '';
  const password = '';
  const appName = 'myapp';
  const appVersion = '1.0';
  const environment = 'sandbox';
  const machineName = 'mbp';

  const client = new Avatax({
    appName,
    appVersion,
    environment,
    machineName,
  }).withSecurity({ username, password });

  describe('Listing transactions by company', () => {
    beforeEach(() => {
      nock(baseUrl)
        .get(`/api/v2/companies/${companyCode}/transactions`)
        .reply(200, transactionsListResponse);
    });

    it('should resolve address', () => {
      const address = {
        city: 'irvine',
        postalCode: '92615',
        region: 'ca',
        country: 'us',
      };

      return client.resolveAddress(address).then(res => {
        console.log(res);
      });
    });

    it('should list transactions by company code', () => {
      return client.listTransactions({ companyCode }).then(actualResponse => {
        expect(actualResponse).toEqual(transactionsListResponse);
      });
    });
  });

  describe('Creating new transactions', () => {
    beforeEach(() => {
      nock(baseUrl)
        .post('/api/v2/transactions/create', transactionRequest)
        .reply(201, transactionResponse);
    });

    it('should create a new transaction', () => {
      return client
        .createTransaction(transactionRequest)
        .then(actualResponse => {
          expect(actualResponse).toEqual(transactionResponse);
        });
    });
  });
});
