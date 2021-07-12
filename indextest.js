// import Avatax from '../AvaTax-REST-V2-JS-SDK/lib/AvaTaxClient';
var Avatax = require('../AvaTax-REST-V2-JS-SDK/.build/index');

const config = {
  appName: 'test',
  appVersion: '1.0',
  environment: 'dev',
  machineName: 'SANJUAN\\dipti.jadhav'
};

const creds = {
  username: '',
  password: ''
};

var client = new Avatax(config).withSecurity(creds);
console.log('Inside Avatax client');
const data = client.resolveAddress({line1:"1510 Foster Circle",line2:"Algonquin",line3:"",city:"Illinois",region:"IL",postalCode:"60102",country:"US",textCase:"Mixed"});

// const data = client.resolveAddress({line1:"1510 Foster Circle",line2:"Algonquin",line3:"",city:"Illinois",region:"IL",postalCode:"60102",country:"US",textCase:"Mixed"});
console.log('Called resolve address');

data
.then(text => console.log(text))
.catch(error => console.log(error));