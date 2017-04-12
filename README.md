# AvaTax-REST-V2-JS-SDK
AvaTax v2 SDK for languages using JavaScript

## Adding integration test credentials
Running integration tests will hit the deployed lower environment

Test credentials are resolved in the following order:
1. Environment variables

The following environment variables will get loaded as test credentials
```
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

The test credentials helper can be found here
https://github.com/avadev/AvaTax-REST-V2-JS-SDK/blob/master/test/helpers/load_creds.js

