/**
 * Avalara © 2017
 * file: test/companies.spec.js
 */

import Avatax from '../lib/AvaTaxClient';
import { v4 } from 'node-uuid';
import { account, licenseKey } from './test_creds';
import nock from 'nock';
import companyGetResponse from './fixtures/company_get_response';
import companiesListResponse from './fixtures/companies_list_response';

describe('Company Integration Tests', () => {
  const username = '';
  const password = '';
  const appName = 'myapp';
  const appVersion = '1.0';
  const environment = 'sandbox';
  const machineName = 'mbp';

  describe('Valid company initialize request', () => {
    const client = new Avatax({ appName, appVersion, environment, machineName })
      .withSecurity({ username, password });

    it('should initialize a company', () => {
      const request = {
        name: "Bob's Artisan Pottery",
        companyCode: v4().replace(/-/gi, '').substring(0, 8),
        taxpayerIdNumber: "12-3456789",
        line1: "123 Main Street",
        city: "Irvine",
        region: "CA",
        postalCode: "92615",
        country: "US",
        firstName: "Bob",
        lastName: "Example",
        title: "Owner",
        email: "bob@example.org",
        phoneNumber: "714 555-2121",
        mobileNumber: "714 555-1212"
      };

      return client.companyInitialize({ model: request }).then(res => {
        expect(res).toBeDefined();
        expect(res.contacts.length).toEqual(1);
        expect(res.locations.length).toEqual(1);
        expect(res.nexus.length).toEqual(3);
      });
    });

    describe('Invalid company initialize request', () => {
    });
  });
});

describe('Avatax Companies', () => {
  const baseUrl = 'https://sandbox-rest.avatax.com';
  // const client = new Avatax({ account, licenseKey });

  const client = new Avatax({ appName, appVersion, environment, machineName })
    .withSecurity({ username, password });


  describe('Get company by id', () => {
    const id = 12345;

    beforeEach(() => {
      nock(baseUrl).get(`/api/v2/companies/${id}`)
        .reply(200, companyGetResponse);
    });
    
    it('should return single company', () => {
      return client.getCompanyById({ id })
        .then( res => {
          expect(res).toEqual(companyGetResponse);
        });
    });
  });
  
  describe('Listing companies for account', () => {

    beforeEach(() => {
      nock(baseUrl).get(`/api/v2/companies`)
        .reply(200, companiesListResponse);
    });

    it('should return list of companies', () => {
      return client.listCompanies()
        .then(res => {
          expect(res).toEqual(companiesListResponse);
        });
    });
  });
});

