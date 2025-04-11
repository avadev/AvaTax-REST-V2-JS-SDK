
// import Avatax from 'avatax';
import AvaTaxClient from '../lib/AvaTaxClient';
import nock from 'nock';
import resolveAddressResponse from './fixtures/address_response';
import loadCreds from './helpers/load_creds';
import { JsonConvert, PropertyMatchingRule } from 'json2typescript';

const baseUrl = 'https://api.dev.avalara.io';
const username = '';
const password = '';
const appName = 'myapp';
const appVersion = '1.0';
const environment = 'dev';
const machineName = 'mbp';
const clientCreds = loadCreds();
const client = new AvaTaxClient({...clientCreds, enableStrictTypeConversion: true}).withSecurity({username: "sdkSbxTest",
  password: "SdkTest2192024!"});

describe('Nexus should list', () => {
    it('should resolve queryNexus', async () => {
        const nexuses = await client.queryNexus({ top: 1} );
        const effectiveNexus = nexuses.value.find(n => n.effectiveDate);
        // console.log("Type of nexus date", typeof effectiveNexus.effectiveDate)
        // console.log("Nexues", effectiveNexus);
    });
});
