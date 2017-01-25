/**
 * Avalara © 2017
 * file: test/transactions.spec.js
 */

import Avatax from '../';
import nock from 'nock';
import { account, licenseKey, companyCode } from './test_creds';
import transactionRequest from './fixtures/transaction_request';
import transactionResponse from './fixtures/transaction_response';
import transactionsListResponse from './fixtures/transactions_list_response';

const baseUrl = 'https://sandbox-rest.avatax.com';

describe('Avatax Transactions', () => {
  const client = new Avatax({ account, licenseKey });

  describe('Listing transactions by company', () => {
    beforeEach(() => {
      nock(baseUrl).get(`/api/v2/companies/${companyCode}/transactions`)
        .reply(200, transactionsListResponse);
    })

    it('should list transactions by company code', () => {
      return client.listTransactions({ companyCode })
        .then(actualResponse => {
          expect(actualResponse).toEqual(transactionsListResponse);
        })
    });
  });

  describe('Creating new transactions', () => {
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

