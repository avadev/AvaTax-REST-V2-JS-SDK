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

describe('Avatax Transactions', () => {
    const clientCreds = loadCreds();
    const client = new Avatax(clientCreds).withSecurity(clientCreds);


    describe('Creating new transactions', () => {
        beforeEach(() => {
            nock(baseUrl)
                .post('/api/v2/transactions/create', {
                    "type": "SalesInvoice",
                    "companyCode": "abc123",
                    "date": "2017-04-12",
                    "customerCode": "ABC",
                    "purchaseOrderNo": "2017-04-12-001",
                    "addresses": {
                        "SingleLocation": {
                            "line1": "123 Main Street",
                            "city": "Irvine",
                            "region": "CA",
                            "country": "US",
                            "postalCode": "92615"
                        }
                    },
                    "lines": [
                        {
                            "number": "1",
                            "quantity": 1,
                            "amount": 100,
                            "taxCode": "PS081282",
                            "itemCode": "Y0001",
                            "description": "Yarn"
                        }
                    ],
                    "commit": true,
                    "currencyCode": "USD",
                    "description": "Yarn"
                })
                .reply(201, {
                    "id": 289450369,
                    "code": "8f8084cb-d8d4-418a-bdbb-131f7254e09b",
                    "companyId": 559766,
                    "date": "2017-04-12",
                    "paymentDate": "1900-01-01",
                    "status": "Committed",
                    "type": "SalesInvoice",
                    "batchCode": "",
                    "currencyCode": "USD",
                    "customerUsageType": "",
                    "customerVendorCode": "ABC",
                    "exemptNo": "",
                    "reconciled": false,
                    "purchaseOrderNo": "2017-04-12-001",
                    "salespersonCode": "",
                    "taxOverrideType": "None",
                    "taxOverrideAmount": 0,
                    "taxOverrideReason": "",
                    "totalAmount": 100,
                    "totalExempt": 0,
                    "totalTax": 7.75,
                    "totalTaxable": 100,
                    "totalTaxCalculated": 7.75,
                    "adjustmentReason": "NotAdjusted",
                    "adjustmentDescription": "",
                    "locked": false,
                    "region": "CA",
                    "country": "US",
                    "version": 1,
                    "softwareVersion": "16.12.4.4",
                    "originAddressId": 742644966,
                    "destinationAddressId": 742644966,
                    "exchangeRateEffectiveDate": "2017-04-12",
                    "exchangeRate": 1,
                    "isSellerImporterOfRecord": false,
                    "description": "Yarn",
                    "modifiedDate": "2017-04-13T23:26:01.613",
                    "modifiedUserId": 7097,
                    "taxDate": "2017-04-12T00:00:00",
                    "lines": [
                        {
                            "id": 1052893542,
                            "transactionId": 289450369,
                            "lineNumber": "1",
                            "boundaryOverrideId": 0,
                            "customerUsageType": "",
                            "description": "Yarn",
                            "destinationAddressId": 742644966,
                            "originAddressId": 742644966,
                            "discountAmount": 0,
                            "exemptAmount": 0,
                            "exemptCertId": 0,
                            "exemptNo": "",
                            "isItemTaxable": true,
                            "isSSTP": false,
                            "itemCode": "Y0001",
                            "lineAmount": 100,
                            "quantity": 1,
                            "ref1": "",
                            "ref2": "",
                            "reportingDate": "2017-04-12",
                            "revAccount": "",
                            "sourcing": "Mixed",
                            "tax": 7.75,
                            "taxableAmount": 100,
                            "taxCalculated": 7.75,
                            "taxCode": "PS081282",
                            "taxCodeId": 38007,
                            "taxDate": "2017-04-12",
                            "taxEngine": "",
                            "taxOverrideType": "None",
                            "taxOverrideAmount": 0,
                            "taxOverrideReason": "",
                            "taxIncluded": false,
                            "details": [
                                {
                                    "id": 1911631561,
                                    "transactionLineId": 1052893542,
                                    "transactionId": 289450369,
                                    "addressId": 742644966,
                                    "country": "US",
                                    "region": "CA",
                                    "stateFIPS": "06",
                                    "exemptAmount": 0,
                                    "exemptReasonId": 4,
                                    "inState": true,
                                    "jurisCode": "06",
                                    "jurisName": "CALIFORNIA",
                                    "jurisdictionId": 5000531,
                                    "signatureCode": "AGAM",
                                    "stateAssignedNo": "",
                                    "jurisType": "STA",
                                    "nonTaxableAmount": 0,
                                    "nonTaxableRuleId": 0,
                                    "nonTaxableType": "RateRule",
                                    "rate": 0.06,
                                    "rateRuleId": 1343430,
                                    "rateSourceId": 3,
                                    "serCode": " ",
                                    "sourcing": "Origin",
                                    "tax": 6,
                                    "taxableAmount": 100,
                                    "taxType": "Sales",
                                    "taxName": "CA STATE TAX",
                                    "taxAuthorityTypeId": 45,
                                    "taxRegionId": 2127863,
                                    "taxCalculated": 6,
                                    "taxOverride": 0,
                                    "rateType": "General",
                                    "rateTypeCode": "G",
                                    "taxableUnits": 100,
                                    "nonTaxableUnits": 0,
                                    "exemptUnits": 0,
                                    "unitOfBasis": "PerCurrencyUnit"
                                },
                                {
                                    "id": 1911631562,
                                    "transactionLineId": 1052893542,
                                    "transactionId": 289450369,
                                    "addressId": 742644966,
                                    "country": "US",
                                    "region": "CA",
                                    "stateFIPS": "06",
                                    "exemptAmount": 0,
                                    "exemptReasonId": 4,
                                    "inState": true,
                                    "jurisCode": "059",
                                    "jurisName": "ORANGE",
                                    "jurisdictionId": 267,
                                    "signatureCode": "AHXU",
                                    "stateAssignedNo": "",
                                    "jurisType": "CTY",
                                    "nonTaxableAmount": 0,
                                    "nonTaxableRuleId": 0,
                                    "nonTaxableType": "RateRule",
                                    "rate": 0.0025,
                                    "rateRuleId": 1316638,
                                    "rateSourceId": 3,
                                    "serCode": " ",
                                    "sourcing": "Origin",
                                    "tax": 0.25,
                                    "taxableAmount": 100,
                                    "taxType": "Sales",
                                    "taxName": "CA COUNTY TAX",
                                    "taxAuthorityTypeId": 45,
                                    "taxRegionId": 2127863,
                                    "taxCalculated": 0.25,
                                    "taxOverride": 0,
                                    "rateType": "General",
                                    "rateTypeCode": "G",
                                    "taxableUnits": 100,
                                    "nonTaxableUnits": 0,
                                    "exemptUnits": 0,
                                    "unitOfBasis": "PerCurrencyUnit"
                                },
                                {
                                    "id": 1911631563,
                                    "transactionLineId": 1052893542,
                                    "transactionId": 289450369,
                                    "addressId": 742644966,
                                    "country": "US",
                                    "region": "CA",
                                    "stateFIPS": "06",
                                    "exemptAmount": 0,
                                    "exemptReasonId": 4,
                                    "inState": true,
                                    "jurisCode": "EMAZ0",
                                    "jurisName": "ORANGE COUNTY DISTRICT TAX SP",
                                    "jurisdictionId": 2001061425,
                                    "signatureCode": "EMAZ",
                                    "stateAssignedNo": "037",
                                    "jurisType": "STJ",
                                    "nonTaxableAmount": 0,
                                    "nonTaxableRuleId": 0,
                                    "nonTaxableType": "RateRule",
                                    "rate": 0.005,
                                    "rateRuleId": 1316666,
                                    "rateSourceId": 3,
                                    "serCode": " ",
                                    "sourcing": "Destination",
                                    "tax": 0.5,
                                    "taxableAmount": 100,
                                    "taxType": "Sales",
                                    "taxName": "CA SPECIAL TAX",
                                    "taxAuthorityTypeId": 45,
                                    "taxRegionId": 2127863,
                                    "taxCalculated": 0.5,
                                    "taxOverride": 0,
                                    "rateType": "General",
                                    "rateTypeCode": "G",
                                    "taxableUnits": 100,
                                    "nonTaxableUnits": 0,
                                    "exemptUnits": 0,
                                    "unitOfBasis": "PerCurrencyUnit"
                                },
                                {
                                    "id": 1911631564,
                                    "transactionLineId": 1052893542,
                                    "transactionId": 289450369,
                                    "addressId": 742644966,
                                    "country": "US",
                                    "region": "CA",
                                    "stateFIPS": "06",
                                    "exemptAmount": 0,
                                    "exemptReasonId": 4,
                                    "inState": true,
                                    "jurisCode": "EMTN0",
                                    "jurisName": "ORANGE CO LOCAL TAX SL",
                                    "jurisdictionId": 2001061784,
                                    "signatureCode": "EMTN",
                                    "stateAssignedNo": "30",
                                    "jurisType": "STJ",
                                    "nonTaxableAmount": 0,
                                    "nonTaxableRuleId": 0,
                                    "nonTaxableType": "RateRule",
                                    "rate": 0.01,
                                    "rateRuleId": 1316670,
                                    "rateSourceId": 3,
                                    "serCode": " ",
                                    "sourcing": "Origin",
                                    "tax": 1,
                                    "taxableAmount": 100,
                                    "taxType": "Sales",
                                    "taxName": "CA SPECIAL TAX",
                                    "taxAuthorityTypeId": 45,
                                    "taxRegionId": 2127863,
                                    "taxCalculated": 1,
                                    "taxOverride": 0,
                                    "rateType": "General",
                                    "rateTypeCode": "G",
                                    "taxableUnits": 100,
                                    "nonTaxableUnits": 0,
                                    "exemptUnits": 0,
                                    "unitOfBasis": "PerCurrencyUnit"
                                }
                            ],
                            "lineLocationTypes": [
                                {
                                    "documentLineLocationTypeId": 589531652,
                                    "documentLineId": 1052893542,
                                    "documentAddressId": 742644966,
                                    "locationTypeCode": "PointOfOrderOrigin"
                                },
                                {
                                    "documentLineLocationTypeId": 589531651,
                                    "documentLineId": 1052893542,
                                    "documentAddressId": 742644966,
                                    "locationTypeCode": "PointOfOrderAcceptance"
                                },
                                {
                                    "documentLineLocationTypeId": 589531650,
                                    "documentLineId": 1052893542,
                                    "documentAddressId": 742644966,
                                    "locationTypeCode": "ShipTo"
                                },
                                {
                                    "documentLineLocationTypeId": 589531649,
                                    "documentLineId": 1052893542,
                                    "documentAddressId": 742644966,
                                    "locationTypeCode": "ShipFrom"
                                }
                            ],
                            "parameters": {}
                        }
                    ],
                    "addresses": [
                        {
                            "id": 742644966,
                            "transactionId": 289450369,
                            "boundaryLevel": "Zip5",
                            "line1": "123 Main Street",
                            "line2": "",
                            "line3": "",
                            "city": "Irvine",
                            "region": "CA",
                            "postalCode": "92615",
                            "country": "US",
                            "taxRegionId": 2127863,
                            "latitude": "33.657808",
                            "longitude": "-117.968489"
                        }
                    ],
                    "locationTypes": [
                        {
                            "documentLocationTypeId": 360178,
                            "documentId": 289450369,
                            "documentAddressId": 742644966,
                            "locationTypeCode": "PointOfOrderOrigin"
                        },
                        {
                            "documentLocationTypeId": 360177,
                            "documentId": 289450369,
                            "documentAddressId": 742644966,
                            "locationTypeCode": "PointOfOrderAcceptance"
                        },
                        {
                            "documentLocationTypeId": 360176,
                            "documentId": 289450369,
                            "documentAddressId": 742644966,
                            "locationTypeCode": "ShipTo"
                        },
                        {
                            "documentLocationTypeId": 360175,
                            "documentId": 289450369,
                            "documentAddressId": 742644966,
                            "locationTypeCode": "ShipFrom"
                        }
                    ],
                    "summary": [
                        {
                            "country": "US",
                            "region": "CA",
                            "jurisType": "State",
                            "jurisCode": "06",
                            "jurisName": "CALIFORNIA",
                            "taxAuthorityType": 45,
                            "stateAssignedNo": "",
                            "taxType": "Sales",
                            "taxName": "CA STATE TAX",
                            "rateType": "General",
                            "taxable": 100,
                            "rate": 0.06,
                            "tax": 6,
                            "taxCalculated": 6,
                            "nonTaxable": 0,
                            "exemption": 0
                        },
                        {
                            "country": "US",
                            "region": "CA",
                            "jurisType": "County",
                            "jurisCode": "059",
                            "jurisName": "ORANGE",
                            "taxAuthorityType": 45,
                            "stateAssignedNo": "",
                            "taxType": "Sales",
                            "taxName": "CA COUNTY TAX",
                            "rateType": "General",
                            "taxable": 100,
                            "rate": 0.0025,
                            "tax": 0.25,
                            "taxCalculated": 0.25,
                            "nonTaxable": 0,
                            "exemption": 0
                        },
                        {
                            "country": "US",
                            "region": "CA",
                            "jurisType": "Special",
                            "jurisCode": "EMTN0",
                            "jurisName": "ORANGE CO LOCAL TAX SL",
                            "taxAuthorityType": 45,
                            "stateAssignedNo": "30",
                            "taxType": "Sales",
                            "taxName": "CA SPECIAL TAX",
                            "rateType": "General",
                            "taxable": 100,
                            "rate": 0.01,
                            "tax": 1,
                            "taxCalculated": 1,
                            "nonTaxable": 0,
                            "exemption": 0
                        },
                        {
                            "country": "US",
                            "region": "CA",
                            "jurisType": "Special",
                            "jurisCode": "EMAZ0",
                            "jurisName": "ORANGE COUNTY DISTRICT TAX SP",
                            "taxAuthorityType": 45,
                            "stateAssignedNo": "037",
                            "taxType": "Sales",
                            "taxName": "CA SPECIAL TAX",
                            "rateType": "General",
                            "taxable": 100,
                            "rate": 0.005,
                            "tax": 0.5,
                            "taxCalculated": 0.5,
                            "nonTaxable": 0,
                            "exemption": 0
                        }
                    ],
                    "parameters": {}
                });
        });

        it('should create a new transaction', () => {
            return client.createTransaction({
                "type": "SalesInvoice",
                "companyCode": "abc123",
                "date": "2017-04-12",
                "customerCode": "ABC",
                "purchaseOrderNo": "2017-04-12-001",
                "addresses": {
                    "SingleLocation": {
                        "line1": "123 Main Street",
                        "city": "Irvine",
                        "region": "CA",
                        "country": "US",
                        "postalCode": "92615"
                    }
                },
                "lines": [
                    {
                        "number": "1",
                        "quantity": 1,
                        "amount": 100,
                        "taxCode": "PS081282",
                        "itemCode": "Y0001",
                        "description": "Yarn"
                    }
                ],
                "commit": true,
                "currencyCode": "USD",
                "description": "Yarn"
            })
                .then(actualResponse => {
                    expect(actualResponse).toEqual({
                        "id": 289450369,
                        "code": "8f8084cb-d8d4-418a-bdbb-131f7254e09b",
                        "companyId": 559766,
                        "date": "2017-04-12",
                        "paymentDate": "1900-01-01",
                        "status": "Committed",
                        "type": "SalesInvoice",
                        "batchCode": "",
                        "currencyCode": "USD",
                        "customerUsageType": "",
                        "customerVendorCode": "ABC",
                        "exemptNo": "",
                        "reconciled": false,
                        "purchaseOrderNo": "2017-04-12-001",
                        "salespersonCode": "",
                        "taxOverrideType": "None",
                        "taxOverrideAmount": 0,
                        "taxOverrideReason": "",
                        "totalAmount": 100,
                        "totalExempt": 0,
                        "totalTax": 7.75,
                        "totalTaxable": 100,
                        "totalTaxCalculated": 7.75,
                        "adjustmentReason": "NotAdjusted",
                        "adjustmentDescription": "",
                        "locked": false,
                        "region": "CA",
                        "country": "US",
                        "version": 1,
                        "softwareVersion": "16.12.4.4",
                        "originAddressId": 742644966,
                        "destinationAddressId": 742644966,
                        "exchangeRateEffectiveDate": "2017-04-12",
                        "exchangeRate": 1,
                        "isSellerImporterOfRecord": false,
                        "description": "Yarn",
                        "modifiedDate": "2017-04-13T23:26:01.613",
                        "modifiedUserId": 7097,
                        "taxDate": "2017-04-12T00:00:00",
                        "lines": [
                            {
                                "id": 1052893542,
                                "transactionId": 289450369,
                                "lineNumber": "1",
                                "boundaryOverrideId": 0,
                                "customerUsageType": "",
                                "description": "Yarn",
                                "destinationAddressId": 742644966,
                                "originAddressId": 742644966,
                                "discountAmount": 0,
                                "exemptAmount": 0,
                                "exemptCertId": 0,
                                "exemptNo": "",
                                "isItemTaxable": true,
                                "isSSTP": false,
                                "itemCode": "Y0001",
                                "lineAmount": 100,
                                "quantity": 1,
                                "ref1": "",
                                "ref2": "",
                                "reportingDate": "2017-04-12",
                                "revAccount": "",
                                "sourcing": "Mixed",
                                "tax": 7.75,
                                "taxableAmount": 100,
                                "taxCalculated": 7.75,
                                "taxCode": "PS081282",
                                "taxCodeId": 38007,
                                "taxDate": "2017-04-12",
                                "taxEngine": "",
                                "taxOverrideType": "None",
                                "taxOverrideAmount": 0,
                                "taxOverrideReason": "",
                                "taxIncluded": false,
                                "details": [
                                    {
                                        "id": 1911631561,
                                        "transactionLineId": 1052893542,
                                        "transactionId": 289450369,
                                        "addressId": 742644966,
                                        "country": "US",
                                        "region": "CA",
                                        "stateFIPS": "06",
                                        "exemptAmount": 0,
                                        "exemptReasonId": 4,
                                        "inState": true,
                                        "jurisCode": "06",
                                        "jurisName": "CALIFORNIA",
                                        "jurisdictionId": 5000531,
                                        "signatureCode": "AGAM",
                                        "stateAssignedNo": "",
                                        "jurisType": "STA",
                                        "nonTaxableAmount": 0,
                                        "nonTaxableRuleId": 0,
                                        "nonTaxableType": "RateRule",
                                        "rate": 0.06,
                                        "rateRuleId": 1343430,
                                        "rateSourceId": 3,
                                        "serCode": " ",
                                        "sourcing": "Origin",
                                        "tax": 6,
                                        "taxableAmount": 100,
                                        "taxType": "Sales",
                                        "taxName": "CA STATE TAX",
                                        "taxAuthorityTypeId": 45,
                                        "taxRegionId": 2127863,
                                        "taxCalculated": 6,
                                        "taxOverride": 0,
                                        "rateType": "General",
                                        "rateTypeCode": "G",
                                        "taxableUnits": 100,
                                        "nonTaxableUnits": 0,
                                        "exemptUnits": 0,
                                        "unitOfBasis": "PerCurrencyUnit"
                                    },
                                    {
                                        "id": 1911631562,
                                        "transactionLineId": 1052893542,
                                        "transactionId": 289450369,
                                        "addressId": 742644966,
                                        "country": "US",
                                        "region": "CA",
                                        "stateFIPS": "06",
                                        "exemptAmount": 0,
                                        "exemptReasonId": 4,
                                        "inState": true,
                                        "jurisCode": "059",
                                        "jurisName": "ORANGE",
                                        "jurisdictionId": 267,
                                        "signatureCode": "AHXU",
                                        "stateAssignedNo": "",
                                        "jurisType": "CTY",
                                        "nonTaxableAmount": 0,
                                        "nonTaxableRuleId": 0,
                                        "nonTaxableType": "RateRule",
                                        "rate": 0.0025,
                                        "rateRuleId": 1316638,
                                        "rateSourceId": 3,
                                        "serCode": " ",
                                        "sourcing": "Origin",
                                        "tax": 0.25,
                                        "taxableAmount": 100,
                                        "taxType": "Sales",
                                        "taxName": "CA COUNTY TAX",
                                        "taxAuthorityTypeId": 45,
                                        "taxRegionId": 2127863,
                                        "taxCalculated": 0.25,
                                        "taxOverride": 0,
                                        "rateType": "General",
                                        "rateTypeCode": "G",
                                        "taxableUnits": 100,
                                        "nonTaxableUnits": 0,
                                        "exemptUnits": 0,
                                        "unitOfBasis": "PerCurrencyUnit"
                                    },
                                    {
                                        "id": 1911631563,
                                        "transactionLineId": 1052893542,
                                        "transactionId": 289450369,
                                        "addressId": 742644966,
                                        "country": "US",
                                        "region": "CA",
                                        "stateFIPS": "06",
                                        "exemptAmount": 0,
                                        "exemptReasonId": 4,
                                        "inState": true,
                                        "jurisCode": "EMAZ0",
                                        "jurisName": "ORANGE COUNTY DISTRICT TAX SP",
                                        "jurisdictionId": 2001061425,
                                        "signatureCode": "EMAZ",
                                        "stateAssignedNo": "037",
                                        "jurisType": "STJ",
                                        "nonTaxableAmount": 0,
                                        "nonTaxableRuleId": 0,
                                        "nonTaxableType": "RateRule",
                                        "rate": 0.005,
                                        "rateRuleId": 1316666,
                                        "rateSourceId": 3,
                                        "serCode": " ",
                                        "sourcing": "Destination",
                                        "tax": 0.5,
                                        "taxableAmount": 100,
                                        "taxType": "Sales",
                                        "taxName": "CA SPECIAL TAX",
                                        "taxAuthorityTypeId": 45,
                                        "taxRegionId": 2127863,
                                        "taxCalculated": 0.5,
                                        "taxOverride": 0,
                                        "rateType": "General",
                                        "rateTypeCode": "G",
                                        "taxableUnits": 100,
                                        "nonTaxableUnits": 0,
                                        "exemptUnits": 0,
                                        "unitOfBasis": "PerCurrencyUnit"
                                    },
                                    {
                                        "id": 1911631564,
                                        "transactionLineId": 1052893542,
                                        "transactionId": 289450369,
                                        "addressId": 742644966,
                                        "country": "US",
                                        "region": "CA",
                                        "stateFIPS": "06",
                                        "exemptAmount": 0,
                                        "exemptReasonId": 4,
                                        "inState": true,
                                        "jurisCode": "EMTN0",
                                        "jurisName": "ORANGE CO LOCAL TAX SL",
                                        "jurisdictionId": 2001061784,
                                        "signatureCode": "EMTN",
                                        "stateAssignedNo": "30",
                                        "jurisType": "STJ",
                                        "nonTaxableAmount": 0,
                                        "nonTaxableRuleId": 0,
                                        "nonTaxableType": "RateRule",
                                        "rate": 0.01,
                                        "rateRuleId": 1316670,
                                        "rateSourceId": 3,
                                        "serCode": " ",
                                        "sourcing": "Origin",
                                        "tax": 1,
                                        "taxableAmount": 100,
                                        "taxType": "Sales",
                                        "taxName": "CA SPECIAL TAX",
                                        "taxAuthorityTypeId": 45,
                                        "taxRegionId": 2127863,
                                        "taxCalculated": 1,
                                        "taxOverride": 0,
                                        "rateType": "General",
                                        "rateTypeCode": "G",
                                        "taxableUnits": 100,
                                        "nonTaxableUnits": 0,
                                        "exemptUnits": 0,
                                        "unitOfBasis": "PerCurrencyUnit"
                                    }
                                ],
                                "lineLocationTypes": [
                                    {
                                        "documentLineLocationTypeId": 589531652,
                                        "documentLineId": 1052893542,
                                        "documentAddressId": 742644966,
                                        "locationTypeCode": "PointOfOrderOrigin"
                                    },
                                    {
                                        "documentLineLocationTypeId": 589531651,
                                        "documentLineId": 1052893542,
                                        "documentAddressId": 742644966,
                                        "locationTypeCode": "PointOfOrderAcceptance"
                                    },
                                    {
                                        "documentLineLocationTypeId": 589531650,
                                        "documentLineId": 1052893542,
                                        "documentAddressId": 742644966,
                                        "locationTypeCode": "ShipTo"
                                    },
                                    {
                                        "documentLineLocationTypeId": 589531649,
                                        "documentLineId": 1052893542,
                                        "documentAddressId": 742644966,
                                        "locationTypeCode": "ShipFrom"
                                    }
                                ],
                                "parameters": {}
                            }
                        ],
                        "addresses": [
                            {
                                "id": 742644966,
                                "transactionId": 289450369,
                                "boundaryLevel": "Zip5",
                                "line1": "123 Main Street",
                                "line2": "",
                                "line3": "",
                                "city": "Irvine",
                                "region": "CA",
                                "postalCode": "92615",
                                "country": "US",
                                "taxRegionId": 2127863,
                                "latitude": "33.657808",
                                "longitude": "-117.968489"
                            }
                        ],
                        "locationTypes": [
                            {
                                "documentLocationTypeId": 360178,
                                "documentId": 289450369,
                                "documentAddressId": 742644966,
                                "locationTypeCode": "PointOfOrderOrigin"
                            },
                            {
                                "documentLocationTypeId": 360177,
                                "documentId": 289450369,
                                "documentAddressId": 742644966,
                                "locationTypeCode": "PointOfOrderAcceptance"
                            },
                            {
                                "documentLocationTypeId": 360176,
                                "documentId": 289450369,
                                "documentAddressId": 742644966,
                                "locationTypeCode": "ShipTo"
                            },
                            {
                                "documentLocationTypeId": 360175,
                                "documentId": 289450369,
                                "documentAddressId": 742644966,
                                "locationTypeCode": "ShipFrom"
                            }
                        ],
                        "summary": [
                            {
                                "country": "US",
                                "region": "CA",
                                "jurisType": "State",
                                "jurisCode": "06",
                                "jurisName": "CALIFORNIA",
                                "taxAuthorityType": 45,
                                "stateAssignedNo": "",
                                "taxType": "Sales",
                                "taxName": "CA STATE TAX",
                                "rateType": "General",
                                "taxable": 100,
                                "rate": 0.06,
                                "tax": 6,
                                "taxCalculated": 6,
                                "nonTaxable": 0,
                                "exemption": 0
                            },
                            {
                                "country": "US",
                                "region": "CA",
                                "jurisType": "County",
                                "jurisCode": "059",
                                "jurisName": "ORANGE",
                                "taxAuthorityType": 45,
                                "stateAssignedNo": "",
                                "taxType": "Sales",
                                "taxName": "CA COUNTY TAX",
                                "rateType": "General",
                                "taxable": 100,
                                "rate": 0.0025,
                                "tax": 0.25,
                                "taxCalculated": 0.25,
                                "nonTaxable": 0,
                                "exemption": 0
                            },
                            {
                                "country": "US",
                                "region": "CA",
                                "jurisType": "Special",
                                "jurisCode": "EMTN0",
                                "jurisName": "ORANGE CO LOCAL TAX SL",
                                "taxAuthorityType": 45,
                                "stateAssignedNo": "30",
                                "taxType": "Sales",
                                "taxName": "CA SPECIAL TAX",
                                "rateType": "General",
                                "taxable": 100,
                                "rate": 0.01,
                                "tax": 1,
                                "taxCalculated": 1,
                                "nonTaxable": 0,
                                "exemption": 0
                            },
                            {
                                "country": "US",
                                "region": "CA",
                                "jurisType": "Special",
                                "jurisCode": "EMAZ0",
                                "jurisName": "ORANGE COUNTY DISTRICT TAX SP",
                                "taxAuthorityType": 45,
                                "stateAssignedNo": "037",
                                "taxType": "Sales",
                                "taxName": "CA SPECIAL TAX",
                                "rateType": "General",
                                "taxable": 100,
                                "rate": 0.005,
                                "tax": 0.5,
                                "taxCalculated": 0.5,
                                "nonTaxable": 0,
                                "exemption": 0
                            }
                        ],
                        "parameters": {}
                    });
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
            return client.adjustTransaction(companyCode, transactionCode,adjustTransactionRequest)
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
            return client.voidTransaction(companyCode, transactionCode, voidTransactionRequest)
                .then(actualResponse => {
                    expect(actualResponse).toEqual(voidTransactionResponse);
                });
        });
    });


});
