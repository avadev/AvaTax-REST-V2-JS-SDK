/**
 * Created by brian.hunter on 4/11/17.
 * Jest test file for testing creation, adjustment, and voiding of a transaction in the REST API
 */

import Avatax from '../lib/AvaTaxClient';
import loadCreds from './helpers/load_creds';
import nock from 'nock';
import batchCreateRequest from './fixtures/batch_create_request';
import batchCreateResponse from './fixtures/batch_create_response';
import batchDownloadReponse from './fixtures/batch_download_response';

let companyId = 2382146;
let batchId   = 1136793;
let id        = 2066531;

const baseUrl = 'https://sandbox-rest.avatax.com';

/*nock unit tests for creating and downloading a batch*/
describe('Batch Unit Tests', () => {
    const clientCreds = loadCreds();
    const client = new Avatax(clientCreds).withSecurity(clientCreds);

    afterEach(() => {
        nock.cleanAll();
    });

    /*Unit test for creating a new batch*/
    describe('Creating new batches', () => {
       beforeEach(() => {
           nock(baseUrl)
               .post(`/api/v2/companies/${companyId}/batches`, batchCreateRequest)
               .reply(201, batchCreateResponse);
       });

       it('should create a new batch', () =>{
           return client.createBatches({companyId, model: batchCreateRequest})
               .then(actualResponse => {
                   expect(actualResponse).toEqual(batchCreateResponse);
               });
       });
    });

    /* top passes, this does not */
    /*Unit test for downloading a batch*/
    describe('downloading a batch', () => {
        beforeEach(() => {
            nock(baseUrl)
                .post(`/api/v2/companies/${companyId}/batches/${batchId}/files/${id}/attachment`)
                .reply(201, batchDownloadReponse);
        });

        it('should download the specified batch', () =>{
            return client.downloadBatch({companyId, batchId, id})
                .then(actualResponse => {
                    expect(actualResponse).toEqual(batchDownloadResponse);
                });
        });
    });


});