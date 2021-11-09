# AvaTax Rest V2 Node.js SDK
AvaTax v2 SDK for languages using node.js

[![Version](https://img.shields.io/npm/v/avatax.svg?style=plastic)](https://www.npmjs.org/package/avatax)
[![Build Status](https://api.travis-ci.org/avadev/AvaTax-REST-V2-JRE-SDK.svg?branch=master&style=plastic)](https://travis-ci.org/avadev/AvaTax-REST-V2-JS-SDK)
[![Downloads](https://img.shields.io/npm/dm/avatax.svg)](https://www.npmjs.com/package/avatax)
[![Try on RunKit](https://badge.runkitcdn.com/avatax.svg)](https://runkit.com/npm/avatax)

## Installation
Install the package with: 
``` bash
# using npm 
npm install avatax

# using yarn
yarn add avatax
```

## Usage
 
### Configuration
``` js

// es5 import
var Avatax = require('avatax');

// es6/7 import
// import Avatax from 'avatax';

// resolve configuration and credentials
const config = {
  appName: 'your-app',
  appVersion: '1.0',
  environment: 'sandbox',
  machineName: 'your-machine-name'
  timeout: 5000 // optional, default 2 min
};

const creds = {
  username: '<your-username>',
  password: '<your-password>'
};

var client = new Avatax(config).withSecurity(creds);
``` 

### Tax Calculation
``` js
const taxDocument = {
  type: 'SalesInvoice',
  companyCode: 'abc123',
  date: '2017-04-12',
  customerCode: 'ABC',
  purchaseOrderNo: '2017-04-12-001',
  addresses: {
    SingleLocation: {
      line1: '123 Main Street',
      city: 'Irvine',
      region: 'CA',
      country: 'US',
      postalCode: '92615'
    }
  },
  lines: [
    {
      number: '1',
      quantity: 1,
      amount: 100,
      taxCode: 'PS081282',
      itemCode: 'Y0001',
      description: 'Yarn'
    }
  ],
  commit: true,
  currencyCode: 'USD',
  description: 'Yarn'
}

return client.createTransaction({ model: taxDocument })
  .then(result => {
    // response tax document
    console.log(result);
  });
```

### Address Validation
``` js
const address = {
  city: 'irvine',
  postalCode: '92615',
  region: 'ca',
  country: 'us'
};

return client.resolveAddress(address)
  .then(result => {
    // address validation result
    console.log(result);
  });

```
## Release Notes

In the JS-SDK 21.2.1 release, the SDK can now return big integers from API responses.
Big integers in JavaScript are displayed in responses by appending an 'n' to the end of an integer literal. For example, 618368842515476464 -> 618368842515476464n.
Numbers are presented as before. For example, 8456123 -> 8456123.
For more information, refer to the following Mozilla documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

## SDK Development

### Adding integration test credentials
Running integration tests will hit the deployed lower environment

Test credentials are resolved in the following order:
1. Environment variables

The following environment variables will get loaded as test credentials
```bash
SANDBOX_USERNAME="your-username"
SANDBOX_PASSWORD="your-password"
```
2. Local credentials file

You can also add a local credentials file to the the path "<project_root>/local_creds.json". This file will be gitignored
```json
{
  "username": "your-username",
  "password": "your-password"
}
```
3. Static (mock) values

The mocked values are used for unit tests via 'nock'.

The test credentials helper can be found here
https://github.com/avadev/AvaTax-REST-V2-JS-SDK/blob/master/test/helpers/load_creds.js

### Publish tags upstream
``` bash
# assuming a tag of v17.5.2 and a remote of 'upstream'
git push upstream v17.5.2
```

