/**
 * Avalara © 2017
 * file: test/companies.spec.js
 */

import Avatax from '../';
import { account, licenseKey } from './test_creds';
import nock from 'nock';
import companyGetResponse from './fixtures/company_get_response';
import companiesListResponse from './fixtures/companies_list_response';

describe('Avatax Companies', () => {
  const baseUrl = 'https://sandbox-rest.avatax.com';
  const client = new Avatax({ account, licenseKey });

  describe('Get company by id', () => {
    const id = 12345;

    beforeEach(() => {
      nock(baseUrl).get(`/api/v2/companies/${id}`)
        .reply(200, companyGetResponse);
    });
    
    it('should return single company', () => {
      return client.getCompanyById({ id })
        .then( res => {
          console.log(JSON.stringify(res, null, 2));
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

