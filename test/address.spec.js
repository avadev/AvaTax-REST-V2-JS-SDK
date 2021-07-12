
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
            console.log(res);
        });
    });

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
            expect(res.validatedAddresses[0].longitude).toBeDefined();
        });
    });
});
