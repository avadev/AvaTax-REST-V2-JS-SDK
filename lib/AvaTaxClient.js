/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2017 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Justin Soliz <justin.soliz@avalara.com>
 * @author     Ted Spence <ted.spence@avalara.com>
 * @copyright  2004-2017 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    17.7.0-96
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import fetch from 'isomorphic-fetch';
import { createBasicAuthHeader } from './utils/basic_auth';

export default class AvaTaxClient {
  /**
   * Construct a new AvaTaxClient 
   * 
   * @constructor
   * @param string appName      Specify the name of your application here.  Should not contain any semicolons.
   * @param string appVersion   Specify the version number of your application here.  Should not contain any semicolons.
   * @param string machineName  Specify the machine name of the machine on which this code is executing here.  Should not contain any semicolons.
   * @param string environment  Indicates which server to use; acceptable values are "sandbox" or "production", or the full URL of your AvaTax instance.
   */
  constructor({ appName, appVersion, machineName, environment }) {
    this.baseUrl = 'https://rest.avatax.com';
    if (environment == 'sandbox') {
      this.baseUrl = 'https://sandbox-rest.avatax.com';
    } else if (
      environment.substring(0, 8) == 'https://' ||
      environment.substring(0, 7) == 'http://'
    ) {
      this.baseUrl = environment;
    }
    this.clientId =
      appName +
      '; ' +
      appVersion +
      '; JavascriptSdk; 17.6.0-89; ' +
      machineName;
  }

  /**
   * Configure this client to use the specified username/password security settings
   *
   * @param  string          username        The username for your AvaTax user account
   * @param  string          password        The password for your AvaTax user account
   * @param  int             accountId       The account ID of your avatax account
   * @param  string          licenseKey      The license key of your avatax account
   * @param  string          bearerToken     The OAuth 2.0 token provided by Avalara Identity
   * @return AvaTaxClient
   */
  withSecurity({ username, password, accountId, licenseKey, bearerToken }) {
    if (username != null && password != null) {
      this.auth = createBasicAuthHeader(username, password);
    } else if (accountId != null && licenseKey != null) {
      this.auth = createBasicAuthHeader(accountId, licenseKey);
    } else if (bearerToken != null) {
      this.auth = 'Bearer ' + bearerToken;
    }
    return this;
  }

  /**
   * Make a single REST call to the AvaTax v2 API server
   *
   * @param   string  url        The relative path of the API on the server
   * @param   string  verb       The HTTP verb being used in this request
   * @param   string  payload    The request body, if this is being sent to a POST/PUT API call
   */
  restCall({ url, verb, payload }) {
    return fetch(url, {
      method: verb,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.auth
      },
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then(json => {
        // handle error
        if (json.error) {
          let ex = new Error(json.error.message);
          ex.code = json.error.code;
          ex.target = json.error.target;
          ex.details = json.error.details;
          throw ex;
        } else {
          return json;
        }
      })
  }

  /**
   * Construct a URL with query string parameters
   *
   * @param   string  url            The root URL of the API being called
   * @param   string  parameters     A list of name-value pairs in a javascript object to create as query string parameters
   */
  buildUrl({ url, parameters }) {
    var qs = '';
    for (var key in parameters) {
      var value = parameters[key];
      if (value) {
        qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
      }
    }
    if (qs.length > 0) {
      qs = qs.substring(0, qs.length - 1); //chop off last "&"
      url = url + '?' + qs;
    }
    return this.baseUrl + url;
  }


  /**
   * Reset this account's license key
   *
   * Resets the existing license key for this account to a new key.
     * To reset your account, you must specify the ID of the account you wish to reset and confirm the action.
     * Resetting a license key cannot be undone. Any previous license keys will immediately cease to work when a new key is created.
   *
   * 
     * @param int id The ID of the account you wish to update.
     * @param object model A request confirming that you wish to reset the license key of this account.
   * @return object
   */
  accountResetLicenseKey({ id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/resetlicensekey`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Activate an account by accepting terms and conditions
   *
   * Activate the account specified by the unique accountId number.
     * 
     * This activation request can only be called by account administrators. You must indicate 
     * that you have read and accepted Avalara's terms and conditions to call this API.
     * 
     * If you have not read or accepted the terms and conditions, this API call will return the
     * unchanged account model.
   *
   * 
     * @param int id The ID of the account to activate
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param object model The activation request
   * @return object
   */
  activateAccount({ id, include, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/activate`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Retrieve a single account
   *
   * Get the account object identified by this URL.
     * You may use the '$include' parameter to fetch additional nested data:
     * 
     * * Subscriptions
     * * Users
   *
   * 
     * @param int id The ID of the account to retrieve
     * @param string include A comma separated list of child objects to return underneath the primary object.
   * @return object
   */
  getAccount({ id, include } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Get configuration settings for this account
   *
   * Retrieve a list of all configuration settings tied to this account.
     * 
     * Configuration settings provide you with the ability to control features of your account and of your
     * tax software. The category names `TaxServiceConfig` and `AddressServiceConfig` are reserved for
     * Avalara internal software configuration values; to store your own account-level settings, please
     * create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
     * 
     * Account settings are permanent settings that cannot be deleted. You can set the value of an
     * account setting to null if desired.
     * 
     * Avalara-based account settings for `TaxServiceConfig` and `AddressServiceConfig` affect your account's
     * tax calculation and address resolution, and should only be changed with care.
   *
   * 
     * @param int id 
   * @return object[]
   */
  getAccountConfiguration({ id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/configuration`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Change configuration settings for this account
   *
   * Update configuration settings tied to this account.
     * 
     * Configuration settings provide you with the ability to control features of your account and of your
     * tax software. The category names `TaxServiceConfig` and `AddressServiceConfig` are reserved for
     * Avalara internal software configuration values; to store your own account-level settings, please
     * create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
     * 
     * Account settings are permanent settings that cannot be deleted. You can set the value of an
     * account setting to null if desired.
     * 
     * Avalara-based account settings for `TaxServiceConfig` and `AddressServiceConfig` affect your account's
     * tax calculation and address resolution, and should only be changed with care.
   *
   * 
     * @param int id 
     * @param object[] model 
   * @return object[]
   */
  setAccountConfiguration({ id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/configuration`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Retrieve geolocation information for a specified address
   *
   * Resolve an address against Avalara's address-validation system. If the address can be resolved, this API 
     * provides the latitude and longitude of the resolved location. The value 'resolutionQuality' can be used 
     * to identify how closely this address can be located. If the address cannot be clearly located, use the 
     * 'messages' structure to learn more about problems with this address.
     * This is the same API as the POST /api/v2/addresses/resolve endpoint.
     * Both verbs are supported to provide for flexible implementation.
   *
   * 
     * @param string line1 Line 1
     * @param string line2 Line 2
     * @param string line3 Line 3
     * @param string city City
     * @param string region State / Province / Region
     * @param string postalCode Postal Code / Zip Code
     * @param string country Two character ISO 3166 Country Code (see /api/v2/definitions/countries for a full list)
     * @param string textCase selectable text case for address validation (See TextCase::* for a list of allowable values)
     * @param float latitude Geospatial latitude measurement
     * @param float longitude Geospatial longitude measurement
   * @return object
   */
  resolveAddress({ line1, line2, line3, city, region, postalCode, country, textCase, latitude, longitude } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/addresses/resolve`,
      parameters: {
        line1: line1,
        line2: line2,
        line3: line3,
        city: city,
        region: region,
        postalCode: postalCode,
        country: country,
        textCase: textCase,
        latitude: latitude,
        longitude: longitude
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve geolocation information for a specified address
   *
   * Resolve an address against Avalara's address-validation system. If the address can be resolved, this API 
     * provides the latitude and longitude of the resolved location. The value 'resolutionQuality' can be used 
     * to identify how closely this address can be located. If the address cannot be clearly located, use the 
     * 'messages' structure to learn more about problems with this address.
     * This is the same API as the GET /api/v2/addresses/resolve endpoint.
     * Both verbs are supported to provide for flexible implementation.
   *
   * 
     * @param object model The address to resolve
   * @return object
   */
  resolveAddressPost({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/addresses/resolve`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new batch
   *
   * Create one or more new batch objects attached to this company.
     * When you create a batch, it is added to the AvaTaxBatch.Batch table and will be processed in the order it was received.
     * You may fetch a batch to check on its status and retrieve the results of the batch operation.
     * Each batch object may have one or more file objects (currently only one file is supported).
   *
   * 
     * @param int companyId The ID of the company that owns this batch.
     * @param object[] model The batch you wish to create.
   * @return object[]
   */
  createBatches({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single batch
   *
   * 
   *
   * 
     * @param int companyId The ID of the company that owns this batch.
     * @param int id The ID of the batch you wish to delete.
   * @return object[]
   */
  deleteBatch({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Download a single batch file
   *
   * Download a single batch file identified by this URL.
   *
   * 
     * @param int companyId The ID of the company that owns this batch
     * @param int batchId The ID of the batch object
     * @param int id The primary key of this batch file object
   * @return object
   */
  downloadBatch({ companyId, batchId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches/${batchId}/files/${id}/attachment`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a single batch
   *
   * Get the batch object identified by this URL.
     * A batch object is a large collection of API calls stored in a compact file.
     * When you create a batch, it is added to the AvaTax Batch Queue and will be processed in the order it was received.
     * You may fetch a batch to check on its status and retrieve the results of the batch operation.
   *
   * 
     * @param int companyId The ID of the company that owns this batch
     * @param int id The primary key of this batch
   * @return object
   */
  getBatch({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all batches for this company
   *
   * List all batch objects attached to the specified company.
     * A batch object is a large collection of API calls stored in a compact file.
     * When you create a batch, it is added to the AvaTax Batch Queue and will be processed in the order it was received.
     * You may fetch a batch to check on its status and retrieve the results of the batch operation.
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that owns these batches
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listBatchesByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all batches
   *
   * Get multiple batch objects across all companies.
     * A batch object is a large collection of API calls stored in a compact file.
     * When you create a batch, it is added to the AvaTax Batch Queue and will be processed in the order it was received.
     * You may fetch a batch to check on its status and retrieve the results of the batch operation.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryBatches({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/batches`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Change the filing status of this company
   *
   * Changes the current filing status of this company.
     * 
     * For customers using Avalara's Managed Returns Service, each company within their account can request
     * for Avalara to file tax returns on their behalf. Avalara compliance team members will review all
     * requested filing calendars prior to beginning filing tax returns on behalf of this company.
     * 
     * The following changes may be requested through this API:
     * 
     * * If a company is in `NotYetFiling` status, the customer may request this be changed to `FilingRequested`.
     * * Avalara compliance team members may change a company from `FilingRequested` to `FirstFiling`.
     * * Avalara compliance team members may change a company from `FirstFiling` to `Active`.
     * 
     * All other status changes must be requested through the Avalara customer support team.
   *
   * 
     * @param int id 
     * @param object model 
   * @return string
   */
  changeFilingStatus({ id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/filingstatus`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Quick setup for a company with a single physical address
   *
   * Shortcut to quickly setup a single-physical-location company with critical information and activate it.
     * This API provides quick and simple company setup functionality and does the following things:
     *  
     * * Create a company object with its own tax profile
     * * Add a key contact person for the company
     * * Set up one physical location for the main office
     * * Declare nexus in all taxing jurisdictions for that main office address
     * * Activate the company
     *  
     * This API only provides a limited subset of functionality compared to the 'Create Company' API call. 
     * If you need additional features or options not present in this 'Quick Setup' API call, please use the full 'Create Company' call instead.
   *
   * 
     * @param object model Information about the company you wish to create.
   * @return object
   */
  companyInitialize({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/initialize`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create new companies
   *
   * Create one or more new company objects.
     * A 'company' represents a single corporation or individual that is registered to handle transactional taxes.
     * You may attach nested data objects such as contacts, locations, and nexus with this CREATE call, and those objects will be created with the company.
   *
   * 
     * @param object[] model Either a single company object or an array of companies to create
   * @return object[]
   */
  createCompanies({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Request managed returns funding setup for a company
   *
   * This API is available by invitation only.
     * Companies that use the Avalara Managed Returns or the SST Certified Service Provider services are 
     * required to setup their funding configuration before Avalara can begin filing tax returns on their 
     * behalf.
     * Funding configuration for each company is set up by submitting a funding setup request, which can
     * be sent either via email or via an embedded HTML widget.
     * When the funding configuration is submitted to Avalara, it will be reviewed by treasury team members
     * before approval.
     * This API records that an ambedded HTML funding setup widget was activated.
     * This API requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
   *
   * 
     * @param int id The unique identifier of the company
     * @param object model The funding initialization request
   * @return object
   */
  createFundingRequest({ id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/funding/setup`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single company
   *
   * Deleting a company will delete all child companies, and all users attached to this company.
   *
   * 
     * @param int id The ID of the company you wish to delete.
   * @return object[]
   */
  deleteCompany({ id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single company
   *
   * Get the company object identified by this URL.
     * A 'company' represents a single corporation or individual that is registered to handle transactional taxes.
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     * 
     *  * Contacts
     *  * Items
     *  * Locations
     *  * Nexus
     *  * Settings
     *  * TaxCodes
     *  * TaxRules
     *  * UPC
     *  * ECMS
   *
   * 
     * @param int id The ID of the company to retrieve.
     * @param string include A comma separated list of child objects to return underneath the primary object.
   * @return object
   */
  getCompany({ id, include } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * 
   *
   * 
   *
   * 
   * @return FetchResult
   */
  getCompany({  } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/mrs`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Get configuration settings for this company
   *
   * Retrieve a list of all configuration settings tied to this company.
     * 
     * Configuration settings provide you with the ability to control features of your account and of your
     * tax software. The category names `AvaCertServiceConfig` is reserved for
     * Avalara internal software configuration values; to store your own account-level settings, please
     * create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
     * 
     * Company settings are permanent settings that cannot be deleted. You can set the value of a
     * company setting to null if desired.
     * 
     * Avalara-based account settings for `AvaCertServiceConfig` affect your account's exemption certificate
     * processing, and should only be changed with care.
   *
   * 
     * @param int id 
   * @return object[]
   */
  getCompanyConfiguration({ id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/configuration`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Get this company's filing status
   *
   * Retrieve the current filing status of this company.
     * 
     * For customers using Avalara's Managed Returns Service, each company within their account can request
     * for Avalara to file tax returns on their behalf. Avalara compliance team members will review all
     * requested filing calendars prior to beginning filing tax returns on behalf of this company.
     * 
     * A company's filing status can be one of the following values:
     * 
     * * `NoReporting` - This company is not configured to report tax returns; instead, it reports through a parent company.
     * * `NotYetFiling` - This company has not yet begun filing tax returns through Avalara's Managed Returns Service.
     * * `FilingRequested` - The company has requested to begin filing tax returns, but Avalara's compliance team has not yet begun filing.
     * * `FirstFiling` - The company has recently filing tax returns and is in a new status.
     * * `Active` - The company is currently active and is filing tax returns via Avalara Managed Returns.
   *
   * 
     * @param int id 
   * @return string
   */
  getFilingStatus({ id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/filingstatus`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Check managed returns funding configuration for a company
   *
   * This API is available by invitation only.
     * Requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
     * Returns a list of funding setup requests and their current status.
     * Each object in the result is a request that was made to setup or adjust funding configuration for this company.
   *
   * 
     * @param int id The unique identifier of the company
   * @return object[]
   */
  listFundingRequestsByCompany({ id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/funding`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all companies
   *
   * Get multiple company objects.
     * A 'company' represents a single corporation or individual that is registered to handle transactional taxes.
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Contacts
     * * Items
     * * Locations
     * * Nexus
     * * Settings
     * * TaxCodes
     * * TaxRules
     * * UPC
     * * ECMS
   *
   * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryCompanies({ include, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Change configuration settings for this account
   *
   * Update configuration settings tied to this account.
     * 
     * Configuration settings provide you with the ability to control features of your account and of your
     * tax software. The category names `AvaCertServiceConfig` is reserved for
     * Avalara internal software configuration values; to store your own account-level settings, please
     * create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
     * 
     * Company settings are permanent settings that cannot be deleted. You can set the value of a
     * company setting to null if desired.
     * 
     * Avalara-based account settings for `AvaCertServiceConfig` affect your account's exemption certificate
     * processing, and should only be changed with care.
   *
   * 
     * @param int id 
     * @param object[] model 
   * @return object[]
   */
  setCompanyConfiguration({ id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/configuration`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Update a single company
   *
   * Replace the existing company object at this URL with an updated object.
     * A 'company' represents a single corporation or individual that is registered to handle transactional taxes.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int id The ID of the company you wish to update.
     * @param object model The company object you wish to update.
   * @return object
   */
  updateCompany({ id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Create a new contact
   *
   * Create one or more new contact objects.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
   *
   * 
     * @param int companyId The ID of the company that owns this contact.
     * @param object[] model The contacts you wish to create.
   * @return object[]
   */
  createContacts({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single contact
   *
   * Mark the existing contact object at this URL as deleted.
   *
   * 
     * @param int companyId The ID of the company that owns this contact.
     * @param int id The ID of the contact you wish to delete.
   * @return object[]
   */
  deleteContact({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single contact
   *
   * Get the contact object identified by this URL.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
   *
   * 
     * @param int companyId The ID of the company for this contact
     * @param int id The primary key of this contact
   * @return object
   */
  getContact({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve contacts for this company
   *
   * List all contact objects assigned to this company.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that owns these contacts
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listContactsByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all contacts
   *
   * Get multiple contact objects across all companies.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryContacts({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/contacts`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single contact
   *
   * Replace the existing contact object at this URL with an updated object.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this contact belongs to.
     * @param int id The ID of the contact you wish to update
     * @param object model The contact you wish to update.
   * @return object
   */
  updateContact({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Test whether a form supports online login verification
   *
   * This API is intended to be useful to identify whether the user should be allowed
     * to automatically verify their login and password.
   *
   * 
     * @param string form The name of the form you would like to verify. This can be the tax form code or the legacy return name
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  getLoginVerifierByForm({ form, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/filingcalendars/loginverifiers/${form}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of the AvaFile Forms available
   *
   * Returns the full list of Avalara-supported AvaFile Forms
     * This API is intended to be useful to identify all the different AvaFile Forms
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listAvaFileForms({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/avafileforms`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of communications transactiontypes
   *
   * Returns full list of communications transaction types which
     * are accepted in communication tax calculation requests.
   *
   * 
     * @param int id 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listCommunicationsServiceTypes({ id, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/communications/transactiontypes/${id}/servicetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of communications transactiontypes
   *
   * Returns full list of communications transaction types which
     * are accepted in communication tax calculation requests.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listCommunicationsTransactionTypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/communications/transactiontypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of communications transaction/service type pairs
   *
   * Returns full list of communications transaction/service type pairs which
     * are accepted in communication tax calculation requests.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listCommunicationsTSPairs({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/communications/tspairs`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List all ISO 3166 countries
   *
   * Returns a list of all ISO 3166 country codes, and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a country for 
     * a shipping address.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listCountries({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/countries`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported entity use codes
   *
   * Returns the full list of Avalara-supported entity use codes.
     * Entity/Use Codes are definitions of the entity who is purchasing something, or the purpose for which the transaction
     * is occurring. This information is generally used to determine taxability of the product.
     * In order to facilitate correct reporting of your taxes, you are encouraged to select the proper entity use codes for
     * all transactions that are exempt.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listEntityUseCodes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/entityusecodes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported filing frequencies.
   *
   * Returns the full list of Avalara-supported filing frequencies.
     * This API is intended to be useful to identify all the different filing frequencies that can be used in notices.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listFilingFrequencies({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/filingfrequencies`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List jurisdictions based on the filter provided
   *
   * Returns a list of all Avalara-supported taxing jurisdictions.
     * 
     * This API allows you to examine all Avalara-supported jurisdictions. You can filter your search by supplying
     * SQL-like query for fetching only the ones you concerned about. For example: effectiveDate &gt; '2016-01-01'
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listJurisdictions({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/jurisdictions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List jurisdictions near a specific address
   *
   * Returns a list of all Avalara-supported taxing jurisdictions that apply to this address.
     * 
     * This API allows you to identify which jurisdictions are nearby a specific address according to the best available geocoding information.
     * It is intended to allow you to create a "Jurisdiction Override", which allows an address to be configured as belonging to a nearby 
     * jurisdiction in AvaTax.
     *  
     * The results of this API call can be passed to the `CreateJurisdictionOverride` API call.
   *
   * 
     * @param string line1 The first address line portion of this address.
     * @param string line2 The second address line portion of this address.
     * @param string line3 The third address line portion of this address.
     * @param string city The city portion of this address.
     * @param string region The region, state, or province code portion of this address.
     * @param string postalCode The postal code or zip code portion of this address.
     * @param string country The two-character ISO-3166 code of the country portion of this address.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listJurisdictionsByAddress({ line1, line2, line3, city, region, postalCode, country, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/jurisdictionsnearaddress`,
      parameters: {
        line1: line1,
        line2: line2,
        line3: line3,
        city: city,
        region: region,
        postalCode: postalCode,
        country: country,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the list of questions that are required for a tax location
   *
   * Returns the list of additional questions you must answer when declaring a location in certain taxing jurisdictions.
     * Some tax jurisdictions require that you register or provide additional information to configure each physical place where
     * your company does business.
     * This information is not usually required in order to calculate tax correctly, but is almost always required to file your tax correctly.
     * You can call this API call for any address and obtain information about what questions must be answered in order to properly
     * file tax in that location.
   *
   * 
     * @param string line1 The first line of this location's address.
     * @param string line2 The second line of this location's address.
     * @param string line3 The third line of this location's address.
     * @param string city The city part of this location's address.
     * @param string region The region, state, or province part of this location's address.
     * @param string postalCode The postal code of this location's address.
     * @param string country The country part of this location's address.
     * @param float latitude Optionally identify the location via latitude/longitude instead of via address.
     * @param float longitude Optionally identify the location via latitude/longitude instead of via address.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listLocationQuestionsByAddress({ line1, line2, line3, city, region, postalCode, country, latitude, longitude, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/locationquestions`,
      parameters: {
        line1: line1,
        line2: line2,
        line3: line3,
        city: city,
        region: region,
        postalCode: postalCode,
        country: country,
        latitude: latitude,
        longitude: longitude,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List all forms where logins can be verified automatically
   *
   * List all forms where logins can be verified automatically.
     * This API is intended to be useful to identify whether the user should be allowed
     * to automatically verify their login and password.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listLoginVerifiers({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/filingcalendars/loginverifiers`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported nexus for all countries and regions.
   *
   * Returns the full list of all Avalara-supported nexus for all countries and regions. 
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNexus({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List all nexus that apply to a specific address.
   *
   * Returns a list of all Avalara-supported taxing jurisdictions that apply to this address.
     * This API allows you to identify which tax authorities apply to a physical location, salesperson address, or point of sale.
     * In general, it is usually expected that a company will declare nexus in all the jurisdictions that apply to each physical address
     * where the company does business.
     * The results of this API call can be passed to the 'Create Nexus' API call to declare nexus for this address.
   *
   * 
     * @param string line1 The first address line portion of this address.
     * @param string line2 The first address line portion of this address.
     * @param string line3 The first address line portion of this address.
     * @param string city The city portion of this address.
     * @param string region The region, state, or province code portion of this address.
     * @param string postalCode The postal code or zip code portion of this address.
     * @param string country The two-character ISO-3166 code of the country portion of this address.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNexusByAddress({ line1, line2, line3, city, region, postalCode, country, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus/byaddress`,
      parameters: {
        line1: line1,
        line2: line2,
        line3: line3,
        city: city,
        region: region,
        postalCode: postalCode,
        country: country,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported nexus for a country.
   *
   * Returns all Avalara-supported nexus for the specified country.
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by country.
   *
   * 
     * @param string country The country in which you want to fetch the system nexus
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNexusByCountry({ country, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus/${country}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported nexus for a country and region.
   *
   * Returns all Avalara-supported nexus for the specified country and region.
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by country and region.
   *
   * 
     * @param string country The two-character ISO-3166 code for the country.
     * @param string region The two or three character region code for the region.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNexusByCountryAndRegion({ country, region, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus/${country}/${region}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List nexus related to a tax form
   *
   * Retrieves a list of nexus related to a tax form.
     * 
     * The concept of `Nexus` indicates a place where your company has sufficient physical presence and is obligated
     * to collect and remit transaction-based taxes.
     * 
     * When defining companies in AvaTax, you must declare nexus for your company in order to correctly calculate tax
     * in all jurisdictions affected by your transactions.
     * 
     * This API is intended to provide useful information when examining a tax form. If you are about to begin filing
     * a tax form, you may want to know whether you have declared nexus in all the jurisdictions related to that tax 
     * form in order to better understand how the form will be filled out.
   *
   * 
     * @param string formCode The form code that we are looking up the nexus for
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return object
   */
  listNexusByFormCode({ formCode, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus/byform/${formCode}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of nexus tax type groups
   *
   * Returns the full list of Avalara-supported nexus tax type groups
     * This API is intended to be useful to identify all the different tax sub-types.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNexusTaxTypeGroups({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexustaxtypegroups`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice customer funding options.
   *
   * Returns the full list of Avalara-supported tax notice customer funding options.
     * This API is intended to be useful to identify all the different notice customer funding options that can be used in notices.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticeCustomerFundingOptions({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticecustomerfundingoptions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice customer types.
   *
   * Returns the full list of Avalara-supported tax notice customer types.
     * This API is intended to be useful to identify all the different notice customer types.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticeCustomerTypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticecustomertypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice filing types.
   *
   * Returns the full list of Avalara-supported tax notice filing types.
     * This API is intended to be useful to identify all the different notice filing types that can be used in notices.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticeFilingtypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticefilingtypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice priorities.
   *
   * Returns the full list of Avalara-supported tax notice priorities.
     * This API is intended to be useful to identify all the different notice priorities that can be used in notices.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticePriorities({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticepriorities`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice reasons.
   *
   * Returns the full list of Avalara-supported tax notice reasons.
     * This API is intended to be useful to identify all the different tax notice reasons.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticeReasons({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticereasons`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice responsibility ids
   *
   * Returns the full list of Avalara-supported tax notice responsibility ids
     * This API is intended to be useful to identify all the different tax notice responsibilities.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticeResponsibilities({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticeresponsibilities`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice root causes
   *
   * Returns the full list of Avalara-supported tax notice root causes
     * This API is intended to be useful to identify all the different tax notice root causes.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticeRootCauses({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticerootcauses`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice statuses.
   *
   * Returns the full list of Avalara-supported tax notice statuses.
     * This API is intended to be useful to identify all the different tax notice statuses.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticeStatuses({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticestatuses`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice types.
   *
   * Returns the full list of Avalara-supported tax notice types.
     * This API is intended to be useful to identify all the different notice types that can be used in notices.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticeTypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported extra parameters for creating transactions.
   *
   * Returns the full list of Avalara-supported extra parameters for the 'Create Transaction' API call.
     * This list of parameters is available for use when configuring your transaction.
     * Some parameters are only available for use if you have subscribed to certain features of AvaTax.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listParameters({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/parameters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported permissions
   *
   * Returns the full list of Avalara-supported permission types.
     * This API is intended to be useful to identify the capabilities of a particular user logon.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listPermissions({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/permissions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of rate types for each country
   *
   * Returns the full list of Avalara-supported rate type file types
     * This API is intended to be useful to identify all the different rate types.
   *
   * 
     * @param string country 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listRateTypesByCountry({ country, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/countries/${country}/ratetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List all ISO 3166 regions
   *
   * Returns a list of all ISO 3166 region codes and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a region 
     * within the country for a shipping addresses.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listRegions({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/regions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List all ISO 3166 regions for a country
   *
   * Returns a list of all ISO 3166 region codes for a specific country code, and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a region 
     * within the country for a shipping addresses.
   *
   * 
     * @param string country The country of which you want to fetch ISO 3166 regions
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listRegionsByCountry({ country, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/countries/${country}/regions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported resource file types
   *
   * Returns the full list of Avalara-supported resource file types
     * This API is intended to be useful to identify all the different resource file types.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listResourceFileTypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/resourcefiletypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported permissions
   *
   * Returns the full list of Avalara-supported permission types.
     * This API is intended to be useful when designing a user interface for selecting the security role of a user account.
     * Some security roles are restricted for Avalara internal use.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listSecurityRoles({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/securityroles`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported subscription types
   *
   * Returns the full list of Avalara-supported subscription types.
     * This API is intended to be useful for identifying which features you have added to your account.
     * You may always contact Avalara's sales department for information on available products or services.
     * You cannot change your subscriptions directly through the API.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listSubscriptionTypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/subscriptiontypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax authorities.
   *
   * Returns the full list of Avalara-supported tax authorities.
     * This API is intended to be useful to identify all the different authorities that receive tax.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTaxAuthorities({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxauthorities`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported forms for each tax authority.
   *
   * Returns the full list of Avalara-supported forms for each tax authority.
     * This list represents tax forms that Avalara recognizes.
     * Customers who subscribe to Avalara Managed Returns Service can request these forms to be filed automatically 
     * based on the customer's AvaTax data.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTaxAuthorityForms({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxauthorityforms`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax authority types.
   *
   * Returns the full list of Avalara-supported tax authority types.
     * This API is intended to be useful to identify all the different authority types.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTaxAuthorityTypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxauthoritytypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax codes.
   *
   * Retrieves the list of Avalara-supported system tax codes.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTaxCodes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxcodes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of Avalara-supported tax code types.
   *
   * Returns the full list of recognized tax code types.
     * A 'Tax Code Type' represents a broad category of tax codes, and is less detailed than a single TaxCode.
     * This API is intended to be useful for broadly searching for tax codes by tax code type.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return object
   */
  listTaxCodeTypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxcodetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of tax sub types
   *
   * Returns the full list of Avalara-supported tax sub-types
     * This API is intended to be useful to identify all the different tax sub-types.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTaxSubTypes({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxsubtypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve the full list of tax type groups
   *
   * Returns the full list of Avalara-supported tax type groups
     * This API is intended to be useful to identify all the different tax type groups.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTaxTypeGroups({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxtypegroups`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Approve existing Filing Request
   *
   * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     * The filing request must be in the "ChangeRequest" status to be approved.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing request object
     * @param int id The unique ID of the filing request object
   * @return object
   */
  approveFilingRequest({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingrequests/${id}/approve`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: null });
  }

  /**
   * Cancel existing Filing Request
   *
   * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing request object
     * @param int id The unique ID of the filing request object
   * @return object
   */
  cancelFilingRequest({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingrequests/${id}/cancel`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: null });
  }

  /**
   * Create a new filing request to cancel a filing calendar
   *
   * This API is available by invitation only.
     * 
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing calendar object
     * @param int id The unique ID number of the filing calendar to cancel
     * @param object[] model The cancellation request for this filing calendar
   * @return object
   */
  cancelFilingRequests({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/${id}/cancel/request`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new filing request to create a filing calendar
   *
   * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
   *
   * 
     * @param int companyId The unique ID of the company that will add the new filing calendar
     * @param object[] model Information about the proposed new filing calendar
   * @return object
   */
  createFilingRequests({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/add/request`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Returns a list of options for adding the specified form.
   *
   * This API is available by invitation only.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing calendar object
     * @param string formCode The unique code of the form
   * @return object[]
   */
  cycleSafeAdd({ companyId, formCode } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/add/options`,
      parameters: {
        formCode: formCode
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Indicates when changes are allowed to be made to a filing calendar.
   *
   * This API is available by invitation only.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing calendar object
     * @param int id The unique ID of the filing calendar object
     * @param object[] model A list of filing calendar edits to be made
   * @return object
   */
  cycleSafeEdit({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/${id}/edit/options`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Returns a list of options for expiring a filing calendar
   *
   * This API is available by invitation only.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing calendar object
     * @param int id The unique ID of the filing calendar object
   * @return object
   */
  cycleSafeExpiration({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/${id}/cancel/options`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Delete a single filing calendar.
   *
   * This API is available by invitation only.
     * Mark the existing notice object at this URL as deleted.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this filing calendar.
     * @param int id The ID of the filing calendar you wish to delete.
   * @return object[]
   */
  deleteFilingCalendar({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single filing calendar
   *
   * This API is available by invitation only.
   *
   * 
     * @param int companyId The ID of the company that owns this filing calendar
     * @param int id The primary key of this filing calendar
   * @return object
   */
  getFilingCalendar({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a single filing request
   *
   * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
   *
   * 
     * @param int companyId The ID of the company that owns this filing calendar
     * @param int id The primary key of this filing calendar
   * @return object
   */
  getFilingRequest({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingrequests/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all filing calendars for this company
   *
   * This API is available by invitation only.
   *
   * 
     * @param int companyId The ID of the company that owns these batches
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param string returnCountry A comma separated list of countries
     * @param string returnRegion A comma separated list of regions
   * @return FetchResult
   */
  listFilingCalendars({ companyId, filter, top, skip, orderBy, returnCountry, returnRegion } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy,
        returnCountry: returnCountry,
        returnRegion: returnRegion
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all filing requests for this company
   *
   * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
   *
   * 
     * @param int companyId The ID of the company that owns these batches
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listFilingRequests({ companyId, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingrequests`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * New request for getting for validating customer's login credentials
   *
   * This API is available by invitation only.
     * 
     * This API verifies that a customer has submitted correct login credentials for a tax authority's online filing system.
   *
   * 
     * @param object model The model of the login information we are verifying
   * @return object
   */
  loginVerificationRequest({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/filingcalendars/credentials/verify`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Gets the request status and Login Result
   *
   * This API is available by invitation only.
     * 
     * This API checks the status of a login verification request. It may only be called by authorized users from the account 
     * that initially requested the login verification.
   *
   * 
     * @param int jobId The unique ID number of this login request
   * @return object
   */
  loginVerificationStatus({ jobId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/filingcalendars/credentials/${jobId}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all filing calendars
   *
   * This API is available by invitation only.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param string returnCountry 
     * @param string returnRegion 
   * @return FetchResult
   */
  queryFilingCalendars({ filter, top, skip, orderBy, returnCountry, returnRegion } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/filingcalendars`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy,
        returnCountry: returnCountry,
        returnRegion: returnRegion
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all filing requests
   *
   * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryFilingRequests({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/filingrequests`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Create a new filing request to edit a filing calendar
   *
   * This API is available by invitation only.
     * 
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     * 
     * Certain users may not update filing calendars directly. Instead, they may submit an edit request
     * to modify the value of a filing calendar using this API.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing calendar object
     * @param int id The unique ID number of the filing calendar to edit
     * @param object[] model A list of filing calendar edits to be made
   * @return object
   */
  requestFilingCalendarUpdate({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/${id}/edit/request`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Edit existing Filing Calendar's Notes
   *
   * This API is available by invitation only.
     * This API only allows updating of internal notes and company filing instructions.
     * All other updates must go through a filing request at this time.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing request object
     * @param int id The unique ID of the filing calendar object
     * @param object model The filing calendar model you are wishing to update with.
   * @return object
   */
  updateFilingCalendar({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingcalendars/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Edit existing Filing Request
   *
   * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
   *
   * 
     * @param int companyId The unique ID of the company that owns the filing request object
     * @param int id The unique ID of the filing request object
     * @param object model A list of filing calendar edits to be made
   * @return object
   */
  updateFilingRequest({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filingrequests/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Approve all filings for the specified company in the given filing period.
   *
   * This API is available by invitation only.
     * Approving a return means the customer is ready to let Avalara file that return.
     * Customer either approves themselves from admin console, 
     * else system auto-approves the night before the filing cycle.
     * Sometimes Compliance has to manually unapprove and reapprove to modify liability or filing for the customer.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period to approve.
     * @param int month The month of the filing period to approve.
     * @param object model The approve request you wish to execute.
   * @return object[]
   */
  approveFilings({ companyId, year, month, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/approve`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Approve all filings for the specified company in the given filing period and country.
   *
   * This API is available by invitation only.
     * Approving a return means the customer is ready to let Avalara file that return.
     * Customer either approves themselves from admin console, 
     * else system auto-approves the night before the filing cycle.
     * Sometimes Compliance has to manually unapprove and reapprove to modify liability or filing for the customer.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period to approve.
     * @param int month The month of the filing period to approve.
     * @param string country The two-character ISO-3166 code for the country.
     * @param object model The approve request you wish to execute.
   * @return object[]
   */
  approveFilingsCountry({ companyId, year, month, country, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/approve`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Approve all filings for the specified company in the given filing period, country and region.
   *
   * This API is available by invitation only.
     * Approving a return means the customer is ready to let Avalara file that return.
     * Customer either approves themselves from admin console, 
     * else system auto-approves the night before the filing cycle
     * Sometimes Compliance has to manually unapprove and reapprove to modify liability or filing for the customer.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period to approve.
     * @param int month The month of the filing period to approve.
     * @param string country The two-character ISO-3166 code for the country.
     * @param string region The two or three character region code for the region.
     * @param object model The approve request you wish to execute.
   * @return object[]
   */
  approveFilingsCountryRegion({ companyId, year, month, country, region, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/${region}/approve`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Add an adjustment to a given filing.
   *
   * This API is available by invitation only.
     * An "Adjustment" is usually an increase or decrease to customer funding to Avalara,
     * such as early filer discount amounts that are refunded to the customer, or efile fees from websites. 
     * Sometimes may be a manual change in tax liability similar to an augmentation.
     * This API creates a new adjustment for an existing tax filing.
     * This API can only be used when the filing has not yet been approved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being adjusted.
     * @param int year The year of the filing's filing period being adjusted.
     * @param int month The month of the filing's filing period being adjusted.
     * @param string country The two-character ISO-3166 code for the country of the filing being adjusted.
     * @param string region The two or three character region code for the region.
     * @param string formCode The unique code of the form being adjusted.
     * @param object[] model A list of Adjustments to be created for the specified filing.
   * @return object[]
   */
  createReturnAdjustment({ companyId, year, month, country, region, formCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/${region}/${formCode}/adjust`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Add an augmentation for a given filing.
   *
   * This API is available by invitation only.
     * An "Augmentation" is a manually added increase or decrease in tax liability, by either customer or Avalara 
     * usually due to customer wanting to report tax Avatax does not support, e.g. bad debts, rental tax.
     * This API creates a new augmentation for an existing tax filing.
     * This API can only be used when the filing has not been approved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being changed.
     * @param int year The month of the filing's filing period being changed.
     * @param int month The month of the filing's filing period being changed.
     * @param string country The two-character ISO-3166 code for the country of the filing being changed.
     * @param string region The two or three character region code for the region of the filing being changed.
     * @param string formCode The unique code of the form being changed.
     * @param object[] model A list of augmentations to be created for the specified filing.
   * @return object[]
   */
  createReturnAugmentation({ companyId, year, month, country, region, formCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/${region}/${formCode}/augment`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Add an payment to a given filing.
   *
   * This API is available by invitation only.
     * An "Payment" is usually an increase or decrease to customer funding to Avalara,
     * such as early filer discount amounts that are refunded to the customer, or efile fees from websites. 
     * Sometimes may be a manual change in tax liability similar to an augmentation.
     * This API creates a new payment for an existing tax filing.
     * This API can only be used when the filing has not yet been approved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being adjusted.
     * @param int year The year of the filing's filing period being adjusted.
     * @param int month The month of the filing's filing period being adjusted.
     * @param string country The two-character ISO-3166 code for the country of the filing being adjusted.
     * @param string region The two or three character region code for the region.
     * @param string formCode The unique code of the form being adjusted.
     * @param object[] model A list of Payments to be created for the specified filing.
   * @return object[]
   */
  createReturnPayment({ companyId, year, month, country, region, formCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/${region}/${formCode}/payment`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete an adjustment for a given filing.
   *
   * This API is available by invitation only.
     * An "Adjustment" is usually an increase or decrease to customer funding to Avalara,
     * such as early filer discount amounts that are refunded to the customer, or efile fees from websites. 
     * Sometimes may be a manual change in tax liability similar to an augmentation.
     * This API deletes an adjustment for an existing tax filing.
     * This API can only be used when the filing has been unapproved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being adjusted.
     * @param int id The ID of the adjustment being deleted.
   * @return object[]
   */
  deleteReturnAdjustment({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/adjust/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Delete an augmentation for a given filing.
   *
   * This API is available by invitation only.
     * An "Augmentation" is a manually added increase or decrease in tax liability, by either customer or Avalara 
     * usually due to customer wanting to report tax Avatax does not support, e.g. bad debts, rental tax.
     * This API deletes an augmentation for an existing tax filing.
     * This API can only be used when the filing has been unapproved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being changed.
     * @param int id The ID of the augmentation being added.
   * @return object[]
   */
  deleteReturnAugmentation({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/augment/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Delete an payment for a given filing.
   *
   * This API is available by invitation only.
     * An "Payment" is usually an increase or decrease to customer funding to Avalara,
     * such as early filer discount amounts that are refunded to the customer, or efile fees from websites. 
     * Sometimes may be a manual change in tax liability similar to an augmentation.
     * This API deletes an payment for an existing tax filing.
     * This API can only be used when the filing has been unapproved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being adjusted.
     * @param int id The ID of the payment being deleted.
   * @return object[]
   */
  deleteReturnPayment({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/payment/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve worksheet checkup report for company and filing period.
   *
   * This API is available by invitation only.
   *
   * 
     * @param int filingsId The unique id of the worksheet.
     * @param int companyId The unique ID of the company that owns the worksheet.
   * @return object
   */
  filingsCheckupReport({ filingsId, companyId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${filingsId}/checkup`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve worksheet checkup report for company and filing period.
   *
   * This API is available by invitation only.
   *
   * 
     * @param int companyId The unique ID of the company that owns the worksheets object.
     * @param int year The year of the filing period.
     * @param int month The month of the filing period.
   * @return object
   */
  filingsCheckupReports({ companyId, year, month } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/checkup`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a single attachment for a filing
   *
   * This API is available by invitation only.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int filingId The unique id of the worksheet return.
     * @param int fileId The unique id of the document you are downloading
   * @return object
   */
  getFilingAttachment({ companyId, filingId, fileId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${filingId}/attachment`,
      parameters: {
        fileId: fileId
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a list of filings for the specified company in the year and month of a given filing period.
   *
   * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period.
     * @param int month The two digit month of the filing period.
   * @return object
   */
  getFilingAttachments({ companyId, year, month } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/attachments`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a single trace file for a company filing period
   *
   * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period.
     * @param int month The two digit month of the filing period.
   * @return object
   */
  getFilingAttachmentsTraceFile({ companyId, year, month } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/attachments/tracefile`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a filing for the specified company and id.
   *
   * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int id The id of the filing return your retrieving
   * @return FetchResult
   */
  getFilingReturn({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/returns/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a list of filings for the specified company in the year and month of a given filing period.
   *
   * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period.
     * @param int month The two digit month of the filing period.
   * @return FetchResult
   */
  getFilings({ companyId, year, month } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a list of filings for the specified company in the given filing period and country.
   *
   * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period.
     * @param int month The two digit month of the filing period.
     * @param string country The two-character ISO-3166 code for the country.
   * @return FetchResult
   */
  getFilingsByCountry({ companyId, year, month, country } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a list of filings for the specified company in the filing period, country and region.
   *
   * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period.
     * @param int month The two digit month of the filing period.
     * @param string country The two-character ISO-3166 code for the country.
     * @param string region The two or three character region code for the region.
   * @return FetchResult
   */
  getFilingsByCountryRegion({ companyId, year, month, country, region } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/${region}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a list of filings for the specified company in the given filing period, country, region and form.
   *
   * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period.
     * @param int month The two digit month of the filing period.
     * @param string country The two-character ISO-3166 code for the country.
     * @param string region The two or three character region code for the region.
     * @param string formCode The unique code of the form.
   * @return FetchResult
   */
  getFilingsByReturnName({ companyId, year, month, country, region, formCode } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/${region}/${formCode}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a list of filings for the specified company in the year and month of a given filing period.  
This gets the basic information from the filings and doesn't include anything extra.
   *
   * 
   *
   * 
     * @param int companyId The ID of the company that owns these batches
     * @param int endPeriodMonth The month of the period you are trying to retrieve
     * @param int endPeriodYear The year of the period you are trying to retrieve
     * @param string frequency The frequency of the return you are trying to retrieve (See FilingFrequencyId::* for a list of allowable values)
     * @param string status The status of the return(s) you are trying to retrieve (See FilingStatusId::* for a list of allowable values)
     * @param string country The country of the return(s) you are trying to retrieve
     * @param string region The region of the return(s) you are trying to retrieve
   * @return FetchResult
   */
  getFilingsReturns({ companyId, endPeriodMonth, endPeriodYear, frequency, status, country, region } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/returns`,
      parameters: {
        endPeriodMonth: endPeriodMonth,
        endPeriodYear: endPeriodYear,
        frequency: frequency,
        status: status,
        country: country,
        region: region
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Rebuild a set of filings for the specified company in the given filing period.
   *
   * This API is available by invitation only.
     * Rebuilding a return means re-creating or updating the amounts to be filed (worksheet) for a filing.
     * Rebuilding has to be done whenever a customer adds transactions to a filing.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
     * This API requires filing to be unapproved.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period to be rebuilt.
     * @param int month The month of the filing period to be rebuilt.
     * @param object model The rebuild request you wish to execute.
   * @return FetchResult
   */
  rebuildFilings({ companyId, year, month, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/rebuild`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Rebuild a set of filings for the specified company in the given filing period and country.
   *
   * This API is available by invitation only.
     * Rebuilding a return means re-creating or updating the amounts to be filed (worksheet) for a filing.
     * Rebuilding has to be done whenever a customer adds transactions to a filing.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
     * This API requires filing to be unapproved.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period to be rebuilt.
     * @param int month The month of the filing period to be rebuilt.
     * @param string country The two-character ISO-3166 code for the country.
     * @param object model The rebuild request you wish to execute.
   * @return FetchResult
   */
  rebuildFilingsByCountry({ companyId, year, month, country, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/rebuild`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Rebuild a set of filings for the specified company in the given filing period, country and region.
   *
   * This API is available by invitation only.
     * Rebuilding a return means re-creating or updating the amounts to be filed for a filing.
     * Rebuilding has to be done whenever a customer adds transactions to a filing. 
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
     * This API requires filing to be unapproved.
   *
   * 
     * @param int companyId The ID of the company that owns the filings.
     * @param int year The year of the filing period to be rebuilt.
     * @param int month The month of the filing period to be rebuilt.
     * @param string country The two-character ISO-3166 code for the country.
     * @param string region The two or three character region code for the region.
     * @param object model The rebuild request you wish to execute.
   * @return FetchResult
   */
  rebuildFilingsByCountryRegion({ companyId, year, month, country, region, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/${year}/${month}/${country}/${region}/rebuild`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Edit an adjustment for a given filing.
   *
   * This API is available by invitation only.
     * An "Adjustment" is usually an increase or decrease to customer funding to Avalara,
     * such as early filer discount amounts that are refunded to the customer, or efile fees from websites. 
     * Sometimes may be a manual change in tax liability similar to an augmentation.
     * This API modifies an adjustment for an existing tax filing.
     * This API can only be used when the filing has not yet been approved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being adjusted.
     * @param int id The ID of the adjustment being edited.
     * @param object model The updated Adjustment.
   * @return object
   */
  updateReturnAdjustment({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/adjust/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Edit an augmentation for a given filing.
   *
   * This API is available by invitation only.
     * An "Augmentation" is a manually added increase or decrease in tax liability, by either customer or Avalara 
     * usually due to customer wanting to report tax Avatax does not support, e.g. bad debts, rental tax.
     * This API modifies an augmentation for an existing tax filing.
     * This API can only be used when the filing has not been approved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being changed.
     * @param int id The ID of the augmentation being edited.
     * @param object model The updated Augmentation.
   * @return object
   */
  updateReturnAugmentation({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/augment/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Edit an payment for a given filing.
   *
   * This API is available by invitation only.
     * An "Payment" is usually an increase or decrease to customer funding to Avalara,
     * such as early filer discount amounts that are refunded to the customer, or efile fees from websites. 
     * Sometimes may be a manual change in tax liability similar to an augmentation.
     * This API modifies an payment for an existing tax filing.
     * This API can only be used when the filing has not yet been approved.
   *
   * 
     * @param int companyId The ID of the company that owns the filing being adjusted.
     * @param int id The ID of the payment being edited.
     * @param object model The updated Payment.
   * @return object
   */
  updateReturnPayment({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/filings/payment/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * FREE API - Request a free trial of AvaTax
   *
   * Call this API to obtain a free AvaTax sandbox account.
     * 
     * This API is free to use. No authentication credentials are required to call this API.
     * The account will grant a full trial version of AvaTax (e.g. AvaTaxPro) for a limited period of time.
     * After this introductory period, you may continue to use the free TaxRates API.
     * 
     * Limitations on free trial accounts:
     *  
     * * Only one free trial per company.
     * * The free trial account does not expire.
     * * Includes a limited time free trial of AvaTaxPro; after that date, the free TaxRates API will continue to work.
     * * Each free trial account must have its own valid email address.
   *
   * 
     * @param object model Required information to provision a free trial account.
   * @return object
   */
  requestFreeTrial({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/freetrials/request`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * FREE API - Sales tax rates for a specified address
   *
   * # Free-To-Use
     * 
     * The TaxRates API is a free-to-use, no cost option for estimating sales tax rates.
     * Any customer can request a free AvaTax account and make use of the TaxRates API.
     * 
     * Usage of this API is subject to rate limits. Users who exceed the rate limit will receive HTTP
     * response code 429 - `Too Many Requests`.
     * 
     * This API assumes that you are selling general tangible personal property at a retail point-of-sale
     * location in the United States only. 
     * 
     * For more powerful tax calculation, please consider upgrading to the `CreateTransaction` API,
     * which supports features including, but not limited to:
     * 
     * * Nexus declarations
     * * Taxability based on product/service type
     * * Sourcing rules affecting origin/destination states
     * * Customers who are exempt from certain taxes
     * * States that have dollar value thresholds for tax amounts
     * * Refunds for products purchased on a different date
     * * Detailed jurisdiction names and state assigned codes
     * * And more!
     * 
     * Please see [Estimating Tax with REST v2](http://developer.avalara.com/blog/2016/11/04/estimating-tax-with-rest-v2/)
     * for information on how to upgrade to the full AvaTax CreateTransaction API.
   *
   * 
     * @param string line1 The street address of the location.
     * @param string line2 The street address of the location.
     * @param string line3 The street address of the location.
     * @param string city The city name of the location.
     * @param string region The state or region of the location
     * @param string postalCode The postal code of the location.
     * @param string country The two letter ISO-3166 country code.
   * @return object
   */
  taxRatesByAddress({ line1, line2, line3, city, region, postalCode, country } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/taxrates/byaddress`,
      parameters: {
        line1: line1,
        line2: line2,
        line3: line3,
        city: city,
        region: region,
        postalCode: postalCode,
        country: country
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * FREE API - Sales tax rates for a specified country and postal code
   *
   * # Free-To-Use
     * 
     * The TaxRates API is a free-to-use, no cost option for estimating sales tax rates.
     * Any customer can request a free AvaTax account and make use of the TaxRates API.
     * 
     * Usage of this API is subject to rate limits. Users who exceed the rate limit will receive HTTP
     * response code 429 - `Too Many Requests`.
     * 
     * This API assumes that you are selling general tangible personal property at a retail point-of-sale
     * location in the United States only. 
     * 
     * For more powerful tax calculation, please consider upgrading to the `CreateTransaction` API,
     * which supports features including, but not limited to:
     * 
     * * Nexus declarations
     * * Taxability based on product/service type
     * * Sourcing rules affecting origin/destination states
     * * Customers who are exempt from certain taxes
     * * States that have dollar value thresholds for tax amounts
     * * Refunds for products purchased on a different date
     * * Detailed jurisdiction names and state assigned codes
     * * And more!
     * 
     * Please see [Estimating Tax with REST v2](http://developer.avalara.com/blog/2016/11/04/estimating-tax-with-rest-v2/)
     * for information on how to upgrade to the full AvaTax CreateTransaction API.
   *
   * 
     * @param string country The two letter ISO-3166 country code.
     * @param string postalCode The postal code of the location.
   * @return object
   */
  taxRatesByPostalCode({ country, postalCode } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/taxrates/bypostalcode`,
      parameters: {
        country: country,
        postalCode: postalCode
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Request the javascript for a funding setup widget
   *
   * This API is available by invitation only.
     * Companies that use the Avalara Managed Returns or the SST Certified Service Provider services are 
     * required to setup their funding configuration before Avalara can begin filing tax returns on their 
     * behalf.
     * Funding configuration for each company is set up by submitting a funding setup request, which can
     * be sent either via email or via an embedded HTML widget.
     * When the funding configuration is submitted to Avalara, it will be reviewed by treasury team members
     * before approval.
     * This API returns back the actual javascript code to insert into your application to render the 
     * JavaScript funding setup widget inline.
     * Use the 'methodReturn.javaScript' return value to insert this widget into your HTML page.
     * This API requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
   *
   * 
     * @param int id The unique ID number of this funding request
   * @return object
   */
  activateFundingRequest({ id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/fundingrequests/${id}/widget`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve status about a funding setup request
   *
   * This API is available by invitation only.
     * Companies that use the Avalara Managed Returns or the SST Certified Service Provider services are 
     * required to setup their funding configuration before Avalara can begin filing tax returns on their 
     * behalf.
     * Funding configuration for each company is set up by submitting a funding setup request, which can
     * be sent either via email or via an embedded HTML widget.
     * When the funding configuration is submitted to Avalara, it will be reviewed by treasury team members
     * before approval.
     * This API checks the status on an existing funding request.
     * This API requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
   *
   * 
     * @param int id The unique ID number of this funding request
   * @return object
   */
  fundingRequestStatus({ id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/fundingrequests/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Create a new item
   *
   * Creates one or more new item objects attached to this company.
   *
   * 
     * @param int companyId The ID of the company that owns this item.
     * @param object[] model The item you wish to create.
   * @return object[]
   */
  createItems({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single item
   *
   * Marks the item object at this URL as deleted.
   *
   * 
     * @param int companyId The ID of the company that owns this item.
     * @param int id The ID of the item you wish to delete.
   * @return object[]
   */
  deleteItem({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single item
   *
   * Get the item object identified by this URL.
     * An 'Item' represents a product or service that your company offers for sale.
   *
   * 
     * @param int companyId The ID of the company that owns this item object
     * @param int id The primary key of this item
   * @return object
   */
  getItem({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve items for this company
   *
   * List all items defined for the current company.
     * 
     * An 'Item' represents a product or service that your company offers for sale.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that defined these items
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listItemsByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all items
   *
   * Get multiple item objects across all companies.
     * An 'Item' represents a product or service that your company offers for sale.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryItems({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/items`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single item
   *
   * Replace the existing item object at this URL with an updated object.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this item belongs to.
     * @param int id The ID of the item you wish to update
     * @param object model The item object you wish to update.
   * @return object
   */
  updateItem({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Create one or more overrides
   *
   * Creates one or more jurisdiction override objects for this account.
     * 
     * A Jurisdiction Override is a configuration setting that allows you to select the taxing
     * jurisdiction for a specific address. If you encounter an address that is on the boundary
     * between two different jurisdictions, you can choose to set up a jurisdiction override
     * to switch this address to use different taxing jurisdictions.
   *
   * 
     * @param int accountId The ID of the account that owns this override
     * @param object[] model The jurisdiction override objects to create
   * @return object[]
   */
  createJurisdictionOverrides({ accountId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single override
   *
   * Marks the item object at this URL as deleted.
   *
   * 
     * @param int accountId The ID of the account that owns this override
     * @param int id The ID of the override you wish to delete
   * @return object[]
   */
  deleteJurisdictionOverride({ accountId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single override
   *
   * Get the item object identified by this URL.
     * 
     * A Jurisdiction Override is a configuration setting that allows you to select the taxing
     * jurisdiction for a specific address. If you encounter an address that is on the boundary
     * between two different jurisdictions, you can choose to set up a jurisdiction override
     * to switch this address to use different taxing jurisdictions.
   *
   * 
     * @param int accountId The ID of the account that owns this override
     * @param int id The primary key of this override
   * @return object
   */
  getJurisdictionOverride({ accountId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve overrides for this account
   *
   * List all jurisdiction override objects defined for this account.
     * 
     * A Jurisdiction Override is a configuration setting that allows you to select the taxing
     * jurisdiction for a specific address. If you encounter an address that is on the boundary
     * between two different jurisdictions, you can choose to set up a jurisdiction override
     * to switch this address to use different taxing jurisdictions.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int accountId The ID of the account that owns this override
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listJurisdictionOverridesByAccount({ accountId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all overrides
   *
   * Get multiple jurisdiction override objects across all companies.
     * 
     * A Jurisdiction Override is a configuration setting that allows you to select the taxing
     * jurisdiction for a specific address. If you encounter an address that is on the boundary
     * between two different jurisdictions, you can choose to set up a jurisdiction override
     * to switch this address to use different taxing jurisdictions.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryJurisdictionOverrides({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/jurisdictionoverrides`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single jurisdictionoverride
   *
   * Replace the existing jurisdictionoverride object at this URL with an updated object.
   *
   * 
     * @param int accountId The ID of the account that this jurisdictionoverride belongs to.
     * @param int id The ID of the jurisdictionoverride you wish to update
     * @param object model The jurisdictionoverride object you wish to update.
   * @return object
   */
  updateJurisdictionOverride({ accountId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Create a new location
   *
   * Create one or more new location objects attached to this company.
   *
   * 
     * @param int companyId The ID of the company that owns this location.
     * @param object[] model The location you wish to create.
   * @return object[]
   */
  createLocations({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single location
   *
   * Mark the location object at this URL as deleted.
   *
   * 
     * @param int companyId The ID of the company that owns this location.
     * @param int id The ID of the location you wish to delete.
   * @return object[]
   */
  deleteLocation({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single location
   *
   * Get the location object identified by this URL.
     * An 'Location' represents a physical address where a company does business.
     * Many taxing authorities require that you define a list of all locations where your company does business.
     * These locations may require additional custom configuration or tax registration with these authorities.
     * For more information on metadata requirements, see the '/api/v2/definitions/locationquestions' API.
     * 
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * LocationSettings
   *
   * 
     * @param int companyId The ID of the company that owns this location
     * @param int id The primary key of this location
     * @param string include A comma separated list of child objects to return underneath the primary object.
   * @return object
   */
  getLocation({ companyId, id, include } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve locations for this company
   *
   * List all location objects defined for this company.
     * An 'Location' represents a physical address where a company does business.
     * Many taxing authorities require that you define a list of all locations where your company does business.
     * These locations may require additional custom configuration or tax registration with these authorities.
     * For more information on metadata requirements, see the '/api/v2/definitions/locationquestions' API.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * LocationSettings
   *
   * 
     * @param int companyId The ID of the company that owns these locations
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listLocationsByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all locations
   *
   * Get multiple location objects across all companies.
     * An 'Location' represents a physical address where a company does business.
     * Many taxing authorities require that you define a list of all locations where your company does business.
     * These locations may require additional custom configuration or tax registration with these authorities.
     * For more information on metadata requirements, see the '/api/v2/definitions/locationquestions' API.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * LocationSettings
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryLocations({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/locations`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single location
   *
   * Replace the existing location object at this URL with an updated object.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this location belongs to.
     * @param int id The ID of the location you wish to update
     * @param object model The location you wish to update.
   * @return object
   */
  updateLocation({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Validate the location against local requirements
   *
   * Returns validation information for this location.
     * This API call is intended to compare this location against the currently known taxing authority rules and regulations,
     * and provide information about what additional work is required to completely setup this location.
   *
   * 
     * @param int companyId The ID of the company that owns this location
     * @param int id The primary key of this location
   * @return object
   */
  validateLocation({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}/validate`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Create a new nexus
   *
   * Creates one or more new nexus objects attached to this company.
     * The concept of 'Nexus' indicates a place where your company has sufficient physical presence and is obligated
     * to collect and remit transaction-based taxes.
     * When defining companies in AvaTax, you must declare nexus for your company in order to correctly calculate tax
     * in all jurisdictions affected by your transactions.
     * Note that not all fields within a nexus can be updated; Avalara publishes a list of all defined nexus at the
     * '/api/v2/definitions/nexus' endpoint.
     * You may only define nexus matching the official list of declared nexus.
   *
   * 
     * @param int companyId The ID of the company that owns this nexus.
     * @param object[] model The nexus you wish to create.
   * @return object[]
   */
  createNexus({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single nexus
   *
   * Marks the existing nexus object at this URL as deleted.
   *
   * 
     * @param int companyId The ID of the company that owns this nexus.
     * @param int id The ID of the nexus you wish to delete.
   * @return object[]
   */
  deleteNexus({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single nexus
   *
   * Get the nexus object identified by this URL.
     * The concept of 'Nexus' indicates a place where your company has sufficient physical presence and is obligated
     * to collect and remit transaction-based taxes.
     * When defining companies in AvaTax, you must declare nexus for your company in order to correctly calculate tax
     * in all jurisdictions affected by your transactions.
   *
   * 
     * @param int companyId The ID of the company that owns this nexus object
     * @param int id The primary key of this nexus
   * @return object
   */
  getNexus({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List company nexus related to a tax form
   *
   * Retrieves a list of nexus related to a tax form.
     * 
     * The concept of `Nexus` indicates a place where your company has sufficient physical presence and is obligated
     * to collect and remit transaction-based taxes.
     * 
     * When defining companies in AvaTax, you must declare nexus for your company in order to correctly calculate tax
     * in all jurisdictions affected by your transactions.
     * 
     * This API is intended to provide useful information when examining a tax form. If you are about to begin filing
     * a tax form, you may want to know whether you have declared nexus in all the jurisdictions related to that tax 
     * form in order to better understand how the form will be filled out.
   *
   * 
     * @param int companyId The ID of the company that owns this nexus object
     * @param string formCode The form code that we are looking up the nexus for
   * @return object
   */
  getNexusByFormCode({ companyId, formCode } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/byform/${formCode}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve nexus for this company
   *
   * List all nexus objects defined for this company.
     * The concept of 'Nexus' indicates a place where your company has sufficient physical presence and is obligated
     * to collect and remit transaction-based taxes.
     * When defining companies in AvaTax, you must declare nexus for your company in order to correctly calculate tax
     * in all jurisdictions affected by your transactions.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that owns these nexus objects
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNexusByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all nexus
   *
   * Get multiple nexus objects across all companies.
     * The concept of 'Nexus' indicates a place where your company has sufficient physical presence and is obligated
     * to collect and remit transaction-based taxes.
     * When defining companies in AvaTax, you must declare nexus for your company in order to correctly calculate tax
     * in all jurisdictions affected by your transactions.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryNexus({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/nexus`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single nexus
   *
   * Replace the existing nexus object at this URL with an updated object.
     * The concept of 'Nexus' indicates a place where your company has sufficient physical presence and is obligated
     * to collect and remit transaction-based taxes.
     * When defining companies in AvaTax, you must declare nexus for your company in order to correctly calculate tax
     * in all jurisdictions affected by your transactions.
     * Note that not all fields within a nexus can be updated; Avalara publishes a list of all defined nexus at the
     * '/api/v2/definitions/nexus' endpoint.
     * You may only define nexus matching the official list of declared nexus.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this nexus belongs to.
     * @param int id The ID of the nexus you wish to update
     * @param object model The nexus object you wish to update.
   * @return object
   */
  updateNexus({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Create a new notice comment.
   *
   * This API is available by invitation only.
     * 'Notice comments' are updates by the notice team on the work to be done and that has been done so far on a notice.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this notice.
     * @param int id The ID of the tax notice we are adding the comment for.
     * @param object[] model The notice comments you wish to create.
   * @return object[]
   */
  createNoticeComment({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}/comments`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new notice finance details.
   *
   * This API is available by invitation only.
     * 'Notice finance details' is the categorical breakdown of the total charge levied by the tax authority on our customer,
     * as broken down in our "notice log" found in Workflow. Main examples of the categories are 'Tax Due', 'Interest', 'Penalty', 'Total Abated'.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this notice.
     * @param int id The ID of the notice added to the finance details.
     * @param object[] model The notice finance details you wish to create.
   * @return object[]
   */
  createNoticeFinanceDetails({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}/financedetails`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new notice responsibility.
   *
   * This API is available by invitation only.
     * 'Notice comments' are updates by the notice team on the work to be done and that has been done so far on a notice.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this notice.
     * @param int id The ID of the tax notice we are adding the responsibility for.
     * @param object[] model The notice responsibilities you wish to create.
   * @return object[]
   */
  createNoticeResponsibilities({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}/responsibilities`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new notice root cause.
   *
   * This API is available by invitation only.
     * 'Notice root causes' are are those who are responsible for the notice.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this notice.
     * @param int id The ID of the tax notice we are adding the responsibility for.
     * @param object[] model The notice root causes you wish to create.
   * @return object[]
   */
  createNoticeRootCauses({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}/rootcauses`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new notice.
   *
   * This API is available by invitation only.
     * Create one or more new notice objects.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this notice.
     * @param object[] model The notice object you wish to create.
   * @return object[]
   */
  createNotices({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single notice.
   *
   * This API is available by invitation only.
     * Mark the existing notice object at this URL as deleted.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this notice.
     * @param int id The ID of the notice you wish to delete.
   * @return object[]
   */
  deleteNotice({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Delete a single responsibility
   *
   * This API is available by invitation only.
     * Mark the existing notice object at this URL as deleted.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this notice.
     * @param int noticeId The ID of the notice you wish to delete.
     * @param int id The ID of the responsibility you wish to delete.
   * @return object[]
   */
  deleteResponsibilities({ companyId, noticeId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${noticeId}/responsibilities/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Delete a single root cause.
   *
   * This API is available by invitation only.
     * Mark the existing notice object at this URL as deleted.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company that owns this notice.
     * @param int noticeId The ID of the notice you wish to delete.
     * @param int id The ID of the root cause you wish to delete.
   * @return object[]
   */
  deleteRootCauses({ companyId, noticeId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${noticeId}/rootcauses/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single attachment
   *
   * This API is available by invitation only.
     * Get the file attachment identified by this URL.
   *
   * 
     * @param int companyId The ID of the company for this attachment.
     * @param int id The ResourceFileId of the attachment to download.
   * @return object
   */
  downloadNoticeAttachment({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/files/${id}/attachment`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a single notice.
   *
   * This API is available by invitation only.
     * Get the tax notice object identified by this URL.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int companyId The ID of the company for this notice.
     * @param int id The ID of this notice.
   * @return object
   */
  getNotice({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve notice comments for a specific notice.
   *
   * This API is available by invitation only.
     * 'Notice comments' are updates by the notice team on the work to be done and that has been done so far on a notice.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int id The ID of the notice.
     * @param int companyId The ID of the company that owns these notices.
   * @return FetchResult
   */
  getNoticeComments({ id, companyId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}/comments`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve notice finance details for a specific notice.
   *
   * This API is available by invitation only.
     * 'Notice finance details' is the categorical breakdown of the total charge levied by the tax authority on our customer,
     * as broken down in our "notice log" found in Workflow. Main examples of the categories are 'Tax Due', 'Interest', 'Penalty', 'Total Abated'.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int id The ID of the company that owns these notices.
     * @param int companyId The ID of the company that owns these notices.
   * @return FetchResult
   */
  getNoticeFinanceDetails({ id, companyId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}/financedetails`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve notice responsibilities for a specific notice.
   *
   * This API is available by invitation only.
     * 'Notice responsibilities' are are those who are responsible for the notice.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int id The ID of the notice.
     * @param int companyId The ID of the company that owns these notices.
   * @return FetchResult
   */
  getNoticeResponsibilities({ id, companyId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}/responsibilities`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve notice root causes for a specific notice.
   *
   * This API is available by invitation only.
     * 'Notice root causes' are are those who are responsible for the notice.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
   *
   * 
     * @param int id The ID of the notice.
     * @param int companyId The ID of the company that owns these notices.
   * @return FetchResult
   */
  getNoticeRootCauses({ id, companyId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}/rootcauses`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve notices for a company.
   *
   * This API is available by invitation only.
     * List all tax notice objects assigned to this company.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that owns these notices.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listNoticesByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all notices.
   *
   * This API is available by invitation only.
     * Get multiple notice objects across all companies.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryNotices({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/notices`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single notice.
   *
   * This API is available by invitation only.
     * Replace the existing notice object at this URL with an updated object.
     * A 'notice' represents a letter sent to a business by a tax authority regarding tax filing issues. Avalara
     * Returns customers often receive support and assistance from the Compliance Notices team in handling notices received by taxing authorities.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this notice belongs to.
     * @param int id The ID of the notice you wish to update.
     * @param object model The notice object you wish to update.
   * @return object
   */
  updateNotice({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Retrieve a single attachment
   *
   * This API is available by invitation only.
     * Get the file attachment identified by this URL.
   *
   * 
     * @param int companyId The ID of the company for this attachment.
     * @param object model The ResourceFileId of the attachment to download.
   * @return object
   */
  uploadAttachment({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/notices/files/attachment`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Request a new Avalara account
   *
   * This API is for use by partner onboarding services customers only.
     * Calling this API creates an account with the specified product subscriptions, but does not configure billing.
     * The customer will receive information from Avalara about how to configure billing for their account.
     * You should call this API when a customer has requested to begin using Avalara services.
   *
   * 
     * @param object model Information about the account you wish to create and the selected product offerings.
   * @return object
   */
  requestNewAccount({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/request`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Change Password
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Allows a user to change their password via the API.
     * This API only allows the currently authenticated user to change their password; it cannot be used to apply to a
     * different user than the one authenticating the current API call.
   *
   * 
     * @param object model An object containing your current password and the new password.
   * @return string
   */
  changePassword({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/passwords`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Create a new account
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Create a single new account object. 
     * When creating an account object you may attach subscriptions and users as part of the 'Create' call.
   *
   * 
     * @param object model The account you wish to create.
   * @return object
   */
  createAccount({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new subscription
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Create one or more new subscription objects attached to this account.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
   *
   * 
     * @param int accountId The ID of the account that owns this subscription.
     * @param object[] model The subscription you wish to create.
   * @return object[]
   */
  createSubscriptions({ accountId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create new users
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Create one or more new user objects attached to this account.
     * A user represents one person with access privileges to make API calls and work with a specific account.
   *
   * 
     * @param int accountId The unique ID number of the account where these users will be created.
     * @param object[] model The user or array of users you wish to create.
   * @return object[]
   */
  createUsers({ accountId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single account
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Delete an account.
     * Deleting an account will delete all companies and all account level users attached to this account.
   *
   * 
     * @param int id The ID of the account you wish to delete.
   * @return object[]
   */
  deleteAccount({ id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Delete a single subscription
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Mark the existing account identified by this URL as deleted.
   *
   * 
     * @param int accountId The ID of the account that owns this subscription.
     * @param int id The ID of the subscription you wish to delete.
   * @return object[]
   */
  deleteSubscription({ accountId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Delete a single user
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Mark the user object identified by this URL as deleted.
   *
   * 
     * @param int id The ID of the user you wish to delete.
     * @param int accountId The accountID of the user you wish to delete.
   * @return object[]
   */
  deleteUser({ id, accountId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve all accounts
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Get multiple account objects.
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Subscriptions
     * * Users
     *  
     * For more information about filtering in REST, please see the documentation at http://developer.avalara.com/avatax/filtering-in-rest/ .
   *
   * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryAccounts({ include, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Reset a user's password programmatically
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Allows a system admin to reset the password for a specific user via the API.
     * This API is only available for Avalara Registrar Admins, and can be used to reset the password of any
     * user based on internal Avalara business processes.
   *
   * 
     * @param int userId The unique ID of the user whose password will be changed
     * @param object model The new password for this user
   * @return string
   */
  resetPassword({ userId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/passwords/${userId}/reset`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Update a single account
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Replace an existing account object with an updated account object.
   *
   * 
     * @param int id The ID of the account you wish to update.
     * @param object model The account object you wish to update.
   * @return object
   */
  updateAccount({ id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Update a single subscription
   *
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     * 
     * Replace the existing subscription object at this URL with an updated object.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int accountId The ID of the account that this subscription belongs to.
     * @param int id The ID of the subscription you wish to update
     * @param object model The subscription you wish to update.
   * @return object
   */
  updateSubscription({ accountId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Create a new setting
   *
   * Create one or more new setting objects attached to this company.
     * A 'setting' is a piece of user-defined data that can be attached to a company, and it provides you the ability to store information
     * not defined or managed by Avalara.
     * You may create, update, and delete your own settings objects as required, and there is no mandatory data format for the 'name' and 
     * 'value' data fields.
     * To ensure correct operation of other programs or connectors, please create a new GUID for your application and use that value for
     * the 'set' data field.
   *
   * 
     * @param int companyId The ID of the company that owns this setting.
     * @param object[] model The setting you wish to create.
   * @return object[]
   */
  createSettings({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single setting
   *
   * Mark the setting object at this URL as deleted.
   *
   * 
     * @param int companyId The ID of the company that owns this setting.
     * @param int id The ID of the setting you wish to delete.
   * @return object[]
   */
  deleteSetting({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single setting
   *
   * Get a single setting object by its unique ID.
     * A 'setting' is a piece of user-defined data that can be attached to a company, and it provides you the ability to store information
     * not defined or managed by Avalara.
     * You may create, update, and delete your own settings objects as required, and there is no mandatory data format for the 'name' and 
     * 'value' data fields.
     * To ensure correct operation of other programs or connectors, please create a new GUID for your application and use that value for
     * the 'set' data field.
   *
   * 
     * @param int companyId The ID of the company that owns this setting
     * @param int id The primary key of this setting
   * @return object
   */
  getSetting({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all settings for this company
   *
   * List all setting objects attached to this company.
     * A 'setting' is a piece of user-defined data that can be attached to a company, and it provides you the ability to store information
     * not defined or managed by Avalara.
     * You may create, update, and delete your own settings objects as required, and there is no mandatory data format for the 'name' and 
     * 'value' data fields.
     * To ensure correct operation of other programs or connectors, please create a new GUID for your application and use that value for
     * the 'set' data field.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that owns these settings
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listSettingsByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all settings
   *
   * Get multiple setting objects across all companies.
     * A 'setting' is a piece of user-defined data that can be attached to a company, and it provides you the ability to store information
     * not defined or managed by Avalara.
     * You may create, update, and delete your own settings objects as required, and there is no mandatory data format for the 'name' and 
     * 'value' data fields.
     * To ensure correct operation of other programs or connectors, please create a new GUID for your application and use that value for
     * the 'set' data field.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  querySettings({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/settings`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single setting
   *
   * Replace the existing setting object at this URL with an updated object.
     * A 'setting' is a piece of user-defined data that can be attached to a company, and it provides you the ability to store information
     * not defined or managed by Avalara.
     * You may create, update, and delete your own settings objects as required, and there is no mandatory data format for the 'name' and 
     * 'value' data fields.
     * To ensure correct operation of other programs or connectors, please create a new GUID for your application and use that value for
     * the 'set' data field.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this setting belongs to.
     * @param int id The ID of the setting you wish to update
     * @param object model The setting you wish to update.
   * @return object
   */
  updateSetting({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Retrieve a single subscription
   *
   * Get the subscription object identified by this URL.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
   *
   * 
     * @param int accountId The ID of the account that owns this subscription
     * @param int id The primary key of this subscription
   * @return object
   */
  getSubscription({ accountId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve subscriptions for this account
   *
   * List all subscription objects attached to this account.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int accountId The ID of the account that owns these subscriptions
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listSubscriptionsByAccount({ accountId, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all subscriptions
   *
   * Get multiple subscription objects across all accounts.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  querySubscriptions({ filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/subscriptions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Create a new tax code
   *
   * Create one or more new taxcode objects attached to this company.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
   *
   * 
     * @param int companyId The ID of the company that owns this tax code.
     * @param object[] model The tax code you wish to create.
   * @return object[]
   */
  createTaxCodes({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single tax code
   *
   * Marks the existing TaxCode object at this URL as deleted.
   *
   * 
     * @param int companyId The ID of the company that owns this tax code.
     * @param int id The ID of the tax code you wish to delete.
   * @return object[]
   */
  deleteTaxCode({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single tax code
   *
   * Get the taxcode object identified by this URL.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
   *
   * 
     * @param int companyId The ID of the company that owns this tax code
     * @param int id The primary key of this tax code
   * @return object
   */
  getTaxCode({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve tax codes for this company
   *
   * List all taxcode objects attached to this company.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that owns these tax codes
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTaxCodesByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all tax codes
   *
   * Get multiple taxcode objects across all companies.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryTaxCodes({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/taxcodes`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single tax code
   *
   * Replace the existing taxcode object at this URL with an updated object.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this tax code belongs to.
     * @param int id The ID of the tax code you wish to update
     * @param object model The tax code you wish to update.
   * @return object
   */
  updateTaxCode({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Build a multi-location tax content file
   *
   * Builds a tax content file containing information useful for a retail point-of-sale solution.
     * 
     * This file contains tax rates and rules for items and locations that can be used
     * to correctly calculate tax in the event a point-of-sale device is not able to reach AvaTax.
     * 
     * This data file can be customized for specific partner devices and usage conditions.
     * 
     * The result of this API is the file you requested in the format you requested using the `responseType` field.
     * 
     * This API builds the file on demand, and is limited to files with no more than 7500 scenarios. To build a tax content
     * file for a single location at a time, please use `BuildTaxContentFileForLocation`.
   *
   * 
     * @param object model Parameters about the desired file format and report format, specifying which company, locations and TaxCodes to include.
   * @return object
   */
  buildTaxContentFile({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/pointofsaledata/build`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Build a tax content file for a single location
   *
   * Builds a tax content file containing information useful for a retail point-of-sale solution.
     * 
     * This file contains tax rates and rules for all items for a single location. Data from this API
     * can be used to correctly calculate tax in the event a point-of-sale device is not able to reach AvaTax.
     * 
     * This data file can be customized for specific partner devices and usage conditions.
     * 
     * The result of this API is the file you requested in the format you requested using the `responseType` field.
     * 
     * This API builds the file on demand, and is limited to files with no more than 7500 scenarios. To build a tax content
     * file for a multiple locations in a single file, please use `BuildTaxContentFile`.
   *
   * 
     * @param int companyId The ID number of the company that owns this location.
     * @param int id The ID number of the location to retrieve point-of-sale data.
     * @param string date The date for which point-of-sale data would be calculated (today by default)
     * @param string format The format of the file (JSON by default) (See PointOfSaleFileType::* for a list of allowable values)
     * @param string partnerId If specified, requests a custom partner-formatted version of the file. (See PointOfSalePartnerId::* for a list of allowable values)
     * @param boolean includeJurisCodes When true, the file will include jurisdiction codes in the result.
   * @return object
   */
  buildTaxContentFileForLocation({ companyId, id, date, format, partnerId, includeJurisCodes } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}/pointofsaledata`,
      parameters: {
        date: date,
        format: format,
        partnerId: partnerId,
        includeJurisCodes: includeJurisCodes
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Create a new tax rule
   *
   * Create one or more new taxrule objects attached to this company.
     * A tax rule represents a custom taxability rule for a product or service sold by your company.
     * If you have obtained a custom tax ruling from an auditor that changes the behavior of certain goods or services
     * within certain taxing jurisdictions, or you have obtained special tax concessions for certain dates or locations,
     * you may wish to create a TaxRule object to override the AvaTax engine's default behavior in those circumstances.
   *
   * 
     * @param int companyId The ID of the company that owns this tax rule.
     * @param object[] model The tax rule you wish to create.
   * @return object[]
   */
  createTaxRules({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single tax rule
   *
   * Mark the TaxRule identified by this URL as deleted.
   *
   * 
     * @param int companyId The ID of the company that owns this tax rule.
     * @param int id The ID of the tax rule you wish to delete.
   * @return object[]
   */
  deleteTaxRule({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single tax rule
   *
   * Get the taxrule object identified by this URL.
     * A tax rule represents a custom taxability rule for a product or service sold by your company.
     * If you have obtained a custom tax ruling from an auditor that changes the behavior of certain goods or services
     * within certain taxing jurisdictions, or you have obtained special tax concessions for certain dates or locations,
     * you may wish to create a TaxRule object to override the AvaTax engine's default behavior in those circumstances.
   *
   * 
     * @param int companyId The ID of the company that owns this tax rule
     * @param int id The primary key of this tax rule
   * @return object
   */
  getTaxRule({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve tax rules for this company
   *
   * List all taxrule objects attached to this company.
     * A tax rule represents a custom taxability rule for a product or service sold by your company.
     * If you have obtained a custom tax ruling from an auditor that changes the behavior of certain goods or services
     * within certain taxing jurisdictions, or you have obtained special tax concessions for certain dates or locations,
     * you may wish to create a TaxRule object to override the AvaTax engine's default behavior in those circumstances.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that owns these tax rules
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTaxRules({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all tax rules
   *
   * Get multiple taxrule objects across all companies.
     * A tax rule represents a custom taxability rule for a product or service sold by your company.
     * If you have obtained a custom tax ruling from an auditor that changes the behavior of certain goods or services
     * within certain taxing jurisdictions, or you have obtained special tax concessions for certain dates or locations,
     * you may wish to create a TaxRule object to override the AvaTax engine's default behavior in those circumstances.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryTaxRules({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/taxrules`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single tax rule
   *
   * Replace the existing taxrule object at this URL with an updated object.
     * A tax rule represents a custom taxability rule for a product or service sold by your company.
     * If you have obtained a custom tax ruling from an auditor that changes the behavior of certain goods or services
     * within certain taxing jurisdictions, or you have obtained special tax concessions for certain dates or locations,
     * you may wish to create a TaxRule object to override the AvaTax engine's default behavior in those circumstances.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this tax rule belongs to.
     * @param int id The ID of the tax rule you wish to update
     * @param object model The tax rule you wish to update.
   * @return object
   */
  updateTaxRule({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Add lines to an existing unlocked transaction
   *
   * Add lines to an existing unlocked transaction.
     * 
     * The `AddLines` API allows you to add additional transaction lines to existing transaction, so that customer will
     * be able to append multiple calls together and form an extremely large transaction. If customer does not specify line number
     * in the lines to be added, a new random Guid string will be generated for line number. If customer are not satisfied with
     * the line number for the transaction lines, they can turn on the renumber switch to have REST v2 automatically renumber all 
     * transaction lines for them, in this case, the line number becomes: "1", "2", "3", ...
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     *  
     * If you don't specify '$include' parameter, it will include both details and addresses.
   *
   * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param object model information about the transaction and lines to be added
   * @return object
   */
  addLines({ include, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/transactions/lines/add`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Correct a previously created transaction
   *
   * Replaces the current transaction uniquely identified by this URL with a new transaction.
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * 
     * When you adjust a committed transaction, the original transaction will be updated with the status code `Adjusted`, and
     * both revisions will be available for retrieval based on their code and ID numbers.
     * Only transactions in `Committed` status are reported by Avalara Managed Returns.
     * 
     * Transactions that have been previously reported to a tax authority by Avalara Managed Returns are considered `locked` and are 
     * no longer available for adjustments.
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to adjust
     * @param object model The adjustment you wish to make
   * @return object
   */
  adjustTransaction({ companyCode, transactionCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/adjust`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Get audit information about a transaction
   *
   * Retrieve audit information about a transaction stored in AvaTax.
     *  
     * The 'AuditTransaction' endpoint retrieves audit information related to a specific transaction. This audit 
     * information includes the following:
     * 
     * * The `CompanyId` of the company that created the transaction
     * * The server timestamp representing the exact server time when the transaction was created
     * * The server duration - how long it took to process this transaction
     * * Whether exact API call details were logged
     * * A reconstructed API call showing what the original CreateTransaction call looked like
     * 
     * This API can be used to examine information about a previously created transaction.
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
   *
   * 
     * @param string companyCode The code identifying the company that owns this transaction
     * @param string transactionCode The code identifying the transaction
   * @return object
   */
  auditTransaction({ companyCode, transactionCode } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/audit`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Get audit information about a transaction
   *
   * Retrieve audit information about a transaction stored in AvaTax.
     *  
     * The 'AuditTransaction' endpoint retrieves audit information related to a specific transaction. This audit 
     * information includes the following:
     * 
     * * The `CompanyId` of the company that created the transaction
     * * The server timestamp representing the exact server time when the transaction was created
     * * The server duration - how long it took to process this transaction
     * * Whether exact API call details were logged
     * * A reconstructed API call showing what the original CreateTransaction call looked like
     * 
     * This API can be used to examine information about a previously created transaction.
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
   *
   * 
     * @param string companyCode The code identifying the company that owns this transaction
     * @param string transactionCode The code identifying the transaction
     * @param string documentType The document type of the original transaction (See DocumentType::* for a list of allowable values)
   * @return object
   */
  auditTransactionWithType({ companyCode, transactionCode, documentType } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/types/${documentType}/audit`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Lock a set of documents
   *
   * This API is available by invitation only.
     * 
     * Lock a set of transactions uniquely identified by DocumentIds provided. This API allows locking multiple documents at once.
     * After this API call succeeds, documents will be locked and can't be voided.
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
   *
   * 
     * @param object model bulk lock request
   * @return object
   */
  bulkLockTransaction({ model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/transactions/lock`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Change a transaction's code
   *
   * Renames a transaction uniquely identified by this URL by changing its code to a new code.
     * After this API call succeeds, the transaction will have a new URL matching its new code.
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to change
     * @param object model The code change request you wish to execute
   * @return object
   */
  changeTransactionCode({ companyCode, transactionCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/changecode`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Commit a transaction for reporting
   *
   * Marks a transaction by changing its status to 'Committed'.
     * Transactions that are committed are available to be reported to a tax authority by Avalara Managed Returns.
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * Any changes made to a committed transaction will generate a transaction history.
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to commit
     * @param object model The commit request you wish to execute
   * @return object
   */
  commitTransaction({ companyCode, transactionCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/commit`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new transaction
   *
   * Records a new transaction or adjust an existing in AvaTax.
     * 
     * The `CreateOrAdjustTransaction` endpoint is used to create a new transaction if the input transaction does not exist
     * or if there exists a transaction identified by code, the original transaction will be adjusted by using the meta data 
     * in the input transaction
     * 
     * If you don't specify type in the provided data, a new transaction with type of SalesOrder will be recorded by default.
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     *  
     * If you don't specify '$include' parameter, it will include both details and addresses.
   *
   * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param object model The transaction you wish to create
   * @return object
   */
  createOrAdjustTransaction({ include, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/transactions/createoradjust`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new transaction
   *
   * Records a new transaction in AvaTax.
     * 
     * The `CreateTransaction` endpoint uses the configuration values specified by your company to identify the correct tax rules
     * and rates to apply to all line items in this transaction, and reports the total tax calculated by AvaTax based on your
     * company's configuration and the data provided in this API call.
     * 
     * If you don't specify type in the provided data, a new transaction with type of SalesOrder will be recorded by default.
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     *  
     * If you don't specify '$include' parameter, it will include both details and addresses.
   *
   * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param object model The transaction you wish to create
   * @return object
   */
  createTransaction({ include, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/transactions/create`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Remove lines from an existing unlocked transaction
   *
   * Remove lines to an existing unlocked transaction.
     * 
     * The `DeleteLines` API allows you to remove transaction lines from existing unlocked transaction, so that customer will
     * be able to delete transaction lines and adjust original transaction the way they like
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     *  
     * If you don't specify '$include' parameter, it will include both details and addresses.
   *
   * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param object model information about the transaction and lines to be removed
   * @return object
   */
  deleteLines({ include, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/transactions/lines/delete`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Retrieve a single transaction by code
   *
   * Get the current transaction identified by this URL.
     * If this transaction was adjusted, the return value of this API will be the current transaction with this code, and previous revisions of
     * the transaction will be attached to the 'history' data field.
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to retrieve
     * @param string include A comma separated list of child objects to return underneath the primary object.
   * @return object
   */
  getTransactionByCode({ companyCode, transactionCode, include } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a single transaction by code
   *
   * Get the current transaction identified by this URL.
     * If this transaction was adjusted, the return value of this API will be the current transaction with this code, and previous revisions of
     * the transaction will be attached to the 'history' data field.
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to retrieve
     * @param string documentType The transaction type to retrieve (See DocumentType::* for a list of allowable values)
     * @param string include A comma separated list of child objects to return underneath the primary object.
   * @return object
   */
  getTransactionByCodeAndType({ companyCode, transactionCode, documentType, include } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/types/${documentType}`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve a single transaction by ID
   *
   * Get the unique transaction identified by this URL.
     * This endpoint retrieves the exact transaction identified by this ID number even if that transaction was later adjusted
     * by using the 'Adjust Transaction' endpoint.
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
   *
   * 
     * @param int id The unique ID number of the transaction to retrieve
     * @param string include A comma separated list of child objects to return underneath the primary object.
   * @return object
   */
  getTransactionById({ id, include } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/transactions/${id}`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all transactions
   *
   * List all transactions attached to this company.
     * This endpoint is limited to returning 1,000 transactions at a time maximum.
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listTransactionsByCompany({ companyCode, include, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Lock a single transaction
   *
   * Lock a transaction uniquely identified by this URL. 
     * 
     * This API is mainly used for connector developer to simulate what happens when Returns product locks a document.
     * After this API call succeeds, the document will be locked and can't be voided or adjusted.
     * 
     * This API is only available to customers in Sandbox with AvaTaxPro subscription. On production servers, this API is available by invitation only.
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to lock
     * @param object model The lock request you wish to execute
   * @return object
   */
  lockTransaction({ companyCode, transactionCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/lock`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a refund for a transaction
   *
   * Create a refund for a transaction.
     * 
     * The `RefundTransaction` API allows you to quickly and easily create a `ReturnInvoice` representing a refund
     * for a previously created `SalesInvoice` transaction. You can choose to create a full or partial refund, and
     * specify individual line items from the original sale for refund.
     * 
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     *  
     * If you don't specify '$include' parameter, it will include both details and addresses.
   *
   * 
     * @param string companyCode The code of the company that made the original sale
     * @param string transactionCode The transaction code of the original sale
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param object model Information about the refund to create
   * @return object
   */
  refundTransaction({ companyCode, transactionCode, include, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/refund`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Perform multiple actions on a transaction
   *
   * Performs the same functions as /verify, /changecode, and /commit. You may specify one or many actions in each call to this endpoint.
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to settle
     * @param object model The settle request containing the actions you wish to execute
   * @return object
   */
  settleTransaction({ companyCode, transactionCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/settle`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Verify a transaction
   *
   * Verifies that the transaction uniquely identified by this URL matches certain expected values.
     * If the transaction does not match these expected values, this API will return an error code indicating which value did not match.
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to settle
     * @param object model The settle request you wish to execute
   * @return object
   */
  verifyTransaction({ companyCode, transactionCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/verify`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Void a transaction
   *
   * Voids the current transaction uniquely identified by this URL.
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * When you void a transaction, that transaction's status is recorded as 'DocVoided'.
     * Transactions that have been previously reported to a tax authority by Avalara Managed Returns are no longer available to be voided.
   *
   * 
     * @param string companyCode The company code of the company that recorded this transaction
     * @param string transactionCode The transaction code to void
     * @param object model The void request you wish to execute
   * @return object
   */
  voidTransaction({ companyCode, transactionCode, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/void`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Create a new UPC
   *
   * Create one or more new UPC objects attached to this company.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
   *
   * 
     * @param int companyId The ID of the company that owns this UPC.
     * @param object[] model The UPC you wish to create.
   * @return object[]
   */
  createUPCs({ companyId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'post', payload: model });
  }

  /**
   * Delete a single UPC
   *
   * Marks the UPC object identified by this URL as deleted.
   *
   * 
     * @param int companyId The ID of the company that owns this UPC.
     * @param int id The ID of the UPC you wish to delete.
   * @return object[]
   */
  deleteUPC({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'delete', payload: null });
  }

  /**
   * Retrieve a single UPC
   *
   * Get the UPC object identified by this URL.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
   *
   * 
     * @param int companyId The ID of the company that owns this UPC
     * @param int id The primary key of this UPC
   * @return object
   */
  getUPC({ companyId, id } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve UPCs for this company
   *
   * List all UPC objects attached to this company.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int companyId The ID of the company that owns these UPCs
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listUPCsByCompany({ companyId, filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all UPCs
   *
   * Get multiple UPC objects across all companies.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryUPCs({ filter, include, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/upcs`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single UPC
   *
   * Replace the existing UPC object at this URL with an updated object.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int companyId The ID of the company that this UPC belongs to.
     * @param int id The ID of the UPC you wish to update
     * @param object model The UPC you wish to update.
   * @return object
   */
  updateUPC({ companyId, id, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Retrieve a single user
   *
   * Get the user object identified by this URL.
     * A user represents one person with access privileges to make API calls and work with a specific account.
   *
   * 
     * @param int id The ID of the user to retrieve.
     * @param int accountId The accountID of the user you wish to get.
     * @param string include A comma separated list of child objects to return underneath the primary object.
   * @return object
   */
  getUser({ id, accountId, include } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users/${id}`,
      parameters: {
        $include: include
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all entitlements for a single user
   *
   * Return a list of all entitlements to which this user has rights to access.
     * Entitlements are a list of specified API calls the user is permitted to make, a list of identifier numbers for companies the user is 
     * allowed to use, and an access level identifier that indicates what types of access roles the user is allowed to use.
     * This API call is intended to provide a validation endpoint to determine, before making an API call, whether this call is likely to succeed.
     * For example, if user 567 within account 999 is attempting to create a new child company underneath company 12345, you could preview the user's
     * entitlements and predict whether this call would succeed:
     *  
     * * Retrieve entitlements by calling '/api/v2/accounts/999/users/567/entitlements' . If the call fails, you do not have accurate 
     *  credentials for this user.
     * * If the 'accessLevel' field within entitlements is 'None', the call will fail.
     * * If the 'accessLevel' field within entitlements is 'SingleCompany' or 'SingleAccount', the call will fail if the companies
     *  table does not contain the ID number 12345.
     * * If the 'permissions' array within entitlements does not contain 'AccountSvc.CompanySave', the call will fail.
     *  
     * For a full list of defined permissions, please use '/api/v2/definitions/permissions' .
   *
   * 
     * @param int id The ID of the user to retrieve.
     * @param int accountId The accountID of the user you wish to get.
   * @return object
   */
  getUserEntitlements({ id, accountId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users/${id}/entitlements`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve users for this account
   *
   * List all user objects attached to this account.
     * A user represents one person with access privileges to make API calls and work with a specific account.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param int accountId The accountID of the user you wish to list.
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  listUsersByAccount({ accountId, include, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Retrieve all users
   *
   * Get multiple user objects across all accounts.
     * A user represents one person with access privileges to make API calls and work with a specific account.
     * 
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   *
   * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return FetchResult
   */
  queryUsers({ include, filter, top, skip, orderBy } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/users`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Update a single user
   *
   * Replace the existing user object at this URL with an updated object.
     * A user represents one person with access privileges to make API calls and work with a specific account.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
   *
   * 
     * @param int id The ID of the user you wish to update.
     * @param int accountId The accountID of the user you wish to update.
     * @param object model The user object you wish to update.
   * @return object
   */
  updateUser({ id, accountId, model } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users/${id}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'put', payload: model });
  }

  /**
   * Checks if the current user is subscribed to a specific service
   *
   * Returns a subscription object for the current account, or 404 Not Found if this subscription is not enabled for this account.
     * This API call is intended to allow you to identify whether you have the necessary account configuration to access certain
     * features of AvaTax, and would be useful in debugging access privilege problems.
   *
   * 
     * @param string serviceTypeId The service to check (See ServiceTypeId::* for a list of allowable values)
   * @return object
   */
  getMySubscription({ serviceTypeId } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/utilities/subscriptions/${serviceTypeId}`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * List all services to which the current user is subscribed
   *
   * Returns the list of all subscriptions enabled for the current account.
     * This API is intended to help you determine whether you have the necessary subscription to use certain API calls
     * within AvaTax.
   *
   * 
   * @return FetchResult
   */
  listMySubscriptions({  } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/utilities/subscriptions`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }

  /**
   * Tests connectivity and version of the service
   *
   * This API helps diagnose connectivity problems between your application and AvaTax; you may call this API even 
     * if you do not have verified connection credentials.
     * The results of this API call will help you determine whether your computer can contact AvaTax via the network,
     * whether your authentication credentials are recognized, and the roundtrip time it takes to communicate with
     * AvaTax.
   *
   * 
   * @return object
   */
  ping({  } = {}) {
    var path = this.buildUrl({
      url: `/api/v2/utilities/ping`,
      parameters: {}
    });
    return this.restCall({ url: path, verb: 'get', payload: null });
  }
}
