var Avatax = require('./.build/index');
//var Avatax = require('avatax');
const config = {
  appName: 'test',
  appVersion: '1.0',
  environment: 'http://localhost:45958/',
  machineName: 'SANJUAN\\akshit.bansal'
};
const creds = {
  username: 'gaurav.bansal@avalara.com',
  password: 'avatest1234'
};
var client = new Avatax(config).withSecurity(creds);
const data = client.restCall({url: 'http://localhost:45958/api/v2/companies/default/transactions/transactionCode', verb: 'Get'});

data.then(res => console.log(res)).catch(error => console.log(error));