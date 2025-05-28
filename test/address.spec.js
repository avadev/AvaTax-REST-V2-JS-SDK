
import Avatax from 'avatax';
import nock from 'nock';
import resolveAddressResponse from './fixtures/address_response';
import loadCreds from './helpers/load_creds';

const baseUrl = 'https://api.dev.avalara.io';
const username = '';
const password = '';
const appName = 'myapp';
const appVersion = '1.0';
const environment = 'dev';
const machineName = 'mbp';
const clientCreds = loadCreds();
const client = new Avatax({...clientCreds, timeout: 10}).withSecurity(clientCreds);

describe('Address integration test', () => {

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

    it('should list cross border sections', () => {
        return client.listCrossBorderSections().then(res => {
            expect(res).toBeDefined();
        });
    });
});

describe('Address resolve Tests', () => {
    beforeEach(() => {
        nock(baseUrl).get(`/api/v2/addresses/resolve?line1=1510%20Foster%20Circle&line2=Algonquin&city=Illinois&region=IL&postalCode=60102&country=US&textCase=mixed`)
          .reply(200, resolveAddressResponse);
      })

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
        }).catch(e => {
            console.error("Caught an error", e);
        });
    });
});
