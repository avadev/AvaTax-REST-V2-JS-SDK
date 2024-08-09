/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Jonathan Wenger <jonathan.wenger@avalara.com>
 * @author     Sachin Baijal <sachin.baijal@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    24.8.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as https from 'https';
import fetch, { Response } from 'node-fetch';
import { ReadStream } from 'fs';
import * as FormData from 'form-data';
import { JsonConvert, PropertyMatchingRule } from "json2typescript"

import { createBasicAuthHeader } from './utils/basic_auth';
import { withTimeout } from './utils/withTimeout';
import * as Models from './models/index';
import * as Enums from './enums/index';
import Logger, { LogLevel, LogOptions } from './utils/logger';
import LogObject from './utils/logObject';
import { FetchResult } from './utils/fetch_result';

export class AvalaraError extends Error {
  code: string;
  target: string;
  details: string
}

export interface HttpOptions {
  method: string;
  headers: NodeJS.Dict<string>;
  body: string | null;
  agent?: https.Agent
}

export default class AvaTaxClient {
  public appNM: string;
  public appVer: string;
  public machineNM: string;
  public baseUrl: string;
  public timeout: number;
  public auth: string;
  public customHttpAgent: https.Agent;
  public enableStrictTypeConversion: boolean;
  private apiVersion: string = '24.8.0';
  private logger: Logger;
  /**
   * Construct a new AvaTaxClient 
   * 
   * @constructor
   * @param {string} appName      Specify the name of your application here.  Should not contain any semicolons.
   * @param {string} appVersion   Specify the version number of your application here.  Should not contain any semicolons.
   * @param {string} machineName  Specify the machine name of the machine on which this code is executing here.  Should not contain any semicolons.
   * @param {string} environment  Indicates which server to use; acceptable values are "sandbox" or "production", or the full URL of your AvaTax instance.
   * @param {number} timeout      Specify the timeout for AvaTax requests; default value 20 minutes.
   * @param {https.Agent} customHttpAgent      Specify the http agent which will be used to make http requests to the Avatax APIs.
   * @param {LogOptions} logOptions Specify the logging options to be utilized by the SDK.
   */
  constructor({ appName, appVersion, machineName, environment, timeout = 1200000, customHttpAgent, logOptions = { logEnabled: false }, enableStrictTypeConversion = false } : 
    { appName: string, appVersion: string, machineName: string, environment: string, timeout: number, customHttpAgent?: https.Agent, logOptions?: LogOptions, enableStrictTypeConversion?: boolean }) {
    this.appNM = appName;
	  this.appVer = appVersion;
	  this.machineNM = machineName;
    this.customHttpAgent = customHttpAgent;
    this.enableStrictTypeConversion = enableStrictTypeConversion;
    this.baseUrl = 'https://rest.avatax.com';
    if (environment == 'sandbox') {
      this.baseUrl = 'https://sandbox-rest.avatax.com';
    } else if (
      typeof environment !== 'undefined' &&
      (environment.substring(0, 8) == 'https://' ||
      environment.substring(0, 7) == 'http://')
    ) {
      this.baseUrl = environment;      
    }  
    this.timeout = timeout;  
    this.logger = new Logger(logOptions);
  }

  /**
   * Configure this client to use the specified username/password security settings
   *
   * @param  {string}          username        The username for your AvaTax user account
   * @param  {string}          password        The password for your AvaTax user account
   * @param  {number}          accountId       The account ID of your avatax account
   * @param  {string}          licenseKey      The license key of your avatax account
   * @param  {string}          bearerToken     The OAuth 2.0 token provided by Avalara Identity
   * @return {AvaTaxClient}
   */
  withSecurity({ username, password, accountId, licenseKey, bearerToken }: { username?: string, password?: string, accountId?: string, licenseKey?: string, bearerToken?: string}) {
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
   * @param  {string}  url        The relative path of the API on the server
   * @param  {string}  verb       The HTTP verb being used in this request
   * @param  {string}  payload    The request body, if this is being sent to a POST/PUT API call
   */
  restCall<T extends object>({ url, verb, payload, clientId = '', mapHeader = new Map(), isMultiPart = false }, toType: { new(): T }): Promise<T> {
    const reqHeaders = {
      Accept: 'application/json',
      Authorization: this.auth,
      'X-Avalara-Client': clientId
    };    
    let formData = null;
    if (!isMultiPart) {
      reqHeaders['Content-Type'] = 'application/json';
    } else {
      formData = new FormData();
      formData.append("file", payload);
    }
    for (let [key, value] of mapHeader) {
      reqHeaders[key] = value;
    }
    const options: HttpOptions = {
      method: verb,
      headers: reqHeaders,
      body: payload == null ? null : (formData != null) ? formData : JSON.stringify(payload)
    };
    if (this.customHttpAgent) {
      options.agent = this.customHttpAgent;
    }
    const logObject = new LogObject(this.logger.logRequestAndResponseInfo);
    logObject.populateRequestInfo(url, options, payload);
    return withTimeout(this.timeout, fetch(url, options)).then((res: Response) => {
	    logObject.populateElapsedTime();
      const contentType = res.headers.get('content-type');
      const contentLength = res.headers.get('content-length');
      
      if (contentType === 'application/vnd.ms-excel' || contentType === 'text/csv') {
        return res.text().then((txt: string) => {
          logObject.populateResponseInfo(res, txt);
          res.text = () => Promise.resolve(txt);
          return res;
        }).catch((error) => {
          let ex = new AvalaraError('The server returned the response is in an unexpected format');
          ex.code = 'FormatException';
          ex.details = error;
          logObject.populateErrorInfo(res, ex);
          throw ex;
        }).finally(() => {
          this.createLogEntry(logObject);
        });
      }

      if (contentType && contentType.includes('application/json')) {
        if ((contentLength === "0" && Math.trunc(res.status / 100) === 2) || res.status === 204){
          logObject.populateResponseInfo(res, null);
          this.createLogEntry(logObject);
          return null;
        }
      }
      return res.json().catch((error) => {
        let ex = new AvalaraError('The server returned the response is in an unexpected format');
        ex.code = 'FormatException';
        ex.details = error;
        logObject.populateErrorInfo(res, ex);
        throw ex;
      }).then(json => {
        // handle error
        if (json &&  json.error) {
          let ex = new AvalaraError(json.error.message);
          ex.code = json.error.code;
          ex.target = json.error.target;
          ex.details = json.error.details;
          logObject.populateErrorInfo(res, ex);
          throw ex;
        } else {
          logObject.populateResponseInfo(res, json);
          if (this.enableStrictTypeConversion) {
            if (typeof json === 'string') {
              return json;
            }
            const jsonConvert = new JsonConvert(null, null, null, PropertyMatchingRule.CASE_INSENSITIVE);
            return jsonConvert.deserializeObject<T>(json, toType);
          }
          return json;
        }
      }).finally(() => {
        this.createLogEntry(logObject);
      });      
    });      
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
   * Create an entry for an HTTP Request/Response in the logger.
   *
   * @param   {LogObject}  logObject            The instance of the logObject for a specific API invocation (HTTP Request)
   */
  createLogEntry(logObject: LogObject) {
    if (logObject.getStatusCode() <= 299) {
      this.logger.info(logObject.toString());
    } else {
      this.logger.error(logObject.toString());
    }
  }



  /**
   * Reset this account's license key
   * Resets the existing license key for this account to a new key.
     *  
     * To reset your account, you must specify the ID of the account you wish to reset and confirm the action.
     *  
     * This API is only available to account administrators for the account in question, and may only be called after
     * an account has been activated by reading and accepting Avalara's terms and conditions. To activate your account
     * please log onto the AvaTax website or call the `ActivateAccount` API.
     *  
     * You can only reset license with 'Default' license key name.
     * Resetting a license key cannot be undone. Any previous license keys will immediately cease to work when a new key is created.
     *  
     * When you call this API, all account administrators for this account will receive an email with the newly updated license key.
     * The email will specify which user reset the license key and it will contain the new key to use to update your connectors.
     * Note: The reset license key functionality will only be available for existing active license key i.e. when you reset license key for the account, the Default license key will be reset.The reset license key functionality is not available for newly created license keys i.e. license keys other than Default
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account you wish to update.
     * @param {Models.ResetLicenseKeyModel} model A request confirming that you wish to reset the license key of this account.
   * @return {Models.LicenseKeyModel}
   */
  
  accountResetLicenseKey({ id, model }: { id: number, model: Models.ResetLicenseKeyModel }): Promise<Models.LicenseKeyModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/resetlicensekey`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.LicenseKeyModel);
  }

  /**
   * Activate an account by accepting terms and conditions
   * Activate the account specified by the unique accountId number.
     *  
     * This activation request can only be called by account administrators. You must indicate
     * that you have read and accepted Avalara's terms and conditions to call this API.
     *  
     * Once you have activated your account, use the `AccountResetLicenseKey` API to generate
     * a license key for your account.
     *  
     * If you have not read or accepted the terms and conditions, this API call will return the
     * unchanged account model.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account to activate
     * @param {Models.ActivateAccountModel} model The activation request
   * @return {Models.AccountModel}
   */
  
  activateAccount({ id, model }: { id: number, model: Models.ActivateAccountModel }): Promise<Models.AccountModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/activate`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.AccountModel);
  }

  /**
   * Retrieve audit history for an account.
   * Retrieve audit trace history for an account.
     *  
     * Your audit trace history contains a record of all API calls made against the AvaTax REST API that returned an error. You can use this API to investigate
     * problems and see exactly what information was sent back and forth between your code and AvaTax.
     *  
     * When specifying a start and end datetime, please include a valid timezone indicator, such as the "Z" present in the examples for the start and end query parameters.
     * You can learn more about valid time zone designators at https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators.
     *  
     * This API enforces limits to the amount of data retrieved. These limits are subject to change.
     *  
     * * You may request data from a maximum of a one-hour time period.
     * * The amount of data and number of API calls returned by this API are limited and may be adjusted at any time.
     * * Old records may be migrated out of immediately available storage. To request older data, please contact your account manager.
     * * New records must migrate to available storage before they can be retrieved. You may need to wait a period of time before newly created records can be fetched.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account you wish to audit.
     * @param {Date} start The start datetime of audit history you with to retrieve, e.g. "2018-06-08T17:00:00Z". Defaults to the past 15 minutes.
     * @param {Date} end The end datetime of audit history you with to retrieve, e.g. "2018-06-08T17:15:00Z. Defaults to the current time. Maximum of an hour after the start time.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
   * @return {FetchResult<Models.AuditModel>}
   */
  
  auditAccount({ id, start, end, top, skip }: { id: number, start?: Date, end?: Date, top?: number, skip?: number }): Promise<FetchResult<Models.AuditModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/audit`,
      parameters: {
        start: start,
        end: end,
        $top: top,
        $skip: skip
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.AuditModel>);
  }

  /**
   * Create license key for this account
   * Creates a new license key for this account.
     *  
     * To create a license key for your account, you must specify the ID of the account and license key name.
     *  
     * This API is only available to account administrators for the account in question, and may only be called after
     * an account has been activated by reading and accepting Avalara's terms and conditions. To activate your account
     * please log onto the AvaTax website or call the `ActivateAccount` API.
     *  
     * You will reference this key using license key name. The existing license key will be using 'Default' as license key name.
     * Hence make sure that the license key name is unique per account considering the existing license key name 'Default'
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account you wish to update.
     * @param {Models.AccountLicenseKeyModel} model 
   * @return {Models.LicenseKeyModel}
   */
  
  createLicenseKey({ id, model }: { id: number, model: Models.AccountLicenseKeyModel }): Promise<Models.LicenseKeyModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/licensekey`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.LicenseKeyModel);
  }

  /**
   * Delete license key for this account by license key name
   * Deletes the license key for this account using license key name.
     *  
     * To delete a license key for your account, you must specify the accountID of the account and license key name.
     *  
     * This API is only available to account administrators for the account in question.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account you wish to update.
     * @param {string} licensekeyname The license key name you wish to update.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteLicenseKey({ id, licensekeyname }: { id: number, licensekeyname: string }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/licensekey/${licensekeyname}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single account
   * Get the account object identified by this URL.
     * You may use the '$include' parameter to fetch additional nested data:
     *  
     * * Subscriptions
     * * Users
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account to retrieve
     * @param {string} include A comma separated list of special fetch options
   * @return {Models.AccountModel}
   */
  
  getAccount({ id, include }: { id: number, include?: string }): Promise<Models.AccountModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.AccountModel);
  }

  /**
   * Get configuration settings for this account
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {Models.AccountConfigurationModel[]}
   */
  
  getAccountConfiguration({ id }: { id: number }): Promise<Array<Models.AccountConfigurationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/configuration`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.AccountConfigurationModel>);
  }

  /**
   * Retrieve license key by license key name
   * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account to retrieve
     * @param {string} licensekeyname The ID of the account to retrieve
   * @return {Models.AccountLicenseKeyModel}
   */
  
  getLicenseKey({ id, licensekeyname }: { id: number, licensekeyname: string }): Promise<Models.AccountLicenseKeyModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/licensekey/${licensekeyname}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.AccountLicenseKeyModel);
  }

  /**
   * Retrieve all license keys for this account
   * Gets list of all the license keys used by the account.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account to retrieve
   * @return {Models.AccountLicenseKeyModel[]}
   */
  
  getLicenseKeys({ id }: { id: number }): Promise<Array<Models.AccountLicenseKeyModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/licensekeys`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.AccountLicenseKeyModel>);
  }

  /**
   * Retrieve a list of MRS Accounts
   * This API is available by invitation only.
     *  
     * Get a list of accounts with an active MRS service.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
   * @return {FetchResult<Models.MrsCompanyModel>}
   */
  
  listMrsAccounts(): Promise<FetchResult<Models.MrsCompanyModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/mrs`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.MrsCompanyModel>);
  }

  /**
   * Retrieve all accounts
   * List all account objects that can be seen by the current user.
     *  
     * This API lists all accounts you are allowed to see. In general, most users will only be able to see their own account.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Subscriptions
     * * Users
     *  
     * For more information about filtering in REST, please see the documentation at http://developer.avalara.com/avatax/filtering-in-rest/ .
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} include A comma separated list of objects to fetch underneath this account. Any object with a URL path underneath this account can be fetched by specifying its name.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptions, users
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.AccountModel>}
   */
  
  queryAccounts({ include, filter, top, skip, orderBy }: { include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.AccountModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.AccountModel>);
  }

  /**
   * Change configuration settings for this account
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
     * @param {Models.AccountConfigurationModel[]} model 
   * @return {Models.AccountConfigurationModel[]}
   */
  
  setAccountConfiguration({ id, model }: { id: number, model: Models.AccountConfigurationModel[] }): Promise<Array<Models.AccountConfigurationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/configuration`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.AccountConfigurationModel>);
  }

  /**
   * Retrieve geolocation information for a specified US or Canadian address
   * Resolve a US or Canadian address against Avalara's address validation system. Note that this API is 
     * valid for US and Canadian addresses only. 
     * 
     * If the address can be resolved, this API provides the latitude and longitude of the resolved location. 
     * The value `resolutionQuality` can be used to identify how closely this address can be located. If the 
     * address cannot be clearly located, use the `messages` structure to learn more about problems with this address.
     * This is the same API as the POST /api/v2/addresses/resolve endpoint.
     * Both verbs are supported to provide for flexible implementation.
     *  
     * In order to get any evaluation for an address, please provide at least one of the following fields/pairs:
     * 1. postal code
     * 2. line1 + city + region
     * 3. line1 + postal code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AutoAddress.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} line1 Line 1
     * @param {string} line2 Line 2
     * @param {string} line3 Line 3
     * @param {string} city City
     * @param {string} region State / Province / Region
     * @param {string} postalCode Postal Code / Zip Code
     * @param {string} country Two character ISO 3166 Country Code (see /api/v2/definitions/countries for a full list)
     * @param {Enums.TextCase} textCase selectable text case for address validation (See TextCase::* for a list of allowable values)
   * @return {Models.AddressResolutionModel}
   */
  
  resolveAddress({ line1, line2, line3, city, region, postalCode, country, textCase }: { line1?: string, line2?: string, line3?: string, city?: string, region?: string, postalCode?: string, country?: string, textCase?: Enums.TextCase }): Promise<Models.AddressResolutionModel> {
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
        textCase: textCase
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.AddressResolutionModel);
  }

  /**
   * Retrieve geolocation information for a specified US or Canadian address
   * Resolve a US or Canadian address against Avalara's address validation system. Note that this API is 
     * valid for US and Canadian addresses only. 
     * 
     * If the address can be resolved, this API provides the latitude and longitude of the resolved location. 
     * The value `resolutionQuality` can be used to identify how closely this address can be located. If the 
     * address cannot be clearly located, use the `messages` structure to learn more about problems with this 
     * address. This is the same API as the GET /api/v2/addresses/resolve endpoint.
     * Both verbs are supported to provide for flexible implementation.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AutoAddress.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.AddressValidationInfo} model The address to resolve
   * @return {Models.AddressResolutionModel}
   */
  
  resolveAddressPost({ model }: { model: Models.AddressValidationInfo }): Promise<Models.AddressResolutionModel> {
    var path = this.buildUrl({
      url: `/api/v2/addresses/resolve`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.AddressResolutionModel);
  }

  /**
   * Create new rule
   * 
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this AP Config Setting object
     * @param {Models.APConfigSettingRequestModel} model The AP Config Setting you wish to create.
   * @return {Models.APConfigSettingSuccessResponseModel}
   */
  
  createAPConfigSetting({ companyid, model }: { companyid: number, model?: Models.APConfigSettingRequestModel }): Promise<Models.APConfigSettingSuccessResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/apconfigsetting`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.APConfigSettingSuccessResponseModel);
  }

  /**
   * Retrieve rule for this company
   * 
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that defined this rule
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* meta, amount, varianceForIgnore, varianceForAccrue, variancePercent, apConfigToleranceType, payAsBilledNoAccrual, payAsBilledAccrueUndercharge, shortPayItemsAccrueUndercharge, markForReviewUndercharge, rejectUndercharge, payAsBilledOvercharge, shortPayAvalaraCalculated, shortPayItemsAccrueOvercharge, markForReviewOvercharge, rejectOvercharge, isActive
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.APConfigSettingSuccessResponseModel>}
   */
  
  getAPConfigSettingByCompany({ companyid, filter, include, top, skip, orderBy }: { companyid: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.APConfigSettingSuccessResponseModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/apconfigsetting`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.APConfigSettingSuccessResponseModel>);
  }

  /**
   * Retrieve all rules
   * 
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* meta, amount, varianceForIgnore, varianceForAccrue, variancePercent, apConfigToleranceType, payAsBilledNoAccrual, payAsBilledAccrueUndercharge, shortPayItemsAccrueUndercharge, markForReviewUndercharge, rejectUndercharge, payAsBilledOvercharge, shortPayAvalaraCalculated, shortPayItemsAccrueOvercharge, markForReviewOvercharge, rejectOvercharge, isActive
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.APConfigSettingSuccessResponseModel>}
   */
  
  queryAPConfigSetting({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.APConfigSettingSuccessResponseModel>> {
    var path = this.buildUrl({
      url: `/api/v2/apconfigsetting`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.APConfigSettingSuccessResponseModel>);
  }

  /**
   * Update a AP config setting
   * 
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this AP config setting object
     * @param {Models.APConfigSettingRequestModel} model The AP config setting object you wish to update.
   * @return {Models.APConfigSettingSuccessResponseModel}
   */
  
  updateAPConfigSetting({ companyid, model }: { companyid: number, model?: Models.APConfigSettingRequestModel }): Promise<Models.APConfigSettingSuccessResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/apconfigsetting`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.APConfigSettingSuccessResponseModel);
  }

  /**
   * Create a new AvaFileForm
   * Create one or more AvaFileForms
     * A 'AvaFileForm' represents a form supported by our returns team
     * 
     * ### Security Policies
     * 
     * * This API requires the user role Compliance Root User.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.AvaFileFormModel[]} model The AvaFileForm you wish to create.
   * @return {Models.AvaFileFormModel[]}
   */
  
  createAvaFileForms({ model }: { model: Models.AvaFileFormModel[] }): Promise<Array<Models.AvaFileFormModel>> {
    var path = this.buildUrl({
      url: `/api/v2/avafileforms`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.AvaFileFormModel>);
  }

  /**
   * Delete a single AvaFileForm
   * Marks the existing AvaFileForm object at this URL as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: Compliance Root User, ComplianceUser, FirmAdmin.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the AvaFileForm you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteAvaFileForm({ id }: { id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/avafileforms/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single AvaFileForm
   * Get the AvaFileForm object identified by this URL.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, Compliance Temp User, ComplianceAdmin, ComplianceUser, FirmAdmin, FirmUser, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The primary key of this AvaFileForm
   * @return {Models.AvaFileFormModel}
   */
  
  getAvaFileForm({ id }: { id: number }): Promise<Models.AvaFileFormModel> {
    var path = this.buildUrl({
      url: `/api/v2/avafileforms/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.AvaFileFormModel);
  }

  /**
   * Retrieve all AvaFileForms
   * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, Compliance Temp User, ComplianceAdmin, ComplianceUser, FirmAdmin, FirmUser, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* outletTypeId
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.AvaFileFormModel>}
   */
  
  queryAvaFileForms({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.AvaFileFormModel>> {
    var path = this.buildUrl({
      url: `/api/v2/avafileforms`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.AvaFileFormModel>);
  }

  /**
   * Update a AvaFileForm
   * All data from the existing object will be replaced with data in the object you PUT.
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     * 
     * ### Security Policies
     * 
     * * This API requires the user role Compliance Root User.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the AvaFileForm you wish to update
     * @param {Models.AvaFileFormModel} model The AvaFileForm model you wish to update.
   * @return {Models.AvaFileFormModel}
   */
  
  updateAvaFileForm({ id, model }: { id: number, model: Models.AvaFileFormModel }): Promise<Models.AvaFileFormModel> {
    var path = this.buildUrl({
      url: `/api/v2/avafileforms/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.AvaFileFormModel);
  }

  /**
   * Cancel an in progress batch
   * Marks the in progress batch identified by this URL as cancelled.
     *  
     * Only JSON batches can be cancelled. If you attempt to cancel a file batch, you will receive an error message.
     *  
     * Only in progress batches can be cancelled. If you attempt to cancel a batch that its status is not Waiting or Processing, you will receive an error message.
     * Cancelling an in progress batch does not delete any transactions that were created before the cancellation.
     *  
     * Because the batch system processes with a degree of concurrency, and
     * because of batch sizes in the queue vary, AvaTax API is unable to accurately
     * predict when a batch will complete. If high performance processing is
     * required, please use the
     * [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this batch.
     * @param {number} id The ID of the batch to cancel.
   * @return {Models.BatchModel}
   */
  
  cancelBatch({ companyId, id }: { companyId: number, id: number }): Promise<Models.BatchModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches/${id}/cancel`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.BatchModel);
  }

  /**
   * Create a new batch
   * Create one or more new batch objects attached to this company.
     *  
     * Each batch object may have one or more file objects (currently only one file is supported).
     *  
     * When a batch is created, it is added to the AvaTax Batch Queue and will be
     * processed as quickly as possible in the order it was received. To check the
     * status of a batch, fetch the batch and retrieve the results of the batch
     * operation.
     *  
     * Because the batch system processes with a degree of concurrency, and
     * because of batch sizes in the queue vary, AvaTax API is unable to accurately
     * predict when a batch will complete. If high performance processing is
     * required, please use the
     * [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).
     *  
     * The maximum content length of the request body is limited to 28.6 MB. If this limit
     * is exceeded, a 404 Not Found status will be returned (possibly with a CORS error if
     * the API is called from a browser). In this situation, please split the request into
     * smaller batches.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this batch.
     * @param {Models.BatchModel[]} model The batch you wish to create.
   * @return {Models.BatchModel[]}
   */
  
  createBatches({ companyId, model }: { companyId: number, model: Models.BatchModel[] }): Promise<Array<Models.BatchModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.BatchModel>);
  }

  /**
   * Create a new transaction batch
   * Create a new transaction batch objects attached to this company.
     *  
     * When a transaction batch is created, it is added to the AvaTax Batch v2 Queue and will be
     * processed as quickly as possible in the order it was received. To check the
     * status of a batch, fetch the batch and retrieve the results of the batch
     * operation.
     *  
     * Because the batch system processes with a degree of concurrency, and
     * because of batch sizes in the queue vary, AvaTax API is unable to accurately
     * predict when a batch will complete. If high performance processing is
     * required, please use the
     * [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).
     *  
     * The maximum content length of the request body is limited to 28.6 MB. If this limit
     * is exceeded, a 404 Not Found status will be returned (possibly with a CORS error if
     * the API is called from a browser). In this situation, please split the request into
     * smaller batches.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this batch.
     * @param {Models.CreateTransactionBatchRequestModel} model The transaction batch you wish to create.
   * @return {Models.CreateTransactionBatchResponseModel}
   */
  
  createTransactionBatch({ companyId, model }: { companyId: number, model: Models.CreateTransactionBatchRequestModel }): Promise<Models.CreateTransactionBatchResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches/transactions`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.CreateTransactionBatchResponseModel);
  }

  /**
   * Delete a single batch
   * Marks the batch identified by this URL as deleted.
     *  
     * If you attempt to delete a batch that is being processed, you will receive an error message.
     * Deleting a batch does not delete any transactions that were created by importing the batch.
     *  
     * Because the batch system processes with a degree of concurrency, and
     * because of batch sizes in the queue vary, AvaTax API is unable to accurately
     * predict when a batch will complete. If high performance processing is
     * required, please use the
     * [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, CSPAdmin, CSPTester, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this batch.
     * @param {number} id The ID of the batch to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteBatch({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Download a single batch file
   * Download a single batch file identified by this URL.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this batch
     * @param {number} batchId The ID of the batch object
     * @param {number} id The primary key of this batch file object
   * @return {object}
   */
  
  downloadBatch({ companyId, batchId, id }: { companyId: number, batchId: number, id: number }): Promise<Object> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches/${batchId}/files/${id}/attachment`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Object);
  }

  /**
   * Retrieve a single batch
   * Get the batch object identified by this URL. A batch object is a large
     * collection of API calls stored in a compact file.
     *  
     * Use this endpoint to retrieve the results or check the status of a batch.
     *  
     * When a batch is created, it is added to the AvaTax Batch Queue and will be
     * processed as quickly as possible in the order it was received. To check the
     * status of a batch, fetch the batch and retrieve the results of the batch
     * operation.
     *  
     * Because the batch system processes with a degree of concurrency, and
     * because of batch sizes in the queue vary, AvaTax API is unable to accurately
     * predict when a batch will complete. If high performance processing is
     * required, please use the
     * [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this batch
     * @param {number} id The primary key of this batch
   * @return {Models.BatchModel}
   */
  
  getBatch({ companyId, id }: { companyId: number, id: number }): Promise<Models.BatchModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/batches/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.BatchModel);
  }

  /**
   * Retrieve all batches for this company
   * List all batch objects attached to the specified company.
     *  
     * A batch object is a large collection of API calls stored in a compact file.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter;
     * full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate results using the `$top`, `$skip`, and `$orderby` parameters.
     *  
     * Use [GetBatch](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Batches/GetBatch/)
     * to retrieve the results, or check the status, of an individual batch.
     *  
     * When a batch is created, it is added to the AvaTax Batch Queue and will be
     * processed as quickly as possible in the order it was received. To check the
     * status of a batch, fetch the batch and retrieve the results of the batch
     * operation.
     *  
     * Because the batch system processes with a degree of concurrency, and
     * because of batch sizes in the queue vary, AvaTax API is unable to accurately
     * predict when a batch will complete. If high performance processing is
     * required, please use the
     * [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these batches
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* files
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.BatchModel>}
   */
  
  listBatchesByCompany({ companyId, filter, include, top, skip, orderBy }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.BatchModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.BatchModel>);
  }

  /**
   * Retrieve all batches
   * Get multiple batch objects across all companies.
     *  
     * A batch object is a large collection of API calls stored in a compact file.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter;
     * full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate results using the `$top`, `$skip`, and `$orderby` parameters.
     *  
     * When a batch is created, it is added to the AvaTax Batch Queue and will be
     * processed as quickly as possible in the order it was received. To check the
     * status of a batch, fetch the batch and retrieve the results of the batch
     * operation.
     *  
     * Because the batch system processes with a degree of concurrency, and
     * because of batch sizes in the queue vary, AvaTax API is unable to accurately
     * predict when a batch will complete. If high performance processing is
     * required, please use the
     * [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* files
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.BatchModel>}
   */
  
  queryBatches({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.BatchModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.BatchModel>);
  }

  /**
   * Create a CertExpress invitation
   * Creates an invitation for a customer to self-report certificates using the CertExpress website.
     *  
     * This invitation is delivered by your choice of method, or you can present a hyperlink to the user
     * directly in your connector. Your customer will be redirected to https://app.certexpress.com/ where
     * they can follow a step-by-step guide to enter information about their exemption certificates. The
     * certificates entered will be recorded and automatically linked to their customer record.
     *  
     * The [CertExpress website](https://app.certexpress.com/home) is available for customers to use at any time.
     * Using CertExpress with this API will ensure that your certificates are automatically linked correctly into
     * your company so that they can be used for tax exemptions.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that will record certificates
     * @param {string} customerCode The number of the customer where the request is sent to
     * @param {Models.CreateCertExpressInvitationModel[]} model the requests to send out to customers
   * @return {Models.CertExpressInvitationStatusModel[]}
   */
  
  createCertExpressInvitation({ companyId, customerCode, model }: { companyId: number, customerCode: string, model: Models.CreateCertExpressInvitationModel[] }): Promise<Array<Models.CertExpressInvitationStatusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/certexpressinvites`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.CertExpressInvitationStatusModel>);
  }

  /**
   * Retrieve a single CertExpress invitation
   * Retrieve an existing CertExpress invitation sent to a customer.
     *  
     * A CertExpression invitation allows a customer to follow a helpful step-by-step guide to provide information
     * about their certificates. This step by step guide allows the customer to complete and upload the full
     * certificate in a convenient, friendly web browser experience. When the customer completes their certificates,
     * they will automatically be recorded to your company and linked to the customer record.
     *  
     * The [CertExpress website](https://app.certexpress.com/home) is available for customers to use at any time.
     * Using CertExpress with this API will ensure that your certificates are automatically linked correctly into
     * your company so that they can be used for tax exemptions.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that issued this invitation
     * @param {string} customerCode The number of the customer where the request is sent to
     * @param {number} id The unique ID number of this CertExpress invitation
     * @param {string} include OPTIONAL: A comma separated list of special fetch options. No options are defined at this time.
   * @return {Models.CertExpressInvitationModel}
   */
  
  getCertExpressInvitation({ companyId, customerCode, id, include }: { companyId: number, customerCode: string, id: number, include?: string }): Promise<Models.CertExpressInvitationModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/certexpressinvites/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.CertExpressInvitationModel);
  }

  /**
   * List CertExpress invitations
   * Retrieve CertExpress invitations sent by this company.
     *  
     * A CertExpression invitation allows a customer to follow a helpful step-by-step guide to provide information
     * about their certificates. This step by step guide allows the customer to complete and upload the full
     * certificate in a convenient, friendly web browser experience. When the customer completes their certificates,
     * they will automatically be recorded to your company and linked to the customer record.
     *  
     * The [CertExpress website](https://app.certexpress.com/home) is available for customers to use at any time.
     * Using CertExpress with this API will ensure that your certificates are automatically linked correctly into
     * your company so that they can be used for tax exemptions.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that issued this invitation
     * @param {string} include OPTIONAL: A comma separated list of special fetch options.      No options are defined at this time.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* companyId, customer, coverLetter, exposureZones, exemptReasons, requestLink
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CertExpressInvitationModel>}
   */
  
  listCertExpressInvitations({ companyId, include, filter, top, skip, orderBy }: { companyId: number, include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CertExpressInvitationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certexpressinvites`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CertExpressInvitationModel>);
  }

  /**
   * Create certificates for this company
   * Record one or more certificates document for this company.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * When you create a certificate, it will be processed by Avalara and will become available for use in
     * calculating tax exemptions when processing is complete. For a certificate to be used in calculating exemptions,
     * it must have the following:
     *  
     * * An exposure zone indicating where the certificate is valid
     * * A link to the customer that is allowed to use this certificate
     * * Your tax transaction must contain the correct customer code
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     *  
     * If the users specified in the certificates do not exist, the API will create the user and link them to the certificate
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID number of the company recording this certificate
     * @param {boolean} preValidatedExemptionReason If set to true, the certificate will bypass the human verification process.
     * @param {Models.CertificateModel[]} model Certificates to be created
   * @return {Models.CertificateModel[]}
   */
  
  createCertificates({ companyId, preValidatedExemptionReason, model }: { companyId: number, preValidatedExemptionReason?: boolean, model: Models.CertificateModel[] }): Promise<Array<Models.CertificateModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates`,
      parameters: {
        $preValidatedExemptionReason: preValidatedExemptionReason
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.CertificateModel>);
  }

  /**
   * Revoke and delete a certificate
   * Revoke the certificate identified by this URL, then delete it.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Revoked certificates can no longer be used.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
   * @return {Models.ErrorDetail[]}
   */
  
  deleteCertificate({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Download an image for this certificate
   * Download an image or PDF file for this certificate.
     *  
     * This API can be used to download either a single-page preview of the certificate or a full PDF document.
     * To retrieve a preview image, set the `$type` parameter to `Jpeg` and the `$page` parameter to `1`.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {number} page If you choose `$type`=`Jpeg`, you must specify which page number to retrieve.
     * @param {Enums.CertificatePreviewType} type The data format in which to retrieve the certificate image (See CertificatePreviewType::* for a list of allowable values)
   * @return {object}
   */
  
  downloadCertificateImage({ companyId, id, page, type }: { companyId: number, id: number, page?: number, type?: Enums.CertificatePreviewType }): Promise<Object> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}/attachment`,
      parameters: {
        $page: page,
        $type: type
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Object);
  }

  /**
   * Retrieve a single certificate
   * Get the current certificate identified by this URL.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * You can use the `$include` parameter to fetch the following additional objects for expansion:
     *  
     * * customers - Retrieves the list of customers linked to the certificate.
     * * po_numbers - Retrieves all PO numbers tied to the certificate.
     * * attributes - Retrieves all attributes applied to the certificate.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {string} include OPTIONAL: A comma separated list of special fetch options. You can specify one or more of the following:      * customers - Retrieves the list of customers linked to the certificate.   * po_numbers - Retrieves all PO numbers tied to the certificate.   * attributes - Retrieves all attributes applied to the certificate.
   * @return {Models.CertificateModel}
   */
  
  getCertificate({ companyId, id, include }: { companyId: number, id: number, include?: string }): Promise<Models.CertificateModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.CertificateModel);
  }

  /**
   * Check a company's exemption certificate status.
   * Checks whether this company is configured to use exemption certificates in AvaTax.
     *  
     * Exemption certificates are tracked through a different auditable data store than the one that
     * holds AvaTax transactions. To use the AvaTax exemption certificate document store, please call
     * `GetCertificateSetup` to see if your company is configured to use the exemption certificate
     * document store. To request setup, please call `RequestCertificateSetup` and your company will
     * be configured with data storage in the auditable certificate system.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company ID to check
   * @return {Models.ProvisionStatusModel}
   */
  
  getCertificateSetup({ companyId }: { companyId: number }): Promise<Models.ProvisionStatusModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/setup`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.ProvisionStatusModel);
  }

  /**
   * Link attributes to a certificate
   * Link one or many attributes to a certificate.
     *  
     * A certificate may have multiple attributes that control its behavior. You may link or unlink attributes to a
     * certificate at any time. The full list of defined attributes may be found using `ListCertificateAttributes`.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {Models.CertificateAttributeModel[]} model The list of attributes to link to this certificate.
   * @return {FetchResult<Models.CertificateAttributeModel>}
   */
  
  linkAttributesToCertificate({ companyId, id, model }: { companyId: number, id: number, model: Models.CertificateAttributeModel[] }): Promise<FetchResult<Models.CertificateAttributeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}/attributes/link`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, FetchResult<Models.CertificateAttributeModel>);
  }

  /**
   * Link customers to a certificate
   * Link one or more customers to an existing certificate.
     *  
     * Customers and certificates must be linked before a customer can make use of a certificate to obtain
     * a tax exemption in AvaTax. Since some certificates may cover more than one business entity, a certificate
     * can be connected to multiple customer records using the `LinkCustomersToCertificate` API.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {Models.LinkCustomersModel} model The list of customers needed be added to the Certificate for exemption
   * @return {FetchResult<Models.CustomerModel>}
   */
  
  linkCustomersToCertificate({ companyId, id, model }: { companyId: number, id: number, model: Models.LinkCustomersModel }): Promise<FetchResult<Models.CustomerModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}/customers/link`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, FetchResult<Models.CustomerModel>);
  }

  /**
   * List all attributes applied to this certificate
   * Retrieve the list of attributes that are linked to this certificate.
     *  
     * A certificate may have multiple attributes that control its behavior. You may link or unlink attributes to a
     * certificate at any time. The full list of defined attributes may be found using [ListCertificateAttributes](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListCertificateAttributes/) API.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
   * @return {FetchResult<Models.CertificateAttributeModel>}
   */
  
  listAttributesForCertificate({ companyId, id }: { companyId: number, id: number }): Promise<FetchResult<Models.CertificateAttributeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}/attributes`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CertificateAttributeModel>);
  }

  /**
   * List customers linked to this certificate
   * List all customers linked to this certificate.
     *  
     * Customers must be linked to a certificate in order to make use of its tax exemption features. You
     * can link or unlink customers to a certificate at any time.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {string} include OPTIONAL: A comma separated list of special fetch options.   No options are currently available when fetching customers.
   * @return {FetchResult<Models.CustomerModel>}
   */
  
  listCustomersForCertificate({ companyId, id, include }: { companyId: number, id: number, include?: string }): Promise<FetchResult<Models.CustomerModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}/customers`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CustomerModel>);
  }

  /**
   * List all certificates for a company
   * List all certificates recorded by a company
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * You can use the `$include` parameter to fetch the following additional objects for expansion:
     *  
     * * customers - Retrieves the list of customers linked to the certificate.
     * * po_numbers - Retrieves all PO numbers tied to the certificate.
     * * attributes - Retrieves all attributes applied to the certificate.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID number of the company to search
     * @param {string} include OPTIONAL: A comma separated list of special fetch options. You can specify one or more of the following:      * customers - Retrieves the list of customers linked to the certificate.   * po_numbers - Retrieves all PO numbers tied to the certificate.   * attributes - Retrieves all attributes applied to the certificate.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* exemptionNumber, status, ecmStatus, ecmsId, ecmsStatus, pdf, pages
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CertificateModel>}
   */
  
  queryCertificates({ companyId, include, filter, top, skip, orderBy }: { companyId: number, include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CertificateModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CertificateModel>);
  }

  /**
   * Request setup of exemption certificates for this company.
   * Requests the setup of exemption certificates for this company.
     *  
     * Exemption certificates are tracked through a different auditable data store than the one that
     * holds AvaTax transactions. To use the AvaTax exemption certificate document store, please call
     * `GetCertificateSetup` to see if your company is configured to use the exemption certificate
     * document store. To request setup, please call `RequestCertificateSetup` and your company will
     * be configured with data storage in the auditable certificate system.
     *  
     * This API will return the current status of exemption certificate setup for this company.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId 
   * @return {Models.ProvisionStatusModel}
   */
  
  requestCertificateSetup({ companyId }: { companyId: number }): Promise<Models.ProvisionStatusModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/setup`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.ProvisionStatusModel);
  }

  /**
   * Unlink attributes from a certificate
   * Unlink one or many attributes from a certificate.
     *  
     * A certificate may have multiple attributes that control its behavior. You may link or unlink attributes to a
     * certificate at any time. The full list of defined attributes may be found using `ListCertificateAttributes`.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {Models.CertificateAttributeModel[]} model The list of attributes to unlink from this certificate.
   * @return {FetchResult<Models.CertificateAttributeModel>}
   */
  
  unlinkAttributesFromCertificate({ companyId, id, model }: { companyId: number, id: number, model: Models.CertificateAttributeModel[] }): Promise<FetchResult<Models.CertificateAttributeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}/attributes/unlink`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, FetchResult<Models.CertificateAttributeModel>);
  }

  /**
   * Unlink customers from a certificate
   * Unlinks one or more customers from a certificate.
     *  
     * Unlinking a certificate from a customer will prevent the certificate from being used to generate
     * tax exemptions for the customer in the future. If any previous transactions for this customer had
     * used this linked certificate, those transactions will be unchanged and will still have a link to the
     * exemption certificate in question.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {Models.LinkCustomersModel} model The list of customers to unlink from this certificate
   * @return {FetchResult<Models.CustomerModel>}
   */
  
  unlinkCustomersFromCertificate({ companyId, id, model }: { companyId: number, id: number, model: Models.LinkCustomersModel }): Promise<FetchResult<Models.CustomerModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}/customers/unlink`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, FetchResult<Models.CustomerModel>);
  }

  /**
   * Update a single certificate
   * Replace the certificate identified by this URL with a new one.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {Models.CertificateModel} model The new certificate object that will replace the existing one
   * @return {Models.CertificateModel}
   */
  
  updateCertificate({ companyId, id, model }: { companyId: number, id: number, model: Models.CertificateModel }): Promise<Models.CertificateModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.CertificateModel);
  }

  /**
   * Upload an image or PDF attachment for this certificate
   * Upload an image or PDF attachment for this certificate.
     *  
     * Image attachments can be of the format `PDF`, `JPEG`, `TIFF`, or `PNG`. To upload a multi-page image, please
     * use the `PDF` data type.
     *  
     * A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
     * can contain information about a customer's eligibility for exemption from sales or use taxes based on
     * criteria you specify when you store the certificate. To view or manage your certificates directly, please
     * log onto the administrative website for the product you purchased.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this certificate
     * @param {number} id The unique ID number of this certificate
     * @param {ReadStream} file The exemption certificate file you wanted to upload. Accepted formats are: PDF, JPEG, TIFF, PNG.
   * @return {string}
   */
  
  uploadCertificateImage({ companyId, id, file }: { companyId: number, id: number, file: ReadStream }): Promise<String> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/certificates/${id}/attachment`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: file, clientId: strClientId, isMultiPart: true }, String);
  }

  /**
   * Checks whether the integration being used to set up this company and run transactions onto this company is compliant to all requirements.
   * Examines the most recent 100 transactions or data from the last month when verifying transaction-related integrations.
     * For partners who write integrations against AvaTax for many clients, this API is a way to do a quick self testing to verify whether the
     * written integrations for a company are sufficient enough to be delivered to the respective customers to start using it.
     *  
     * This API provides messages specific enough (through predefined checks) to guide the partner on what integrations are still missing from the company to get fully certified.
     * The API makes the following checks to conclude if the company is NOT fully certified:
     * 1. Any past month items contains generic tax code of P0000000.
     * 2. All the companies on the requesting account are test companies.
     * 3. No Voided/Cancelled documents in the past 30 days.
     * 4. There are less than 2 committed documents.
     * 5. Any documentCode is a generic GUID string.
     * 6. Any customerCode on document is a generic GUID string.
     * 7. No document has more than 1 documentLine.
     * 8. All of the documents have missing exemptionNo, customerUsageType, taxDateOverride or negative amount.
     * 9. Any document quantity is a negative number.
     * 10. Any document have repeated lines.
     * 11. No document has shipping charge.
     * 12. All documents have same ItemCodes, descriptions and taxCodes.
     * 13. Less than 2 addresses used across all documents.
     * 14. Whether locationCode was used in documents.
     * 15. Account with AvaGlobal subscription and no documents have VATBuyerId.
     * 16. Any document has currencyCode not being USD for accounts with AvaGlobal subscription.
     * 17. All documents have countryCode used for accounts with AvaGlobal subscription.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the company to check if its integration is certified.
   * @return {string}
   */
  
  certifyIntegration({ id }: { id: number }): Promise<String> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/certify`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, String);
  }

  /**
   * Change the filing status of this company
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
     * @param {Models.FilingStatusChangeModel} model 
   * @return {string}
   */
  
  changeFilingStatus({ id, model }: { id: number, model: Models.FilingStatusChangeModel }): Promise<String> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/filingstatus`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, String);
  }

  /**
   * Quick setup for a company with a single physical address
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
     * Please allow 1 minute before making transactions using the company.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.CompanyInitializationModel} model Information about the company you wish to create.
   * @return {Models.CompanyModel}
   */
  
  companyInitialize({ model }: { model: Models.CompanyInitializationModel }): Promise<Models.CompanyModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/initialize`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.CompanyModel);
  }

  /**
   * Create new companies
   * Create one or more new company objects.
     * A 'company' represents a single corporation or individual that is registered to handle transactional taxes.
     * You may attach nested data objects such as contacts, locations, and nexus with this CREATE call, and those objects will be created with the company.
     *  
     * NOTE: Please do not use these blacklisted characters in company name and code: ';', '\', '|'.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.CompanyModel[]} model Either a single company object or an array of companies to create
   * @return {Models.CompanyModel[]}
   */
  
  createCompanies({ model }: { model: Models.CompanyModel[] }): Promise<Array<Models.CompanyModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.CompanyModel>);
  }

  /**
   * Add parameters to a company.
   * Add parameters to a company.
     *  
     * Some companies can be taxed and reported differently depending on the properties of the company, such as IsPrimaryAddress. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a company will be used by default in tax calculation but will not show on the transaction line referencing the company.
     *  
     * A company location parameter specified on a transaction line will override a company parameter if they share the same parameter name.
     *  
     * To see available parameters for this company, call `/api/v2/definitions/parameters?$filter=attributeType eq Company`
     *  
     * Some parameters are only available for use if you have subscribed to specific AvaTax services. To see which parameters you are able to use, add the query parameter "$showSubscribed=true" to the parameter definition call above.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this company parameter.
     * @param {Models.CompanyParameterDetailModel[]} model The company parameters you wish to create.
   * @return {Models.CompanyParameterDetailModel[]}
   */
  
  createCompanyParameters({ companyId, model }: { companyId: number, model: Models.CompanyParameterDetailModel[] }): Promise<Array<Models.CompanyParameterDetailModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/parameters`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.CompanyParameterDetailModel>);
  }

  /**
   * Request managed returns funding setup for a company
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
     * ### Security Policies
     * 
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique identifier of the company
     * @param {Enums.POABusinessUnit} businessUnit The company's business unit (See POABusinessUnit::* for a list of allowable values)
     * @param {Enums.POASubscriptionType} subscriptionType The company's subscription type (See POASubscriptionType::* for a list of allowable values)
     * @param {Models.FundingInitiateModel} model The funding initialization request
   * @return {Models.FundingStatusModel}
   */
  
  createFundingRequest({ id, businessUnit, subscriptionType, model }: { id: number, businessUnit?: Enums.POABusinessUnit, subscriptionType?: Enums.POASubscriptionType, model: Models.FundingInitiateModel }): Promise<Models.FundingStatusModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/funding/setup`,
      parameters: {
        businessUnit: businessUnit,
        subscriptionType: subscriptionType
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.FundingStatusModel);
  }

  /**
   * Delete a single company
   * Deleting a company will delete all child companies, and all users attached to this company.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the company you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteCompany({ id }: { id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Delete a single company parameter
   * Delete a parameter of a company.
     * Some companies can be taxed and reported differently depending on the properties of the company, such as IsPrimaryAddress. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a company will be used by default in tax calculation but will not show on the transaction line referencing the company.
     *  
     * A company location parameter specified on a transaction line will override a company parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} id The parameter id
   * @return {Models.ErrorDetail[]}
   */
  
  deleteCompanyParameter({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Check the funding configuration of a company
   * This API is available by invitation only.
     * Requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
     * Returns the funding configuration of the requested company.
     * .
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique identifier of the company
   * @return {Models.FundingConfigurationModel}
   */
  
  fundingConfigurationByCompany({ companyId }: { companyId: number }): Promise<Models.FundingConfigurationModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/funding/configuration`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.FundingConfigurationModel);
  }

  /**
   * Check the funding configuration of a company
   * This API is available by invitation only.
     * Requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
     * Returns the funding configuration of the requested company.
     * .
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique identifier of the company
     * @param {string} currency The currency of the funding. USD and CAD are the only valid currencies
   * @return {Models.FundingConfigurationModel[]}
   */
  
  fundingConfigurationsByCompanyAndCurrency({ companyId, currency }: { companyId: number, currency?: string }): Promise<Array<Models.FundingConfigurationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/funding/configurations`,
      parameters: {
        currency: currency
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.FundingConfigurationModel>);
  }

  /**
   * Retrieve a single company
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
     *  * Parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the company to retrieve.
     * @param {string} include OPTIONAL: A comma separated list of special fetch options.      * Child objects - Specify one or more of the following to retrieve objects related to each company: "Contacts", "FilingCalendars", "Items", "Locations", "Nexus", "TaxCodes", "NonReportingChildren" or "TaxRules".   * Deleted objects - Specify "FetchDeleted" to retrieve information about previously deleted objects.
   * @return {Models.CompanyModel}
   */
  
  getCompany({ id, include }: { id: number, include?: string }): Promise<Models.CompanyModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.CompanyModel);
  }

  /**
   * Get configuration settings for this company
   * Retrieve a list of all configuration settings tied to this company.
     *  
     * Configuration settings provide you with the ability to control features of your account and of your
     * tax software. The category name `AvaCertServiceConfig` is reserved for
     * Avalara internal software configuration values; to store your own company-level settings, please
     * create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
     *  
     * Company settings are permanent settings that cannot be deleted. You can set the value of a
     * company setting to null if desired and if the particular setting supports it.
     *  
     * Avalara-based company settings for `AvaCertServiceConfig` affect your company's exemption certificate
     * processing, and should be changed with care.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {Models.CompanyConfigurationModel[]}
   */
  
  getCompanyConfiguration({ id }: { id: number }): Promise<Array<Models.CompanyConfigurationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/configuration`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.CompanyConfigurationModel>);
  }

  /**
   * Retrieve a single company parameter
   * Retrieves a single parameter of a company.
     *  
     * Some companies can be taxed and reported differently depending on the properties of the company, such as IsPrimaryAddress. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a company will be used by default in tax calculation but will not show on the transaction line referencing the company.
     *  
     * A company location parameter specified on a transaction line will override a company parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId 
     * @param {number} id 
   * @return {Models.CompanyParameterDetailModel}
   */
  
  getCompanyParameterDetail({ companyId, id }: { companyId: number, id: number }): Promise<Models.CompanyParameterDetailModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.CompanyParameterDetailModel);
  }

  /**
   * Get this company's filing status
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
     * * `Inactive` - The company is currently inactive.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {string}
   */
  
  getFilingStatus({ id }: { id: number }): Promise<String> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/filingstatus`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, String);
  }

  /**
   * Get ACH entry detail report for company and period
   * This API is available by invitation only.
     * Requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
     * Returns a list of ACH entry details for the given company and period.
     * Each object in the result is an ach entry trace record for a payment made on behalf of this company.
     * 
     * ### Security Policies
     * 
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique identifier of the company
     * @param {number} periodyear The period year
     * @param {number} periodmonth The period month
   * @return {Models.ACHEntryDetailModel[]}
   */
  
  listACHEntryDetailsForCompany({ id, periodyear, periodmonth }: { id: number, periodyear: number, periodmonth: number }): Promise<Array<Models.ACHEntryDetailModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/paymentdetails/${periodyear}/${periodmonth}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.ACHEntryDetailModel>);
  }

  /**
   * Retrieve parameters for a company
   * Retrieve all parameters of a company.
     *  
     * Some companies can be taxed and reported differently depending on the properties of the company, such as IsPrimaryAddress. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a company will be used by default in tax calculation but will not show on the transaction line referencing the company.
     *  
     * A company location parameter specified on a transaction line will override a company parameter if they share the same parameter name.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* name, unit
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CompanyParameterDetailModel>}
   */
  
  listCompanyParameterDetails({ companyId, filter, top, skip, orderBy }: { companyId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CompanyParameterDetailModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/parameters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CompanyParameterDetailModel>);
  }

  /**
   * Check managed returns funding status for a company
   * This API is available by invitation only.
     * Requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
     * Returns a list of funding setup requests and their current status.
     * Each object in the result is a request that was made to setup or adjust funding status for this company.
     * 
     * ### Security Policies
     * 
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique identifier of the company
   * @return {Models.FundingStatusModel[]}
   */
  
  listFundingRequestsByCompany({ id }: { id: number }): Promise<Array<Models.FundingStatusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/funding`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.FundingStatusModel>);
  }

  /**
   * Retrieve a list of MRS Companies with account
   * This API is available by invitation only.
     *  
     * Get a list of companies with an active MRS service.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
   * @return {FetchResult<Models.MrsCompanyModel>}
   */
  
  listMrsCompanies(): Promise<FetchResult<Models.MrsCompanyModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/mrs`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.MrsCompanyModel>);
  }

  /**
   * Retrieve all companies
   * Get multiple company objects.
     *  
     * A `company` represents a single corporation or individual that is registered to handle transactional taxes.
     *  
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
     * * Parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} include A comma separated list of objects to fetch underneath this company. Any object with a URL path underneath this company can be fetched by specifying its name.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* IsFein, contacts, items, locations, nexus, settings, taxCodes, taxRules, upcs, nonReportingChildCompanies, exemptCerts, parameters, supplierandcustomers
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CompanyModel>}
   */
  
  queryCompanies({ include, filter, top, skip, orderBy }: { include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CompanyModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CompanyModel>);
  }

  /**
   * Change configuration settings for this company
   * Update configuration settings tied to this company.
     *  
     * Configuration settings provide you with the ability to control features of your account and of your
     * tax software. The category names `AvaCertServiceConfig` is reserved for
     * Avalara internal software configuration values; to store your own company-level settings, please
     * create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
     *  
     * Company settings are permanent settings that cannot be deleted. You can set the value of a
     * company setting to null if desired and if the particular setting supports it.
     *  
     * Avalara-based company settings for `AvaCertServiceConfig` affect your company's exemption certificate
     * processing, and should be changed with care.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
     * @param {Models.CompanyConfigurationModel[]} model 
   * @return {Models.CompanyConfigurationModel[]}
   */
  
  setCompanyConfiguration({ id, model }: { id: number, model: Models.CompanyConfigurationModel[] }): Promise<Array<Models.CompanyConfigurationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}/configuration`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.CompanyConfigurationModel>);
  }

  /**
   * Update a single company
   * Replace the existing company object at this URL with an updated object.
     *  
     * A `CompanyModel` represents a single corporation or individual that is registered to handle transactional taxes.
     * All data from the existing object will be replaced with data in the object you PUT.
     *  
     * When calling `UpdateCompany`, you are permitted to update the company itself. Updates to the nested objects
     * such as contacts, locations, or settings are not permitted. To update the nested objects
     *  
     * To set a field's value to `null`, you may either set its value to `null` or omit that field from the object you PUT.
     *  
     * NOTE: Please do not use these blacklisted characters in company name and code: ';', '\', '|'.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the company you wish to update.
     * @param {Models.CompanyModel} model The company object you wish to update.
   * @return {Models.CompanyModel}
   */
  
  updateCompany({ id, model }: { id: number, model?: Models.CompanyModel }): Promise<Models.CompanyModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.CompanyModel);
  }

  /**
   * Update a company parameter
   * Update a parameter of a company.
     *  
     * Some companies can be taxed and reported differently depending on the properties of the company, such as IsPrimaryAddress. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a company will be used by default in tax calculation but will not show on the transaction line referencing the company.
     *  
     * A company location parameter specified on a transaction line will override a company parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} id The company parameter id
     * @param {Models.CompanyParameterDetailModel} model The company parameter object you wish to update.
   * @return {Models.CompanyParameterDetailModel}
   */
  
  updateCompanyParameterDetail({ companyId, id, model }: { companyId: number, id: number, model?: Models.CompanyParameterDetailModel }): Promise<Models.CompanyParameterDetailModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.CompanyParameterDetailModel);
  }

  /**
   * Retrieve all unique jurisnames based on filter.
   * ### Security Policies
     * 
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The two-character ISO-3166 code for the country.
     * @param {string} region The two or three character region code for the region.
     * @param {Date} effectiveDate Used to limit the jurisnames returned.
     * @param {Date} endDate Used to limit the jurisnames returned.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.JurisNameModel>}
   */
  
  queryJurisNames({ country, region, effectiveDate, endDate, filter, top, skip, orderBy }: { country: string, region: string, effectiveDate?: Date, endDate?: Date, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.JurisNameModel>> {
    var path = this.buildUrl({
      url: `/api/v2/compliance/jurisnames/${country}/${region}`,
      parameters: {
        effectiveDate: effectiveDate,
        endDate: endDate,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.JurisNameModel>);
  }

  /**
   * Retrieve all RateOptions.
   * This API is available by invitation only.
     * 
     * ### Security Policies
     * 
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The two-character ISO-3166 code for the country.
     * @param {string} region The two or three character region code for the region.
     * @param {Date} effectiveDate Used to limit the jurisdictions or rates returned.
     * @param {Date} endDate Used to limit the jurisdictions or rates returned.
     * @param {Enums.StackAggregationOption} aggregationOption Aggregation method used. (See StackAggregationOption::* for a list of allowable values)
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxRegionId, taxTypeCodeName, taxSubTypeCode, taxSubTypeCodeName, rateTypeCodeName, componentRate, taxAuthorityId, cityName, countyName, effDate, endDate
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ComplianceRateOptionModel>}
   */
  
  queryRateOptions({ country, region, effectiveDate, endDate, aggregationOption, top, skip, filter, orderBy }: { country: string, region: string, effectiveDate?: Date, endDate?: Date, aggregationOption?: Enums.StackAggregationOption, top?: number, skip?: number, filter?: string, orderBy?: string }): Promise<FetchResult<Models.ComplianceRateOptionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/compliance/rateOptions/${country}/${region}`,
      parameters: {
        effectiveDate: effectiveDate,
        endDate: endDate,
        aggregationOption: aggregationOption,
        $top: top,
        $skip: skip,
        $filter: filter,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ComplianceRateOptionModel>);
  }

  /**
   * Retrieve StateConfig information
   * This API is available by invitation only.
     * 
     * ### Security Policies
     * 
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* effDate, endDate, hasBoundary, hasRates, isLocalAdmin, isLocalNexus, isSerState, minBoundaryLevelId, sstStatusId, state, stateFips, boundaryTableBaseName, stjCount, tsStateId, isJaasEnabled, hasSSTBoundary
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ComplianceStateConfigModel>}
   */
  
  queryStateConfig({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ComplianceStateConfigModel>> {
    var path = this.buildUrl({
      url: `/api/v2/compliance/stateconfig`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ComplianceStateConfigModel>);
  }

  /**
   * Retrieve all State Reporting Codes based on filter.
   * ### Security Policies
     * 
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The two-character ISO-3166 code for the country.
     * @param {string} region The two or three character region code for the region.
     * @param {Date} effectiveDate Used to limit the StateReportingCodes or rates returned.
     * @param {Date} endDate Used to limit the StateReportingCodes or rates returned.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* label
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ReportCodeOptionModel>}
   */
  
  queryStateReportingCodes({ country, region, effectiveDate, endDate, filter, top, skip, orderBy }: { country: string, region: string, effectiveDate?: Date, endDate?: Date, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ReportCodeOptionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/compliance/stateReportingCodes/${country}/${region}`,
      parameters: {
        effectiveDate: effectiveDate,
        endDate: endDate,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ReportCodeOptionModel>);
  }

  /**
   * Retrieve all tax type mappings based on filter.
   * ### Security Policies
     * 
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxTypeGroupIdSK, taxTypeIdSK, taxSubTypeIdSK, generalOrStandardRateTypeIdSK, taxTypeGroupId, taxTypeId, country, generalOrStandardRateTypeId
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxTypeMappingModel>}
   */
  
  queryTaxTypeMappings({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxTypeMappingModel>> {
    var path = this.buildUrl({
      url: `/api/v2/compliance/taxtypemappings`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxTypeMappingModel>);
  }

  /**
   * Create a new contact
   * Create one or more new contact objects.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this contact.
     * @param {Models.ContactModel[]} model The contacts you wish to create.
   * @return {Models.ContactModel[]}
   */
  
  createContacts({ companyId, model }: { companyId: number, model: Models.ContactModel[] }): Promise<Array<Models.ContactModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.ContactModel>);
  }

  /**
   * Delete a single contact
   * Mark the existing contact object at this URL as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this contact.
     * @param {number} id The ID of the contact you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteContact({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single contact
   * Get the contact object identified by this URL.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company for this contact
     * @param {number} id The primary key of this contact
   * @return {Models.ContactModel}
   */
  
  getContact({ companyId, id }: { companyId: number, id: number }): Promise<Models.ContactModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.ContactModel);
  }

  /**
   * Retrieve contacts for this company
   * List all contact objects assigned to this company.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these contacts
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ContactModel>}
   */
  
  listContactsByCompany({ companyId, filter, top, skip, orderBy }: { companyId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ContactModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ContactModel>);
  }

  /**
   * Retrieve all contacts
   * Get multiple contact objects across all companies.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ContactModel>}
   */
  
  queryContacts({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ContactModel>> {
    var path = this.buildUrl({
      url: `/api/v2/contacts`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ContactModel>);
  }

  /**
   * Update a single contact
   * Replace the existing contact object at this URL with an updated object.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
     * All data from the existing object will be replaced with data in the object you PUT.
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that this contact belongs to.
     * @param {number} id The ID of the contact you wish to update
     * @param {Models.ContactModel} model The contact you wish to update.
   * @return {Models.ContactModel}
   */
  
  updateContact({ companyId, id, model }: { companyId: number, id: number, model: Models.ContactModel }): Promise<Models.ContactModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/contacts/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.ContactModel);
  }

  /**
   * Bulk upload cost centers
   * Allows bulk upload of cost centers for the specified company. Use the companyId path parameter to identify the company for which the cost centers should be uploaded.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this cost center object
     * @param {Models.CostCenterBulkUploadInputModel} model The cost center bulk upload model.
   * @return {Models.CostCenterBulkUploadOutputModel}
   */
  
  bulkUploadCostCenters({ companyid, model }: { companyid: number, model?: Models.CostCenterBulkUploadInputModel }): Promise<Models.CostCenterBulkUploadOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/costcenters/$upload`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.CostCenterBulkUploadOutputModel);
  }

  /**
   * Create new cost center
   * Creates one or more new item objects attached to this company.
     * 
     * Costcenter is defined as function or department within a company which is not directly going to generate revenues and profits to the company but is still incurring expenses to the company for its operations.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this cost center object
     * @param {Models.CostCenterRequestModel} model The cost center you wish to create.
   * @return {Models.CostCenterSuccessResponseModel}
   */
  
  createCostCenter({ companyid, model }: { companyid: number, model?: Models.CostCenterRequestModel }): Promise<Models.CostCenterSuccessResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/costcenters`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.CostCenterSuccessResponseModel);
  }

  /**
   * Delete cost center for the given id
   * Deletes a cost center with the specified costcenterId that belongs to the company.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this cost center object
     * @param {number} costcenterid The primary key of this cost center
   * @return {Models.TaxProfileErrorResponseModel}
   */
  
  deleteCostCenter({ companyid, costcenterid }: { companyid: number, costcenterid: number }): Promise<Models.TaxProfileErrorResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/costcenters/${costcenterid}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Models.TaxProfileErrorResponseModel);
  }

  /**
   * Retrieve a single cost center
   * Retrieves details of a single cost center identified by costcenterId, which is owned by the company.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this cost center object
     * @param {number} costcenterid The primary key of this cost center
   * @return {Models.CostCenterSuccessResponseModel}
   */
  
  getCostCenterById({ companyid, costcenterid }: { companyid: number, costcenterid: number }): Promise<Models.CostCenterSuccessResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/costcenters/${costcenterid}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.CostCenterSuccessResponseModel);
  }

  /**
   * Retrieve cost centers for this company
   * Retrieves a list of cost centers attached to this company. You can apply filters to retrieve specific records.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that defined these cost centers
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* companyId, meta, defaultItem
     * @param {string} include A comma separated list of objects to fetch underneath this company. Any object with a URL path underneath this company can be fetched by specifying its name.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CostCenterSuccessResponseModel>}
   */
  
  listCostCentersByCompany({ companyid, filter, include, top, skip, orderBy }: { companyid: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CostCenterSuccessResponseModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/costcenters`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CostCenterSuccessResponseModel>);
  }

  /**
   * Retrieve all cost centers
   * Retrieves all cost centers available. You can apply filters to retrieve specific records.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* companyId, meta, defaultItem
     * @param {string} include A comma separated list of objects to fetch underneath this company. Any object with a URL path underneath this company can be fetched by specifying its name.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CostCenterSuccessResponseModel>}
   */
  
  queryCostCenters({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CostCenterSuccessResponseModel>> {
    var path = this.buildUrl({
      url: `/api/v2/costcenters`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CostCenterSuccessResponseModel>);
  }

  /**
   * Update a single cost center
   * Updates a single cost center owned by the company. Use the costcenterId path parameter to identify the cost center to update.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this cost center object
     * @param {number} costcenterid The primary key of this cost center
     * @param {Models.CostCenterRequestModel} model The cost center object you wish to update.
   * @return {Models.CostCenterSuccessResponseModel}
   */
  
  updateCostCenter({ companyid, costcenterid, model }: { companyid: number, costcenterid: number, model?: Models.CostCenterRequestModel }): Promise<Models.CostCenterSuccessResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/costcenters/${costcenterid}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.CostCenterSuccessResponseModel);
  }

  /**
   * Create customers for this company
   * Create one or more customers for this company.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * A nested object such as CustomFields could be specified and created along with the customer object. To fetch the
     * nested object, please call 'GetCustomer' API with appropriate $include parameters.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {Models.CustomerModel[]} model The list of customer objects to be created
   * @return {Models.CustomerModel[]}
   */
  
  createCustomers({ companyId, model }: { companyId: number, model: Models.CustomerModel[] }): Promise<Array<Models.CustomerModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.CustomerModel>);
  }

  /**
   * Delete a customer record
   * Deletes the customer object referenced by this URL.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {string} customerCode The unique code representing this customer
   * @return {}
   */
  
  deleteCustomer({ companyId, customerCode }: { companyId: number, customerCode: string }): Promise<null> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, null);
  }

  /**
   * Retrieve a single customer
   * Retrieve the customer identified by this URL.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this customer object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * You can use the `$include` parameter to fetch the following additional objects for expansion:
     *  
     * * Certificates - Fetch a list of certificates linked to this customer.
     * * CustomFields - Fetch a list of custom fields associated to this customer.
     * * attributes - Retrieves all attributes applied to the customer.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {string} customerCode The unique code representing this customer
     * @param {string} include Specify optional additional objects to include in this fetch request
   * @return {Models.CustomerModel}
   */
  
  getCustomer({ companyId, customerCode, include }: { companyId: number, customerCode: string, include?: string }): Promise<Models.CustomerModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.CustomerModel);
  }

  /**
   * Link attributes to a customer
   * Link one or many attributes to a customer.
     *  
     * A customer may have multiple attributes that control its behavior. You may link or unlink attributes to a
     * customer at any time. The full list of defined attributes may be found using `QueryCompanyCustomerAttributes` API.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this customer object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded the provided customer
     * @param {string} customerCode The unique code representing the current customer
     * @param {Models.CustomerAttributeModel[]} model The list of attributes to link to the customer.
   * @return {FetchResult<Models.CustomerAttributeModel>}
   */
  
  linkAttributesToCustomer({ companyId, customerCode, model }: { companyId: number, customerCode: string, model: Models.CustomerAttributeModel[] }): Promise<FetchResult<Models.CustomerAttributeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/attributes/link`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, FetchResult<Models.CustomerAttributeModel>);
  }

  /**
   * Link certificates to a customer
   * Link one or more certificates to a customer.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {string} customerCode The unique code representing this customer
     * @param {Models.LinkCertificatesModel} model The list of certificates to link to this customer
   * @return {FetchResult<Models.CertificateModel>}
   */
  
  linkCertificatesToCustomer({ companyId, customerCode, model }: { companyId: number, customerCode: string, model: Models.LinkCertificatesModel }): Promise<FetchResult<Models.CertificateModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/certificates/link`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, FetchResult<Models.CertificateModel>);
  }

  /**
   * Link two customer records together
   * Links a Ship-To customer record with a Bill-To customer record.
     *  
     * Customer records represent businesses or individuals who can provide exemption certificates. Some customers
     * may have certificates that are linked to their shipping address or their billing address. To group these
     * customer records together, you may link multiple bill-to and ship-to addresses together to represent a single
     * entity that has multiple different addresses of different kinds.
     *  
     * In general, a customer will have only one primary billing address and multiple ship-to addresses, representing
     * all of the different locations where they receive goods. To facilitate this type of customer, you can send in
     * one bill-to customer code and multiple ship-to customer codes in a single API call.
     *  
     * Note that you can only link a ship-to customer record to a bill-to customer record. You may not link two customers
     * of the same kind together.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company defining customers.
     * @param {string} code The code of the bill-to customer to link.
     * @param {Models.LinkCustomersModel} model A list of information about ship-to customers to link to this bill-to customer.
   * @return {Models.CustomerModel}
   */
  
  linkShipToCustomersToBillCustomer({ companyId, code, model }: { companyId: number, code: string, model: Models.LinkCustomersModel }): Promise<Models.CustomerModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/billto/${code}/shipto/link`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.CustomerModel);
  }

  /**
   * Retrieve a customer's attributes
   * Retrieve the attributes linked to the customer identified by this URL.
     *  
     * A customer may have multiple attributes that control its behavior. You may link or unlink attributes to a
     * customer at any time. The full list of defined attributes may be found using `QueryCompanyCustomerAttributes` API.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this customer object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded the provided customer
     * @param {string} customerCode The unique code representing the current customer
   * @return {FetchResult<Models.CustomerAttributeModel>}
   */
  
  listAttributesForCustomer({ companyId, customerCode }: { companyId: number, customerCode: string }): Promise<FetchResult<Models.CustomerAttributeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/attributes`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CustomerAttributeModel>);
  }

  /**
   * List certificates linked to a customer
   * List all certificates linked to a customer.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {string} customerCode The unique code representing this customer
     * @param {string} include OPTIONAL: A comma separated list of special fetch options. You can specify one or more of the following:      * customers - Retrieves the list of customers linked to the certificate.   * po_numbers - Retrieves all PO numbers tied to the certificate.   * attributes - Retrieves all attributes applied to the certificate.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* exemptionNumber, status, ecmStatus, ecmsId, ecmsStatus, pdf, pages
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CertificateModel>}
   */
  
  listCertificatesForCustomer({ companyId, customerCode, include, filter, top, skip, orderBy }: { companyId: number, customerCode: string, include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CertificateModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/certificates`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CertificateModel>);
  }

  /**
   * List valid certificates for a location
   * List valid certificates linked to a customer in a particular country and region.
     *  
     * This API is intended to help identify whether a customer has already provided a certificate that
     * applies to a particular country and region. This API is intended to help you remind a customer
     * when they have or have not provided copies of their exemption certificates to you during the sales
     * order process.
     *  
     * If a customer does not have a certificate on file and they wish to provide one, you should send the customer
     * a CertExpress invitation link so that the customer can upload proof of their exemption certificate. Please
     * see the `CreateCertExpressInvitation` API to create an invitation link for this customer.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {string} customerCode The unique code representing this customer
     * @param {string} country Search for certificates matching this country. Uses the ISO 3166 two character country code.
     * @param {string} region Search for certificates matching this region. Uses the ISO 3166 two or three character state, region, or province code.
   * @return {Models.ExemptionStatusModel}
   */
  
  listValidCertificatesForCustomer({ companyId, customerCode, country, region }: { companyId: number, customerCode: string, country: string, region: string }): Promise<Models.ExemptionStatusModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/certificates/${country}/${region}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.ExemptionStatusModel);
  }

  /**
   * List all customers for this company
   * List all customers recorded by this company matching the specified criteria.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * You can use the `$include` parameter to fetch the following additional objects for expansion:
     *  
     * * Certificates - Fetch a list of certificates linked to this customer.
     * * attributes - Retrieves all attributes applied to the customer.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {string} include OPTIONAL - You can specify the value `certificates` to fetch information about certificates linked to the customer.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CustomerModel>}
   */
  
  queryCustomers({ companyId, include, filter, top, skip, orderBy }: { companyId: number, include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CustomerModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers`,
      parameters: {
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CustomerModel>);
  }

  /**
   * Unlink attributes from a customer
   * Unlink one or many attributes from a customer.
     *  
     * A customer may have multiple attributes that control its behavior. You may link or unlink attributes to a
     * customer at any time. The full list of defined attributes may be found using `QueryCompanyCustomerAttributes` API.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this customer object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded the customer
     * @param {string} customerCode The unique code representing the current customer
     * @param {Models.CustomerAttributeModel[]} model The list of attributes to unlink from the customer.
   * @return {FetchResult<Models.CustomerAttributeModel>}
   */
  
  unlinkAttributesFromCustomer({ companyId, customerCode, model }: { companyId: number, customerCode: string, model: Models.CustomerAttributeModel[] }): Promise<FetchResult<Models.CustomerAttributeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/attributes/unlink`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, FetchResult<Models.CustomerAttributeModel>);
  }

  /**
   * Unlink certificates from a customer
   * Remove one or more certificates to a customer.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {string} customerCode The unique code representing this customer
     * @param {Models.LinkCertificatesModel} model The list of certificates to link to this customer
   * @return {FetchResult<Models.CertificateModel>}
   */
  
  unlinkCertificatesFromCustomer({ companyId, customerCode, model }: { companyId: number, customerCode: string, model: Models.LinkCertificatesModel }): Promise<FetchResult<Models.CertificateModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}/certificates/unlink`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, FetchResult<Models.CertificateModel>);
  }

  /**
   * Update a single customer
   * Replace the customer object at this URL with a new record.
     *  
     * A customer object defines information about a person or business that purchases products from your
     * company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
     * record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
     * identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
     * AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
     *  
     * Before you can use any exemption certificates endpoints, you must set up your company for exemption certificate data storage.
     * Companies that do not have this storage system set up will see `CertCaptureNotConfiguredError` when they call exemption
     * certificate related APIs. To check if this is set up for a company, call `GetCertificateSetup`. To request setup of exemption
     * certificate storage for this company, call `RequestCertificateSetup`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, ECMEssentials, ECMPro, ECMPremium, VEMPro, VEMPremium, ECMProComms, ECMPremiumComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded this customer
     * @param {string} customerCode The unique code representing this customer
     * @param {Models.CustomerModel} model The new customer model that will replace the existing record at this URL
   * @return {Models.CustomerModel}
   */
  
  updateCustomer({ companyId, customerCode, model }: { companyId: number, customerCode: string, model: Models.CustomerModel }): Promise<Models.CustomerModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/customers/${customerCode}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.CustomerModel);
  }

  /**
   * Create and store new datasources for the respective companies.
   * Create one or more datasource objects.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The id of the company you which to create the datasources
     * @param {Models.DataSourceModel[]} model 
   * @return {Models.DataSourceModel[]}
   */
  
  createDataSources({ companyId, model }: { companyId: number, model: Models.DataSourceModel[] }): Promise<Array<Models.DataSourceModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/datasources`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.DataSourceModel>);
  }

  /**
   * Delete a datasource by datasource id for a company.
   * Marks the existing datasource for a company as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The id of the company the datasource belongs to.
     * @param {number} id The id of the datasource you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteDataSource({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/datasources/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Get data source by data source id
   * Retrieve the data source by its unique ID number.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId 
     * @param {number} id data source id
   * @return {Models.DataSourceModel}
   */
  
  getDataSourceById({ companyId, id }: { companyId: number, id: number }): Promise<Models.DataSourceModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/datasources/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.DataSourceModel);
  }

  /**
   * Retrieve all datasources for this company
   * Gets multiple datasource objects for a given company.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The id of the company you wish to retrieve the datasources.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* isEnabled, isSynced, isAuthorized, name, externalState
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.DataSourceModel>}
   */
  
  listDataSources({ companyId, filter, top, skip, orderBy }: { companyId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.DataSourceModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/datasources`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.DataSourceModel>);
  }

  /**
   * Retrieve all datasources
   * Get multiple datasource objects across all companies.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* isEnabled, isSynced, isAuthorized, name, externalState
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.DataSourceModel>}
   */
  
  queryDataSources({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.DataSourceModel>> {
    var path = this.buildUrl({
      url: `/api/v2/datasources`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.DataSourceModel>);
  }

  /**
   * Update a datasource identified by id for a company
   * Updates a datasource for a company.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The id of the company the datasource belongs to.
     * @param {number} id The id of the datasource you wish to delete.
     * @param {Models.DataSourceModel} model 
   * @return {Models.DataSourceModel}
   */
  
  updateDataSource({ companyId, id, model }: { companyId: number, id: number, model: Models.DataSourceModel }): Promise<Models.DataSourceModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/datasources/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.DataSourceModel);
  }

  /**
   * Lists all parents of an HS Code.
   * Retrieves the specified HS code and all of its parents, reflecting all sections, chapters, headings, and subheadings
     *  
     * a list of HS Codes that are the parents and information branches of the HS Code for the given
     * destination country, if lower detail is available.
     *  
     * This API will include information branches if applicable. These do not have HS Codes and cannot be referenced,
     * but can contain information relevant to deciding the correct HS Code.
     *  
     * This API is intended to be useful to review the descriptive hierarchy of an HS Code, which can be particularly helpful
     * when HS Codes can have multiple levels of generic descriptions.
     * 
     * ### Security Policies
     * 
     * * This API depends on the following active services:*Required* (all): AvaTaxGlobal.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The name or code of the destination country.
     * @param {string} hsCode The partial or full HS Code for which you would like to view all of the parents.
   * @return {FetchResult<Models.HsCodeModel>}
   */
  
  getCrossBorderCode({ country, hsCode }: { country: string, hsCode: string }): Promise<FetchResult<Models.HsCodeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/crossborder/${country}/${hsCode}/hierarchy`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.HsCodeModel>);
  }

  /**
   * Test whether a form supports online login verification
   * This API is intended to be useful to identify whether the user should be allowed
     * to automatically verify their login and password. This API will provide a result only if the form supports automatic online login verification.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} form The name of the form you would like to verify. This is the tax form code
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxFormCodes, scraperType, expectedResponseTime, requiredFilingCalendarDataFields
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SkyscraperStatusModel>}
   */
  
  getLoginVerifierByForm({ form, filter, top, skip, orderBy }: { form: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SkyscraperStatusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/filingcalendars/loginverifiers/${form}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SkyscraperStatusModel>);
  }

  /**
   * List all market place locations.
   * List all market place locations.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.MarketplaceModel>}
   */
  
  listAllMarketplaceLocations({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.MarketplaceModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/listallmarketplacelocations`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.MarketplaceModel>);
  }

  /**
   * Retrieve the full list of the AvaFile Forms available
   * This API is deprecated.
     *  
     * Please use the ListTaxForms API.
     *  
     * Returns the full list of Avalara-supported AvaFile Forms
     * This API is intended to be useful to identify all the different AvaFile Forms
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* outletTypeId
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.AvaFileFormModel>}
   */
  
  listAvaFileForms({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.AvaFileFormModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/avafileforms`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.AvaFileFormModel>);
  }

  /**
   * List certificate attributes used by a company
   * List the certificate attributes defined by a company either specified by the user or the user's default company.
     *  
     * A certificate may have multiple attributes that control its behavior. You may apply or remove attributes to a
     * certificate at any time.
     *  
     * If you see the 'CertCaptureNotConfiguredError', please use CheckProvision and RequestProvision endpoints to
     * check and provision account.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid Id of the company the user wish to fetch the certificates' attributes from. If not specified the API will use user's default company.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CertificateAttributeModel>}
   */
  
  listCertificateAttributes({ companyid, filter, top, skip, orderBy }: { companyid?: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CertificateAttributeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/certificateattributes`,
      parameters: {
        companyid: companyid,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CertificateAttributeModel>);
  }

  /**
   * List the certificate exempt reasons defined by a company
   * List the certificate exempt reasons defined by a company.
     *  
     * An exemption reason defines why a certificate allows a customer to be exempt
     * for purposes of tax calculation.
     *  
     * If you see the 'CertCaptureNotConfiguredError', please use CheckProvision and RequestProvision endpoints to
     * check and provision account.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ExemptionReasonModel>}
   */
  
  listCertificateExemptReasons({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ExemptionReasonModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/certificateexemptreasons`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ExemptionReasonModel>);
  }

  /**
   * List certificate exposure zones used by a company
   * List the certificate exposure zones defined by a company.
     *  
     * An exposure zone is a location where a certificate can be valid. Exposure zones may indicate a taxing
     * authority or other legal entity to which a certificate may apply.
     *  
     * If you see the 'CertCaptureNotConfiguredError', please use CheckProvision and RequestProvision endpoints to
     * check and provision account.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* id, companyId, name, tag, description, created, modified, region, country
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ExposureZoneModel>}
   */
  
  listCertificateExposureZones({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ExposureZoneModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/certificateexposurezones`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ExposureZoneModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported usage of extra parameters for classification of a item.
   * Returns the full list of Avalara-supported usage of extra parameters for item classification.
     * The list of parameters is available for use with Item Classification.
     * Some parameters are only available for use if you have subscribed to certain features of AvaTax.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* attributeSubType, values
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ClassificationParameterUsageMapModel>}
   */
  
  listClassificationParametersUsage({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ClassificationParameterUsageMapModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/classification/parametersusage`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ClassificationParameterUsageMapModel>);
  }

  /**
   * Retrieve the full list of communications service types
   * Returns full list of service types for a given transaction type ID.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The transaction type ID to examine
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* requiredParameters
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CommunicationsTSPairModel>}
   */
  
  listCommunicationsServiceTypes({ id, filter, top, skip, orderBy }: { id: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CommunicationsTSPairModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/communications/transactiontypes/${id}/servicetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CommunicationsTSPairModel>);
  }

  /**
   * Retrieve the full list of communications transactiontypes
   * Returns full list of communications transaction types which
     * are accepted in communication tax calculation requests.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CommunicationsTransactionTypeModel>}
   */
  
  listCommunicationsTransactionTypes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CommunicationsTransactionTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/communications/transactiontypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CommunicationsTransactionTypeModel>);
  }

  /**
   * Retrieve the full list of communications transaction/service type pairs
   * Returns full list of communications transaction/service type pairs which
     * are accepted in communication tax calculation requests.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* requiredParameters
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CommunicationsTSPairModel>}
   */
  
  listCommunicationsTSPairs({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CommunicationsTSPairModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/communications/tspairs`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CommunicationsTSPairModel>);
  }

  /**
   * List all ISO 3166 countries
   * Returns a list of all ISO 3166 country codes, and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a country for
     * a shipping address.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* alpha3Code, isEuropeanUnion, localizedNames, addressesRequireRegion
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.IsoCountryModel>}
   */
  
  listCountries({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.IsoCountryModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/countries`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.IsoCountryModel>);
  }

  /**
   * List certificate exposure zones used by a company
   * List available cover letters that can be used when sending invitation to use CertExpress to upload certificates.
     *  
     * The CoverLetter model represents a message sent along with an invitation to use CertExpress to
     * upload certificates. An invitation allows customers to use CertExpress to upload their exemption
     * certificates directly; this cover letter explains why the invitation was sent.
     *  
     * If you see the 'CertCaptureNotConfiguredError', please use CheckProvision and RequestProvision endpoints to
     * check and provision account.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* id, companyId, subject, description, createdDate, modifiedDate, pageCount, templateFilename, version
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CoverLetterModel>}
   */
  
  listCoverLetters({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CoverLetterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/coverletters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CoverLetterModel>);
  }

  /**
   * Lists the next level of HS Codes given a destination country and HS Code prefix.
   * Retrieves a list of HS Codes that are the children of the prefix for the given destination country, if
     * additional children are available.
     *  
     * HS Code is interchangeable with "tariff code" and definitions are generally unique to a destination country.
     * An HS Code describes an item and its eligibility/rate for tariffs. HS Codes are organized by
     * Section/Chapter/Heading/Subheading/Classification.
     *  
     * This API is intended to be useful to identify the correct HS Code to use for your item.
     * 
     * ### Security Policies
     * 
     * * This API depends on the following active services:*Required* (all): AvaTaxGlobal.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The name or code of the destination country.
     * @param {string} hsCode The Section or partial HS Code for which you would like to view the next level of HS Code detail, if more detail is available.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* hsCodeSource, system, destinationCountry, isDecisionNode, zeroPaddingCount, isSystemDefined, isTaxable, effDate, endDate, hsCodeSourceLength
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.HsCodeModel>}
   */
  
  listCrossBorderCodes({ country, hsCode, filter, top, skip, orderBy }: { country: string, hsCode: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.HsCodeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/crossborder/${country}/${hsCode}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.HsCodeModel>);
  }

  /**
   * List top level HS Code Sections.
   * Returns the full list of top level HS Code Sections. Sections are the broadest level of detail for
     * classifying tariff codes and the items to which they apply. HS Codes are organized
     * by Section/Chapter/Heading/Subheading/Classification.
     *  
     * This API is intended to be useful to identify the top level Sections for
     * further LandedCost HS Code lookups.
     * 
     * ### Security Policies
     * 
     * * This API depends on the following active services:*Required* (all): AvaTaxGlobal.
   * Swagger Name: AvaTaxClient
   *
   * 
   * @return {FetchResult<Models.HsCodeModel>}
   */
  
  listCrossBorderSections(): Promise<FetchResult<Models.HsCodeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/crossborder/sections`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.HsCodeModel>);
  }

  /**
   * List all ISO 4217 currencies supported by AvaTax.
   * Lists all ISO 4217 currencies supported by AvaTax.
     *  
     * This API produces a list of currency codes that can be used when calling AvaTax. The values from this API can be used to fill out the
     * `currencyCode` field in a `CreateTransactionModel`.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CurrencyModel>}
   */
  
  listCurrencies({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CurrencyModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/currencies`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CurrencyModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported entity use codes
   * Returns the full list of Avalara-supported entity use codes.
     * Entity/Use Codes are definitions of the entity who is purchasing something, or the purpose for which the transaction
     * is occurring. This information is generally used to determine taxability of the product.
     * In order to facilitate correct reporting of your taxes, you are encouraged to select the proper entity use codes for
     * all transactions that are exempt.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* validCountries
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.EntityUseCodeModel>}
   */
  
  listEntityUseCodes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.EntityUseCodeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/entityusecodes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.EntityUseCodeModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported filing frequencies.
   * Returns the full list of Avalara-supported filing frequencies.
     * This API is intended to be useful to identify all the different filing frequencies that can be used in notices.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.FilingFrequencyModel>}
   */
  
  listFilingFrequencies({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.FilingFrequencyModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/filingfrequencies`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.FilingFrequencyModel>);
  }

  /**
   * List of all recommendation status which can be assigned to an item
   * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
   * @return {Models.ItemTaxCodeRecommendationStatusModel[]}
   */
  
  listItemsRecommendationsStatus(): Promise<Array<Models.ItemTaxCodeRecommendationStatusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/items/recommendationstatus`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.ItemTaxCodeRecommendationStatusModel>);
  }

  /**
   * List of all possible status which can be assigned to an item
   * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
   * @return {Models.ItemStatusModel[]}
   */
  
  listItemsStatus(): Promise<Array<Models.ItemStatusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/items/status`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.ItemStatusModel>);
  }

  /**
   * List jurisdictions based on the filter provided
   * Returns a list of all Avalara-supported taxing jurisdictions.
     *  
     * This API allows you to examine all Avalara-supported jurisdictions. You can filter your search by supplying
     * SQL-like query for fetching only the ones you concerned about. For example: effectiveDate > '2016-01-01'
     *  
     * The rate, salesRate, and useRate fields are not available on the JurisdictionModels returned by this API.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* rate, salesRate, signatureCode, useRate, isAcm, isSst, createDate, isLocalAdmin, taxAuthorityTypeId
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.JurisdictionModel>}
   */
  
  listJurisdictions({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.JurisdictionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/jurisdictions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.JurisdictionModel>);
  }

  /**
   * List jurisdictions near a specific address
   * Returns a list of all Avalara-supported taxing jurisdictions that apply to this address.
     *  
     * This API allows you to identify which jurisdictions are nearby a specific address according to the best available geocoding information.
     * It is intended to allow you to create a "Jurisdiction Override", which allows an address to be configured as belonging to a nearby
     * jurisdiction in AvaTax.
     *  
     * The results of this API call can be passed to the `CreateJurisdictionOverride` API call.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} line1 The first address line portion of this address.
     * @param {string} line2 The second address line portion of this address.
     * @param {string} line3 The third address line portion of this address.
     * @param {string} city The city portion of this address.
     * @param {string} region The region, state, or province code portion of this address.
     * @param {string} postalCode The postal code or zip code portion of this address.
     * @param {string} country The two-character ISO-3166 code of the country portion of this address.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* country, Jurisdictions
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.JurisdictionOverrideModel>}
   */
  
  listJurisdictionsByAddress({ line1, line2, line3, city, region, postalCode, country, filter, top, skip, orderBy }: { line1?: string, line2?: string, line3?: string, city?: string, region?: string, postalCode?: string, country: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.JurisdictionOverrideModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.JurisdictionOverrideModel>);
  }

  /**
   * List jurisdictions based on the provided taxTypeId, taxSubTypeId, country, and rateTypeId
   * Returns a list of all Avalara-supported taxing jurisdictions filtered by taxTypeId, taxSubTypeId, country, and rateTypeId.
     *  
     * You can optionally pass region as a query parameter to retrieve jurisdictions that are under that region.
     *  
     * This API allows you to examine all Avalara-supported jurisdictions. You can filter your search by supplying
     * SQL-like query for fetching only the ones you concerned about. For example: effectiveDate > '2016-01-01'
     *  
     * The jurisdictionType, effectiveDate, and endDate are filterable fields available on the JurisdictionRateTypeTaxTypeMappingModels returned by this API.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country for which you want to retrieve the jurisdiction information
     * @param {string} taxTypeId The taxtype for which you want to retrieve the jurisdiction information
     * @param {string} taxSubTypeId The taxsubtype for which you want to retrieve the jurisdiction information
     * @param {number} rateTypeId The ratetype for which you want to retrieve the jurisdiction information
     * @param {string} region The region for which you want to retrieve the jurisdiction information
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* id, country, state, jurisdictionCode, longName, taxTypeId, taxSubTypeId, taxTypeGroupId, rateTypeId, stateFips
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.JurisdictionRateTypeTaxTypeMappingModel>}
   */
  
  listJurisdictionsByRateTypeTaxTypeMapping({ country, taxTypeId, taxSubTypeId, rateTypeId, region, filter, top, skip, orderBy }: { country: string, taxTypeId: string, taxSubTypeId: string, rateTypeId: number, region?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.JurisdictionRateTypeTaxTypeMappingModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/jurisdictions/countries/${country}/taxtypes/${taxTypeId}/taxsubtypes/${taxSubTypeId}`,
      parameters: {
        rateTypeId: rateTypeId,
        region: region,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.JurisdictionRateTypeTaxTypeMappingModel>);
  }

  /**
   * List jurisdictions hierarchy based on the filter provided
   * Returns a list of all Avalara-supported taxing jurisdictions hirearchy.
     *  
     * This API Lists the hierarchical relationship of jurisdictions for US states, identifying the cities and special taxing jurisdictions (STJs) for a given county within a state.
     *  
     * The rate, salesRate, and useRate fields are not available on the JurisdictionHirearchyModels returned by this API.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* parentId, nexus, rate, salesRate, signatureCode, useRate, isAcm, isSst, createDate, isLocalAdmin, taxAuthorityTypeId
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.JurisdictionHierarchyModel>}
   */
  
  listJurisdictionsHierarchy({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.JurisdictionHierarchyModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/jurisdictions/hierarchy`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.JurisdictionHierarchyModel>);
  }

  /**
   * List jurisdiction types based on the provided taxTypeId, taxSubTypeId, country, and rateTypeId
   * Returns a list of all applicable jurisdiction types based on country, taxTypeId, taxSubTypeId, and rateTypeId
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country for which you want to retrieve the jurisdiction information
     * @param {string} taxTypeId The taxtype for which you want to retrieve the jurisdiction information
     * @param {string} taxSubTypeId The taxsubtype for which you want to retrieve the jurisdiction information
     * @param {string} rateTypeId The ratetype for which you want to retrieve the jurisdiction information
   * @return {string[]}
   */
  
  listJurisdictionTypesByRateTypeTaxTypeMapping({ country, taxTypeId, taxSubTypeId, rateTypeId }: { country: string, taxTypeId: string, taxSubTypeId: string, rateTypeId: string }): Promise<Array<String>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/jurisdictionTypes/countries/${country}/taxtypes/${taxTypeId}/taxsubtypes/${taxSubTypeId}`,
      parameters: {
        rateTypeId: rateTypeId
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<String>);
  }

  /**
   * Retrieve the list of questions that are required for a tax location
   * Returns the list of additional questions you must answer when declaring a location in certain taxing jurisdictions.
     * Some tax jurisdictions require that you register or provide additional information to configure each physical place where
     * your company does business.
     * This information is not usually required in order to calculate tax correctly, but is almost always required to file your tax correctly.
     * You can call this API call for any address and obtain information about what questions must be answered in order to properly
     * file tax in that location.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} line1 The first line of this location's address.
     * @param {string} line2 The second line of this location's address.
     * @param {string} line3 The third line of this location's address.
     * @param {string} city The city part of this location's address.
     * @param {string} region The region, state, or province part of this location's address.
     * @param {string} postalCode The postal code of this location's address.
     * @param {string} country The country part of this location's address.
     * @param {number} latitude Optionally identify the location via latitude/longitude instead of via address.
     * @param {number} longitude Optionally identify the location via latitude/longitude instead of via address.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.LocationQuestionModel>}
   */
  
  listLocationQuestionsByAddress({ line1, line2, line3, city, region, postalCode, country, latitude, longitude, filter, top, skip, orderBy }: { line1?: string, line2?: string, line3?: string, city?: string, region?: string, postalCode?: string, country?: string, latitude?: number, longitude?: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.LocationQuestionModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.LocationQuestionModel>);
  }

  /**
   * List all forms where logins can be verified automatically
   * List all forms where logins can be verified automatically.
     * This API is intended to be useful to identify whether the user should be allowed
     * to automatically verify their login and password.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxFormCodes, scraperType, expectedResponseTime, requiredFilingCalendarDataFields
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SkyscraperStatusModel>}
   */
  
  listLoginVerifiers({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SkyscraperStatusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/filingcalendars/loginverifiers`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SkyscraperStatusModel>);
  }

  /**
   * Retrieve the list of locations for a marketplace.
   * Retrieves the list of suggested locations for a marketplace.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} marketplaceId MarketplaceId of a marketplace
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.MarketplaceLocationModel>}
   */
  
  listMarketplaceLocations({ marketplaceId, top, skip, orderBy }: { marketplaceId: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.MarketplaceLocationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/marketplacelocations`,
      parameters: {
        marketplaceId: marketplaceId,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.MarketplaceLocationModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported nexus for all countries and regions.
   * Returns the full list of all Avalara-supported nexus for all countries and regions.
     *  
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxTypeGroup, taxAuthorityId, taxName, parameters
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusModel>}
   */
  
  listNexus({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusModel>);
  }

  /**
   * List all nexus that apply to a specific address.
   * Returns a list of all Avalara-supported taxing jurisdictions that apply to this address.
     * This API allows you to identify which tax authorities apply to a physical location, salesperson address, or point of sale.
     * In general, it is usually expected that a company will declare nexus in all the jurisdictions that apply to each physical address
     * where the company does business.
     * The results of this API call can be passed to the 'Create Nexus' API call to declare nexus for this address.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} line1 The first address line portion of this address.
     * @param {string} line2 The first address line portion of this address.
     * @param {string} line3 The first address line portion of this address.
     * @param {string} city The city portion of this address.
     * @param {string} region Name or ISO 3166 code identifying the region portion of the address.      This field supports many different region identifiers:   * Two and three character ISO 3166 region codes   * Fully spelled out names of the region in ISO supported languages   * Common alternative spellings for many regions      For a full list of all supported codes and names, please see the Definitions API `ListRegions`.
     * @param {string} postalCode The postal code or zip code portion of this address.
     * @param {string} country Name or ISO 3166 code identifying the country portion of this address.      This field supports many different country identifiers:   * Two character ISO 3166 codes   * Three character ISO 3166 codes   * Fully spelled out names of the country in ISO supported languages   * Common alternative spellings for many countries      For a full list of all supported codes and names, please see the Definitions API `ListCountries`.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxTypeGroup, taxAuthorityId, taxName, parameters
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusModel>}
   */
  
  listNexusByAddress({ line1, line2, line3, city, region, postalCode, country, filter, top, skip, orderBy }: { line1?: string, line2?: string, line3?: string, city?: string, region: string, postalCode?: string, country: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported nexus for a country.
   * Returns all Avalara-supported nexus for the specified country.
     *  
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by country.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country in which you want to fetch the system nexus
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxTypeGroup, taxAuthorityId, taxName, parameters
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusModel>}
   */
  
  listNexusByCountry({ country, filter, top, skip, orderBy }: { country: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus/${country}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported nexus for a country and region.
   * Returns all Avalara-supported nexus for the specified country and region.
     *  
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by country and region.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The two-character ISO-3166 code for the country.
     * @param {string} region The two or three character region code for the region.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxTypeGroup, taxAuthorityId, taxName, parameters
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusModel>}
   */
  
  listNexusByCountryAndRegion({ country, region, filter, top, skip, orderBy }: { country: string, region: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus/${country}/${region}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusModel>);
  }

  /**
   * List nexus related to a tax form
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} formCode The form code that we are looking up the nexus for
   * @return {Models.NexusByTaxFormModel}
   */
  
  listNexusByFormCode({ formCode }: { formCode: string }): Promise<Models.NexusByTaxFormModel> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus/byform/${formCode}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.NexusByTaxFormModel);
  }

  /**
   * Retrieve the full list of Avalara-supported nexus for a tax type group.
   * Returns all Avalara-supported nexus for the specified specified tax type group.
     *  
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by tax type group.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} taxTypeGroup The tax type group to fetch the supporting system nexus for.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxTypeGroup, taxAuthorityId, taxName, parameters
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusModel>}
   */
  
  listNexusByTaxTypeGroup({ taxTypeGroup, filter, top, skip, orderBy }: { taxTypeGroup: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexus/bytaxtypegroup/${taxTypeGroup}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusModel>);
  }

  /**
   * Retrieve the full list of nexus tax type groups
   * Returns the full list of Avalara-supported nexus tax type groups
     * This API is intended to be useful to identify all the different tax sub-types.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptionTypeId, subscriptionDescription, tabName, showColumn
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusTaxTypeGroupModel>}
   */
  
  listNexusTaxTypeGroups({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusTaxTypeGroupModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/nexustaxtypegroups`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusTaxTypeGroupModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice customer funding options.
   * Returns the full list of Avalara-supported tax notice customer funding options.
     * This API is intended to be useful to identify all the different notice customer funding options that can be used in notices.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* activeFlag, sortOrder
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticeCustomerFundingOptionModel>}
   */
  
  listNoticeCustomerFundingOptions({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticeCustomerFundingOptionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticecustomerfundingoptions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticeCustomerFundingOptionModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice customer types.
   * Returns the full list of Avalara-supported tax notice customer types.
     * This API is intended to be useful to identify all the different notice customer types.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* activeFlag, sortOrder
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticeCustomerTypeModel>}
   */
  
  listNoticeCustomerTypes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticeCustomerTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticecustomertypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticeCustomerTypeModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice filing types.
   * Returns the full list of Avalara-supported tax notice filing types.
     * This API is intended to be useful to identify all the different notice filing types that can be used in notices.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* description, activeFlag, sortOrder
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticeFilingTypeModel>}
   */
  
  listNoticeFilingtypes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticeFilingTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticefilingtypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticeFilingTypeModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice priorities.
   * Returns the full list of Avalara-supported tax notice priorities.
     * This API is intended to be useful to identify all the different notice priorities that can be used in notices.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* activeFlag, sortOrder
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticePriorityModel>}
   */
  
  listNoticePriorities({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticePriorityModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticepriorities`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticePriorityModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice reasons.
   * Returns the full list of Avalara-supported tax notice reasons.
     * This API is intended to be useful to identify all the different tax notice reasons.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* description, activeFlag, sortOrder
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticeReasonModel>}
   */
  
  listNoticeReasons({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticeReasonModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticereasons`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticeReasonModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice responsibility ids
   * Returns the full list of Avalara-supported tax notice responsibility ids
     * This API is intended to be useful to identify all the different tax notice responsibilities.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* sortOrder
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticeResponsibilityModel>}
   */
  
  listNoticeResponsibilities({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticeResponsibilityModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticeresponsibilities`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticeResponsibilityModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice root causes
   * Returns the full list of Avalara-supported tax notice root causes
     * This API is intended to be useful to identify all the different tax notice root causes.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* sortOrder
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticeRootCauseModel>}
   */
  
  listNoticeRootCauses({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticeRootCauseModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticerootcauses`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticeRootCauseModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice statuses.
   * Returns the full list of Avalara-supported tax notice statuses.
     * This API is intended to be useful to identify all the different tax notice statuses.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* isOpen, sortOrder, activeFlag
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticeStatusModel>}
   */
  
  listNoticeStatuses({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticeStatusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticestatuses`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticeStatusModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax notice types.
   * Returns the full list of Avalara-supported tax notice types.
     * This API is intended to be useful to identify all the different notice types that can be used in notices.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* activeFlag, sortOrder
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NoticeTypeModel>}
   */
  
  listNoticeTypes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NoticeTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/noticetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NoticeTypeModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported extra parameters for creating transactions.
   * Returns the full list of Avalara-supported extra parameters for the 'Create Transaction' API call.
     * This list of parameters is available for use when configuring your transaction.
     * Some parameters are only available for use if you have subscribed to certain features of AvaTax.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* serviceTypes, regularExpression, attributeSubType, values
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ParameterModel>}
   */
  
  listParameters({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ParameterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/parameters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ParameterModel>);
  }

  /**
   * Retrieve the list of Avalara-supported parameters based on account subscriptions.
   * Returns the list of Avalara-supported parameters based on account subscriptions.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account to retrieve the parameters.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* serviceTypes, regularExpression, attributeSubType, values
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ParameterModel>}
   */
  
  listParametersByAccount({ accountId, filter, top, skip, orderBy }: { accountId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ParameterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/accounts/${accountId}/parameters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ParameterModel>);
  }

  /**
   * Retrieve the parameters by companyCode and itemCode.
   * Returns the list of parameters based on the company's service types and the item code.
     * Ignores nexus if a service type is configured in the 'IgnoreNexusForServiceTypes' configuration section.
     * Ignores nexus for the AvaAlcohol service type.
     *  
     * NOTE: If your company code or item code contains any of these characters /, +, ? or a space, please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: 'Company/Code' becomes 'Company_-ava2f-_Code'
     * * Replace '+' with '\_-ava2b-\_' For example: 'Company+Code' becomes 'Company_-ava2b-_Code'
     * * Replace '?' with '\_-ava3f-\_' For example: 'Company?Code' becomes 'Company_-ava3f-_Code'
     * * Replace '%' with '\_-ava25-\_' For example: 'Company%Code' becomes 'Company_-ava25-_Code'
     * * Replace '#' with '\_-ava23-\_' For example: 'Company#Code' becomes 'Company_-ava23-_Code'
     *  
     * For Item Code other than the five given above below two should also be used
     * * Replace ''' with '\_-ava27-\_' For example: 'Item'Code' becomes 'Item_-ava27-_Code'
     * * Replace '"' with '\_-ava22-\_' For example: 'Item"Code' becomes 'Item_-ava22-_Code'
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode Company code.
     * @param {string} itemCode Item code.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* serviceTypes, regularExpression, attributeSubType, values
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ParameterModel>}
   */
  
  listParametersByItem({ companyCode, itemCode, filter, top, skip, orderBy }: { companyCode: string, itemCode: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ParameterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/parameters/byitem/${companyCode}/${itemCode}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ParameterModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported usage of extra parameters for creating transactions.
   * Returns the full list of Avalara-supported usage of extra parameters for the 'Create Transaction' API call.
     * This list of parameters is available for use when configuring your transaction.
     * Some parameters are only available for use if you have subscribed to certain features of AvaTax.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* attributeSubType, values, valueDescriptions
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ParameterUsageModel>}
   */
  
  listParametersUsage({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ParameterUsageModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/parametersusage`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ParameterUsageModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported permissions
   * Returns the full list of Avalara-supported permission types.
     * This API is intended to be useful to identify the capabilities of a particular user logon.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
   * @return {FetchResult<String>}
   */
  
  listPermissions({ top, skip }: { top?: number, skip?: number }): Promise<FetchResult<String>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/permissions`,
      parameters: {
        $top: top,
        $skip: skip
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<String>);
  }

  /**
   * Retrieve the full list of Avalara-supported postal codes.
   * Retrieves the list of Avalara-supported postal codes.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {boolean} includeExpiredPostalCodes If set to true, returns expired postal codes. Defaults to false
   * @return {FetchResult<Models.PostalCodeModel>}
   */
  
  listPostalCodes({ filter, top, skip, orderBy, includeExpiredPostalCodes }: { filter?: string, top?: number, skip?: number, orderBy?: string, includeExpiredPostalCodes?: boolean }): Promise<FetchResult<Models.PostalCodeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/postalcodes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy,
        includeExpiredPostalCodes: includeExpiredPostalCodes
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.PostalCodeModel>);
  }

  /**
   * List all customs duty programs recognized by AvaTax
   * List all preferred customs duty programs recognized by AvaTax.
     *  
     * A customs duty program is an optional program you can use to obtain favorable treatment from customs and duty agents.
     * An example of a preferred program is NAFTA, which provides preferential rates for products being shipped from neighboring
     * countries.
     *  
     * To select a preferred program for calculating customs and duty rates, call this API to find the appropriate code for your
     * preferred program. Next, set the parameter `AvaTax.LC.PreferredProgram` in your `CreateTransaction` call to the code of
     * the program.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* effectiveDate, endDate
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.PreferredProgramModel>}
   */
  
  listPreferredPrograms({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.PreferredProgramModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/preferredprograms`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.PreferredProgramModel>);
  }

  /**
   * List all available product classification systems.
   * List all available product classification systems.
     *  
     * Tax authorities use product classification systems as a way to identify products and associate them with a tax rate.
     * More than one tax authority might use the same product classification system, but they might charge different tax rates for products.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* countries
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {string} countryCode If not null, return all records with this code.
   * @return {FetchResult<Models.ProductClassificationSystemModel>}
   */
  
  listProductClassificationSystems({ filter, top, skip, orderBy, countryCode }: { filter?: string, top?: number, skip?: number, orderBy?: string, countryCode?: string }): Promise<FetchResult<Models.ProductClassificationSystemModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/productclassificationsystems`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy,
        $countryCode: countryCode
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ProductClassificationSystemModel>);
  }

  /**
   * List all product classification systems available to a company based on its nexus.
   * Lists all product classification systems available to a company based on its nexus.
     *  
     * Tax authorities use product classification systems as a way to identify products and associate them with a tax rate.
     * More than one tax authority might use the same product classification system, but they might charge different tax rates for products.
     *  
     *  
     * NOTE: If your company code contains any of these characters /, +, ? or a space, please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: 'Company/Code' becomes 'Company_-ava2f-_Code'
     * * Replace '+' with '\_-ava2b-\_' For example: 'Company+Code' becomes 'Company_-ava2b-_Code'
     * * Replace '?' with '\_-ava3f-\_' For example: 'Company?Code' becomes 'Company_-ava3f-_Code'
     * * Replace '%' with '\_-ava25-\_' For example: 'Company%Code' becomes 'Company_-ava25-_Code'
     * * Replace '#' with '\_-ava23-\_' For example: 'Company#Code' becomes 'Company_-ava23-_Code'
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* countries
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {string} countryCode If not null, return all records with this code.
   * @return {FetchResult<Models.ProductClassificationSystemModel>}
   */
  
  listProductClassificationSystemsByCompany({ companyCode, filter, top, skip, orderBy, countryCode }: { companyCode: string, filter?: string, top?: number, skip?: number, orderBy?: string, countryCode?: string }): Promise<FetchResult<Models.ProductClassificationSystemModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/productclassificationsystems/bycompany/${companyCode}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy,
        $countryCode: countryCode
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ProductClassificationSystemModel>);
  }

  /**
   * Retrieve the full list of rate types for each country
   * Returns the full list of Avalara-supported rate type file types
     * This API is intended to be useful to identify all the different rate types.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country to examine for rate types
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* country
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.RateTypeModel>}
   */
  
  listRateTypesByCountry({ country, filter, top, skip, orderBy }: { country: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.RateTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/countries/${country}/ratetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.RateTypeModel>);
  }

  /**
   * Retrieve the list of rate types by country, TaxType and by TaxSubType
   * Returns the list of Avalara-supported rate type file types
     * This API is intended to be useful to identify all the different rate types.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country to examine for rate types
     * @param {string} taxTypeId The taxType for the country to examine for rate types
     * @param {string} taxSubTypeId The taxSubType for the country and taxType to examine for rate types
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* id, rateType, description
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.RateTypesModel>}
   */
  
  listRateTypesByCountryTaxTypeTaxSubType({ country, taxTypeId, taxSubTypeId, filter, top, skip, orderBy }: { country: string, taxTypeId: string, taxSubTypeId: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.RateTypesModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/countries/${country}/taxtypes/${taxTypeId}/taxsubtypes/${taxSubTypeId}/ratetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.RateTypesModel>);
  }

  /**
   * List all ISO 3166 regions
   * Returns a list of all ISO 3166 region codes and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a region
     * within the country for a shipping addresses.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* localizedNames
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.IsoRegionModel>}
   */
  
  listRegions({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.IsoRegionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/regions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.IsoRegionModel>);
  }

  /**
   * List all ISO 3166 regions for a country
   * Returns a list of all ISO 3166 region codes for a specific country code, and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a region
     * within the country for a shipping addresses.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country of which you want to fetch ISO 3166 regions
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* localizedNames
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.IsoRegionModel>}
   */
  
  listRegionsByCountry({ country, filter, top, skip, orderBy }: { country: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.IsoRegionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/countries/${country}/regions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.IsoRegionModel>);
  }

  /**
   * Retrieve the list of applicable regions by country tax type, tax sub type, and rate type for a given JurisdictionTypeId
   * Returns a list of all ISO 3166 region codes for a specific country code and their US English friendly names.
     * This API is intended to be used as a way to provide a dropdown box in your website to allow customers to select a region
     * within the country for shipping addresses.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company for which you want to retrieve the applicable regions
     * @param {string} country The country for which you want to retrieve the regions
     * @param {string} taxTypeId The taxTypeId for which you want to retrieve the regions. Example values include Autimotive, tires, Lodging, S, U, I, O, All, etc. Run the "/api/v2/definitions/taxtypes/countries/{country}?companyId=" endpoint for a list of taxTypeId values.
     * @param {string} taxSubTypeId The taxSubType for which you want to retrieve the regions. Example values include Accommodations, BikeTax, IGST, S, U, All, etc. Run the "api/v2/definitions/taxsubtypes" endpoint for a list of taxSubTypes values.
     * @param {number} rateTypeId The rateTypeId for which you want to retrieve the regions.   Note: The rateTypeId is an integer. Run the "/api/v2/definitions/countries/{country}/taxtypes/{taxTypeId}/taxsubtypes/{taxSubTypeId}/ratetypes" endpoint for a list of rateTypeId values."
     * @param {string} jurisdictionTypeId The JurisdictionTypeId for which you want to retrieve the regions.   This is a three-character string. Accepted values are ```CNT``` (country), ```STA``` (state), ```CTY``` (county), ```CIT``` (city), or ```STJ``` (special jurisdiction).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.IsoRegionModel>}
   */
  
  listRegionsByCountryAndTaxTypeAndTaxSubTypeAndRateType({ companyId, country, taxTypeId, taxSubTypeId, rateTypeId, jurisdictionTypeId, top, skip, orderBy }: { companyId: number, country: string, taxTypeId: string, taxSubTypeId: string, rateTypeId: number, jurisdictionTypeId: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.IsoRegionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/companies/${companyId}/countries/${country}/regions/taxtypes/${taxTypeId}/taxsubtypes/${taxSubTypeId}/rateTypeId/${rateTypeId}/jurisdictionTypeId/${jurisdictionTypeId}`,
      parameters: {
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.IsoRegionModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported usage of parameters used for returns.
   * Returns the full list of Avalara-supported usage of extra parameters for the returns.
     * This list of parameters is available for use with Returns.
     * Some parameters are only available for use if you have subscribed to certain features of AvaTax.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* attributeSubType, values
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ReturnsParameterUsageModel>}
   */
  
  listReturnsParametersUsage({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ReturnsParameterUsageModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/returns/parametersusage`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ReturnsParameterUsageModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported permissions
   * Returns the full list of Avalara-supported permission types.
     * This API is intended to be useful when designing a user interface for selecting the security role of a user account.
     * Some security roles are restricted for Avalara internal use.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SecurityRoleModel>}
   */
  
  listSecurityRoles({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SecurityRoleModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/securityroles`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SecurityRoleModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported subscription types
   * Returns the full list of Avalara-supported subscription types.
     * This API is intended to be useful for identifying which features you have added to your account.
     * You may always contact Avalara's sales department for information on available products or services.
     * You cannot change your subscriptions directly through the API.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxTypeGroupIdSK
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SubscriptionTypeModel>}
   */
  
  listSubscriptionTypes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SubscriptionTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/subscriptiontypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SubscriptionTypeModel>);
  }

  /**
   * Retrieve the list all tags supported by avalara
   * Retrieves the list of suggested locations for a marketplace.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TagsModel>}
   */
  
  listTags({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TagsModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/tags`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TagsModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax authorities.
   * Returns the full list of Avalara-supported tax authorities.
     * This API is intended to be useful to identify all the different authorities that receive tax.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxAuthorityModel>}
   */
  
  listTaxAuthorities({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxAuthorityModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxauthorities`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxAuthorityModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported forms for each tax authority.
   * Returns the full list of Avalara-supported forms for each tax authority.
     * This list represents tax forms that Avalara recognizes.
     * Customers who subscribe to Avalara Managed Returns Service can request these forms to be filed automatically
     * based on the customer's AvaTax data.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxAuthorityFormModel>}
   */
  
  listTaxAuthorityForms({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxAuthorityFormModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxauthorityforms`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxAuthorityFormModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax authority types.
   * Returns the full list of Avalara-supported tax authority types.
     * This API is intended to be useful to identify all the different authority types.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxAuthorityTypeModel>}
   */
  
  listTaxAuthorityTypes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxAuthorityTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxauthoritytypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxAuthorityTypeModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax codes.
   * Retrieves the list of Avalara-supported system tax codes.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxCodeModel>}
   */
  
  listTaxCodes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxCodeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxcodes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxCodeModel>);
  }

  /**
   * Retrieve the full list of Avalara-supported tax code types.
   * Returns the full list of recognized tax code types.
     * A 'Tax Code Type' represents a broad category of tax codes, and is less detailed than a single TaxCode.
     * This API is intended to be useful for broadly searching for tax codes by tax code type.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
   * @return {Models.TaxCodeTypesModel}
   */
  
  listTaxCodeTypes({ top, skip }: { top?: number, skip?: number }): Promise<Models.TaxCodeTypesModel> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxcodetypes`,
      parameters: {
        $top: top,
        $skip: skip
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.TaxCodeTypesModel);
  }

  /**
   * Retrieve the full list of the Tax Forms available
   * Returns the full list of Avalara-supported Tax Forms
     * This API is intended to be useful to identify all the different Tax Forms
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.FormMasterModel>}
   */
  
  listTaxForms({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.FormMasterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxforms`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.FormMasterModel>);
  }

  /**
   * Retrieve the full list of tax sub types
   * Returns the full list of Avalara-supported tax sub-types
     * This API is intended to be useful to identify all the different tax sub-types.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxSubTypeModel>}
   */
  
  listTaxSubTypes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxSubTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxsubtypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxSubTypeModel>);
  }

  /**
   * Retrieve the full list of tax sub types by Country and TaxType
   * Returns the full list of Avalara-supported tax sub-types
     * This API is intended to be useful to identify all the different tax sub-types for given country and TaxType.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country to examine for taxsubtype
     * @param {string} taxTypeId The taxType for the country to examine for taxsubtype
     * @param {number} companyId Id of the company the user wish to fetch the applicable tax sub types
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxSubTypeModel>}
   */
  
  listTaxSubTypesByCountryAndTaxType({ country, taxTypeId, companyId, filter, top, skip, orderBy }: { country: string, taxTypeId: string, companyId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxSubTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxsubtypes/countries/${country}/taxtypes/${taxTypeId}`,
      parameters: {
        companyId: companyId,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxSubTypeModel>);
  }

  /**
   * Retrieve the full list of tax sub types by jurisdiction code and region
   * Returns the full list of Avalara-supported tax sub-types by jurisdiction and region
     * This API is intended to be useful to identify all the different tax sub-types.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} jurisdictionCode The jurisdiction code of the tax sub type.
     * @param {string} region The region of the tax sub type.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxSubTypeModel>}
   */
  
  listTaxSubTypesByJurisdictionAndRegion({ jurisdictionCode, region, filter, top, skip, orderBy }: { jurisdictionCode: string, region: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxSubTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxsubtypes/${jurisdictionCode}/${region}`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxSubTypeModel>);
  }

  /**
   * Retrieve the full list of tax type groups
   * Returns the full list of Avalara-supported tax type groups
     * This API is intended to be useful to identify all the different tax type groups.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptionTypeId, subscriptionDescription, tabName, showColumn, displaySequence
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxTypeGroupModel>}
   */
  
  listTaxTypeGroups({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxTypeGroupModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxtypegroups`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxTypeGroupModel>);
  }

  /**
   * Retrieve the list of applicable TaxTypes
   * Retrieves the list of applicable TaxTypes based on Nexus of the company.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country for which you want to retrieve the unitofbasis information
     * @param {number} companyId Your companyId to retrieve the applicable taxtypes
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxTypeModel>}
   */
  
  listTaxTypesByNexusAndCountry({ country, companyId, top, skip, orderBy }: { country: string, companyId: number, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/taxtypes/countries/${country}`,
      parameters: {
        companyId: companyId,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxTypeModel>);
  }

  /**
   * Retrieve the list of applicable UnitOfBasis
   * Retrieves the list of applicable UnitOfBasis
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country The country for which you want to retrieve the unitofbasis information
     * @param {string} taxTypeId The taxtype for which you want to retrieve the unitofbasis information
     * @param {string} taxSubTypeId The taxsubtype for which you want to retrieve the unitofbasis information
     * @param {string} rateTypeId The ratetype for which you want to retrieve the unitofbasis information
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.UnitOfBasisModel>}
   */
  
  listUnitOfBasisByCountryAndTaxTypeAndTaxSubTypeAndRateType({ country, taxTypeId, taxSubTypeId, rateTypeId, top, skip, orderBy }: { country: string, taxTypeId: string, taxSubTypeId: string, rateTypeId: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.UnitOfBasisModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/unitofbasis/countries/${country}/taxtypes/${taxTypeId}/taxsubtypes/${taxSubTypeId}`,
      parameters: {
        rateTypeId: rateTypeId,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.UnitOfBasisModel>);
  }

  /**
   * List all defined units of measurement
   * List all units of measurement systems defined by Avalara.
     *  
     * A unit of measurement system is a method of measuring a quantity, such as distance, mass, or others.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* id
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.UomModel>}
   */
  
  listUnitOfMeasurement({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.UomModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/unitofmeasurements`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.UomModel>);
  }

  /**
   * Create one or more DistanceThreshold objects
   * Create one or more DistanceThreshold objects for this company.
     *  
     * A company-distance-threshold model indicates the distance between a company
     * and the taxing borders of various countries. Distance thresholds are necessary
     * to correctly calculate some value-added taxes.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that owns this DistanceThreshold
     * @param {Models.CompanyDistanceThresholdModel[]} model The DistanceThreshold object or objects you wish to create.
   * @return {Models.CompanyDistanceThresholdModel[]}
   */
  
  createDistanceThreshold({ companyId, model }: { companyId: number, model: Models.CompanyDistanceThresholdModel[] }): Promise<Array<Models.CompanyDistanceThresholdModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/distancethresholds`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.CompanyDistanceThresholdModel>);
  }

  /**
   * Delete a single DistanceThreshold object
   * Marks the DistanceThreshold object identified by this URL as deleted.
     *  
     * A company-distance-threshold model indicates the distance between a company
     * and the taxing borders of various countries. Distance thresholds are necessary
     * to correctly calculate some value-added taxes.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that owns this DistanceThreshold
     * @param {number} id The unique ID number of the DistanceThreshold object you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteDistanceThreshold({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/distancethresholds/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single DistanceThreshold
   * Retrieves a single DistanceThreshold object defined by this URL.
     *  
     * A company-distance-threshold model indicates the distance between a company
     * and the taxing borders of various countries. Distance thresholds are necessary
     * to correctly calculate some value-added taxes.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this DistanceThreshold object
     * @param {number} id The unique ID number referring to this DistanceThreshold object
   * @return {Models.CompanyDistanceThresholdModel}
   */
  
  getDistanceThreshold({ companyId, id }: { companyId: number, id: number }): Promise<Models.CompanyDistanceThresholdModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/distancethresholds/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.CompanyDistanceThresholdModel);
  }

  /**
   * Retrieve all DistanceThresholds for this company.
   * Lists all DistanceThreshold objects that belong to this company.
     *  
     * A company-distance-threshold model indicates the distance between a company
     * and the taxing borders of various countries. Distance thresholds are necessary
     * to correctly calculate some value-added taxes.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company whose DistanceThreshold objects you wish to list.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CompanyDistanceThresholdModel>}
   */
  
  listDistanceThresholds({ companyId, filter, include, top, skip, orderBy }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CompanyDistanceThresholdModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/distancethresholds`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CompanyDistanceThresholdModel>);
  }

  /**
   * Retrieve all DistanceThreshold objects
   * Lists all DistanceThreshold objects that belong to this account.
     *  
     * A company-distance-threshold model indicates the distance between a company
     * and the taxing borders of various countries. Distance thresholds are necessary
     * to correctly calculate some value-added taxes.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CompanyDistanceThresholdModel>}
   */
  
  queryDistanceThresholds({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CompanyDistanceThresholdModel>> {
    var path = this.buildUrl({
      url: `/api/v2/distancethresholds`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CompanyDistanceThresholdModel>);
  }

  /**
   * Update a DistanceThreshold object
   * Replace the existing DistanceThreshold object at this URL with an updated object.
     *  
     * A company-distance-threshold model indicates the distance between a company
     * and the taxing borders of various countries. Distance thresholds are necessary
     * to correctly calculate some value-added taxes.
     *  
     * All data from the existing object will be replaced with data in the object you PUT.
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that owns this DistanceThreshold object.
     * @param {number} id The unique ID number of the DistanceThreshold object to replace.
     * @param {Models.CompanyDistanceThresholdModel} model The new DistanceThreshold object to store.
   * @return {Models.CompanyDistanceThresholdModel}
   */
  
  updateDistanceThreshold({ companyId, id, model }: { companyId: number, id: number, model: Models.CompanyDistanceThresholdModel }): Promise<Models.CompanyDistanceThresholdModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/distancethresholds/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.CompanyDistanceThresholdModel);
  }

  /**
   * Create Domain control verification
   * 
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.DomainNameViewModel} model 
   * @return {Models.DcvCreationResponse}
   */
  
  createDcv({ model }: { model?: Models.DomainNameViewModel }): Promise<Models.DcvCreationResponse> {
    var path = this.buildUrl({
      url: `/api/v2/domain-control-verifications`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.DcvCreationResponse);
  }

  /**
   * Get domain control verifications by logged in user/domain name.
   * 
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* Id, Context, Token, Status, EmailId, CreatedOn, CreatedBy, UpdatedOn, UpdatedBy
   * @return {Models.DcvViewModel[]}
   */
  
  filterDcv({ filter }: { filter?: string }): Promise<Array<Models.DcvViewModel>> {
    var path = this.buildUrl({
      url: `/api/v2/domain-control-verifications`,
      parameters: {
        $filter: filter
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.DcvViewModel>);
  }

  /**
   * Get domain control verification by domainControlVerificationId
   * 
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} domainControlVerificationId 
   * @return {Models.DcvViewModel}
   */
  
  getDcvById({ domainControlVerificationId }: { domainControlVerificationId: string }): Promise<Models.DcvViewModel> {
    var path = this.buildUrl({
      url: `/api/v2/domain-control-verifications/${domainControlVerificationId}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.DcvViewModel);
  }

  /**
   * Delete AFC event notifications.
   * ### Security Policies
     * 
     * * This API depends on the following active services:*Required* (all): ECMPremiumComms, ECMProComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {boolean} isDlq Specify `true` to delete event notifications from the dead letter queue; otherwise, specify `false`.
     * @param {Models.EventDeleteMessageModel} model Details of the event you want to delete.
   * @return {FetchResult<Models.EventMessageResponse>}
   */
  
  deleteAfcEventNotifications({ isDlq, model }: { isDlq?: boolean, model: Models.EventDeleteMessageModel }): Promise<FetchResult<Models.EventMessageResponse>> {
    var path = this.buildUrl({
      url: `/api/v2/event-notifications/afc`,
      parameters: {
        isDlq: isDlq
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: model, clientId: strClientId }, FetchResult<Models.EventMessageResponse>);
  }

  /**
   * Delete company event notifications
   * ### Security Policies
     * 
     * * This API depends on the following active services:*Required* (all): ECMPro, ECMPremium.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded these event notifications.
     * @param {Models.EventDeleteMessageModel} model Details of the event you want to delete.
   * @return {FetchResult<Models.EventMessageResponse>}
   */
  
  deleteEventNotifications({ companyId, model }: { companyId: number, model: Models.EventDeleteMessageModel }): Promise<FetchResult<Models.EventMessageResponse>> {
    var path = this.buildUrl({
      url: `/api/v2/event-notifications/companies/${companyId}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: model, clientId: strClientId }, FetchResult<Models.EventMessageResponse>);
  }

  /**
   * Retrieve company event notifications.
   * ### Security Policies
     * 
     * * This API depends on the following active services:*Required* (all): ECMPro, ECMPremium.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company that recorded these event notifications.
   * @return {FetchResult<Models.EventMessageResponse>}
   */
  
  getEventNotifications({ companyId }: { companyId: number }): Promise<FetchResult<Models.EventMessageResponse>> {
    var path = this.buildUrl({
      url: `/api/v2/event-notifications/companies/${companyId}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.EventMessageResponse>);
  }

  /**
   * Retrieve AFC event notifications
   * ### Security Policies
     * 
     * * This API depends on the following active services:*Required* (all): ECMPremiumComms, ECMProComms.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {boolean} isDlq Specify `true` to retrieve event notifications from the dead letter queue; otherwise, specify `false`.
   * @return {FetchResult<Models.EventMessageResponse>}
   */
  
  listAfcEventNotifications({ isDlq }: { isDlq?: boolean }): Promise<FetchResult<Models.EventMessageResponse>> {
    var path = this.buildUrl({
      url: `/api/v2/event-notifications/afc`,
      parameters: {
        isDlq: isDlq
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.EventMessageResponse>);
  }

  /**
   * Create a new eCommerce token.
   * Creates a new eCommerce token.
     *  
     * This API is used to create a new eCommerce token. An eCommerce token is required in order to launch the CertCapture eCommerce plugin. Create a token for each of your CertCapture customers.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company ID that will be issued this certificate.
     * @param {Models.CreateECommerceTokenInputModel} model 
   * @return {Models.ECommerceTokenOutputModel}
   */
  
  createECommerceToken({ companyId, model }: { companyId: number, model: Models.CreateECommerceTokenInputModel }): Promise<Models.ECommerceTokenOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/ecommercetokens`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.ECommerceTokenOutputModel);
  }

  /**
   * Refresh an eCommerce token.
   * Refresh an eCommerce token.
     *  
     * CertCapture eCommerce tokens expire after one hour. This API is used to refresh an eCommerce token that is about to expire. This API can only be used with active tokens. If your token has expired, you must generate a new one.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company ID that the refreshed certificate belongs to.
     * @param {Models.RefreshECommerceTokenInputModel} model 
   * @return {FetchResult<Models.ECommerceTokenOutputModel>}
   */
  
  refreshECommerceToken({ companyId, model }: { companyId: number, model: Models.RefreshECommerceTokenInputModel }): Promise<FetchResult<Models.ECommerceTokenOutputModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/ecommercetokens`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, FetchResult<Models.ECommerceTokenOutputModel>);
  }

  /**
   * Approves linkage to a firm for a client account
   * This API enables the account admin of a client account to approve linkage request by a firm.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {Models.FirmClientLinkageOutputModel}
   */
  
  approveFirmClientLinkage({ id }: { id: number }): Promise<Models.FirmClientLinkageOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages/${id}/approve`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.FirmClientLinkageOutputModel);
  }

  /**
   * Request a new FirmClient account and create an approved linkage to it
   * This API is for use by Firms only.
     *  
     * Avalara allows firms to manage returns for clients without the clients needing to use AvaTax service.
     * Firms can create accounts of FirmClient for customers they are managing using this API.
     *  
     * Calling this API creates an account with the specified product subscriptions, but without a new user for account.
     * Account is then linked to the Firm so they can managed their returns.
     * You should call this API when a customer does not have an AvaTax account and is to be managed only by the firm.
     *  
     * The created account will be created in `Active` status but there will be no user or license key associated with account.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SystemAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.NewFirmClientAccountRequestModel} model Information about the account you wish to create.
   * @return {Models.FirmClientLinkageOutputModel}
   */
  
  createAndLinkNewFirmClientAccount({ model }: { model: Models.NewFirmClientAccountRequestModel }): Promise<Models.FirmClientLinkageOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages/createandlinkclient`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.FirmClientLinkageOutputModel);
  }

  /**
   * Links a firm account with the client account
   * This API enables the firm admins/firm users to request the linkage of a firm account and a client account.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.FirmClientLinkageInputModel} model FirmClientLinkageInputModel
   * @return {Models.FirmClientLinkageOutputModel}
   */
  
  createFirmClientLinkage({ model }: { model: Models.FirmClientLinkageInputModel }): Promise<Models.FirmClientLinkageOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.FirmClientLinkageOutputModel);
  }

  /**
   * Delete a linkage
   * This API marks a linkage between a firm and client as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {Models.ErrorDetail[]}
   */
  
  deleteFirmClientLinkage({ id }: { id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Get linkage between a firm and client by id
   * This API enables the firm admins/firm users to request the linkage of a firm account and a client account.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {Models.FirmClientLinkageOutputModel}
   */
  
  getFirmClientLinkage({ id }: { id: number }): Promise<Models.FirmClientLinkageOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.FirmClientLinkageOutputModel);
  }

  /**
   * List client linkages for a firm or client
   * This API enables the firm or account users to request the associated linkages to the account.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* firmAccountName, clientAccountName
   * @return {FetchResult<Models.FirmClientLinkageOutputModel>}
   */
  
  listFirmClientLinkage({ filter }: { filter?: string }): Promise<FetchResult<Models.FirmClientLinkageOutputModel>> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages`,
      parameters: {
        $filter: filter
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.FirmClientLinkageOutputModel>);
  }

  /**
   * Rejects linkage to a firm for a client account
   * This API enables the account admin of a client account to reject linkage request by a firm.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {Models.FirmClientLinkageOutputModel}
   */
  
  rejectFirmClientLinkage({ id }: { id: number }): Promise<Models.FirmClientLinkageOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages/${id}/reject`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.FirmClientLinkageOutputModel);
  }

  /**
   * Reset linkage status between a client and firm back to requested
   * This API enables the firm admin of a client account to reset a previously created linkage request by a firm.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {Models.FirmClientLinkageOutputModel}
   */
  
  resetFirmClientLinkage({ id }: { id: number }): Promise<Models.FirmClientLinkageOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages/${id}/reset`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.FirmClientLinkageOutputModel);
  }

  /**
   * Revokes previously approved linkage to a firm for a client account
   * This API enables the account admin of a client account to revoke a previously approved linkage request by a firm.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id 
   * @return {Models.FirmClientLinkageOutputModel}
   */
  
  revokeFirmClientLinkage({ id }: { id: number }): Promise<Models.FirmClientLinkageOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/firmclientlinkages/${id}/revoke`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.FirmClientLinkageOutputModel);
  }

  /**
   * Request the javascript for a funding setup widget
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique ID number of this funding request
     * @param {Enums.POABusinessUnit} businessUnit The company's business unit (See POABusinessUnit::* for a list of allowable values)
     * @param {Enums.POASubscriptionType} subscriptionType The company's subscription type (See POASubscriptionType::* for a list of allowable values)
   * @return {Models.FundingStatusModel}
   */
  
  activateFundingRequest({ id, businessUnit, subscriptionType }: { id: number, businessUnit?: Enums.POABusinessUnit, subscriptionType?: Enums.POASubscriptionType }): Promise<Models.FundingStatusModel> {
    var path = this.buildUrl({
      url: `/api/v2/fundingrequests/${id}/widget`,
      parameters: {
        businessUnit: businessUnit,
        subscriptionType: subscriptionType
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.FundingStatusModel);
  }

  /**
   * Retrieve status about a funding setup request
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique ID number of this funding request
     * @param {Enums.POABusinessUnit} businessUnit The company's business unit (See POABusinessUnit::* for a list of allowable values)
     * @param {Enums.POASubscriptionType} subscriptionType The company's subscription type (See POASubscriptionType::* for a list of allowable values)
   * @return {Models.FundingStatusModel}
   */
  
  fundingRequestStatus({ id, businessUnit, subscriptionType }: { id: number, businessUnit?: Enums.POABusinessUnit, subscriptionType?: Enums.POASubscriptionType }): Promise<Models.FundingStatusModel> {
    var path = this.buildUrl({
      url: `/api/v2/fundingrequests/${id}`,
      parameters: {
        businessUnit: businessUnit,
        subscriptionType: subscriptionType
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.FundingStatusModel);
  }

  /**
   * Bulk upload GL accounts
   * Allows a bulk upload of GL accounts for the specified company. Use the companyid path parameter to identify the company for which the GL accounts should be uploaded.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this GL account object
     * @param {Models.GLAccountBulkUploadInputModel} model The GL account bulk upload model.
   * @return {Models.GLAccountBulkUploadOutputModel}
   */
  
  bulkUploadGLAccounts({ companyid, model }: { companyid: number, model?: Models.GLAccountBulkUploadInputModel }): Promise<Models.GLAccountBulkUploadOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/glaccounts/$upload`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.GLAccountBulkUploadOutputModel);
  }

  /**
   * Create a new GL account
   * Creates one or more new GL account objects attached to this company.
     * 
     * A GL account is a general ledger account that can be passed to transactions at the line level to apply the multiple rules of the transactions, including exemptions, allocations, etc. to a specific general ledger.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this GL Account object
     * @param {Models.GLAccountRequestModel} model The GL Account you want to create
   * @return {Models.GLAccountSuccessResponseModel}
   */
  
  createGLAccount({ companyid, model }: { companyid: number, model?: Models.GLAccountRequestModel }): Promise<Models.GLAccountSuccessResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/glaccounts`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.GLAccountSuccessResponseModel);
  }

  /**
   * Delete the GL account associated with the given company ID and GL account ID
   * Deletes the GL account associated with the specified `glaccountid` and `companyid`
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this GL account object
     * @param {number} glaccountid The primary key of this GL account
   * @return {Models.TaxProfileErrorResponseModel}
   */
  
  deleteGLAccount({ companyid, glaccountid }: { companyid: number, glaccountid: number }): Promise<Models.TaxProfileErrorResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/glaccounts/${glaccountid}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Models.TaxProfileErrorResponseModel);
  }

  /**
   * Retrieve a single GL account
   * Retrieve details of a single GL account identified by its `glaccountid` and `companyid`
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this GL account object
     * @param {number} glaccountid The primary key of this GL account
   * @return {Models.GLAccountSuccessResponseModel}
   */
  
  getGLAccountById({ companyid, glaccountid }: { companyid: number, glaccountid: number }): Promise<Models.GLAccountSuccessResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/glaccounts/${glaccountid}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.GLAccountSuccessResponseModel);
  }

  /**
   * Retrieve GL accounts for this company
   * Retrieves a list of GL accounts attached to this company. You can apply filters to retrieve specific records.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns these GL accounts
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* companyId, meta, defaultItem
     * @param {string} include A comma separated list of objects to fetch underneath this company. Any object with a URL path underneath this company can be fetched by specifying its name.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.GLAccountSuccessResponseModel>}
   */
  
  listGLAccountsByCompany({ companyid, filter, include, top, skip, orderBy }: { companyid: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.GLAccountSuccessResponseModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/glaccounts`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.GLAccountSuccessResponseModel>);
  }

  /**
   * Update a single GL account
   * Updates a single GL account owned by the company. Use the glaccountid path parameter to identify the GL account to update.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyid The ID of the company that owns this GL Account object
     * @param {number} glaccountid The primary key of this GL Account
     * @param {Models.GLAccountRequestModel} model The GL account object you want to update
   * @return {Models.GLAccountSuccessResponseModel}
   */
  
  updateGLAccount({ companyid, glaccountid, model }: { companyid: number, glaccountid: number, model?: Models.GLAccountRequestModel }): Promise<Models.GLAccountSuccessResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyid}/glaccounts/${glaccountid}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.GLAccountSuccessResponseModel);
  }

  /**
   * Delete all classifications for an item
   * Delete all the classifications for a given item.
     *  
     * A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
     *  
     * When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item.
     * @param {number} itemId The ID of the item you wish to delete the classifications.
   * @return {Models.AssociatedObjectDeletedErrorDetailsModel[]}
   */
  
  batchDeleteItemClassifications({ companyId, itemId }: { companyId: number, itemId: number }): Promise<Array<Models.AssociatedObjectDeletedErrorDetailsModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/classifications`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.AssociatedObjectDeletedErrorDetailsModel>);
  }

  /**
   * Delete all parameters for an item
   * Delete all the parameters for a given item.
     *  
     * Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
     *  
     * A parameter specified on a transaction line will override an item parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item.
     * @param {number} itemId The ID of the item you wish to delete the parameters.
   * @return {Models.AssociatedObjectDeletedErrorDetailsModel[]}
   */
  
  batchDeleteItemParameters({ companyId, itemId }: { companyId: number, itemId: number }): Promise<Array<Models.AssociatedObjectDeletedErrorDetailsModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/parameters`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.AssociatedObjectDeletedErrorDetailsModel>);
  }

  /**
   * Bulk upload items from a product catalog
   * Create/Update one or more item objects attached to this company.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     *  
     * The tax code takes precedence over the tax code id if both are provided.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this items.
     * @param {Models.ItemBulkUploadInputModel} model The items you wish to upload.
   * @return {Models.ItemBulkUploadOutputModel}
   */
  
  bulkUploadItems({ companyId, model }: { companyId: number, model: Models.ItemBulkUploadInputModel }): Promise<Models.ItemBulkUploadOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/upload`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.ItemBulkUploadOutputModel);
  }

  /**
   * Add classifications to an item.
   * Add classifications to an item.
     *  
     * A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
     *  
     * When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
     *  
     * An item may only have one classification per tax system.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} itemId The item id.
     * @param {Models.ItemClassificationInputModel[]} model The item classifications you wish to create.
   * @return {Models.ItemClassificationOutputModel[]}
   */
  
  createItemClassifications({ companyId, itemId, model }: { companyId: number, itemId: number, model: Models.ItemClassificationInputModel[] }): Promise<Array<Models.ItemClassificationOutputModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/classifications`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.ItemClassificationOutputModel>);
  }

  /**
   * Add parameters to an item.
   * Add parameters to an item.
     *  
     * Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
     *  
     * A parameter specified on a transaction line will override an item parameter if they share the same parameter name.
     *  
     * To see available parameters for this item, call `/api/v2/definitions/parameters?$filter=attributeType eq Product`
     *  
     * Some parameters are only available for use if you have subscribed to specific AvaTax services. To see which parameters you are able to use, add the query parameter "$showSubscribed=true" to the parameter definition call above.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item parameter.
     * @param {number} itemId The item id.
     * @param {Models.ItemParameterModel[]} model The item parameters you wish to create.
   * @return {Models.ItemParameterModel[]}
   */
  
  createItemParameters({ companyId, itemId, model }: { companyId: number, itemId: number, model: Models.ItemParameterModel[] }): Promise<Array<Models.ItemParameterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/parameters`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.ItemParameterModel>);
  }

  /**
   * Create a new item
   * Creates one or more new item objects attached to this company.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     *  
     * The tax code takes precedence over the tax code id if both are provided.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item.
     * @param {boolean} processRecommendationsSynchronously If true then Indix api will be called synchronously to get tax code recommendations.
     * @param {Models.ItemModel[]} model The item you wish to create.
   * @return {Models.ItemModel[]}
   */
  
  createItems({ companyId, processRecommendationsSynchronously, model }: { companyId: number, processRecommendationsSynchronously?: boolean, model: Models.ItemModel[] }): Promise<Array<Models.ItemModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items`,
      parameters: {
        processRecommendationsSynchronously: processRecommendationsSynchronously
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.ItemModel>);
  }

  /**
   * Create tags for a item
   * Creates one or more new `Tag` objects attached to this Item.
     *  
     * Item tags puts multiple labels for an item. So that item can be easily grouped by these tags.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that defined these items
     * @param {number} itemId The ID of the item as defined by the company that owns this tag.
     * @param {Models.ItemTagDetailInputModel[]} model Tags you wish to associate with the Item
   * @return {Models.ItemTagDetailOutputModel[]}
   */
  
  createItemTags({ companyId, itemId, model }: { companyId: number, itemId: number, model: Models.ItemTagDetailInputModel[] }): Promise<Array<Models.ItemTagDetailOutputModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/tags`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.ItemTagDetailOutputModel>);
  }

  /**
   * Create a new tax code classification request
   * Creates a new tax code classification request.
     *  
     * Avalara AvaTax system tax codes represent various goods and services classified by industry or consumer categories and
     * major physical similarities. Taxability rules are associated with tax codes. Customers can map their Items to tax codes
     * allowing them to take advantage of thousands of tax rules in the AvaTax engine resulting in accurate taxability determinations.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that creates this request.
     * @param {Models.ItemTaxCodeClassificationRequestInputModel} model The request you wish to create.
   * @return {Models.ItemTaxCodeClassificationRequestOutputModel}
   */
  
  createTaxCodeClassificationRequest({ companyId, model }: { companyId: number, model?: Models.ItemTaxCodeClassificationRequestInputModel }): Promise<Models.ItemTaxCodeClassificationRequestOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/classificationrequests/taxcode`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.ItemTaxCodeClassificationRequestOutputModel);
  }

  /**
   * Delete a single item
   * Deletes the item object at this URL.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details.
     * Use this endpoint to delete an existing item with item code.
     *  
     * Deleting an item will also delete the parameters, classifications, and product categories associated with that item.
     *  
     * NOTE: If your item code contains any of these characters /, +, ? or a space, please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: 'Item/Code' becomes 'Item_-ava2f-_Code'
     * * Replace '+' with '\_-ava2b-\_' For example: 'Item+Code' becomes 'Item_-ava2b-_Code'
     * * Replace '?' with '\_-ava3f-\_' For example: 'Item?Code' becomes 'Item_-ava3f-_Code'
     * * Replace '%' with '\_-ava25-\_' For example: 'Item%Code' becomes 'Item_-ava25-_Code'
     * * Replace '#' with '\_-ava23-\_' For example: 'Item#Code' becomes 'Item_-ava23-_Code'
     * * Replace ''' with '\_-ava27-\_' For example: 'Item'Code' becomes 'Item_-ava27-_Code'
     * * Replace '"' with '\_-ava22-\_' For example: 'Item"Code' becomes 'Item_-ava22-_Code'
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item.
     * @param {string} itemCode The code of the item you want to delete.
   * @return {Models.ObjectDeletedErrorModel[]}
   */
  
  deleteCatalogueItem({ companyId, itemCode }: { companyId: number, itemCode: string }): Promise<Array<Models.ObjectDeletedErrorModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/itemcatalogue/${itemCode}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ObjectDeletedErrorModel>);
  }

  /**
   * Delete a single item
   * Deletes the item object at this URL.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     *  
     * Deleting an item will also delete the parameters and classifications associated with that item.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item.
     * @param {number} id The ID of the item you wish to delete.
   * @return {Models.ObjectDeletedErrorModel[]}
   */
  
  deleteItem({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ObjectDeletedErrorModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ObjectDeletedErrorModel>);
  }

  /**
   * Delete a single item classification.
   * Delete a single item classification.
     *  
     * A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
     *  
     * When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} itemId The item id.
     * @param {number} id The item classification id.
   * @return {Models.ObjectDeletedErrorModel[]}
   */
  
  deleteItemClassification({ companyId, itemId, id }: { companyId: number, itemId: number, id: number }): Promise<Array<Models.ObjectDeletedErrorModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/classifications/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ObjectDeletedErrorModel>);
  }

  /**
   * Delete a single item parameter
   * Delete a single item parameter.
     *  
     * Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
     *  
     * A parameter specified on a transaction line will override an item parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} itemId The item id
     * @param {number} id The parameter id
   * @return {Models.ObjectDeletedErrorModel[]}
   */
  
  deleteItemParameter({ companyId, itemId, id }: { companyId: number, itemId: number, id: number }): Promise<Array<Models.ObjectDeletedErrorModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ObjectDeletedErrorModel>);
  }

  /**
   * Delete item tag by id
   * Deletes the `Tag` object of an Item at this URL.
     *  
     * Item tags puts multiple labels for an item. So that item can be easily grouped by these tags.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that defined these items
     * @param {number} itemId The ID of the item as defined by the company that owns this tag.
     * @param {number} itemTagDetailId The ID of the item tag detail you wish to delete.
   * @return {Models.ObjectDeletedErrorModel[]}
   */
  
  deleteItemTag({ companyId, itemId, itemTagDetailId }: { companyId: number, itemId: number, itemTagDetailId: number }): Promise<Array<Models.ObjectDeletedErrorModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/tags/${itemTagDetailId}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ObjectDeletedErrorModel>);
  }

  /**
   * Delete all item tags
   * Deletes all `Tags` objects of an Item at this URL.
     *  
     * Item tags puts multiple labels for an item. So that item can be easily grouped by these tags.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that defined these items.
     * @param {number} itemId The ID of the item as defined by the company that owns this tag.
   * @return {Models.AssociatedObjectDeletedErrorDetailsModel[]}
   */
  
  deleteItemTags({ companyId, itemId }: { companyId: number, itemId: number }): Promise<Array<Models.AssociatedObjectDeletedErrorDetailsModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/tags`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.AssociatedObjectDeletedErrorDetailsModel>);
  }

  /**
   * Retrieve a single item
   * Get the `Item` object identified by this URL.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item object
     * @param {number} id The primary key of this item
     * @param {string} include A comma separated list of additional data to retrieve.
   * @return {Models.ItemModel}
   */
  
  getItem({ companyId, id, include }: { companyId: number, id: number, include?: string }): Promise<Models.ItemModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.ItemModel);
  }

  /**
   * Retrieve a single item classification.
   * Retrieve a single item classification.
     *  
     * A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
     *  
     * When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} itemId The item id.
     * @param {number} id The item classification id.
   * @return {Models.ItemClassificationOutputModel}
   */
  
  getItemClassification({ companyId, itemId, id }: { companyId: number, itemId: number, id: number }): Promise<Models.ItemClassificationOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/classifications/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.ItemClassificationOutputModel);
  }

  /**
   * Retrieve a single item parameter
   * Retrieve a single item parameter.
     *  
     * Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
     *  
     * A parameter specified on a transaction line will override an item parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} itemId The item id
     * @param {number} id The parameter id
   * @return {Models.ItemParameterModel}
   */
  
  getItemParameter({ companyId, itemId, id }: { companyId: number, itemId: number, id: number }): Promise<Models.ItemParameterModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.ItemParameterModel);
  }

  /**
   * Retrieve tags for an item
   * Get the `Tag` objects of an Item identified by this URL.
     *  
     * Item tags puts multiple labels for an item. So that item can be easily grouped by these tags.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that defined these items
     * @param {number} itemId The ID of the item as defined by the company that owns this tag.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* tagName
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
   * @return {FetchResult<Models.ItemTagDetailOutputModel>}
   */
  
  getItemTags({ companyId, itemId, filter, top, skip }: { companyId: number, itemId: number, filter?: string, top?: number, skip?: number }): Promise<FetchResult<Models.ItemTagDetailOutputModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/tags`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ItemTagDetailOutputModel>);
  }

  /**
   * Get Item TaxCode Recommendations
   * Provides at least three tax-code recommendations for the given company ID and item ID
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId 
     * @param {number} itemId 
   * @return {Models.TaxCodeRecommendationOutputModel[]}
   */
  
  getItemTaxCodeRecommendations({ companyId, itemId }: { companyId: number, itemId: number }): Promise<Array<Models.TaxCodeRecommendationOutputModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/taxcoderecommendations`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Array<Models.TaxCodeRecommendationOutputModel>);
  }

  /**
   * Retrieve premium classification for a company's item based on its ItemCode and SystemCode.
   * Retrieves the premium classification for an ItemCode and SystemCode.
     *  
     * NOTE: If your item code contains any of these characters /, +, ?,",' ,% or #, please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: 'Item/Code' becomes 'Item_-ava2f-_Code'
     * * Replace '+' with '\_-ava2b-\_' For example: 'Item+Code' becomes 'Item_-ava2b-_Code'
     * * Replace '?' with '\_-ava3f-\_' For example: 'Item?Code' becomes 'Item_-ava3f-_Code'
     * * Replace '%' with '\_-ava25-\_' For example: 'Item%Code' becomes 'Item_-ava25-_Code'
     * * Replace '#' with '\_-ava23-\_' For example: 'Item#Code' becomes 'Item_-ava23-_Code'
     * * Replace ''' with '\_-ava27-\_' For example: 'Item'Code' becomes 'Item_-ava27-_Code'
     * * Replace '"' with '\_-ava22-\_' For example: 'Item"Code' becomes 'Item_-ava22-_Code'
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item object
     * @param {string} itemCode The ItemCode of the item for which you want to retrieve premium classification
     * @param {string} systemCode The SystemCode for which you want to retrieve premium classification
   * @return {Models.ItemPremiumClassificationOutputModel}
   */
  
  getPremiumClassification({ companyId, itemCode, systemCode }: { companyId: number, itemCode: string, systemCode: string }): Promise<Models.ItemPremiumClassificationOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemCode}/premiumClassification/${systemCode}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.ItemPremiumClassificationOutputModel);
  }

  /**
   * Retrieve Restrictions for Item by CountryOfImport
   * Retrieve Restrictions for Item by CountryOfImport. This API will only return import restriction for the countryOfImport.
     *  
     * NOTE: If your item code contains any of these characters /, +, ? or a space, please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: 'Item/Code' becomes 'Item_-ava2f-_Code'
     * * Replace '+' with '\_-ava2b-\_' For example: 'Item+Code' becomes 'Item_-ava2b-_Code'
     * * Replace '?' with '\_-ava3f-\_' For example: 'Item?Code' becomes 'Item_-ava3f-_Code'
     * * Replace '%' with '\_-ava25-\_' For example: 'Item%Code' becomes 'Item_-ava25-_Code'
     * * Replace '#' with '\_-ava23-\_' For example: 'Item#Code' becomes 'Item_-ava23-_Code'
     * * Replace ''' with '\_-ava27-\_' For example: 'Item'Code' becomes 'Item_-ava27-_Code'
     * * Replace '"' with '\_-ava22-\_' For example: 'Item"Code' becomes 'Item_-ava22-_Code'
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item object
     * @param {string} itemCode ItemCode for the item
     * @param {string} countryOfImport Country for which you want the restrictions for the Item.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ItemRestrictionOutputModel>}
   */
  
  listImportRestrictions({ companyId, itemCode, countryOfImport, top, skip, orderBy }: { companyId: number, itemCode: string, countryOfImport: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ItemRestrictionOutputModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemCode}/restrictions/import/${countryOfImport}`,
      parameters: {
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ItemRestrictionOutputModel>);
  }

  /**
   * Retrieve classifications for an item.
   * List classifications for an item.
     *  
     * A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
     *  
     * When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
     *  
     * Search for specific objects using the criteria in the `$filter` classification; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` classifications.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} itemId The item id.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* productCode, systemCode, IsPremium
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ItemClassificationOutputModel>}
   */
  
  listItemClassifications({ companyId, itemId, filter, top, skip, orderBy }: { companyId: number, itemId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ItemClassificationOutputModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/classifications`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ItemClassificationOutputModel>);
  }

  /**
   * Retrieve parameters for an item
   * List parameters for an item.
     *  
     * Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
     *  
     * A parameter specified on a transaction line will override an item parameter if they share the same parameter name.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} itemId The item id
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* name, unit, isNeededForCalculation, isNeededForReturns, isNeededForClassification
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ItemParameterModel>}
   */
  
  listItemParameters({ companyId, itemId, filter, top, skip, orderBy }: { companyId: number, itemId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ItemParameterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/parameters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ItemParameterModel>);
  }

  /**
   * Retrieve items for this company
   * List all items defined for the current company.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     *  
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     *  
     * You may specify Tag Name in the `tagName` query parameter if you want to filter items on the basis of tagName
     *  
     * You may specify comma seperated item status in the `itemStatus` query parameter if you want to filter items on the basis of item status
     *  
     * You may specify Tax Code recommendation status in the `taxCodeRecommendationStatus` query parameter if you want to filter items on the basis of tax code recommendation status
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Parameters
     * * Classifications
     * * Tags
     * * Properties
     * * TaxCodeRecommendationStatus
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that defined these items
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, source, sourceEntityId, itemType, upc, summary, classifications, parameters, tags, properties, itemStatus, taxCodeRecommendationStatus, taxCodeRecommendations
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {string} tagName Tag Name on the basis of which you want to filter Items
     * @param {string} itemStatus A comma separated list of item status on the basis of which you want to filter Items
     * @param {string} taxCodeRecommendationStatus Tax code recommendation status on the basis of which you want to filter Items
   * @return {FetchResult<Models.ItemModel>}
   */
  
  listItemsByCompany({ companyId, filter, include, top, skip, orderBy, tagName, itemStatus, taxCodeRecommendationStatus }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string, tagName?: string, itemStatus?: string, taxCodeRecommendationStatus?: string }): Promise<FetchResult<Models.ItemModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy,
        tagName: tagName,
        itemStatus: itemStatus,
        taxCodeRecommendationStatus: taxCodeRecommendationStatus
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ItemModel>);
  }

  /**
   * Retrieve the parameters by companyId and itemId.
   * Returns the list of parameters based on the company's service types and the item code.
     * Ignores nexus if a service type is configured in the 'IgnoreNexusForServiceTypes' configuration section.
     * Ignores nexus for the AvaAlcohol service type.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId Company Identifier.
     * @param {number} itemId Item Identifier.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* serviceTypes, regularExpression, attributeSubType, values
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ParameterModel>}
   */
  
  listRecommendedParameterByCompanyIdAndItemId({ companyId, itemId, filter, top, skip, orderBy }: { companyId: number, itemId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ParameterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/definitions/companies/${companyId}/items/${itemId}/parameters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ParameterModel>);
  }

  /**
   * Retrieve all items
   * Get multiple item objects across all companies.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     *  
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, source, sourceEntityId, itemType, upc, summary, classifications, parameters, tags, properties, itemStatus, taxCodeRecommendationStatus, taxCodeRecommendations
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ItemModel>}
   */
  
  queryItems({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ItemModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ItemModel>);
  }

  /**
   * Retrieve items for this company based on System Code and filter criteria(optional) provided
   * Retrieve items based on System Code
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     *  
     * Search for specific objects by passing the `$filter` criteria in the body; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     *  
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that defined these items
     * @param {string} systemCode System code on the basis of which you want to filter Items
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Models.FilterModel} model A filter statement to select specific records, as defined by https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering .
   * @return {FetchResult<Models.ItemModel>}
   */
  
  queryItemsBySystemCode({ companyId, systemCode, top, skip, orderBy, model }: { companyId: number, systemCode: string, top?: number, skip?: number, orderBy?: string, model?: Models.FilterModel }): Promise<FetchResult<Models.ItemModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/internal/bySystemCode/${systemCode}`,
      parameters: {
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, FetchResult<Models.ItemModel>);
  }

  /**
   * Retrieve all items associated with given tag
   * Get multiple item objects associated with given tag.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     *  
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that defined these items.
     * @param {string} tag The master tag to be associated with item.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, source, sourceEntityId, itemType, upc, summary, classifications, parameters, tags, properties, itemStatus, taxCodeRecommendationStatus, taxCodeRecommendations
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.ItemModel>}
   */
  
  queryItemsByTag({ companyId, tag, filter, include, top, skip, orderBy }: { companyId: number, tag: string, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.ItemModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/bytags/${tag}`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ItemModel>);
  }

  /**
   * Create or update items from a product catalog.
   * Creates/updates one or more item objects with additional properties and the AvaTax category attached to this company.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. Use this endpoint to create
     * a new or update an existing item. This can be used to sync the items with Avalara. For example, an accounting software
     * system can use this to sync all their items from an ERP with Avalara.
     *  
     * Parameters and Classifications can be added with the Item.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item.
     * @param {Models.ItemCatalogueInputModel[]} model The items you want to create or update.
   * @return {Models.ItemCatalogueOutputModel}
   */
  
  syncItemCatalogue({ companyId, model }: { companyId: number, model: Models.ItemCatalogueInputModel[] }): Promise<Models.ItemCatalogueOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/itemcatalogue`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.ItemCatalogueOutputModel);
  }

  /**
   * Sync items from a product catalog
   * Syncs a list of items with AvaTax without waiting for them to be created. It is ideal for syncing large product catalogs
     * with AvaTax.
     *  
     * Any invalid or duplicate items will be ignored. To diagnose why an item is not created, use the normal create transaction API to receive validation information.
     *  
     * This API is currently limited to 1000 items per call (the limit is subject to change).
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this item.
     * @param {Models.SyncItemsRequestModel} model The request object.
   * @return {Models.SyncItemsResponseModel}
   */
  
  syncItems({ companyId, model }: { companyId: number, model: Models.SyncItemsRequestModel }): Promise<Models.SyncItemsResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/sync`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.SyncItemsResponseModel);
  }

  /**
   * Update a single item
   * Replace the existing `Item` object at this URL with an updated object.
     *  
     * Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
     * can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
     * and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
     * from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
     * team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
     *  
     * All data from the existing object will be replaced with data in the object you PUT. To set a field's value to null,
     * you may either set its value to null or omit that field from the object you post.
     *  
     * The tax code takes precedence over the tax code id if both are provided.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that this item belongs to.
     * @param {number} id The ID of the item you wish to update
     * @param {boolean} isRecommendationSelected If true then Set recommendation status to RecommendationSelected
     * @param {Models.ItemModel} model The item object you wish to update.
   * @return {Models.ItemModel}
   */
  
  updateItem({ companyId, id, isRecommendationSelected, model }: { companyId: number, id: number, isRecommendationSelected?: boolean, model: Models.ItemModel }): Promise<Models.ItemModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${id}`,
      parameters: {
        isRecommendationSelected: isRecommendationSelected
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.ItemModel);
  }

  /**
   * Update an item classification.
   * Update an item classification.
     *  
     * A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
     *  
     * When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
     *  
     * An item may only have one classification per tax system.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} itemId The item id.
     * @param {number} id The item classification id.
     * @param {Models.ItemClassificationInputModel} model The item object you wish to update.
   * @return {Models.ItemClassificationOutputModel}
   */
  
  updateItemClassification({ companyId, itemId, id, model }: { companyId: number, itemId: number, id: number, model: Models.ItemClassificationInputModel }): Promise<Models.ItemClassificationOutputModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/classifications/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.ItemClassificationOutputModel);
  }

  /**
   * Update an item parameter
   * Update an item parameter.
     *  
     * Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
     *  
     * A parameter specified on a transaction line will override an item parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} itemId The item id
     * @param {number} id The item parameter id
     * @param {Models.ItemParameterModel} model The item object you wish to update.
   * @return {Models.ItemParameterModel}
   */
  
  updateItemParameter({ companyId, itemId, id, model }: { companyId: number, itemId: number, id: number, model: Models.ItemParameterModel }): Promise<Models.ItemParameterModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/items/${itemId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.ItemParameterModel);
  }

  /**
   * Create one or more overrides
   * Creates one or more jurisdiction override objects for this account.
     *  
     * A Jurisdiction Override is a configuration setting that allows you to select the taxing
     * jurisdiction for a specific address. If you encounter an address that is on the boundary
     * between two different jurisdictions, you can choose to set up a jurisdiction override
     * to switch this address to use different taxing jurisdictions.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that owns this override
     * @param {Models.JurisdictionOverrideModel[]} model The jurisdiction override objects to create
   * @return {Models.JurisdictionOverrideModel[]}
   */
  
  createJurisdictionOverrides({ accountId, model }: { accountId: number, model: Models.JurisdictionOverrideModel[] }): Promise<Array<Models.JurisdictionOverrideModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.JurisdictionOverrideModel>);
  }

  /**
   * Delete a single override
   * Marks the item object at this URL as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that owns this override
     * @param {number} id The ID of the override you wish to delete
   * @return {Models.ErrorDetail[]}
   */
  
  deleteJurisdictionOverride({ accountId, id }: { accountId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single override
   * Get the item object identified by this URL.
     *  
     * A Jurisdiction Override is a configuration setting that allows you to select the taxing
     * jurisdiction for a specific address. If you encounter an address that is on the boundary
     * between two different jurisdictions, you can choose to set up a jurisdiction override
     * to switch this address to use different taxing jurisdictions.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that owns this override
     * @param {number} id The primary key of this override
   * @return {Models.JurisdictionOverrideModel}
   */
  
  getJurisdictionOverride({ accountId, id }: { accountId: number, id: number }): Promise<Models.JurisdictionOverrideModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.JurisdictionOverrideModel);
  }

  /**
   * Retrieve overrides for this account
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that owns this override
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* country, Jurisdictions
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.JurisdictionOverrideModel>}
   */
  
  listJurisdictionOverridesByAccount({ accountId, filter, include, top, skip, orderBy }: { accountId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.JurisdictionOverrideModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.JurisdictionOverrideModel>);
  }

  /**
   * Retrieve all overrides
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* country, Jurisdictions
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.JurisdictionOverrideModel>}
   */
  
  queryJurisdictionOverrides({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.JurisdictionOverrideModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.JurisdictionOverrideModel>);
  }

  /**
   * Update a single jurisdictionoverride
   * Replace the existing jurisdictionoverride object at this URL with an updated object.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that this jurisdictionoverride belongs to.
     * @param {number} id The ID of the jurisdictionoverride you wish to update
     * @param {Models.JurisdictionOverrideModel} model The jurisdictionoverride object you wish to update.
   * @return {Models.JurisdictionOverrideModel}
   */
  
  updateJurisdictionOverride({ accountId, id, model }: { accountId: number, id: number, model: Models.JurisdictionOverrideModel }): Promise<Models.JurisdictionOverrideModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/jurisdictionoverrides/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.JurisdictionOverrideModel);
  }

  /**
   * Add parameters to a location.
   * Add parameters to a location.
     *  
     * Some locations can be taxed differently depending on the properties of that location. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a location will be used by default in tax calculation but will not show on the transaction line referencing the location.
     *  
     * A parameter specified on a transaction line will override a location parameter if they share the same parameter name.
     *  
     * To see available parameters for this location, call `/api/v2/definitions/parameters?$filter=attributeType eq Company`
     *  
     * Some parameters are only available for use if you have subscribed to specific AvaTax services. To see which parameters you are able to use, add the query parameter "$showSubscribed=true" to the parameter definition call above.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this location parameter.
     * @param {number} locationId The location id.
     * @param {Models.LocationParameterModel[]} model The location parameters you wish to create.
   * @return {Models.LocationParameterModel[]}
   */
  
  createLocationParameters({ companyId, locationId, model }: { companyId: number, locationId: number, model: Models.LocationParameterModel[] }): Promise<Array<Models.LocationParameterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${locationId}/parameters`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.LocationParameterModel>);
  }

  /**
   * Create a new location
   * Create one or more new location objects attached to this company.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this location.
     * @param {Models.LocationModel[]} model The location you wish to create.
   * @return {Models.LocationModel[]}
   */
  
  createLocations({ companyId, model }: { companyId: number, model: Models.LocationModel[] }): Promise<Array<Models.LocationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.LocationModel>);
  }

  /**
   * Delete a single location
   * Mark the location object at this URL as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this location.
     * @param {number} id The ID of the location you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteLocation({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Delete a single location parameter
   * Delete a single location parameter.
     *  
     * Some locations can be taxed differently depending on the properties of that location. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a location will be used by default in tax calculation but will not show on the transaction line referencing the location.
     *  
     * A parameter specified on a transaction line will override a location parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} locationId The location id
     * @param {number} id The parameter id
   * @return {Models.ErrorDetail[]}
   */
  
  deleteLocationParameter({ companyId, locationId, id }: { companyId: number, locationId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${locationId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single location
   * Get the location object identified by this URL.
     * An 'Location' represents a physical address where a company does business.
     * Many taxing authorities require that you define a list of all locations where your company does business.
     * These locations may require additional custom configuration or tax registration with these authorities.
     * For more information on metadata requirements, see the '/api/v2/definitions/locationquestions' API.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * LocationSettings
     * * parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this location
     * @param {number} id The primary key of this location
     * @param {string} include A comma separated list of additional data to retrieve.
   * @return {Models.LocationModel}
   */
  
  getLocation({ companyId, id, include }: { companyId: number, id: number, include?: string }): Promise<Models.LocationModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.LocationModel);
  }

  /**
   * Retrieve a single company location parameter
   * Retrieve a single location parameter.
     *  
     * Some locations can be taxed differently depending on the properties of that location. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a location will be used by default in tax calculation but will not show on the transaction line referencing the location.
     *  
     * A parameter specified on a transaction line will override a location parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} locationId The location id
     * @param {number} id The parameter id
   * @return {Models.LocationParameterModel}
   */
  
  getLocationParameter({ companyId, locationId, id }: { companyId: number, locationId: number, id: number }): Promise<Models.LocationParameterModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${locationId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.LocationParameterModel);
  }

  /**
   * Retrieve parameters for a location
   * List parameters for a location.
     *  
     * Some locations can be taxed differently depending on the properties of that location. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a location will be used by default in tax calculation but will not show on the transaction line referencing the location.
     *  
     * A parameter specified on a transaction line will override a location parameter if they share the same parameter name.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} locationId The ID of the location
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* name, unit
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.LocationParameterModel>}
   */
  
  listLocationParameters({ companyId, locationId, filter, top, skip, orderBy }: { companyId: number, locationId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.LocationParameterModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${locationId}/parameters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.LocationParameterModel>);
  }

  /**
   * Retrieve locations for this company
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
     * * parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these locations
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* isMarketplaceOutsideUsa, settings, parameters
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.LocationModel>}
   */
  
  listLocationsByCompany({ companyId, filter, include, top, skip, orderBy }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.LocationModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.LocationModel>);
  }

  /**
   * Retrieve all locations
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
     * * parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* isMarketplaceOutsideUsa, settings, parameters
     * @param {string} include A comma separated list of additional data to retrieve. You may specify `LocationSettings` to retrieve location settings.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.LocationModel>}
   */
  
  queryLocations({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.LocationModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.LocationModel>);
  }

  /**
   * Update a single location
   * Replace the existing location object at this URL with an updated object.
     * All data from the existing object will be replaced with data in the object you PUT.
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that this location belongs to.
     * @param {number} id The ID of the location you wish to update
     * @param {Models.LocationModel} model The location you wish to update.
   * @return {Models.LocationModel}
   */
  
  updateLocation({ companyId, id, model }: { companyId: number, id: number, model: Models.LocationModel }): Promise<Models.LocationModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.LocationModel);
  }

  /**
   * Update a location parameter
   * Update a location parameter.
     *  
     * Some locations can be taxed differently depending on the properties of that location. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a location will be used by default in tax calculation but will not show on the transaction line referencing the location.
     *  
     * A parameter specified on a transaction line will override a location parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} locationId The location id
     * @param {number} id The location parameter id
     * @param {Models.LocationParameterModel} model The location parameter object you wish to update.
   * @return {Models.LocationParameterModel}
   */
  
  updateLocationParameter({ companyId, locationId, id, model }: { companyId: number, locationId: number, id: number, model: Models.LocationParameterModel }): Promise<Models.LocationParameterModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${locationId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.LocationParameterModel);
  }

  /**
   * Validate the location against local requirements
   * Returns validation information for this location.
     * This API call is intended to compare this location against the currently known taxing authority rules and regulations,
     * and provide information about what additional work is required to completely setup this location.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this location
     * @param {number} id The primary key of this location
   * @return {Models.LocationValidationModel}
   */
  
  validateLocation({ companyId, id }: { companyId: number, id: number }): Promise<Models.LocationValidationModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}/validate`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.LocationValidationModel);
  }

  /**
   * Adjust a MultiDocument transaction
   * Adjusts the current MultiDocument transaction uniquely identified by this URL.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * When you adjust a transaction, that transaction's status is recorded as `Adjusted`.
     *  
     * Both the revisions will be available for retrieval based on their code and ID numbers. Only transactions in Committed status can be reported on a tax filing by Avalara's Managed Returns Service.
     *  
     * Transactions that have been previously reported to a tax authority by Avalara Managed Returns are considered locked and are no longer available for adjustments.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} code The transaction code for this MultiDocument transaction
     * @param {Enums.DocumentType} type The transaction type for this MultiDocument transaction (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
     * @param {Models.AdjustMultiDocumentModel} model The adjust request you wish to execute
   * @return {Models.MultiDocumentModel}
   */
  
  adjustMultiDocumentTransaction({ code, type, include, model }: { code: string, type: Enums.DocumentType, include?: string, model: Models.AdjustMultiDocumentModel }): Promise<Models.MultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument/${code}/type/${type}/adjust`,
      parameters: {
        include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.MultiDocumentModel);
  }

  /**
   * Get audit information about a MultiDocument transaction
   * Retrieve audit information about a MultiDocument transaction stored in AvaTax.
     *  
     * The audit API retrieves audit information related to a specific MultiDocument transaction. This audit
     * information includes the following:
     *  
     * * The `code` of the MultiDocument transaction
     * * The `type` of the MultiDocument transaction
     * * The server timestamp representing the exact server time when the transaction was created
     * * The server duration - how long it took to process this transaction
     * * Whether exact API call details were logged
     * * A reconstructed API call showing what the original create call looked like
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} code The transaction code for this MultiDocument transaction
     * @param {Enums.DocumentType} type The transaction type for this MultiDocument transaction (See DocumentType::* for a list of allowable values)
   * @return {Models.AuditMultiDocumentModel}
   */
  
  auditMultiDocumentTransaction({ code, type }: { code: string, type: Enums.DocumentType }): Promise<Models.AuditMultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument/${code}/type/${type}/audit`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.AuditMultiDocumentModel);
  }

  /**
   * Commit a MultiDocument transaction
   * Marks a list of transactions by changing its status to `Committed`.
     *  
     * Transactions that are committed are available to be reported to a tax authority by Avalara Managed Returns.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * Any changes made to a committed transaction will generate a transaction history.
     * 
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.CommitMultiDocumentModel} model The commit request you wish to execute
   * @return {Models.MultiDocumentModel}
   */
  
  commitMultiDocumentTransaction({ model }: { model: Models.CommitMultiDocumentModel }): Promise<Models.MultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument/commit`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.MultiDocumentModel);
  }

  /**
   * Create a new MultiDocument transaction
   * Records a new MultiDocument transaction in AvaTax.
     *  
     * A traditional transaction requires exactly two parties: a seller and a buyer. MultiDocument transactions can
     * involve a marketplace of vendors, each of which contributes some portion of the final transaction. Within
     * a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
     * document. This separation of documents allows each seller to file their taxes separately.
     *  
     * This API will report an error if you attempt to create a transaction when one already exists with the specified `code`.
     * If you would like the API to automatically update the transaction when it already exists, please set the `allowAdjust`
     * value to `true`.
     *  
     * To generate a refund for a transaction, use the `RefundTransaction` API.
     *  
     * The field `type` identifies the kind of transaction - for example, a sale, purchase, or refund. If you do not specify
     * a `type` value, you will receive an estimate of type `SalesOrder`, which will not be recorded.
     *  
     * The origin and destination locations for a transaction must be identified by either address or geocode. For address-based transactions, please
     * provide addresses in the fields `line`, `city`, `region`, `country` and `postalCode`. For geocode-based transactions, please provide the geocode
     * information in the fields `latitude` and `longitude`. If either `latitude` or `longitude` or both are null, the transaction will be calculated
     * using the best available address location information.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * ForceTimeout - Simulates a timeout. This adds a 30 second delay and error to your API call. This can be used to test your code to ensure it can respond correctly in the case of a dropped connection.
     *  
     * If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} include Specifies objects to include in the response after transaction is created
     * @param {Models.CreateMultiDocumentModel} model the multi document transaction model
   * @return {Models.MultiDocumentModel}
   */
  
  createMultiDocumentTransaction({ include, model }: { include?: string, model: Models.CreateMultiDocumentModel }): Promise<Models.MultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.MultiDocumentModel);
  }

  /**
   * Retrieve a MultiDocument transaction
   * Get the current MultiDocument transaction identified by this URL.
     *  
     * If this transaction was adjusted, the return value of this API will be the current transaction with this code.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} code The multidocument code to retrieve
     * @param {Enums.DocumentType} type The transaction type to retrieve (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in the response after transaction is created
   * @return {Models.MultiDocumentModel}
   */
  
  getMultiDocumentTransactionByCodeAndType({ code, type, include }: { code: string, type: Enums.DocumentType, include?: string }): Promise<Models.MultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument/${code}/type/${type}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.MultiDocumentModel);
  }

  /**
   * Retrieve a MultiDocument transaction by ID
   * Get the unique MultiDocument transaction identified by this URL.
     *  
     * A traditional transaction requires exactly two parties: a seller and a buyer. MultiDocument transactions can
     * involve a marketplace of vendors, each of which contributes some portion of the final transaction. Within
     * a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
     * document. This separation of documents allows each seller to file their taxes separately.
     *  
     * This endpoint retrieves the exact transaction identified by this ID number even if that transaction was later adjusted
     * by using the `AdjustTransaction` endpoint.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique ID number of the MultiDocument transaction to retrieve
     * @param {string} include Specifies objects to include in the response after transaction is created
   * @return {Models.MultiDocumentModel}
   */
  
  getMultiDocumentTransactionById({ id, include }: { id: number, include?: string }): Promise<Models.MultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.MultiDocumentModel);
  }

  /**
   * Retrieve all MultiDocument transactions
   * List all MultiDocument transactions within this account.
     *  
     * This endpoint is limited to returning 1,000 MultiDocument transactions at a time. To retrieve more than 1,000 MultiDocument
     * transactions, please use the pagination features of the API.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* documents
     * @param {string} include Specifies objects to include in the response after transaction is created
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.MultiDocumentModel>}
   */
  
  listMultiDocumentTransactions({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.MultiDocumentModel>> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.MultiDocumentModel>);
  }

  /**
   * Create a refund for a MultiDocument transaction
   * Create a refund for a MultiDocument transaction.
     *  
     * A traditional transaction requires exactly two parties: a seller and a buyer. MultiDocument transactions can
     * involve a marketplace of vendors, each of which contributes some portion of the final transaction. Within
     * a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
     * document. This separation of documents allows each seller to file their taxes separately.
     *  
     * The `RefundTransaction` API allows you to quickly and easily create a `ReturnInvoice` representing a refund
     * for a previously created `SalesInvoice` transaction. You can choose to create a full or partial refund, and
     * specify individual line items from the original sale for refund.
     *  
     * The `RefundTransaction` API ensures that the tax amount you refund to the customer exactly matches the tax that
     * was calculated during the original transaction, regardless of any changes to your company's configuration, rules,
     * nexus, or any other setting.
     *  
     * This API is intended to be a shortcut to allow you to quickly and accurately generate a refund for the following
     * common refund scenarios:
     *  
     * * A full refund of a previous sale
     * * Refunding the tax that was charged on a previous sale, when the customer provides an exemption certificate after the purchase
     * * Refunding one or more items (lines) from a previous sale
     * * Granting a customer a percentage refund of a previous sale
     *  
     * For more complex scenarios than the ones above, please use `CreateTransaction` with document type `ReturnInvoice` to
     * create a custom refund transaction.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     *  
     * If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
     * 
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} code The code of this MultiDocument transaction
     * @param {Enums.DocumentType} type The type of this MultiDocument transaction (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in the response after transaction is created
     * @param {Models.RefundTransactionModel} model Information about the refund to create
   * @return {Models.MultiDocumentModel}
   */
  
  refundMultiDocumentTransaction({ code, type, include, model }: { code: string, type: Enums.DocumentType, include?: string, model: Models.RefundTransactionModel }): Promise<Models.MultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument/${code}/type/${type}/refund`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.MultiDocumentModel);
  }

  /**
   * Verify a MultiDocument transaction
   * Verifies that the MultiDocument transaction uniquely identified by this URL matches certain expected values.
     *  
     * If the transaction does not match these expected values, this API will return an error code indicating which value did not match.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.VerifyMultiDocumentModel} model Information from your accounting system to verify against this MultiDocument transaction as it is stored in AvaTax
   * @return {Models.MultiDocumentModel}
   */
  
  verifyMultiDocumentTransaction({ model }: { model: Models.VerifyMultiDocumentModel }): Promise<Models.MultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument/verify`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.MultiDocumentModel);
  }

  /**
   * Void a MultiDocument transaction
   * Voids the current transaction uniquely identified by this URL.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * When you void a transaction, that transaction's status is recorded as `DocVoided`.
     *  
     * Transactions that have been previously reported to a tax authority by Avalara Managed Returns Service are considered `locked`,
     * and they are no longer available to be voided.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} code The transaction code for this MultiDocument transaction
     * @param {Enums.DocumentType} type The transaction type for this MultiDocument transaction (See DocumentType::* for a list of allowable values)
     * @param {Models.VoidTransactionModel} model The void request you wish to execute
   * @return {Models.MultiDocumentModel}
   */
  
  voidMultiDocumentTransaction({ code, type, model }: { code: string, type: Enums.DocumentType, model: Models.VoidTransactionModel }): Promise<Models.MultiDocumentModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/multidocument/${code}/type/${type}/void`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.MultiDocumentModel);
  }

  /**
   * Create a new nexus
   * Creates one or more new nexus declarations attached to this company.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     *  
     * To create a nexus declaration for your company, you must first call the Definitions API `ListNexus` to obtain a
     * list of Avalara-defined nexus. Once you have determined which nexus you wish to declare, you should customize
     * only the user-selectable fields in this object.
     *  
     * The user selectable fields for the nexus object are `companyId`, `effectiveDate`, `endDate`, `localNexusTypeId`,
     * `taxId`, `nexusTypeId`, `hasPermanentEstablishment`, and `isSellerImporterOfRecord`.
     *  
     * When calling `CreateNexus` or `UpdateNexus`, all values in your nexus object except for the user-selectable fields
     * must match an Avalara-defined system nexus object. You can retrieve a list of Avalara-defined system nexus objects
     * by calling `ListNexus`. If any data does not match, AvaTax may not recognize your nexus declaration.
     *  
     * Please note that nexus changes may not take effect immediately and you should plan to update your nexus settings in advance
     * of calculating tax for a location.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this nexus.
     * @param {Models.NexusModel[]} model The nexus you wish to create.
   * @return {Models.NexusModel[]}
   */
  
  createNexus({ companyId, model }: { companyId: number, model: Models.NexusModel[] }): Promise<Array<Models.NexusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.NexusModel>);
  }

  /**
   * Add parameters to a nexus.
   * Add parameters to the nexus.
     * Some tax calculation and reporting are different depending on the properties of the nexus, such as isRemoteSeller. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an nexus will be used by default in tax calculation but will not show on the transaction line referencing the nexus.
     *  
     * A parameter specified on a transaction line will override an nexus parameter if they share the same parameter name.
     *  
     * To see available parameters for this item, call `/api/v2/definitions/parameters?$filter=attributeType eq Nexus`
     *  
     * Some parameters are only available for use if you have subscribed to specific AvaTax services. To see which parameters you are able to use, add the query parameter "$showSubscribed=true" to the parameter definition call above.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this nexus parameter.
     * @param {number} nexusId The nexus id.
     * @param {Models.NexusParameterDetailModel[]} model The nexus parameters you wish to create.
   * @return {Models.NexusParameterDetailModel[]}
   */
  
  createNexusParameters({ companyId, nexusId, model }: { companyId: number, nexusId: number, model: Models.NexusParameterDetailModel[] }): Promise<Array<Models.NexusParameterDetailModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${nexusId}/parameters`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.NexusParameterDetailModel>);
  }

  /**
   * Creates nexus for a list of addresses.
   * This call is intended to simplify adding all applicable nexus to a company, for an address or addresses. Calling this
     * API declares nexus for this company, for the list of addresses provided,
     * for the date range provided. You may also use this API to extend effective date on an already-declared nexus.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     *  
     * Note that not all fields within a nexus can be updated; Avalara publishes a list of all defined nexus at the
     * '/api/v2/definitions/nexus' endpoint.
     *  
     * You may only define nexus matching the official list of declared nexus.
     *  
     * Please note that nexus changes may not take effect immediately and you should plan to update your nexus settings in advance
     * of calculating tax for a location.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that will own this nexus.
     * @param {Models.DeclareNexusByAddressModel[]} model The nexus you wish to create.
   * @return {Models.NexusByAddressModel[]}
   */
  
  declareNexusByAddress({ companyId, model }: { companyId: number, model: Models.DeclareNexusByAddressModel[] }): Promise<Array<Models.NexusByAddressModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/byaddress`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.NexusByAddressModel>);
  }

  /**
   * Delete a single nexus
   * Marks the existing nexus object at this URL as deleted.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     *  
     * Please note that nexus changes may not take effect immediately and you should plan to update your nexus settings in advance
     * of calculating tax for a location.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this nexus.
     * @param {number} id The ID of the nexus you wish to delete.
     * @param {boolean} cascadeDelete If true, deletes all the child nexus if they exist along with parent nexus
   * @return {Models.ErrorDetail[]}
   */
  
  deleteNexus({ companyId, id, cascadeDelete }: { companyId: number, id: number, cascadeDelete?: boolean }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${id}`,
      parameters: {
        cascadeDelete: cascadeDelete
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Delete a single nexus parameter
   * Delete a single nexus parameter.
     * Some tax calculation and reporting are different depending on the properties of the nexus, such as isRemoteSeller. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an nexus will be used by default in tax calculation but will not show on the transaction line referencing the nexus.
     *  
     * A parameter specified on a transaction line will override an nexus parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} nexusId The nexus id
     * @param {number} id The parameter id
   * @return {Models.ErrorDetail[]}
   */
  
  deleteNexusParameter({ companyId, nexusId, id }: { companyId: number, nexusId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${nexusId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Delete all parameters for an nexus
   * Delete all the parameters for a given nexus.
     * Some tax calculation and reporting are different depending on the properties of the nexus, such as isRemoteSeller. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an nexus will be used by default in tax calculation but will not show on the transaction line referencing the nexus.
     *  
     * A parameter specified on a transaction line will override an nexus parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this nexus.
     * @param {number} nexusId The ID of the nexus you wish to delete the parameters.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteNexusParameters({ companyId, nexusId }: { companyId: number, nexusId: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${nexusId}/parameters`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single nexus
   * Get the nexus object identified by this URL.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     *  * Parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this nexus object
     * @param {number} id The primary key of this nexus
     * @param {string} include 
   * @return {Models.NexusModel}
   */
  
  getNexus({ companyId, id, include }: { companyId: number, id: number, include?: string }): Promise<Models.NexusModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.NexusModel);
  }

  /**
   * List company nexus related to a tax form
   * Retrieves a list of nexus related to a tax form.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     *  
     * This API is intended to provide useful information when examining a tax form. If you are about to begin filing
     * a tax form, you may want to know whether you have declared nexus in all the jurisdictions related to that tax
     * form in order to better understand how the form will be filled out.
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     *  * Parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this nexus object
     * @param {string} formCode The form code that we are looking up the nexus for
     * @param {string} include 
   * @return {Models.NexusByTaxFormModel}
   */
  
  getNexusByFormCode({ companyId, formCode, include }: { companyId: number, formCode: string, include?: string }): Promise<Models.NexusByTaxFormModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/byform/${formCode}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.NexusByTaxFormModel);
  }

  /**
   * Retrieve a single nexus parameter
   * Retrieve a single nexus parameter.
     * Some tax calculation and reporting are different depending on the properties of the nexus, such as isRemoteSeller.In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an nexus will be used by default in tax calculation but will not show on the transaction line referencing the nexus.
     *  
     * A parameter specified on a transaction line will override an nexus parameter if they share the same parameter name.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} nexusId The nexus id
     * @param {number} id The parameter id
   * @return {Models.NexusParameterDetailModel}
   */
  
  getNexusParameter({ companyId, nexusId, id }: { companyId: number, nexusId: number, id: number }): Promise<Models.NexusParameterDetailModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${nexusId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.NexusParameterDetailModel);
  }

  /**
   * Retrieve nexus for this company
   * List all nexus objects defined for this company.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     *  * Parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these nexus objects
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxTypeGroup, taxAuthorityId, taxName, parameters
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusModel>}
   */
  
  listNexusByCompany({ companyId, filter, include, top, skip, orderBy }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusModel>);
  }

  /**
   * Retrieve nexus for this company By TaxTypeGroup
   * List all nexus objects defined for this company filtered by TaxTypeGroup.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     *  * Parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these nexus objects
     * @param {string} taxTypeGroup Name of TaxTypeGroup to filter by
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxTypeGroup, taxAuthorityId, taxName, parameters
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusModel>}
   */
  
  listNexusByCompanyAndTaxTypeGroup({ companyId, taxTypeGroup, filter, include, top, skip, orderBy }: { companyId: number, taxTypeGroup: string, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/byTaxTypeGroup/${taxTypeGroup}`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusModel>);
  }

  /**
   * Retrieve parameters for a nexus
   * List parameters for a nexus.
     * Some tax calculation and reporting are different depending on the properties of the nexus, such as isRemoteSeller. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to an nexus will be used by default in tax calculation but will not show on the transaction line referencing the nexus.
     *  
     * A parameter specified on a transaction line will override an nexus parameter if they share the same parameter name.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id
     * @param {number} nexusId The nexus id
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* name, unit
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusParameterDetailModel>}
   */
  
  listNexusParameters({ companyId, nexusId, filter, top, skip, orderBy }: { companyId: number, nexusId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusParameterDetailModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${nexusId}/parameters`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusParameterDetailModel>);
  }

  /**
   * Retrieve all nexus
   * Get multiple nexus objects across all companies.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     *  * Parameters
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxTypeGroup, taxAuthorityId, taxName, parameters
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NexusModel>}
   */
  
  queryNexus({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NexusModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NexusModel>);
  }

  /**
   * Update a single nexus
   * Replace the existing nexus declaration object at this URL with an updated object.
     *  
     * The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
     * taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
     * accountant or lawyer prior to declaring nexus.
     *  
     * To create a nexus declaration for your company, you must first call the Definitions API `ListNexus` to obtain a
     * list of Avalara-defined nexus. Once you have determined which nexus you wish to declare, you should customize
     * only the user-selectable fields in this object.
     *  
     * The user selectable fields for the nexus object are `companyId`, `effectiveDate`, `endDate`, `localNexusTypeId`,
     * `taxId`, `nexusTypeId`, `hasPermanentEstablishment`, and `isSellerImporterOfRecord`.
     *  
     * When calling `CreateNexus` or `UpdateNexus`, all values in your nexus object except for the user-selectable fields
     * must match an Avalara-defined system nexus object. You can retrieve a list of Avalara-defined system nexus objects
     * by calling `ListNexus`. If any data does not match, AvaTax may not recognize your nexus declaration.
     *  
     * Please note that nexus changes may not take effect immediately and you should plan to update your nexus settings in advance
     * of calculating tax for a location.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that this nexus belongs to.
     * @param {number} id The ID of the nexus you wish to update
     * @param {Models.NexusModel} model The nexus object you wish to update.
   * @return {Models.NexusModel}
   */
  
  updateNexus({ companyId, id, model }: { companyId: number, id: number, model: Models.NexusModel }): Promise<Models.NexusModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.NexusModel);
  }

  /**
   * Update an nexus parameter
   * Update an nexus parameter.
     *  
     * Some tax calculation and reporting are different depending on the properties of the nexus, such as isRemoteSeller. In AvaTax, these tax-affecting properties are called "parameters".
     *  
     * A parameter added to a nexus will be used in tax calculation based on the locationcode and parameter value the transaction state line might have lines added.
     *  
     * A parameter specified on a transaction line will override an item parameter if they share the same parameter name.????? I dont know about this?
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The company id.
     * @param {number} nexusId The nexus id
     * @param {number} id The nexus parameter id
     * @param {Models.NexusParameterDetailModel} model The nexus object you wish to update.
   * @return {Models.NexusParameterDetailModel}
   */
  
  updateNexusParameter({ companyId, nexusId, id, model }: { companyId: number, nexusId: number, id: number, model: Models.NexusParameterDetailModel }): Promise<Models.NexusParameterDetailModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/nexus/${nexusId}/parameters/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.NexusParameterDetailModel);
  }

  /**
   * Creates a new tax notice responsibility type.
   * This API is available by invitation only and only available for users with Compliance admin access.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.CreateNoticeResponsibilityTypeModel} model The responsibility type to create
   * @return {Models.NoticeResponsibilityModel}
   */
  
  createNoticeResponsibilityType({ model }: { model: Models.CreateNoticeResponsibilityTypeModel }): Promise<Models.NoticeResponsibilityModel> {
    var path = this.buildUrl({
      url: `/api/v2/notices/responsibilities`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.NoticeResponsibilityModel);
  }

  /**
   * Creates a new tax notice root cause type.
   * This API is available by invitation only and only available for users with Compliance admin access.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.CreateNoticeRootCauseTypeModel} model The root cause type to create
   * @return {Models.NoticeRootCauseModel}
   */
  
  createNoticeRootCauseType({ model }: { model: Models.CreateNoticeRootCauseTypeModel }): Promise<Models.NoticeRootCauseModel> {
    var path = this.buildUrl({
      url: `/api/v2/notices/rootcauses`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.NoticeRootCauseModel);
  }

  /**
   * Delete a tax notice responsibility type.
   * This API is available by invitation only and only available for users with Compliance admin access.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} responsibilityId The unique ID of the responsibility type
   * @return {Models.ErrorDetail[]}
   */
  
  deleteNoticeResponsibilityType({ responsibilityId }: { responsibilityId: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/notices/responsibilities/${responsibilityId}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Delete a tax notice root cause type.
   * This API is available by invitation only and only available for users with Compliance admin access.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} rootCauseId The unique ID of the root cause type
   * @return {Models.ErrorDetail[]}
   */
  
  deleteNoticeRootCauseType({ rootCauseId }: { rootCauseId: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/notices/rootcauses/${rootCauseId}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Mark a single notification as dismissed.
   * Marks the notification identified by this URL as dismissed.
     *  
     * A notification is a message from Avalara that may have relevance to your business. You may want
     * to regularly review notifications and then dismiss them when you are certain that you have addressed
     * any relevant concerns raised by this notification.
     *  
     * An example of a notification would be a message about new software, or a change to AvaTax that may
     * affect you, or a potential issue with your company's tax profile.
     *  
     * When you dismiss a notification, the notification will track the user and time when it was
     * dismissed. You can then later review which employees of your company dismissed notifications to
     * determine if they were resolved appropriately.
     *  
     * A Global notification with null accountId and companyId cannot be dismissed and will expire within a given time span.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The id of the notification you wish to mark as dismissed.
   * @return {Models.NotificationModel}
   */
  
  dismissNotification({ id }: { id: number }): Promise<Models.NotificationModel> {
    var path = this.buildUrl({
      url: `/api/v2/notifications/${id}/dismiss`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: null, clientId: strClientId }, Models.NotificationModel);
  }

  /**
   * Retrieve a single notification.
   * Retrieve a single notification by its unique ID number.
     *  
     * A notification is a message from Avalara that may have relevance to your business. You may want
     * to regularly review notifications and then dismiss them when you are certain that you have addressed
     * any relevant concerns raised by this notification.
     *  
     * An example of a notification would be a message about new software, or a change to AvaTax that may
     * affect you, or a potential issue with your company's tax profile.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The id of the notification to retrieve.
   * @return {Models.NotificationModel}
   */
  
  getNotification({ id }: { id: number }): Promise<Models.NotificationModel> {
    var path = this.buildUrl({
      url: `/api/v2/notifications/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.NotificationModel);
  }

  /**
   * List all notifications.
   * List all notifications.
     *  
     * A notification is a message from Avalara that may have relevance to your business. You may want
     * to regularly review notifications and then dismiss them when you are certain that you have addressed
     * any relevant concerns raised by this notification.
     *  
     * An example of a notification would be a message about new software, or a change to AvaTax that may
     * affect you, or a potential issue with your company's tax profile.
     *  
     * You may search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.NotificationModel>}
   */
  
  listNotifications({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.NotificationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/notifications`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.NotificationModel>);
  }

  /**
   * Request a new Avalara account
   * This API is for use by partner provisioning services customers only.
     *  
     * Avalara invites select partners to refer new customers to the AvaTax service using the onboarding features
     * of AvaTax. These partners can create accounts for new customers using this API.
     *  
     * Calling this API creates an account with the specified product subscriptions, but does not configure billing.
     * The customer will receive information from Avalara about how to configure billing for their account.
     * You should call this API when a customer has requested to begin using Avalara services.
     *  
     * If the newly created account owner wishes, they can confirm that they have read and agree to the Avalara
     * terms and conditions. If they do so, they can receive a license key as part of this API and their
     * API will be created in `Active` status. If the customer has not yet read and accepted these terms and
     * conditions, the account will be created in `New` status and they can receive a license key by logging
     * onto the AvaTax website and reviewing terms and conditions online.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API is available by invitation only.
     * * This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [Provisioning:RequestNewAccount].
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.NewAccountRequestModel} model Information about the account you wish to create and the selected product offerings.
   * @return {Models.NewAccountModel}
   */
  
  requestNewAccount({ model }: { model: Models.NewAccountRequestModel }): Promise<Models.NewAccountModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/request`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.NewAccountModel);
  }

  /**
   * Request a new entitilement to an existing customer
   * This API is for use by partner provisioning services customers only. This allows the partners to add
     * new entitlements to an existing customer.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API is available by invitation only.
     * * This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [Provisioning:RequestNewAccount].
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The avatax account id of the customer
     * @param {string} offer The offer to be added to an already existing customer
   * @return {Models.OfferModel}
   */
  
  requestNewEntitlement({ id, offer }: { id: number, offer: string }): Promise<Models.OfferModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}/entitlements/${offer}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.OfferModel);
  }

  /**
   * Create a new account
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     *  
     * Create a single new account object.
     * When creating an account object you may attach subscriptions and users as part of the 'Create' call.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.AccountModel} model The account you wish to create.
   * @return {Models.AccountModel[]}
   */
  
  createAccount({ model }: { model: Models.AccountModel }): Promise<Array<Models.AccountModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.AccountModel>);
  }

  /**
   * Create new notifications.
   * This API is available by invitation only.
     *  
     * Create a single notification.
     *  
     * A notification is a message from Avalara that may have relevance to your business. You may want
     * to regularly review notifications and then dismiss them when you are certain that you have addressed
     * any relevant concerns raised by this notification.
     *  
     * A Global notification is a message which is directed to all the accounts and is set to expire within
     * a certain time and cannot be dismissed by the user. Make accountId and companyId null to create a global notification.
     *  
     * An example of a notification would be a message about new software, or a change to AvaTax that may
     * affect you, or a potential issue with your company's tax profile.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [NotificationsAPI:Create].
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.NotificationModel[]} model The notifications you wish to create.
   * @return {Models.NotificationModel[]}
   */
  
  createNotifications({ model }: { model: Models.NotificationModel[] }): Promise<Array<Models.NotificationModel>> {
    var path = this.buildUrl({
      url: `/api/v2/notifications`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.NotificationModel>);
  }

  /**
   * Create a new subscription
   * This API is for use by Avalara Registrar administrative users only.
     *  
     * Create one or more new subscription objects attached to this account.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that owns this subscription.
     * @param {Models.SubscriptionModel[]} model The subscription you wish to create.
   * @return {Models.SubscriptionModel[]}
   */
  
  createSubscriptions({ accountId, model }: { accountId: number, model: Models.SubscriptionModel[] }): Promise<Array<Models.SubscriptionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.SubscriptionModel>);
  }

  /**
   * Delete a single account
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     *  
     * Delete an account.
     * Deleting an account will delete all companies, all account level users and license keys attached to this account.
     * 
     * ### Security Policies
     * 
     * * This API requires the user role SystemAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteAccount({ id }: { id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Delete a single notification.
   * This API is available by invitation only.
     *  
     * Delete the existing notification identified by this URL.
     *  
     * A notification is a message from Avalara that may have relevance to your business. You may want
     * to regularly review notifications and then dismiss them when you are certain that you have addressed
     * any relevant concerns raised by this notification.
     *  
     * An example of a notification would be a message about new software, or a change to AvaTax that may
     * affect you, or a potential issue with your company's tax profile.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [NotificationsAPI:Create].
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The id of the notification you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteNotification({ id }: { id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/notifications/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Delete a single subscription
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     *  
     * Mark the existing account identified by this URL as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that owns this subscription.
     * @param {number} id The ID of the subscription you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteSubscription({ accountId, id }: { accountId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve the full list of Avalara-supported subscription (ServiceTypes)
   * For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     *  
     * Returns the full list of Avalara-supported subscription types.
     * This API is intended to be useful for identifying which features you have added to your account.
     * You may always contact Avalara's sales department for information on available products or services.
     * You cannot change your subscriptions/service directly through the API.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxTypeGroupIdSK
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SubscriptionTypeModel>}
   */
  
  listServiceTypes({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SubscriptionTypeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/servicetypes/servicetypes`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SubscriptionTypeModel>);
  }

  /**
   * Reset a user's password programmatically
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     *  
     * Allows a system admin to reset the password for a specific user via the API.
     * This API is only available for Avalara Registrar Admins, and can be used to reset the password of any
     * user based on internal Avalara business processes.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API is available to Avalara system-level (registrar-level) users only.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} userId The unique ID of the user whose password will be changed
     * @param {boolean} isUndoMigrateRequest If user's password was migrated to AI, undo this.
     * @param {Models.SetPasswordModel} model The new password for this user
   * @return {string}
   */
  
  resetPassword({ userId, isUndoMigrateRequest, model }: { userId: number, isUndoMigrateRequest?: boolean, model: Models.SetPasswordModel }): Promise<String> {
    var path = this.buildUrl({
      url: `/api/v2/passwords/${userId}/reset`,
      parameters: {
        isUndoMigrateRequest: isUndoMigrateRequest
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, String);
  }

  /**
   * Update a single account
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     *  
     * Replace an existing account object with an updated account object.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the account you wish to update.
     * @param {Models.AccountModel} model The account object you wish to update.
   * @return {Models.AccountModel}
   */
  
  updateAccount({ id, model }: { id: number, model: Models.AccountModel }): Promise<Models.AccountModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.AccountModel);
  }

  /**
   * Update a single notification.
   * This API is available by invitation only.
     *  
     * Replaces the notification identified by this URL with a new notification.
     *  
     * A notification is a message from Avalara that may have relevance to your business. You may want
     * to regularly review notifications and then dismiss them when you are certain that you have addressed
     * any relevant concerns raised by this notification.
     *  
     * An example of a notification would be a message about new software, or a change to AvaTax that may
     * affect you, or a potential issue with your company's tax profile.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [NotificationsAPI:Create].
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The id of the notification you wish to update.
     * @param {Models.NotificationModel} model The notification object you wish to update.
   * @return {Models.NotificationModel}
   */
  
  updateNotification({ id, model }: { id: number, model: Models.NotificationModel }): Promise<Models.NotificationModel> {
    var path = this.buildUrl({
      url: `/api/v2/notifications/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.NotificationModel);
  }

  /**
   * Update a single subscription
   * # For Registrar Use Only
     * This API is for use by Avalara Registrar administrative users only.
     *  
     * Replace the existing subscription object at this URL with an updated object.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     * All data from the existing object will be replaced with data in the object you PUT.
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: BatchServiceAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that this subscription belongs to.
     * @param {number} id The ID of the subscription you wish to update
     * @param {Models.SubscriptionModel} model The subscription you wish to update.
   * @return {Models.SubscriptionModel}
   */
  
  updateSubscription({ accountId, id, model }: { accountId: number, id: number, model: Models.SubscriptionModel }): Promise<Models.SubscriptionModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.SubscriptionModel);
  }

  /**
   * Download a report
   * This API downloads the file associated with a report.
     *  
     * If the report is not yet complete, you will receive a `ReportNotFinished` error. To check if a report is complete,
     * use the `GetReport` API.
     *  
     * Reports are run as asynchronous report tasks on the server. When complete, the report file will be available for download
     * for up to 30 days after completion. To run an asynchronous report, you should follow these steps:
     *  
     * * Begin a report by calling the report's Initiate API. There is a separate initiate API call for each report type.
     * * In the result of the Initiate API, you receive back a report's `id` value.
     * * Check the status of a report by calling `GetReport` and passing in the report's `id` value.
     * * When a report's status is `Completed`, call `DownloadReport` to retrieve the file.
     *  
     * * We throttle this API. You can only call this API up to 5 times in a minute.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique ID number of this report
   * @return {object}
   */
  
  downloadReport({ id }: { id: number }): Promise<Object> {
    var path = this.buildUrl({
      url: `/api/v2/reports/${id}/attachment`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Object);
  }

  /**
   * Retrieve a single report
   * Retrieve a single report by its unique ID number.
     *  
     * Reports are run as asynchronous report tasks on the server. When complete, the report file will be available for download
     * for up to 30 days after completion. To run an asynchronous report, you should follow these steps:
     *  
     * * Begin a report by calling the report's Initiate API. There is a separate initiate API call for each report type.
     * * In the result of the Initiate API, you receive back a report's `id` value.
     * * Check the status of a report by calling `GetReport` and passing in the report's `id` value.
     * * When a report's status is `Completed`, call `DownloadReport` to retrieve the file.
     *  
     * This API call returns information about any report type.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique ID number of the report to retrieve
   * @return {Models.ReportModel}
   */
  
  getReport({ id }: { id: number }): Promise<Models.ReportModel> {
    var path = this.buildUrl({
      url: `/api/v2/reports/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.ReportModel);
  }

  /**
   * Initiate an ExportDocumentLine report task
   * Begins running an `ExportDocumentLine` report task and returns the identity of the report.
     *  
     * Reports are run as asynchronous report tasks on the server. When complete, the report file will be available for download
     * for up to 30 days after completion. To run an asynchronous report, you should follow these steps:
     *  
     * * Begin a report by calling the report's Initiate API. There is a separate initiate API call for each report type.
     * * In the result of the Initiate API, you receive back a report's `id` value.
     * * Check the status of a report by calling `GetReport` and passing in the report's `id` value.
     * * When a report's status is `Completed`, call `DownloadReport` to retrieve the file.
     *  
     * The `ExportDocumentLine` report produces information about invoice lines recorded within your account.
     *  
     * To split large reports into multiple smaller partitions, use the numberOfPartitions and partition properties on ExportDocumentLineModel.
     *  
     * Example - split a report into three partitions
     *  
     * * Follow the steps above with numberOfPartitions = 3 and partition = 0
     * * Follow the steps above with numberOfPartitions = 3 and partition = 1
     * * Follow the steps above with numberOfPartitions = 3 and partition = 2
     * * Once all three reports are downloaded merge the files on the client side.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The unique ID number of the company to report on.
     * @param {Models.ExportDocumentLineModel} model Options that may be configured to customize the report.
   * @return {Models.ReportModel[]}
   */
  
  initiateExportDocumentLineReport({ companyId, model }: { companyId: number, model: Models.ExportDocumentLineModel }): Promise<Array<Models.ReportModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/reports/exportdocumentline/initiate`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.ReportModel>);
  }

  /**
   * List all report tasks for account
   * List all report tasks for your account.
     *  
     * Reports are run as asynchronous report tasks on the server. When complete, the report file will be available for download
     * for up to 30 days after completion. To run an asynchronous report, you should follow these steps:
     *  
     * * Begin a report by calling the report's Initiate API. There is a separate initiate API call for each report type.
     * * In the result of the Initiate API, you receive back a report's `id` value.
     * * Check the status of a report by calling `GetReport` and passing in the report's `id` value.
     * * When a report's status is `Completed`, call `DownloadReport` to retrieve the file.
     *  
     * This API call returns information about all report types across your entire account.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The id of the company for which to get reports.
     * @param {string} pageKey Provide a page key to retrieve the next page of results.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
   * @return {FetchResult<Models.ReportModel>}
   */
  
  listReports({ companyId, pageKey, skip, top }: { companyId?: number, pageKey?: string, skip?: number, top?: number }): Promise<FetchResult<Models.ReportModel>> {
    var path = this.buildUrl({
      url: `/api/v2/reports`,
      parameters: {
        companyId: companyId,
        pageKey: pageKey,
        $skip: skip,
        $top: top
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.ReportModel>);
  }

  /**
   * Create a new setting
   * Create one or more new setting objects attached to this company.
     *  
     * The company settings system is a metadata system that you can use to store extra information
     * about a company. Your integration or connector could use this data storage to keep track of
     * preference information, reminders, or any other storage that would need to persist even if
     * the customer uninstalls your application.
     *  
     * A setting can refer to any type of data you need to remember about this company object.
     * When creating this object, you may define your own `set`, `name`, and `value` parameters.
     * To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
     *  
     * Use Set = Transactions, Name = TaxCodePrioritization/HSCodePrioritization and Value = Transaction/ItemMaster for prioritizing which TaxCodes/HsCodes should be used for calculating taxes.
     *  
     * Example: To prioritize TaxCodes passed in a Transaction over values stored with Items when calculating tax, use
     * Set = Transactions, Name = TaxCodePrioritization, Value = Transaction
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this setting.
     * @param {Models.SettingModel[]} model The setting you wish to create.
   * @return {Models.SettingModel[]}
   */
  
  createSettings({ companyId, model }: { companyId: number, model: Models.SettingModel[] }): Promise<Array<Models.SettingModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.SettingModel>);
  }

  /**
   * Delete a single setting
   * Mark the setting object at this URL as deleted.
     *  
     * The company settings system is a metadata system that you can use to store extra information
     * about a company. Your integration or connector could use this data storage to keep track of
     * preference information, reminders, or any other storage that would need to persist even if
     * the customer uninstalls your application.
     *  
     * A setting can refer to any type of data you need to remember about this company object.
     * When creating this object, you may define your own `set`, `name`, and `value` parameters.
     * To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this setting.
     * @param {number} id The ID of the setting you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteSetting({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single setting
   * Get a single setting object by its unique ID.
     *  
     * The company settings system is a metadata system that you can use to store extra information
     * about a company. Your integration or connector could use this data storage to keep track of
     * preference information, reminders, or any other storage that would need to persist even if
     * the customer uninstalls your application.
     *  
     * A setting can refer to any type of data you need to remember about this company object.
     * When creating this object, you may define your own `set`, `name`, and `value` parameters.
     * To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this setting
     * @param {number} id The primary key of this setting
   * @return {Models.SettingModel}
   */
  
  getSetting({ companyId, id }: { companyId: number, id: number }): Promise<Models.SettingModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.SettingModel);
  }

  /**
   * Retrieve all settings for this company
   * List all setting objects attached to this company.
     *  
     * The company settings system is a metadata system that you can use to store extra information
     * about a company. Your integration or connector could use this data storage to keep track of
     * preference information, reminders, or any other storage that would need to persist even if
     * the customer uninstalls your application.
     *  
     * A setting can refer to any type of data you need to remember about this company object.
     * When creating this object, you may define your own `set`, `name`, and `value` parameters.
     * To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these settings
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* modifiedDate, ModifiedUserId
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SettingModel>}
   */
  
  listSettingsByCompany({ companyId, filter, include, top, skip, orderBy }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SettingModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SettingModel>);
  }

  /**
   * Retrieve all settings
   * Get multiple setting objects across all companies.
     *  
     * The company settings system is a metadata system that you can use to store extra information
     * about a company. Your integration or connector could use this data storage to keep track of
     * preference information, reminders, or any other storage that would need to persist even if
     * the customer uninstalls your application.
     *  
     * A setting can refer to any type of data you need to remember about this company object.
     * When creating this object, you may define your own `set`, `name`, and `value` parameters.
     * To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* modifiedDate, ModifiedUserId
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SettingModel>}
   */
  
  querySettings({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SettingModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SettingModel>);
  }

  /**
   * Update a single setting
   * Replace the existing setting object at this URL with an updated object.
     *  
     * The company settings system is a metadata system that you can use to store extra information
     * about a company. Your integration or connector could use this data storage to keep track of
     * preference information, reminders, or any other storage that would need to persist even if
     * the customer uninstalls your application.
     *  
     * A setting can refer to any type of data you need to remember about this company object.
     * When creating this object, you may define your own `set`, `name`, and `value` parameters.
     * To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
     *  
     * All data from the existing object will be replaced with data in the object you `PUT`.
     *  
     * To set a field's value to `null`, you may either set its value to `null` or omit that field from the object when calling update.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that this setting belongs to.
     * @param {number} id The ID of the setting you wish to update
     * @param {Models.SettingModel} model The setting you wish to update.
   * @return {Models.SettingModel}
   */
  
  updateSetting({ companyId, id, model }: { companyId: number, id: number, model: Models.SettingModel }): Promise<Models.SettingModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/settings/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.SettingModel);
  }

  /**
   * Retrieve a single subscription
   * Get the subscription object identified by this URL.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that owns this subscription
     * @param {number} id The primary key of this subscription
   * @return {Models.SubscriptionModel}
   */
  
  getSubscription({ accountId, id }: { accountId: number, id: number }): Promise<Models.SubscriptionModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.SubscriptionModel);
  }

  /**
   * Retrieve subscriptions for this account
   * List all subscription objects attached to this account.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The ID of the account that owns these subscriptions
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptionDescription
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SubscriptionModel>}
   */
  
  listSubscriptionsByAccount({ accountId, filter, top, skip, orderBy }: { accountId: number, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SubscriptionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/subscriptions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SubscriptionModel>);
  }

  /**
   * Retrieve all subscriptions
   * Get multiple subscription objects across all accounts.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptionDescription
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.SubscriptionModel>}
   */
  
  querySubscriptions({ filter, top, skip, orderBy }: { filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.SubscriptionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/subscriptions`,
      parameters: {
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SubscriptionModel>);
  }

  /**
   * Create a new tax code
   * Create one or more new taxcode objects attached to this company.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this tax code.
     * @param {Models.TaxCodeModel[]} model The tax code you wish to create.
   * @return {Models.TaxCodeModel[]}
   */
  
  createTaxCodes({ companyId, model }: { companyId: number, model: Models.TaxCodeModel[] }): Promise<Array<Models.TaxCodeModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.TaxCodeModel>);
  }

  /**
   * Delete a single tax code
   * Marks the existing TaxCode object at this URL as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this tax code.
     * @param {number} id The ID of the tax code you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteTaxCode({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single tax code
   * Get the taxcode object identified by this URL.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this tax code
     * @param {number} id The primary key of this tax code
   * @return {Models.TaxCodeModel}
   */
  
  getTaxCode({ companyId, id }: { companyId: number, id: number }): Promise<Models.TaxCodeModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.TaxCodeModel);
  }

  /**
   * Retrieve tax codes for this company
   * List all taxcode objects attached to this company.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these tax codes
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxCodeModel>}
   */
  
  listTaxCodesByCompany({ companyId, filter, include, top, skip, orderBy }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxCodeModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxCodeModel>);
  }

  /**
   * Retrieve all tax codes
   * Get multiple taxcode objects across all companies.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxCodeModel>}
   */
  
  queryTaxCodes({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxCodeModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxCodeModel>);
  }

  /**
   * Update a single tax code
   * Replace the existing taxcode object at this URL with an updated object.
     * A 'TaxCode' represents a uniquely identified type of product, good, or service.
     * Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
     * If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
     * taxability rules for this product in all supported jurisdictions.
     * All data from the existing object will be replaced with data in the object you PUT.
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that this tax code belongs to.
     * @param {number} id The ID of the tax code you wish to update
     * @param {Models.TaxCodeModel} model The tax code you wish to update.
   * @return {Models.TaxCodeModel}
   */
  
  updateTaxCode({ companyId, id, model }: { companyId: number, id: number, model: Models.TaxCodeModel }): Promise<Models.TaxCodeModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxcodes/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.TaxCodeModel);
  }

  /**
   * Build a multi-location tax content file
   * Builds a tax content file containing information useful for a retail point-of-sale solution.
     *  
     * Since tax rates may change based on decisions made by a variety of tax authorities, we recommend
     * that users of this tax content API download new data every day. Many tax authorities may finalize
     * decisions on tax changes at unexpected times and may make changes in response to legal issues or
     * governmental priorities. Any tax content downloaded for future time periods is subject to change
     * if tax rates or tax laws change.
     *  
     * A TaxContent file contains a matrix of the taxes that would be charged when you sell any of your
     * Items at any of your Locations. To create items, use `CreateItems()`. To create locations, use
     * `CreateLocations()`. The file is built by looking up the tax profile for your location and your
     * item and calculating taxes for each in turn. To include a custom `TaxCode` in this tax content
     * file, first create the custom tax code using `CreateTaxCodes()` to create the custom tax code,
     * then use `CreateItems()` to create an item that uses the custom tax code.
     *  
     * This data file can be customized for specific partner devices and usage conditions.
     *  
     * The result of this API is the file you requested in the format you requested using the `responseType` field.
     *  
     * This API builds the file on demand, and is limited to files with no more than 7500 scenarios. To build a tax content
     * file for a single location at a time, please use `BuildTaxContentFileForLocation`.
     *  
     * NOTE: This API does not work for Tennessee tax holiday scenarios.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.PointOfSaleDataRequestModel} model Parameters about the desired file format and report format, specifying which company, locations and TaxCodes to include.
   * @return {object}
   */
  
  buildTaxContentFile({ model }: { model: Models.PointOfSaleDataRequestModel }): Promise<Object> {
    var path = this.buildUrl({
      url: `/api/v2/pointofsaledata/build`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Object);
  }

  /**
   * Build a tax content file for a single location
   * Builds a tax content file containing information useful for a retail point-of-sale solution.
     *  
     * Since tax rates may change based on decisions made by a variety of tax authorities, we recommend
     * that users of this tax content API download new data every day. Many tax authorities may finalize
     * decisions on tax changes at unexpected times and may make changes in response to legal issues or
     * governmental priorities. Any tax content downloaded for future time periods is subject to change
     * if tax rates or tax laws change.
     *  
     * A TaxContent file contains a matrix of the taxes that would be charged when you sell any of your
     * Items at any of your Locations. To create items, use `CreateItems()`. To create locations, use
     * `CreateLocations()`. The file is built by looking up the tax profile for your location and your
     * item and calculating taxes for each in turn. To include a custom `TaxCode` in this tax content
     * file, first create the custom tax code using `CreateTaxCodes()` to create the custom tax code,
     * then use `CreateItems()` to create an item that uses the custom tax code.
     *  
     * This data file can be customized for specific partner devices and usage conditions.
     *  
     * The result of this API is the file you requested in the format you requested using the `responseType` field.
     *  
     * This API builds the file on demand, and is limited to files with no more than 7500 scenarios. To build a tax content
     * file for a multiple locations in a single file, please use `BuildTaxContentFile`.
     *  
     * NOTE: This API does not work for Tennessee tax holiday scenarios.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID number of the company that owns this location.
     * @param {number} id The ID number of the location to retrieve point-of-sale data.
     * @param {Date} date The date for which point-of-sale data would be calculated (today by default)
     * @param {Enums.PointOfSaleFileType} format The format of the file (JSON by default) (See PointOfSaleFileType::* for a list of allowable values)
     * @param {Enums.PointOfSalePartnerId} partnerId If specified, requests a custom partner-formatted version of the file. (See PointOfSalePartnerId::* for a list of allowable values)
     * @param {boolean} includeJurisCodes When true, the file will include jurisdiction codes in the result.
   * @return {object}
   */
  
  buildTaxContentFileForLocation({ companyId, id, date, format, partnerId, includeJurisCodes }: { companyId: number, id: number, date?: Date, format?: Enums.PointOfSaleFileType, partnerId?: Enums.PointOfSalePartnerId, includeJurisCodes?: boolean }): Promise<Object> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/locations/${id}/pointofsaledata`,
      parameters: {
        date: date,
        format: format,
        partnerId: partnerId,
        includeJurisCodes: includeJurisCodes
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Object);
  }

  /**
   * Download a file listing tax rates by postal code
   * Download a CSV file containing all five digit postal codes in the United States and their sales
     * and use tax rates for tangible personal property.
     *  
     * Since tax rates may change based on decisions made by a variety of tax authorities, we recommend
     * that users of this tax content API download new data every day. Many tax authorities may finalize
     * decisions on tax changes at unexpected times and may make changes in response to legal issues or
     * governmental priorities. Any tax content downloaded for future time periods is subject to change
     * if tax rates or tax laws change.
     *  
     * This rates file is intended to be used as a default for tax calculation when your software cannot
     * call the `CreateTransaction` API call. When using this file, your software will be unable to
     * handle complex tax rules such as:
     *  
     * * Zip+4 - This tax file contains five digit zip codes only.
     * * Different product types - This tax file contains tangible personal property tax rates only.
     * * Mixed sourcing - This tax file cannot be used to resolve origin-based taxes.
     * * Threshold-based taxes - This tax file does not contain information about thresholds.
     *  
     * If you use this file to provide default tax rates, please ensure that your software calls `CreateTransaction`
     * to reconcile the actual transaction and determine the difference between the estimated general tax
     * rate and the final transaction tax.
     *  
     * The file provided by this API is in CSV format with the following columns:
     *  
     * * ZIP_CODE - The five digit zip code for this record.
     * * STATE_ABBREV - A valid two character US state abbreviation for this record. Zip codes may span multiple states.
     * * COUNTY_NAME - A valid county name for this record. Zip codes may span multiple counties.
     * * CITY_NAME - A valid city name for this record. Zip codes may span multiple cities.
     * * STATE_SALES_TAX - The state component of the sales tax rate.
     * * STATE_USE_TAX - The state component of the use tax rate.
     * * COUNTY_SALES_TAX - The county component of the sales tax rate.
     * * COUNTY_USE_TAX - The county component of the use tax rate.
     * * CITY_SALES_TAX - The city component of the sales tax rate.
     * * CITY_USE_TAX - The city component of the use tax rate.
     * * TOTAL_SALES_TAX - The total tax rate for sales tax for this postal code. This value may not equal the sum of the state/county/city due to special tax jurisdiction rules.
     * * TOTAL_USE_TAX - The total tax rate for use tax for this postal code. This value may not equal the sum of the state/county/city due to special tax jurisdiction rules.
     * * TAX_SHIPPING_ALONE - This column contains 'Y' if shipping is taxable.
     * * TAX_SHIPPING_AND_HANDLING_TOGETHER - This column contains 'Y' if shipping and handling are taxable when sent together.
     *  
     * For more detailed tax content, please use the `BuildTaxContentFile` API which allows usage of exact items and exact locations.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Date} date The date for which point-of-sale data would be calculated (today by default). Example input: 2016-12-31
     * @param {string} region A two character region code which limits results to a specific region.
   * @return {object}
   */
  
  downloadTaxRatesByZipCode({ date, region }: { date: Date, region?: string }): Promise<Object> {
    var path = this.buildUrl({
      url: `/api/v2/taxratesbyzipcode/download/${date}`,
      parameters: {
        region: region
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Object);
  }

  /**
   * Sales tax rates for a specified address
   * Usage of this API is subject to rate limits. Users who exceed the rate limit will receive HTTP
     * response code 429 - `Too Many Requests`.
     *  
     * This API assumes that you are selling general tangible personal property at a retail point-of-sale
     * location in the United States only.
     *  
     * Please be advised that this endpoint is designed for approximate tax rate estimation only and 
     * may not yield precise results. For a more powerful and accurate tax estimation, upgrade to the 
     * `CreateTransaction` API, which offers a variety of advanced features including, but not limited
     * to:
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
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} line1 The street address of the location.
     * @param {string} line2 The street address of the location.
     * @param {string} line3 The street address of the location.
     * @param {string} city The city name of the location.
     * @param {string} region Name or ISO 3166 code identifying the region within the country.     This field supports many different region identifiers:   * Two and three character ISO 3166 region codes   * Fully spelled out names of the region in ISO supported languages   * Common alternative spellings for many regions     For a full list of all supported codes and names, please see the Definitions API `ListRegions`.
     * @param {string} postalCode The postal code of the location.
     * @param {string} country Name or ISO 3166 code identifying the country.     This field supports many different country identifiers:   * Two character ISO 3166 codes   * Three character ISO 3166 codes   * Fully spelled out names of the country in ISO supported languages   * Common alternative spellings for many countries     For a full list of all supported codes and names, please see the Definitions API `ListCountries`.
   * @return {Models.TaxRateModel}
   */
  
  taxRatesByAddress({ line1, line2, line3, city, region, postalCode, country }: { line1: string, line2?: string, line3?: string, city?: string, region: string, postalCode: string, country: string }): Promise<Models.TaxRateModel> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.TaxRateModel);
  }

  /**
   * Sales tax rates for a specified country and postal code. This API is only available for US postal codes.
   * This API is only available for a US postal codes.
     *  
     * Usage of this API is subject to rate limits. Users who exceed the rate limit will receive HTTP
     * response code 429 - `Too Many Requests`.
     *  
     * This API assumes that you are selling general tangible personal property at a retail point-of-sale
     * location in the United States only.
     *  
     * Please be advised that this endpoint is designed for approximate tax rate estimation only and 
     * may not yield precise results. For a more powerful and accurate tax estimation, upgrade to the 
     * `CreateTransaction` API, which offers a variety of advanced features including, but not limited
     * to:
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
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country Name or ISO 3166 code identifying the country.     This field supports many different country identifiers:   * Two character ISO 3166 codes   * Three character ISO 3166 codes   * Fully spelled out names of the country in ISO supported languages   * Common alternative spellings for many countries     For a full list of all supported codes and names, please see the Definitions API `ListCountries`.
     * @param {string} postalCode The postal code of the location.
   * @return {Models.TaxRateModel}
   */
  
  taxRatesByPostalCode({ country, postalCode }: { country: string, postalCode: string }): Promise<Models.TaxRateModel> {
    var path = this.buildUrl({
      url: `/api/v2/taxrates/bypostalcode`,
      parameters: {
        country: country,
        postalCode: postalCode
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.TaxRateModel);
  }

  /**
   * Create new Country Coefficients. If already exist update them.
   * Create one or more Country Coefficients for particular country.
     *  
     * We would like to use country coefficients during Cross-Border calculations to slightly increase or decrease
     * a calculation for a line based on the tax-subtype and Country of destination for a transaction.
     *  
     * This will allow AvaTax to minimize the variance caused between actual transaction taken place on ground Vs Tax
     * Calculated by AvaTax.
     *  
     * Make sure to use the same API to update the country coefficients that is already present in the database.
     * This will make existing entry for specific country as ineffective for that date. And new entry created will get applicable
     * to the newer transactions.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.CountryCoefficientsRequestEntity} model The Country Coefficients for specific country you wish to create.
   * @return {Models.CountryCoefficientsResponseModel[]}
   */
  
  createCountryCoefficients({ model }: { model?: Models.CountryCoefficientsRequestEntity }): Promise<Array<Models.CountryCoefficientsResponseModel>> {
    var path = this.buildUrl({
      url: `/api/v2/countryCoefficients`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Array<Models.CountryCoefficientsResponseModel>);
  }

  /**
   * Create a new tax rule
   * Create one or more custom tax rules attached to this company.
     *  
     * A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
     * can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
     * charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
     * with the transaction.
     *  
     * You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
     * business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
     * custom tax rules to redefine the behavior for your company or item.
     *  
     * Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
     * auditor, legal representative, and accounting team.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this tax rule.
     * @param {Models.TaxRuleModel[]} model The tax rule you wish to create.
   * @return {Models.TaxRuleModel[]}
   */
  
  createTaxRules({ companyId, model }: { companyId: number, model: Models.TaxRuleModel[] }): Promise<Array<Models.TaxRuleModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.TaxRuleModel>);
  }

  /**
   * Delete a single tax rule
   * Mark the custom tax rule identified by this URL as deleted.
     *  
     * A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
     * can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
     * charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
     * with the transaction.
     *  
     * You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
     * business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
     * custom tax rules to redefine the behavior for your company or item.
     *  
     * Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
     * auditor, legal representative, and accounting team.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this tax rule.
     * @param {number} id The ID of the tax rule you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteTaxRule({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single tax rule
   * Get the taxrule object identified by this URL.
     *  
     * A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
     * can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
     * charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
     * with the transaction.
     *  
     * You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
     * business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
     * custom tax rules to redefine the behavior for your company or item.
     *  
     * Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
     * auditor, legal representative, and accounting team.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this tax rule
     * @param {number} id The primary key of this tax rule
   * @return {Models.TaxRuleModel}
   */
  
  getTaxRule({ companyId, id }: { companyId: number, id: number }): Promise<Models.TaxRuleModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.TaxRuleModel);
  }

  /**
   * Retrieve country coefficients for specific country
   * Retrieve all or any specific records of Country Coefficients based on the filters(optional) for specific country.
     *  
     *  Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     *  Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} country Country for which data need to be pulled for.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* CoefficientsId, AccountId, ModifiedUserId, CreatedUserId
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.CountryCoefficientsEntity>}
   */
  
  listCountryCoefficients({ country, filter, include, top, skip, orderBy }: { country: string, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.CountryCoefficientsEntity>> {
    var path = this.buildUrl({
      url: `/api/v2/${country}/CountryCoefficients`,
      parameters: {
        $filter: filter,
        $include: include,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CountryCoefficientsEntity>);
  }

  /**
   * Retrieve tax rules for this company
   * List all taxrule objects attached to this company.
     *  
     * A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
     * can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
     * charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
     * with the transaction.
     *  
     * You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
     * business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
     * custom tax rules to redefine the behavior for your company or item.
     *  
     * Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
     * auditor, legal representative, and accounting team.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these tax rules
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, taxTypeCode, taxRuleProductDetail, rateTypeCode, taxTypeGroup, taxSubType, unitOfBasis
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxRuleModel>}
   */
  
  listTaxRules({ companyId, filter, include, top, skip, orderBy }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxRuleModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxRuleModel>);
  }

  /**
   * Retrieve all tax rules
   * Get multiple taxrule objects across all companies.
     *  
     * A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
     * can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
     * charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
     * with the transaction.
     *  
     * You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
     * business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
     * custom tax rules to redefine the behavior for your company or item.
     *  
     * Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
     * auditor, legal representative, and accounting team.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, taxTypeCode, taxRuleProductDetail, rateTypeCode, taxTypeGroup, taxSubType, unitOfBasis
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TaxRuleModel>}
   */
  
  queryTaxRules({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TaxRuleModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TaxRuleModel>);
  }

  /**
   * Update a single tax rule
   * Replace the existing custom tax rule object at this URL with an updated object.
     *  
     * A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
     * can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
     * charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
     * with the transaction.
     *  
     * You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
     * business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
     * custom tax rules to redefine the behavior for your company or item.
     *  
     * Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
     * auditor, legal representative, and accounting team.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that this tax rule belongs to.
     * @param {number} id The ID of the tax rule you wish to update
     * @param {Models.TaxRuleModel} model The tax rule you wish to update.
   * @return {Models.TaxRuleModel}
   */
  
  updateTaxRule({ companyId, id, model }: { companyId: number, id: number, model: Models.TaxRuleModel }): Promise<Models.TaxRuleModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/taxrules/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.TaxRuleModel);
  }

  /**
   * Add lines to an existing unlocked transaction
   * Add lines to an existing unlocked transaction.
     *  
     *  The `AddLines` API allows you to add additional transaction lines to existing transaction, so that customer will
     *  be able to append multiple calls together and form an extremely large transaction. If customer does not specify line number
     *  in the lines to be added, a new random Guid string will be generated for line number. If customer are not satisfied with
     *  the line number for the transaction lines, they can turn on the renumber switch to have REST v2 automatically renumber all
     *  transaction lines for them, in this case, the line number becomes: "1", "2", "3", ...
     *  
     *  A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     *  sales, purchases, inventory transfer, and returns (also called refunds).
     *  You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     *  * Lines
     *  * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     *  * Summary (implies details)
     *  * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     *  
     *  If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} include Specifies objects to include in the response after transaction is created
     * @param {Models.AddTransactionLineModel} model information about the transaction and lines to be added
   * @return {Models.TransactionModel}
   */
  
  addLines({ include, model }: { include?: string, model: Models.AddTransactionLineModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/transactions/lines/add`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Correct a previously created transaction
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
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to adjust
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to adjust. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
     * @param {Models.AdjustTransactionModel} model The adjustment you wish to make
   * @return {Models.TransactionModel}
   */
  
  adjustTransaction({ companyCode, transactionCode, documentType, include, model }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string, model: Models.AdjustTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/adjust`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Get audit information about a transaction
   * Retrieve audit information about a transaction stored in AvaTax.
     *  
     * The `AuditTransaction` API retrieves audit information related to a specific transaction. This audit
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
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The code identifying the company that owns this transaction
     * @param {string} transactionCode The code identifying the transaction
   * @return {Models.AuditTransactionModel}
   */
  
  auditTransaction({ companyCode, transactionCode }: { companyCode: string, transactionCode: string }): Promise<Models.AuditTransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/audit`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.AuditTransactionModel);
  }

  /**
   * Get audit information about a transaction
   * Retrieve audit information about a transaction stored in AvaTax.
     *  
     * The `AuditTransaction` API retrieves audit information related to a specific transaction. This audit
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
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The code identifying the company that owns this transaction
     * @param {string} transactionCode The code identifying the transaction
     * @param {Enums.DocumentType} documentType The document type of the original transaction (See DocumentType::* for a list of allowable values)
   * @return {Models.AuditTransactionModel}
   */
  
  auditTransactionWithType({ companyCode, transactionCode, documentType }: { companyCode: string, transactionCode: string, documentType: Enums.DocumentType }): Promise<Models.AuditTransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/types/${documentType}/audit`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.AuditTransactionModel);
  }

  /**
   * Lock a set of documents
   * This API is available by invitation only.
     *  
     * Lock a set of transactions uniquely identified by DocumentIds provided. This API allows locking multiple documents at once.
     * After this API call succeeds, documents will be locked and can't be voided.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * 
     * ### Security Policies
     * 
     * * This API requires the user role Compliance Root User.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.BulkLockTransactionModel} model bulk lock request
   * @return {Models.BulkLockTransactionResult}
   */
  
  bulkLockTransaction({ model }: { model: Models.BulkLockTransactionModel }): Promise<Models.BulkLockTransactionResult> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/lock`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.BulkLockTransactionResult);
  }

  /**
   * Change a transaction's code
   * Renames a transaction uniquely identified by this URL by changing its `code` value.
     *  
     * This API is available as long as the transaction is in `saved` or `posted` status. When a transaction
     * is `committed`, it can be modified by using the [AdjustTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/) method.
     *  
     * After this API call succeeds, the transaction will have a new URL matching its new `code`.
     *  
     * If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to change
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to change document code. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
     * @param {Models.ChangeTransactionCodeModel} model The code change request you wish to execute
   * @return {Models.TransactionModel}
   */
  
  changeTransactionCode({ companyCode, transactionCode, documentType, include, model }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string, model: Models.ChangeTransactionCodeModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/changecode`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Commit a transaction for reporting
   * Marks a transaction by changing its status to `Committed`.
     *  
     * Transactions that are committed are available to be reported to a tax authority by Avalara Managed Returns.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
     *  
     * Any changes made to a committed transaction will generate a transaction history.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to commit
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to commit. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
     * @param {Models.CommitTransactionModel} model The commit request you wish to execute
   * @return {Models.TransactionModel}
   */
  
  commitTransaction({ companyCode, transactionCode, documentType, include, model }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string, model: Models.CommitTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/commit`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Create or adjust a transaction
   * Records a new transaction or adjust an existing transaction in AvaTax.
     *  
     * The `CreateOrAdjustTransaction` endpoint is used to create a new transaction or update an existing one. This API
     * can help you create an idempotent service that creates transactions
     * If there exists a transaction identified by code, the original transaction will be adjusted by using the meta data
     * in the input transaction.
     *  
     * The `CreateOrAdjustTransaction` API cannot modify any transaction that has been reported to a tax authority using
     * the Avalara Managed Returns Service or any other tax filing service. If you call this API to attempt to modify
     * a transaction that has been reported on a tax filing, you will receive the error `CannotModifyLockedTransaction`.
     *  
     * To generate a refund for a transaction, use the `RefundTransaction` API.
     *  
     * An address is required for calculation. If no address is provided at the line level, the document level address will be used.
     * 
     * If you don't specify the field `type` in your request, you will get an estimate of type `SalesOrder`, which will not be recorded in the database.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * ForceTimeout - Simulates a timeout. This adds a 30 second delay and error to your API call. This can be used to test your code to ensure it can respond correctly in the case of a dropped connection.
     *  
     * If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
     *  
     * NOTE: Avoid using the following strings in your transaction codes as they are encoding strings and will be interpreted differently:
     * * \_-ava2f-\_
     * * \_-ava2b-\_
     * * \_-ava3f-\_
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} include Specifies objects to include in the response after transaction is created
     * @param {Models.CreateOrAdjustTransactionModel} model The transaction you wish to create or adjust
   * @return {Models.TransactionModel}
   */
  
  createOrAdjustTransaction({ include, model }: { include?: string, model: Models.CreateOrAdjustTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/createoradjust`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Create a new transaction
   * Records a new transaction in AvaTax.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * The `CreateTransaction` endpoint uses the tax profile of your company to identify the correct tax rules
     * and rates to apply to all line items in this transaction. The end result will be the total tax calculated by AvaTax based on your
     * company's configuration and the data provided in this API call.
     *  
     * The `CreateTransaction` API will report an error if a committed transaction already exists with the same `code`. To
     * avoid this error, use the `CreateOrAdjustTransaction` API - it will create the transaction if it does not exist, or
     * update it if it does exist.
     *  
     * To generate a refund for a transaction, use the `RefundTransaction` API.
     *  
     * An address is required for calculation. If no address is provided at the line level, the document level address will be used.
     * 
     * The field `type` identifies the kind of transaction - for example, a sale, purchase, or refund. If you do not specify
     * a `type` value, you will receive an estimate of type `SalesOrder`, which will not be recorded.
     *  
     * The origin and destination locations for a transaction must be identified by either address or geocode. For address-based transactions, please
     * provide addresses in the fields `line`, `city`, `region`, `country` and `postalCode`. For geocode-based transactions, please provide the geocode
     * information in the fields `latitude` and `longitude`. If either `latitude` or `longitude` or both are null, the transaction will be calculated
     * using the best available address location information.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * ForceTimeout - Simulates a timeout. This adds a 30 second delay and error to your API call. This can be used to test your code to ensure it can respond correctly in the case of a dropped connection.
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
     *  
     * NOTE: Avoid using the following strings in your transaction codes as they are encoding strings and will be interpreted differently:
     * * \_-ava2f-\_
     * * \_-ava2b-\_
     * * \_-ava3f-\_
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} include Specifies objects to include in the response after transaction is created
     * @param {Models.CreateTransactionModel} model The transaction you wish to create
   * @return {Models.TransactionModel}
   */
  
  createTransaction({ include, model }: { include?: string, model: Models.CreateTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/create`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Remove lines from an existing unlocked transaction
   * Remove lines to an existing unlocked transaction.
     *  
     *  The `DeleteLines` API allows you to remove transaction lines from existing unlocked transaction, so that customer will
     *  be able to delete transaction lines and adjust original transaction the way they like
     *  
     *  A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     *  sales, purchases, inventory transfer, and returns (also called refunds).
     *  You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     *  * Lines
     *  * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     *  * Summary (implies details)
     *  * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     *  
     *  If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} include Specifies objects to include in the response after transaction is created
     * @param {Models.RemoveTransactionLineModel} model information about the transaction and lines to be removed
   * @return {Models.TransactionModel}
   */
  
  deleteLines({ include, model }: { include?: string, model: Models.RemoveTransactionLineModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/transactions/lines/delete`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Fetches the Variance data generated for all the transactions done by Company.
   * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode 
   * @return {Models.VarianceResponseModel}
   */
  
  getAllVarianceReportByCompanyCode({ companyCode }: { companyCode: string }): Promise<Models.VarianceResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/AllVariance`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.VarianceResponseModel);
  }

  /**
   * Retrieve a single transaction by code
   * Get the current transaction identified by this company code, transaction code, and document type.
     *  
     * A transaction is uniquely identified by `companyCode`, `code` (often called Transaction Code), and `documentType`.
     *  
     * For compatibility purposes, when this API finds multiple transactions with the same transaction code, and if you have not specified
     * the `type` parameter to this API, it will default to selecting the `SalesInvoices` transaction. To change this behavior, use the
     * optional `documentType` parameter to specify the specific document type you wish to find.
     *  
     * If this transaction was adjusted, the return value of this API will be the current transaction with this code.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to retrieve
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to retrieve (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
   * @return {Models.TransactionModel}
   */
  
  getTransactionByCode({ companyCode, transactionCode, documentType, include }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Retrieve a single transaction by code
   * DEPRECATED: Please use the `GetTransactionByCode` API instead.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to retrieve
     * @param {Enums.DocumentType} documentType The transaction type to retrieve (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
   * @return {Models.TransactionModel}
   */
  
  getTransactionByCodeAndType({ companyCode, transactionCode, documentType, include }: { companyCode: string, transactionCode: string, documentType: Enums.DocumentType, include?: string }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/types/${documentType}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Retrieve a single transaction by ID
   * Get the unique transaction identified by this URL.
     *  
     * This endpoint retrieves the exact transaction identified by this ID number, as long as it is the most version of the transaction.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The unique ID number of the transaction to retrieve
     * @param {string} include Specifies objects to include in this fetch call
   * @return {Models.TransactionModel}
   */
  
  getTransactionById({ id, include }: { id: number, include?: string }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/transactions/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Fetches the Variance data generated for particular Company by transaction ID
   * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode 
     * @param {string} transactionId 
   * @return {Models.VarianceResponseModel}
   */
  
  getVarianceReportByCompanyCodeByTransactionId({ companyCode, transactionId }: { companyCode: string, transactionId: string }): Promise<Models.VarianceResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionId}/variance`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.VarianceResponseModel);
  }

  /**
   * Retrieve all transactions
   * List all transactions attached to this company.
     *  
     * This endpoint is limited to returning 1,000 transactions at a time maximum.
     *  
     * When listing transactions, you must specify a `date` range filter. If you do not specify a `$filter` that includes a `date` field
     * criteria, the query will default to looking at only those transactions with `date` in the past 30 days.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {number} dataSourceId Optionally filter transactions to those from a specific data source.
     * @param {string} include Specifies objects to include in this fetch call
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* exchangeRateCurrencyCode, totalDiscount, lines, addresses, locationTypes, summary, taxDetailsByTaxType, parameters, userDefinedFields, messages, invoiceMessages, isFakeTransaction, deliveryTerms, apStatusCode, apStatus
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.TransactionModel>}
   */
  
  listTransactionsByCompany({ companyCode, dataSourceId, include, filter, top, skip, orderBy }: { companyCode: string, dataSourceId?: number, include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.TransactionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions`,
      parameters: {
        dataSourceId: dataSourceId,
        $include: include,
        $filter: filter,
        $top: top,
        $skip: skip,
        $orderBy: orderBy
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.TransactionModel>);
  }

  /**
   * Lock a single transaction
   * Lock a transaction uniquely identified by this URL.
     *  
     * This API is mainly used for connector developers to simulate what happens when the Returns product locks a document.
     * After this API call succeeds, the document will be locked and can't be voided or adjusted.
     *  
     * On Sandbox, this API is only available to customers who have both an AvaTaxPro and a Managed Returns subscription. On Production, this API is only available internally for the Avalara Returns team.
     *  
     * If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to lock
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to lock. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
     * @param {Models.LockTransactionModel} model The lock request you wish to execute
   * @return {Models.TransactionModel}
   */
  
  lockTransaction({ companyCode, transactionCode, documentType, include, model }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string, model: Models.LockTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/lock`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Create a refund for a transaction
   * Create a refund for a transaction.
     *  
     * The `RefundTransaction` API allows you to quickly and easily create a `ReturnInvoice` representing a refund
     * for a previously created `SalesInvoice` transaction. You can choose to create a full or partial refund, and
     * specify individual line items from the original sale for refund.
     *  
     * The `RefundTransaction` API ensures that the tax amount you refund to the customer exactly matches the tax that
     * was calculated during the original transaction, regardless of any changes to your company's configuration, rules,
     * nexus, or any other setting.
     *  
     * This API is intended to be a shortcut to allow you to quickly and accurately generate a refund for the following
     * common refund scenarios:
     *  
     * * A full refund of a previous sale
     * * Refunding the tax that was charged on a previous sale, when the customer provides an exemption certificate after the purchase
     * * Refunding one or more items (lines) from a previous sale
     * * Granting a customer a percentage refund of a previous sale
     *  
     * For more complex scenarios than the ones above, please use `CreateTransaction` with document type `ReturnInvoice` to
     * create a custom refund transaction.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     * If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The code of the company that made the original sale
     * @param {string} transactionCode The transaction code of the original sale
     * @param {string} include Specifies objects to include in the response after transaction is created
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to refund. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {boolean} useTaxDateOverride (Optional): If set to true, processes refund using taxDateOverride rather than taxAmountOverride (Note: taxAmountOverride is not allowed for SST states).
     * @param {Models.RefundTransactionModel} model Information about the refund to create
   * @return {Models.TransactionModel}
   */
  
  refundTransaction({ companyCode, transactionCode, include, documentType, useTaxDateOverride, model }: { companyCode: string, transactionCode: string, include?: string, documentType?: Enums.DocumentType, useTaxDateOverride?: boolean, model: Models.RefundTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/refund`,
      parameters: {
        $include: include,
        documentType: documentType,
        useTaxDateOverride: useTaxDateOverride
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Perform multiple actions on a transaction
   * Performs one or more actions against the current transaction uniquely identified by this URL.
     *  
     * The `SettleTransaction` API call can perform the work of `ChangeCode`, `VerifyTransaction`, and `CommitTransaction`.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
     *  
     * This API is available for users who want to execute more than one action at a time.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to settle
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to settle. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
     * @param {Models.SettleTransactionModel} model The data from an external system to reconcile against AvaTax
   * @return {Models.TransactionModel}
   */
  
  settleTransaction({ companyCode, transactionCode, documentType, include, model }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string, model: Models.SettleTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/settle`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Uncommit a transaction for reporting
   * Adjusts a transaction by changing it to an uncommitted status.
     *  
     * Transactions that have been previously reported to a tax authority by Avalara Managed Returns are considered `locked` and are
     * no longer available to be uncommitted.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to Uncommit
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to Uncommit. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
   * @return {Models.TransactionModel}
   */
  
  uncommitTransaction({ companyCode, transactionCode, documentType, include }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/uncommit`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Unvoids a transaction
   * Unvoids a voided transaction
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to commit
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to commit. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
   * @return {Models.TransactionModel}
   */
  
  unvoidTransaction({ companyCode, transactionCode, documentType, include }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/unvoid`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: null, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Generates the Variance report which will capture the difference between "Tax Calculated by Avalara" Vs "Actual Tax" paid at custom clearance at line / header level.
   * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode 
     * @param {Models.VarianceRequestModel[]} model 
   * @return {Models.VarianceResponseModel}
   */
  
  varianceReport({ companyCode, model }: { companyCode: string, model: Models.VarianceRequestModel[] }): Promise<Models.VarianceResponseModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/variance`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.VarianceResponseModel);
  }

  /**
   * Verify a transaction
   * Verifies that the transaction uniquely identified by this URL matches certain expected values.
     *  
     * If the transaction does not match these expected values, this API will return an error code indicating which value did not match.
     *  
     * If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to settle
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to verify. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
     * @param {Models.VerifyTransactionModel} model The data from an external system to reconcile against AvaTax
   * @return {Models.TransactionModel}
   */
  
  verifyTransaction({ companyCode, transactionCode, documentType, include, model }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string, model: Models.VerifyTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/verify`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Void a transaction
   * Voids the current transaction uniquely identified by this URL.
     *  
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *  
     * When you void a transaction, that transaction's status is recorded as `DocVoided`.
     *  
     * If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
     *  
     * Transactions that have been previously reported to a tax authority by Avalara Managed Returns are no longer available to be voided.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * Lines
     * * Details (implies lines)
     * * AccountPayableSalesTaxDetails (implies lines - only for Account Payable transaction)
     * * Summary (implies details)
     * * Addresses
     * * SummaryOnly (omit lines and details - reduces API response size)
     * * LinesOnly (omit details - reduces API response size)
     * * TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
     *  
     * NOTE: If your companyCode or transactionCode contains any of these characters /, +, ? or a space please use the following encoding before making a request:
     * * Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
     * * Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
     * * Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code
     * * Replace '%' with '\_-ava25-\_' For example: document%Code becomes document_-ava25-_Code
     * * Replace '#' with '\_-ava23-\_' For example: document#Code becomes document_-ava23-_Code
     * * Replace ' ' with '%20' For example: document Code becomes document%20Code
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, BatchServiceAdmin, CompanyAdmin, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded this transaction
     * @param {string} transactionCode The transaction code to void
     * @param {Enums.DocumentType} documentType (Optional): The document type of the transaction to void. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
     * @param {string} include Specifies objects to include in this fetch call
     * @param {Models.VoidTransactionModel} model The void request you wish to execute. To void a transaction the code must be set to 'DocVoided'
   * @return {Models.TransactionModel}
   */
  
  voidTransaction({ companyCode, transactionCode, documentType, include, model }: { companyCode: string, transactionCode: string, documentType?: Enums.DocumentType, include?: string, model: Models.VoidTransactionModel }): Promise<Models.TransactionModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/void`,
      parameters: {
        documentType: documentType,
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.TransactionModel);
  }

  /**
   * Create a new UPC
   * Create one or more new UPC objects attached to this company.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaUpc.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this UPC.
     * @param {Models.UPCModel[]} model The UPC you wish to create.
   * @return {Models.UPCModel[]}
   */
  
  createUPCs({ companyId, model }: { companyId: number, model: Models.UPCModel[] }): Promise<Array<Models.UPCModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.UPCModel>);
  }

  /**
   * Delete a single UPC
   * Marks the UPC object identified by this URL as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaUpc.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this UPC.
     * @param {number} id The ID of the UPC you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteUPC({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single UPC
   * Get the UPC object identified by this URL.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaUpc.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns this UPC
     * @param {number} id The primary key of this UPC
   * @return {Models.UPCModel}
   */
  
  getUPC({ companyId, id }: { companyId: number, id: number }): Promise<Models.UPCModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.UPCModel);
  }

  /**
   * Retrieve UPCs for this company
   * List all UPC objects attached to this company.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaUpc.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that owns these UPCs
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.UPCModel>}
   */
  
  listUPCsByCompany({ companyId, filter, include, top, skip, orderBy }: { companyId: number, filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.UPCModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.UPCModel>);
  }

  /**
   * Retrieve all UPCs
   * Get multiple UPC objects across all companies.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
     * * This API depends on the following active services:*Required* (all): AvaUpc.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
     * @param {string} include A comma separated list of additional data to retrieve.
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.UPCModel>}
   */
  
  queryUPCs({ filter, include, top, skip, orderBy }: { filter?: string, include?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.UPCModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.UPCModel>);
  }

  /**
   * Update a single UPC
   * Replace the existing UPC object at this URL with an updated object.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     * All data from the existing object will be replaced with data in the object you PUT.
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaUpc.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The ID of the company that this UPC belongs to.
     * @param {number} id The ID of the UPC you wish to update
     * @param {Models.UPCModel} model The UPC you wish to update.
   * @return {Models.UPCModel}
   */
  
  updateUPC({ companyId, id, model }: { companyId: number, id: number, model: Models.UPCModel }): Promise<Models.UPCModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/upcs/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.UPCModel);
  }

  /**
   * Delete a User Defined Field by User Defined Field id for a company.
   * Marks the existing user defined field for a company as deleted.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The id of the company the User Defined Field belongs to.
     * @param {number} id The id of the User Defined Field you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteUserDefinedField({ companyId, id }: { companyId: number, id: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/userdefinedfields/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * 
   * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId 
     * @param {Enums.UserDefinedFieldType} udfType Document or Line level UDF (See UserDefinedFieldType::* for a list of allowable values)
     * @param {boolean} allowDefaults If true this will add defaulted UDFs to the list that are not named yet
   * @return {FetchResult<Models.CompanyUserDefinedFieldModel>}
   */
  
  listUserDefinedFieldsByCompanyId({ companyId, udfType, allowDefaults }: { companyId: number, udfType?: Enums.UserDefinedFieldType, allowDefaults?: boolean }): Promise<FetchResult<Models.CompanyUserDefinedFieldModel>> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/userdefinedfields`,
      parameters: {
        udfType: udfType,
        allowDefaults: allowDefaults
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.CompanyUserDefinedFieldModel>);
  }

  /**
   * Update a User Defined Field identified by id for a company
   * Updates a User Defined Field for a company.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
     * * This API depends on the following active services:*Required* (all): AvaTaxPro, BasicReturns.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} companyId The id of the company the user defined field belongs to.
     * @param {number} id 
     * @param {Models.CompanyUserDefinedFieldModel} model 
   * @return {Models.CompanyUserDefinedFieldModel}
   */
  
  updateUserDefinedField({ companyId, id, model }: { companyId: number, id?: number, model: Models.CompanyUserDefinedFieldModel }): Promise<Models.CompanyUserDefinedFieldModel> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyId}/userdefinedfields`,
      parameters: {
        id: id
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.CompanyUserDefinedFieldModel);
  }

  /**
   * Change Password
   * Allows a user to change their password via an API call.
     *  
     * This API allows an authenticated user to change their password via an API call. This feature is only available
     * for accounts that do not use SAML integrated password validation.
     *  
     * This API only allows the currently authenticated user to change their password; it cannot be used to apply to a
     * different user than the one authenticating the current API call.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {Models.PasswordChangeModel} model An object containing your current password and the new password.
   * @return {string}
   */
  
  changePassword({ model }: { model: Models.PasswordChangeModel }): Promise<String> {
    var path = this.buildUrl({
      url: `/api/v2/passwords`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, String);
  }

  /**
   * Create new users
   * Create one or more new user objects attached to this account.
     *  
     * A user represents one person with access privileges to make API calls and work with a specific account.
     *  
     * Users who are account administrators or company users are permitted to create user records to invite
     * additional team members to work with AvaTax.
     *  
     * A newly created user will receive an email inviting them to create their password. This means that you
     * must provide a valid email address for all user accounts created.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The unique ID number of the account where these users will be created.
     * @param {Models.UserModel[]} model The user or array of users you wish to create.
   * @return {Models.UserModel[]}
   */
  
  createUsers({ accountId, model }: { accountId: number, model: Models.UserModel[] }): Promise<Array<Models.UserModel>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Array<Models.UserModel>);
  }

  /**
   * Delete a single user
   * Mark the user object identified by this URL as deleted.
     *  
     * This API is available for use by account and company administrators only.
     *  
     * Account and company administrators may only delete users within the appropriate organizations
     * they control.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, BatchServiceAdmin, CompanyAdmin, Compliance Root User, CSPTester, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TreasuryAdmin.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the user you wish to delete.
     * @param {number} accountId The accountID of the user you wish to delete.
   * @return {Models.ErrorDetail[]}
   */
  
  deleteUser({ id, accountId }: { id: number, accountId: number }): Promise<Array<Models.ErrorDetail>> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId }, Array<Models.ErrorDetail>);
  }

  /**
   * Retrieve a single user
   * Get the user object identified by this URL.
     * A user represents one person with access privileges to make API calls and work with a specific account.
     *  
     *  You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * FetchDeleted
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the user to retrieve.
     * @param {number} accountId The accountID of the user you wish to get.
     * @param {string} include Optional fetch commands.
   * @return {Models.UserModel}
   */
  
  getUser({ id, accountId, include }: { id: number, accountId: number, include?: string }): Promise<Models.UserModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users/${id}`,
      parameters: {
        $include: include
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.UserModel);
  }

  /**
   * Retrieve all entitlements for a single user
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
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the user to retrieve.
     * @param {number} accountId The accountID of the user you wish to get.
   * @return {Models.UserEntitlementModel}
   */
  
  getUserEntitlements({ id, accountId }: { id: number, accountId: number }): Promise<Models.UserEntitlementModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users/${id}/entitlements`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.UserEntitlementModel);
  }

  /**
   * Retrieve users for this account
   * List all user objects attached to this account.
     * A user represents one person with access privileges to make API calls and work with a specific account.
     *  
     * When an API is called using a legacy AvaTax License Key, the API log entry is recorded as being performed by a special user attached to that license key.
     * By default, this API will not return a listing of license key users. Users with registrar-level security may call this API to list license key users.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * FetchDeleted
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} accountId The accountID of the user you wish to list.
     * @param {string} include Optional fetch commands.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* SuppressNewUserEmail
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.UserModel>}
   */
  
  listUsersByAccount({ accountId, include, filter, top, skip, orderBy }: { accountId: number, include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.UserModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.UserModel>);
  }

  /**
   * Retrieve all users
   * Get multiple user objects across all accounts.
     *  
     * A user represents one person or set of credentials with access privileges to make API calls and work with a specific account. A user can be authenticated
     * via either username / password authentication, an OpenID / OAuth Bearer Token, or a legacy AvaTax License Key.
     *  
     * When an API is called using a legacy AvaTax License Key, the API log entry is recorded as being performed by a special user attached to that license key.
     * By default, this API will not return a listing of license key users. Users with registrar-level security may call this API to list license key users.
     *  
     * Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
     *  
     * You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
     *  
     * * FetchDeleted
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, ECMAccountUser, ECMCompanyUser, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} include Optional fetch commands.
     * @param {string} filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* SuppressNewUserEmail
     * @param {number} top If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {number} skip If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
     * @param {string} orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
   * @return {FetchResult<Models.UserModel>}
   */
  
  queryUsers({ include, filter, top, skip, orderBy }: { include?: string, filter?: string, top?: number, skip?: number, orderBy?: string }): Promise<FetchResult<Models.UserModel>> {
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
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.UserModel>);
  }

  /**
   * Update a single user
   * Replace the existing user object at this URL with an updated object.
     * A user represents one person with access privileges to make API calls and work with a specific account.
     * All data from the existing object will be replaced with data in the object you PUT.
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     * 
     * ### Security Policies
     * 
     * * This API requires one of the following user roles: AccountAdmin, AccountUser, BatchServiceAdmin, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {number} id The ID of the user you wish to update.
     * @param {number} accountId The accountID of the user you wish to update.
     * @param {Models.UserModel} model The user object you wish to update.
   * @return {Models.UserModel}
   */
  
  updateUser({ id, accountId, model }: { id: number, accountId: number, model: Models.UserModel }): Promise<Models.UserModel> {
    var path = this.buildUrl({
      url: `/api/v2/accounts/${accountId}/users/${id}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.UserModel);
  }

  /**
   * Checks if the current user is subscribed to a specific service
   * Returns a subscription object for the current account, or 404 Not Found if this subscription is not enabled for this account.
     *  
     * This API will return an error if it is called with invalid authentication credentials.
     *  
     * This API is intended to help you determine whether you have the necessary subscription to use certain API calls
     * within AvaTax. You can examine the subscriptions returned from this API call to look for a particular product
     * or subscription to provide useful information to the current user as to whether they are entitled to use
     * specific features of AvaTax.
   * Swagger Name: AvaTaxClient
   *
   * 
     * @param {string} serviceTypeId The service to check
   * @return {Models.SubscriptionModel}
   */
  
  getMySubscription({ serviceTypeId }: { serviceTypeId: string }): Promise<Models.SubscriptionModel> {
    var path = this.buildUrl({
      url: `/api/v2/utilities/subscriptions/${serviceTypeId}`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.SubscriptionModel);
  }

  /**
   * List all services to which the current user is subscribed
   * Returns the list of all subscriptions enabled for the currently logged in user.
     *  
     * This API will return an error if it is called with invalid authentication credentials.
     *  
     * This API is intended to help you determine whether you have the necessary subscription to use certain API calls
     * within AvaTax. You can examine the subscriptions returned from this API call to look for a particular product
     * or subscription to provide useful information to the current user as to whether they are entitled to use
     * specific features of AvaTax.
   * Swagger Name: AvaTaxClient
   *
   * 
   * @return {FetchResult<Models.SubscriptionModel>}
   */
  
  listMySubscriptions(): Promise<FetchResult<Models.SubscriptionModel>> {
    var path = this.buildUrl({
      url: `/api/v2/utilities/subscriptions`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, FetchResult<Models.SubscriptionModel>);
  }

  /**
   * Tests connectivity and version of the service
   * Check connectivity to AvaTax and return information about the AvaTax API server.
     *  
     * This API is intended to help you verify that your connection is working. This API will always succeed and will
     * never return a error. It provides basic information about the server you connect to:
     *  
     * * `version` - The version number of the AvaTax API server that responded to your request. The AvaTax API version number is updated once per month during Avalara's update process.
     * * `authenticated` - A boolean flag indicating whether or not you sent valid credentials with your API request.
     * * `authenticationType` - If you provided valid credentials to the API, this field will tell you whether you used Bearer, Username, or LicenseKey authentication.
     * * `authenticatedUserName` - If you provided valid credentials to the API, this field will tell you the username of the currently logged in user.
     * * `authenticatedUserId` - If you provided valid credentials to the API, this field will tell you the user ID of the currently logged in user.
     * * `authenticatedAccountId` - If you provided valid credentials to the API, this field will contain the account ID of the currently logged in user.
     *  
     * This API helps diagnose connectivity problems between your application and AvaTax; you may call this API even
     * if you do not have verified connection credentials. If this API fails, either your computer is not connected to
     * the internet, or there is a routing problem between your office and Avalara, or the Avalara server is not available.
     * For more information on the uptime of AvaTax, please see [Avalara's AvaTax Status Page](https://status.avalara.com/).
     * 
     * ### Security Policies
     * 
     * * This API may be called without providing authentication credentials.
   * Swagger Name: AvaTaxClient
   *
   * 
   * @return {Models.PingResultModel}
   */
  
  ping(): Promise<Models.PingResultModel> {
    var path = this.buildUrl({
      url: `/api/v2/utilities/ping`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.PingResultModel);
  }

  /**
   * Fetches a previously stored age verification response.
   * The request must meet the following criteria in order to be evaluated:
     * * *firstName*, *lastName*, and *address* are required fields.
     * * One of the following sets of attributes are required for the *address*:
     *  * *line1, city, region*
     *  * *line1, postalCode*
     * 
     * * Optionally, the request may use the following parameters:
     * * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21).
     * * Beyond the required *address* fields above, a *country* field is permitted
     *  * The valid values for this attribute are [*US, USA*]
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {Models.AgeVerifyRequest} model Information about the individual whose age is being verified.
   * @return {Models.AgeVerifyResult}
   */
  
  findAgeVerification({ model }: { model: Models.AgeVerifyRequest }): Promise<Models.AgeVerifyResult> {
    var path = this.buildUrl({
      url: `/api/v2/ageverification/store/identity/find`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.AgeVerifyResult);
  }

  /**
   * Stores an age verification response for the account.
   * The request field must meet the following criteria in order to be evaluated:
     * * *firstName*, *lastName*, and *address* are required fields.
     * * One of the following sets of attributes are required for the *address*:
     *  * *line1, city, region*
     *  * *line1, postalCode*
     * 
     * * Optionally, request field may use the following parameters:
     * * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21).
     * * Beyond the required *address* fields above, a *country* field is permitted
     *  * The valid values for this attribute are [*US, USA*]
     * 
     * 
     * The response field must meet the following criteria in order to be evaluated:
     * * *isOfAge*, *failureCodes* are required fields
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {Models.StoreAgeVerifyRequest} model Information about the individual whose age has been verified and the corresponding age verification response.
   * @return {}
   */
  
  storeAgeVerification({ model }: { model: Models.StoreAgeVerifyRequest }): Promise<null> {
    var path = this.buildUrl({
      url: `/api/v2/ageverification/store/identity`,
      parameters: {}
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, null);
  }

  /**
   * Conditionally performs an age verification check. If a record matching the request is found in the internal store, the associated response is returned. Otherwise, an age verification check is performed and the response is stored if the individual is determined to be of age.
   * The request must meet the following criteria in order to be evaluated:
     * * *firstName*, *lastName*, and *address* are required fields.
     * * One of the following sets of attributes are required for the *address*:
     *  * *line1, city, region*
     *  * *line1, postalCode*
     * 
     * * Optionally, the request may use the following parameters:
     * * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21).
     * * Beyond the required *address* fields above, a *country* field is permitted
     *  * The valid values for this attribute are [*US, USA*]
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} simulatedFailureCode (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes.
     * @param {Models.AgeVerifyRequest} model Information about the individual whose age is being verified.
   * @return {Models.StoreIfVerifiedResult}
   */
  
  storeIfVerified({ simulatedFailureCode, model }: { simulatedFailureCode?: string, model: Models.AgeVerifyRequest }): Promise<Models.StoreIfVerifiedResult> {
    var path = this.buildUrl({
      url: `/api/v2/ageverification/store/identity/storeIfVerified`,
      parameters: {
        simulatedFailureCode: simulatedFailureCode
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'put', payload: model, clientId: strClientId }, Models.StoreIfVerifiedResult);
  }

  /**
   * Determines whether an individual meets or exceeds the minimum legal drinking age.
   * The request must meet the following criteria in order to be evaluated:
     * * *firstName*, *lastName*, and *address* are required fields.
     * * One of the following sets of attributes are required for the *address*:
     *  * *line1, city, region*
     *  * *line1, postalCode*
     * 
     * Optionally, the transaction and its lines may use the following parameters:
     * * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21).
     * * Beyond the required *address* fields above, a *country* field is permitted
     *  * The valid values for this attribute are [*US, USA*]
     * 
     * **Security Policies**
     * This API depends on the active subscription *AgeVerification*
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} simulatedFailureCode (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes.
     * @param {Models.AgeVerifyRequest} model Information about the individual whose age is being verified.
   * @return {Models.AgeVerifyResult}
   */
  
  verifyAge({ simulatedFailureCode, model }: { simulatedFailureCode?: string, model: Models.AgeVerifyRequest }): Promise<Models.AgeVerifyResult> {
    var path = this.buildUrl({
      url: `/api/v2/ageverification/verify`,
      parameters: {
        simulatedFailureCode: simulatedFailureCode
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'post', payload: model, clientId: strClientId }, Models.AgeVerifyResult);
  }

  /**
   * Removes the transaction from consideration when evaluating regulations that span multiple transactions.
   * 
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded the transaction
     * @param {string} transactionCode The transaction code to retrieve
     * @param {string} documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to "SalesInvoice"
     * @param {string} api_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2
     * @param {string} x_avalara_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2. Header takes precendence if both header and query parameters are present.
   * @return {}
   */
  
  deregisterShipment({ companyCode, transactionCode, documentType, api_version= "", x_avalara_version= "" }: { companyCode: string, transactionCode: string, documentType?: string, api_version?: string, x_avalara_version?: string }): Promise<null> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/shipment/registration`,
      parameters: {
        documentType: documentType,
        'api-version': api_version
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
   var headerValues = new Map();
   if ( x_avalara_version) {
     headerValues.set("x-avalara-version", x_avalara_version);
   }
    return this.restCall({ url: path, verb: 'delete', payload: null, clientId: strClientId, mapHeader: headerValues }, null);
  }

  /**
   * Registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
   * 
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded the transaction
     * @param {string} transactionCode The transaction code to retrieve
     * @param {string} documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to "SalesInvoice"
     * @param {string} api_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2
     * @param {string} x_avalara_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2. Header takes precendence if both header and query parameters are present.
   * @return {}
   */
  
  registerShipment({ companyCode, transactionCode, documentType, api_version= "", x_avalara_version= "" }: { companyCode: string, transactionCode: string, documentType?: string, api_version?: string, x_avalara_version?: string }): Promise<null> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/shipment/registration`,
      parameters: {
        documentType: documentType,
        'api-version': api_version
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
   var headerValues = new Map();
   if ( x_avalara_version) {
     headerValues.set("x-avalara-version", x_avalara_version);
   }
    return this.restCall({ url: path, verb: 'put', payload: null, clientId: strClientId, mapHeader: headerValues }, null);
  }

  /**
   * Evaluates a transaction against a set of direct-to-consumer shipping regulations and, if compliant, registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
   * 
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded the transaction
     * @param {string} transactionCode The transaction code to retrieve
     * @param {string} documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to "SalesInvoice"
     * @param {string} api_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2
     * @param {string} x_avalara_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2. Header takes precendence if both header and query parameters are present.
   * @return {Models.ShippingVerifyResult}
   */
  
  registerShipmentIfCompliant({ companyCode, transactionCode, documentType, api_version= "", x_avalara_version= "" }: { companyCode: string, transactionCode: string, documentType?: string, api_version?: string, x_avalara_version?: string }): Promise<Models.ShippingVerifyResult> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/shipment/registerIfCompliant`,
      parameters: {
        documentType: documentType,
        'api-version': api_version
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
   var headerValues = new Map();
   if ( x_avalara_version) {
     headerValues.set("x-avalara-version", x_avalara_version);
   }
    return this.restCall({ url: path, verb: 'put', payload: null, clientId: strClientId, mapHeader: headerValues }, Models.ShippingVerifyResult);
  }

  /**
   * Evaluates a transaction against a set of direct-to-consumer shipping regulations.
   * The transaction and its lines must meet the following criteria in order to be evaluated:
     * * The transaction must be recorded. Using a type of *SalesInvoice* is recommended.
     * * A parameter with the name *AlcoholRouteType* must be specified and the value must be one of the following: '*DTC*', '*Retailer DTC*'
     * * A parameter with the name *RecipientName* must be specified and the value must be the name of the recipient.
     * * Each alcohol line must include a *ContainerSize* parameter that describes the volume of a single container. Use the *unit* field to specify one of the following units: '*Litre*', '*Millilitre*', '*gallon (US fluid)*', '*quart (US fluid)*', '*ounce (fluid US customary)*'
     * * Each alcohol line must include a *PackSize* parameter that describes the number of containers in a pack. Specify *Count* in the *unit* field.
     * * Each alcohol line must include a *AlcoholContent* parameter that describes the alcohol percentage by volume of the item. Specify *Percentage* in the *unit* field. If unable to provide this parameter, use version 2.1 of the API.
     * 
     * Optionally, the transaction and its lines may use the following parameters:
     * * The *ShipDate* parameter may be used if the date of shipment is different than the date of the transaction. The value should be ISO-8601 compliant (e.g. 2020-07-21).
     * * The *RecipientDOB* parameter may be used to evaluate age restrictions. The value should be ISO-8601 compliant (e.g. 2020-07-21).
     * * The *PurchaserDOB* parameter may be used to evaluate age restrictions. The value should be ISO-8601 compliant (e.g. 2020-07-21).
     * * The *SalesLocation* parameter may be used to describe whether the sale was made *OnSite* or *OffSite*. *OffSite* is the default value.
     * 
     * **Security Policies**
     * This API depends on all of the following active subscriptions: *AvaAlcohol, AutoAddress, AvaTaxPro*
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded the transaction
     * @param {string} transactionCode The transaction code to retrieve
     * @param {string} documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to "SalesInvoice"
     * @param {string} api_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2
     * @param {string} x_avalara_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2. Header takes precendence if both header and query parameters are present.
   * @return {Models.ShippingVerifyResult}
   */
  
  verifyShipment({ companyCode, transactionCode, documentType, api_version= "", x_avalara_version= "" }: { companyCode: string, transactionCode: string, documentType?: string, api_version?: string, x_avalara_version?: string }): Promise<Models.ShippingVerifyResult> {
    var path = this.buildUrl({
      url: `/api/v2/companies/${companyCode}/transactions/${transactionCode}/shipment/verify`,
      parameters: {
        documentType: documentType,
        'api-version': api_version
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
   var headerValues = new Map();
   if ( x_avalara_version) {
     headerValues.set("x-avalara-version", x_avalara_version);
   }
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId, mapHeader: headerValues }, Models.ShippingVerifyResult);
  }

  /**
   * Enqueues a batch of AvaTax transactions to be deregistered by ASV
   * 
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded the transaction
     * @param {string} batchCode The batch code of generated by AvaTax batch transaction upload
     * @param {string} api_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2
     * @param {string} x_avalara_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2. Header takes precendence if both header and query parameters are present.
   * @return {}
   */
  
  enqueueBatchDeregistration({ companyCode, batchCode, api_version= "", x_avalara_version= "" }: { companyCode: string, batchCode: string, api_version?: string, x_avalara_version?: string }): Promise<null> {
    var path = this.buildUrl({
      url: `/api/v2/asv/companies/${companyCode}/batches/${batchCode}/deregister`,
      parameters: {
        'api-version': api_version
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
   var headerValues = new Map();
   if ( x_avalara_version) {
     headerValues.set("x-avalara-version", x_avalara_version);
   }
    return this.restCall({ url: path, verb: 'put', payload: null, clientId: strClientId, mapHeader: headerValues }, null);
  }

  /**
   * Enqueues a batch of AvaTax transactions to be registered by ASV
   * 
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} companyCode The company code of the company that recorded the transaction
     * @param {string} batchCode The batch code generated by AvaTax for batch transaction upload process
     * @param {string} api_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2
     * @param {string} x_avalara_version (Optional): API version that should satisfy the request. If omitted, defaults to 2.2. Header takes precendence if both header and query parameters are present.
   * @return {}
   */
  
  enqueueBatchRegistration({ companyCode, batchCode, api_version= "", x_avalara_version= "" }: { companyCode: string, batchCode: string, api_version?: string, x_avalara_version?: string }): Promise<null> {
    var path = this.buildUrl({
      url: `/api/v2/asv/companies/${companyCode}/batches/${batchCode}/register`,
      parameters: {
        'api-version': api_version
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
   var headerValues = new Map();
   if ( x_avalara_version) {
     headerValues.set("x-avalara-version", x_avalara_version);
   }
    return this.restCall({ url: path, verb: 'put', payload: null, clientId: strClientId, mapHeader: headerValues }, null);
  }

  /**
   * Gets records for current and previously processed batch registration jobs
   * 
   * Swagger Name: AvaTaxBeverageClient
   *
   * 
     * @param {string} accountId (Optional): For users with access to multiple accounts, filters results to those associated with the specified Account ID. If not specified, the Account ID defaults to the one associated with the account
   * @return {Models.GetBatchesResult}
   */
  
  getBatchRegistrationData({ accountId }: { accountId?: string }): Promise<Models.GetBatchesResult> {
    var path = this.buildUrl({
      url: `/api/v2/asv/batches`,
      parameters: {
        accountId: accountId
      }
    });
	 var strClientId =
      this.appNM +
      '; ' +
      this.appVer +
      '; JavascriptSdk; ' + this.apiVersion + '; ' +
      this.machineNM;   
    return this.restCall({ url: path, verb: 'get', payload: null, clientId: strClientId }, Models.GetBatchesResult);
  }
}
