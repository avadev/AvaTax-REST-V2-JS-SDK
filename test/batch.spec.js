/**
 * Created by brian.hunter on 4/11/17.
 * Jest test file for testing creation, adjustment, and voiding of a transaction in the REST API
 */

import Avatax from '../lib/AvaTaxClient';
import loadCreds from './helpers/load_creds';
import nock from 'nock';
import batchCreateRequest from './fixtures/batch_create_request';
import batchCreateResponse from './fixtures/batch_create_response';
import batchDownloadResponse from './fixtures/batch_download_response';

// let companyId = 811825;
// let batchId = 3883044;
// let id = 5822671;

let companyId = 238146;
let batchId = 1136793;
let id = 2066530;

const baseUrl = 'https://sandbox-rest.avatax.com';

describe('Batch Full Integration Tests', () => {
    const clientCreds = loadCreds();
    const client = new Avatax(clientCreds).withSecurity(clientCreds);

    describe('Create Batch', () => {

        it('should create a new batch', () => {
            return client.createBatches({companyId, model: batchCreateRequest}).then(res => {
                expect(res[0]).toBeDefined();
                expect(res[0].status).toEqual("Waiting");
                expect(res[0].type).toEqual("TransactionImport");
                expect(res[0].companyId).toEqual(companyId);
            });
        });
    });

    describe('Download Batch', () => {

        it('should download the specified batch', () =>{
            return client.downloadBatch({companyId, batchId, id}).then(res => {
                expect(res).toBeDefined();
                expect(res.headers.get("transfer-encoding")).toEqual("chunked");
            });
        });
    });
});


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

       it('should create a new batchNock', () =>{
           return client.createBatches({companyId, model: batchCreateRequest})
               .then(actualResponse => {
                   expect(actualResponse).toEqual(batchCreateResponse);
               });
       });
    });

    /* top passes, this does not */
    /*Unit test for downloading a batch*/
    describe('Downloading a batch', () => {
        beforeEach(() => {
            nock(baseUrl)
                .get(`/api/v2/companies/${companyId}/batches/${batchId}/files/${id}/attachment`)
                .reply(201, batchDownloadResponse);
        });

        it('should download the specified batchNock', () =>{
            return client.downloadBatch({companyId, batchId, id})
                .then(actualResponse => {
                    expect(actualResponse).toEqual(batchDownloadResponse);
                });
        });
    });
});
