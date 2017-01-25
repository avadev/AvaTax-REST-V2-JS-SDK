/**
 * Avalara © 2017
 * file: test/fixtures/transaction_request.js
 */

export default {
  "type": "SalesInvoice",
  "companyCode": "abc123",
  "date": "2017-01-10T00:00:00-08:00",
  "customerCode": "ABC",
  "purchaseOrderNo": "2017-01-10-001",
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
  "taxDate": "2017-01-10T00:00:00-08:00",
  "currencyCode": "USD",
  "description": "Yarn"
}

