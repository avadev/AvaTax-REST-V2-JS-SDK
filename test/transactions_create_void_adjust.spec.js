/**
 * Created by brian.hunter on 4/11/17.
 * Jest test file for testing creation, adjustment, and voiding of a transaction in the REST API
 */


/*Import sample data and expected responses*/
import Avatax from '../lib/AvaTaxClient';
import loadCreds from './helpers/load_creds';
import nock from 'nock';
import transactionRequest from './fixtures/transaction_request';
import transactionResponse from './fixtures/transaction_response';
import adjustTransactionRequest from './fixtures/adjust_transaction_request';
import adjustTransactionResponse from './fixtures/adjust_transaction_response';
import voidTransactionRequest from './fixtures/void_transaction_request';
import voidTransactionResponse from './fixtures/void_transaction_response';

let transactionCode = transactionResponse.code;
let companyCode = transactionRequest.companyCode;

const baseUrl = 'https://sandbox-rest.avatax.com';

describe.skip('Transaction Full Integration Tests', () => {
    const clientCreds = loadCreds();
    const client = new Avatax(clientCreds).withSecurity(clientCreds);
    let transCode = '';

    describe('Create Transaction', () => {

        it('should create a new transaction', () => {
            return client.createTransaction({model: transactionRequest}).then(res => {
                expect(res).toBeDefined();
                expect(res.totalTax).toBeGreaterThan(0);
                expect(res.lines.length).toBeGreaterThanOrEqual(3);
                expect(res.lines.details[1].jurisName).toMatch('ORANGE');
                transCode = res.code;
            });

        });
    });

    describe('Adjust transaction', () => {
        it('should adjust the newly created transaction', () =>{
           return client.adjustTransaction({companyCode, transCode, model:adjustTransactionRequest}).then(res => {
               expect(res).toBeDefined();
               expect(res.totalTax).toEqual(6.98);
               expect(res.adjustmentReason).toBeDefined();
               expect(res.adjustmentDescription).toBeDefined();
               expect(res.totalAmount).toEqual(90);
           })
        });
    });

    describe('Void transaction', () => {
        it('should avoid the created and adjusted transaction', () => {
           return client.voidTransaction({companyCode, transCode, model: voidTransactionRequest}).then(res => {
               expect(res.totalAmount).toEqual(90);
               expect(res.status).toEqual("Cancelled");
           });
        });
    });


});

describe('Transactions Unit Tests', () => {
    const clientCreds = loadCreds();
    const client = new Avatax(clientCreds).withSecurity(clientCreds);


    describe('Creating new transactions', () => {
        beforeEach(() => {
            nock(baseUrl)
                .post('/api/v2/transactions/create', transactionRequest)
                .reply(201, transactionResponse);
        });

        it('should create a new transactionTwo', () => {
            return client.createTransaction({model: transactionRequest })
                .then(actualResponse => {
                    expect(actualResponse).toEqual(transactionResponse);
                });
        });
    });

    /*Case for adjusting existing transaction
    *
    * Need to grab transactionCode from newly created transaction above
    * transactionCode = actualResponse.code;
    * EDIT - its hard coded in so we can cheat a little
    * */
    describe('Adjusting existing transactions', () => {
        beforeEach(() => {
            nock(baseUrl)
                .post(`/api/v2/companies/${companyCode}/transactions/${transactionCode}/adjust`, adjustTransactionRequest)
                .reply(200, adjustTransactionResponse);
        });

        it('should adjust an existing transaction', () => {
            return client.adjustTransaction({companyCode, transactionCode, model: adjustTransactionRequest})
                .then(actualResponse => {
                    expect(actualResponse).toEqual(adjustTransactionResponse);
                });
        });
    });

    /* Code for voiding an existing transaction
     *
     * Use same transactionCode from before
     * */
    describe('Voiding existing transactions', () => {
        beforeEach(() => {
            nock(baseUrl)
                .post(`/api/v2/companies/${companyCode}/transactions/${transactionCode}/void`, voidTransactionRequest)
                .reply(200, voidTransactionResponse);
        });

        it('should void an existing transaction', () => {
            return client.voidTransaction({companyCode, transactionCode, model: voidTransactionRequest})
                .then(actualResponse => {
                    expect(actualResponse).toEqual(voidTransactionResponse);
                });
        });
    });


});
