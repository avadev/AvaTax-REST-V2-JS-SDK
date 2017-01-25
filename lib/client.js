/**
 * Avalara © 2017
 * file: lib/client.js
 */

import fetch from 'isomorphic-fetch';
import { createBasicAuthHeader } from './utils/basic_auth';

export default class Client {

  constructor(options) {
    this.account = options.account;
    this.licenseKey = options.licenseKey;
  }

  makeGetRequest(url) {
    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': createBasicAuthHeader(this.account, this.licenseKey)
      }
    })
    .then(res => res.json());
  }

  getCompanyById({ id }) {
    const url = `https://sandbox-rest.avatax.com/api/v2/companies/${id}`;
    return this.makeGetRequest(url);
  }

  listCompanies() {
    const url = 'https://sandbox-rest.avatax.com/api/v2/companies';
    return this.makeGetRequest(url);
  }

  getAccountById({ id }) {
    const url = `https://sandbox-rest.avatax.com/api/v2/accounts/${id}`;
    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': createBasicAuthHeader(this.account, this.licenseKey)
      }
    })
      .then(res => res.json());
  }

  createTransaction(transactionRequest) {
    const url = 'https://sandbox-rest.avatax.com/api/v2/transactions/create';
    return fetch(url, { 
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': createBasicAuthHeader(this.account, this.licenseKey)
      },
      body: JSON.stringify(transactionRequest)
    })
      .then(res => res.json());
  }

  listTransactions({ companyCode }) {
    const url = `https://sandbox-rest.avatax.com/api/v2/companies/${companyCode}/transactions`;
    return this.makeGetRequest(url);
  }
}

