
import Avatax from '../lib/AvaTaxClient';
import nock from 'nock';
import resolveAddressResponse from './fixtures/address_response';

const baseUrl = 'https://api.dev.avalara.io';
const username = '';
const password = '';
const appName = 'myapp';
const appVersion = '1.0';
const environment = 'dev';
const machineName = 'mbp';

describe('Address integration test', () => {
   
    const client = new Avatax({ appName, appVersion, environment, machineName })
    .withSecurity({ username, password });

    it('should resolve address', () => {

        const address = {
            line1: '1510 Foster Circle',
            line2: 'Algonquin',
            line3: '',
            city: 'Illinois',
            region: 'IL',
            postalCode: '60102',
            country: 'US',
            textCase: 'mixed'
            };

        return client.resolveAddress(address).then(res => {
            expect(res.validatedAddresses).toBeDefined();
            expect(res.validatedAddresses[0]).toBeDefined();
            expect(res.validatedAddresses[0].latitude).toBeDefined();
            expect(res.validatedAddresses[0].latitude).toEqual(42.144481999999996);
            expect(res.coordinates).toBeDefined();
            expect(res.coordinates.longitude).toBeDefined();
            expect(res.coordinates.longitude).toEqual(-88.320204);
            expect(res.address.line1).toBeDefined();
            expect(res.address.line1).toEqual('1510 Foster Circle');
        });
    });
});

describe('Address resolve Tests', () => {
    beforeEach(() => {
        nock(baseUrl).get(`/api/v2/addresses/resolve?line1=1510%20Foster%20Circle&line2=Algonquin&city=Illinois&region=IL&postalCode=60102&country=US&textCase=mixed`)
          .reply(200, resolveAddressResponse);
      })

    const client = new Avatax({ appName, appVersion, environment, machineName })
    .withSecurity({ username, password });

    it('should resolve address', () => {

        const address = {
            line1: '1510 Foster Circle',
            line2: 'Algonquin',
            line3: '',
            city: 'Illinois',
            region: 'IL',
            postalCode: '60102',
            country: 'US',
            textCase: 'mixed'
            };

        return client.resolveAddress(address).then(res => {
            expect(res.validatedAddresses).toBeDefined();
            expect(res.validatedAddresses[0]).toBeDefined();
            expect(res.validatedAddresses[0].latitude).toBeDefined();
            expect(res.validatedAddresses[0].latitude).toEqual(42.144481999999996);
            expect(res.taxAuthorities[0].code).toEqual(true);
            expect(res.coordinates).toBeDefined();
            expect(res.coordinates.longitude).toBeDefined();
            expect(res.coordinates.longitude).toEqual(-88.320204);
            expect(res.address.line1).toBeDefined();
            expect(res.address.line1).toEqual('1510 Foster Circle');
        });
    });
});