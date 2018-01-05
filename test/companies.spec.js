/**
 * Avalara © 2017
 * file: test/companies.spec.js
 */

import Avatax from '../lib/AvaTaxClient';
import { v4 } from 'node-uuid';
import moment from 'moment';
import loadCreds from './helpers/load_creds';
import nock from 'nock';
import companyGetResponse from './fixtures/company_get_response';
import companiesListResponse from './fixtures/companies_list_response';

describe('Company Integration Tests', () => {
  describe('Valid company initialize request', () => {
    const clientCreds = loadCreds();
    const client = new Avatax(clientCreds).withSecurity(clientCreds);

    it('should initialize a company', () => {
      const request = {
        name: "Bob's Artisan Pottery",
        companyCode: `co-${moment.utc().format('YYYYMMDD-HHmmssS')}`,
        taxpayerIdNumber: '12-3456789',
        line1: '123 Main Street',
        city: 'Irvine',
        region: 'CA',
        postalCode: '92615',
        country: 'US',
        firstName: 'Bob',
        lastName: 'Example',
        title: 'Owner',
        email: 'bob@example.org',
        phoneNumber: '714 555-2121',
        mobileNumber: '714 555-1212'
      };

      console.log(JSON.stringify(request, null, 2));

      return client.companyInitialize({ model: request }).then(res => {
        expect(res).toBeDefined();
        expect(res.contacts.length).toEqual(1);
        expect(res.locations.length).toEqual(1);
        expect(res.nexus.length).toEqual(2);
      });
    });

    describe('Invalid company initialize request', () => {
      it('should return valid exception response');
    });
  });
});

describe('Company Unit Tests', () => {
  const clientCreds = loadCreds();
  const baseUrl = 'https://sandbox-rest.avatax.com';
  const client = new Avatax(clientCreds).withSecurity(clientCreds);

  afterEach(() => {
    nock.cleanAll();
  });

  describe('Get company by id', () => {
    const id = 12345;

    beforeEach(() => {
      nock(baseUrl)
        .get(`/api/v2/companies/${id}`)
        .reply(200, companyGetResponse);
    });

    it('should return single company', () => {
      return client.getCompany({ id }).then(res => {
        expect(res).toEqual(companyGetResponse);
      });
    });
  });

  describe('Listing companies for account', () => {
    beforeEach(() => {
      nock(baseUrl).get(`/api/v2/companies`).reply(200, companiesListResponse);
    });

    it('should return list of companies', () => {
      return client.queryCompanies().then(res => {
        expect(res).toEqual(companiesListResponse);
      });
    });
  });
});
