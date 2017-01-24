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
}

