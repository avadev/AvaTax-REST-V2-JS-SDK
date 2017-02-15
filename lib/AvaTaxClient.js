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
 * @version    
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import fetch from 'isomorphic-fetch';
import { createBasicAuthHeader } from './utils/basic_auth';

export default class AvaTaxClient 
{
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
        this.baseUrl = "https://rest.avatax.com";
        if (environment == "sandbox") {
            this.baseUrl = "https://sandbox-rest.avatax.com";
        } else if ((environment.substring(0, 8) == "https://") || (environment.substring(0, 7) == "http://")) {
            this.baseUrl = environment;
        }
        this.clientId = appName + "; " + appVersion + "; JavascriptSdk; ; " + machineName;
    }

    /**
     * Configure this client to use the specified username/password security settings
     *
     * @param  string          username   The username for your AvaTax user account
     * @param  string          password   The password for your AvaTax user account
     * @param  int             accountId    The account ID of your avatax account
     * @param  string          licenseKey   The license key of your avatax account
     * @return AvaTaxClient
     */
    withSecurity({ username, password, accountId, licenseKey }) {
        if (username != null && password != null) {
            this.auth = createBasicAuthHeader(username, password);
        } else if (accountId != null && licenseKey != null) {
            this.auth = createBasicAuthHeader(accountId, licenseKey);
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
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json());
    }

    /**
     * Construct a URL with query string parameters
     *
     * @param   string  url            The root URL of the API being called
     * @param   string  parameters     A list of name-value pairs in a javascript object to create as query string parameters
     */
    buildUrl({ url, parameters }) {
        var qs = "";
        for (var key in parameters) {
            var value = parameters[key];
            qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length-1); //chop off last "&"
            url = url + "?" + qs;
        }
        return this.baseUrl + url;
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
    queryAccounts({ include, filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/accounts', { 
            "$include": include,
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param AccountModel model The account you wish to create.
     * @return AccountModel
     */
    createAccount({ model }) {
        var path = buildUrl('/api/v2/accounts', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listSubscriptionsByAccount({ accountId, filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/subscriptions', { 
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param SubscriptionModel[] model The subscription you wish to create.
     * @return SubscriptionModel[]
     */
    createSubscriptions({ accountId, model }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/subscriptions', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Retrieve a single subscription
     *
     * Get the subscription object identified by this URL.
     * A 'subscription' indicates a licensed subscription to a named Avalara service.
     * To request or remove subscriptions, please contact Avalara sales or your customer account manager.
     *
     * 
     * @return SubscriptionModel
     */
    getSubscription({ accountId, id }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/subscriptions/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param SubscriptionModel model The subscription you wish to update.
     * @return SubscriptionModel
     */
    updateSubscription({ accountId, id, model }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/subscriptions/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
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
     * @return ErrorDetail[]
     */
    deleteSubscription({ accountId, id }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/subscriptions/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listUsersByAccount({ accountId, include, filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/users', { 
            "$include": include,
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param UserModel[] model The user or array of users you wish to create.
     * @return UserModel[]
     */
    createUsers({ accountId, model }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/users', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Retrieve a single user
     *
     * Get the user object identified by this URL.
     * A user represents one person with access privileges to make API calls and work with a specific account.
     *
     * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @return UserModel
     */
    getUser({ id, accountId, include }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/users/{id}', { 
            "$include": include 
        });
        return this.restCall(path, 'get', null);
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
     * @param UserModel model The user object you wish to update.
     * @return UserModel
     */
    updateUser({ id, accountId, model }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/users/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
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
     * @return ErrorDetail[]
     */
    deleteUser({ id, accountId }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/users/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @return UserEntitlementModel
     */
    getUserEntitlements({ id, accountId }) {
        var path = buildUrl('/api/v2/accounts/{accountId}/users/{id}/entitlements', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @return AccountModel
     */
    getAccount({ id, include }) {
        var path = buildUrl('/api/v2/accounts/{id}', { 
            "$include": include 
        });
        return this.restCall(path, 'get', null);
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
     * @param AccountModel model The account object you wish to update.
     * @return AccountModel
     */
    updateAccount({ id, model }) {
        var path = buildUrl('/api/v2/accounts/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
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
     * @return ErrorDetail[]
     */
    deleteAccount({ id }) {
        var path = buildUrl('/api/v2/accounts/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
    }

    /**
     * Reset this account's license key
     *
     * Resets the existing license key for this account to a new key.
     * To reset your account, you must specify the ID of the account you wish to reset and confirm the action.
     * Resetting a license key cannot be undone. Any previous license keys will immediately cease to work when a new key is created.
     *
     * 
     * @param ResetLicenseKeyModel model A request confirming that you wish to reset the license key of this account.
     * @return LicenseKeyModel
     */
    accountResetLicenseKey({ id, model }) {
        var path = buildUrl('/api/v2/accounts/{id}/resetlicensekey', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Request a free trial of AvaTax
     *
     * Call this API to obtain a free AvaTax sandbox account.
     * 
     * This API is free to use. No authentication credentials are required to call this API.
     * The account will grant a full trial version of AvaTax (e.g. AvaTaxPro) for 90 days.
     * After 90 days, you may continue to use the free TaxRates API.
     * 
     * Limitations on free trial accounts:
     *  
     * * Only one free trial per company.
     * * The free trial account lasts for forever after request.
     * * Each free trial account must have its own valid email address.
     *
     * 
     * @param FreeTrialRequestModel model Required information to provision a free trial account.
     * @return NewAccountModel
     */
    requestFreeTrial({ model }) {
        var path = buildUrl('/api/v2/accounts/freetrials/request', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param string textCase selectable text case for address validation
     * @param float latitude Geospatial latitude measurement
     * @param float longitude Geospatial longitude measurement
     * @return AddressResolutionModel
     */
    resolveAddress({ line1, line2, line3, city, region, postalCode, country, textCase, latitude, longitude }) {
        var path = buildUrl('/api/v2/addresses/resolve', { 
            "line1": line1,
            "line2": line2,
            "line3": line3,
            "city": city,
            "region": region,
            "postalCode": postalCode,
            "country": country,
            "textCase": textCase,
            "latitude": latitude,
            "longitude": longitude 
        });
        return this.restCall(path, 'get', null);
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
     * @param AddressValidationInfo model The address to resolve
     * @return AddressResolutionModel
     */
    resolveAddressPost({ model }) {
        var path = buildUrl('/api/v2/addresses/resolve', { 
             
        });
        return this.restCall(path, 'post', model);
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
    queryBatches({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/batches', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     *
     * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    queryCompanies({ include, filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies', { 
            "$include": include,
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create new companies
     *
     * Create one or more new company objects.
     * A 'company' represents a single corporation or individual that is registered to handle transactional taxes.
     * You may attach nested data objects such as contacts, locations, and nexus with this CREATE call, and those objects will be created with the company.
     *
     * 
     * @param CompanyModel[] model Either a single company object or an array of companies to create
     * @return CompanyModel[]
     */
    createCompanies({ model }) {
        var path = buildUrl('/api/v2/companies', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listTransactionsByCompany({ companyCode, include, filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyCode}/transactions', { 
            "$include": include,
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @return TransactionModel
     */
    getTransactionByCode({ companyCode, transactionCode, include }) {
        var path = buildUrl('/api/v2/companies/{companyCode}/transactions/{transactionCode}', { 
            "$include": include 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Correct a previously created transaction
     *
     * Replaces the current transaction uniquely identified by this URL with a new transaction.
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     * When you adjust a committed transaction, the original transaction will be updated with the status code 'Adjusted', and
     * both revisions will be available for retrieval based on their code and ID numbers.
     * Only transactions in 'Committed' status are reported by Avalara Managed Returns.
     * Transactions that have been previously reported to a tax authority by Avalara Managed Returns are no longer available for adjustments.
     *
     * 
     * @param AdjustTransactionModel model The adjustment you wish to make
     * @return TransactionModel
     */
    adjustTransaction({ companyCode, transactionCode, model }) {
        var path = buildUrl('/api/v2/companies/{companyCode}/transactions/{transactionCode}/adjust', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param ChangeTransactionCodeModel model The code change request you wish to execute
     * @return TransactionModel
     */
    changeTransactionCode({ companyCode, transactionCode, model }) {
        var path = buildUrl('/api/v2/companies/{companyCode}/transactions/{transactionCode}/changecode', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param CommitTransactionModel model The commit request you wish to execute
     * @return TransactionModel
     */
    commitTransaction({ companyCode, transactionCode, model }) {
        var path = buildUrl('/api/v2/companies/{companyCode}/transactions/{transactionCode}/commit', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Perform multiple actions on a transaction
     *
     * Performs the same functions as /verify, /changecode, and /commit. You may specify one or many actions in each call to this endpoint.
     *
     * 
     * @param SettleTransactionModel model The settle request containing the actions you wish to execute
     * @return TransactionModel
     */
    settleTransaction({ companyCode, transactionCode, model }) {
        var path = buildUrl('/api/v2/companies/{companyCode}/transactions/{transactionCode}/settle', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param VerifyTransactionModel model The settle request you wish to execute
     * @return TransactionModel
     */
    verifyTransaction({ companyCode, transactionCode, model }) {
        var path = buildUrl('/api/v2/companies/{companyCode}/transactions/{transactionCode}/verify', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param VoidTransactionModel model The void request you wish to execute
     * @return TransactionModel
     */
    voidTransaction({ companyCode, transactionCode, model }) {
        var path = buildUrl('/api/v2/companies/{companyCode}/transactions/{transactionCode}/void', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listBatchesByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/batches', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create a new batch
     *
     * Create one or more new batch objects attached to this company.
     * A batch object is a large collection of API calls stored in a compact file.
     * When you create a batch, it is added to the AvaTax Batch Queue and will be processed in the order it was received.
     * You may fetch a batch to check on its status and retrieve the results of the batch operation.
     * Each batch object may have one or more file objects attached.
     *
     * 
     * @param BatchModel[] model The batch you wish to create.
     * @return BatchModel[]
     */
    createBatches({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/batches', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Download a single batch file
     *
     * Download a single batch file identified by this URL.
     *
     * 
     * @return string
     */
    downloadBatch({ companyId, batchId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/batches/{batchId}/files/{id}/attachment', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return BatchModel
     */
    getBatch({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/batches/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Update a single batch
     *
     * Replace the existing batch object at this URL with an updated object.
     * A batch object is a large collection of API calls stored in a compact file.
     * When you create a batch, it is added to the AvaTax Batch Queue and will be processed in the order it was received.
     * You may fetch a batch to check on its status and retrieve the results of the batch operation.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     *
     * 
     * @param BatchModel model The batch you wish to update.
     * @return BatchModel
     */
    updateBatch({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/batches/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single batch
     *
     * Mark the existing batch object at this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteBatch({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/batches/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listContactsByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/contacts', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create a new contact
     *
     * Create one or more new contact objects.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
     *
     * 
     * @param ContactModel[] model The contacts you wish to create.
     * @return ContactModel[]
     */
    createContacts({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/contacts', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Retrieve a single contact
     *
     * Get the contact object identified by this URL.
     * A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
     * a tax collecting and filing entity.
     *
     * 
     * @return ContactModel
     */
    getContact({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/contacts/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param ContactModel model The contact you wish to update.
     * @return ContactModel
     */
    updateContact({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/contacts/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single contact
     *
     * Mark the existing contact object at this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteContact({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/contacts/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
    }

    /**
     * Retrieve all filing calendars for this company
     *
     * This API is available by invitation only.
     *
     * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    companiesByCompanyIdFilingcalendarsGet({ companyId, filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingcalendars', { 
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve a single filing calendar
     *
     * This API is available by invitation only.
     *
     * 
     * @return FilingCalendarModel
     */
    companiesByCompanyIdFilingcalendarsByIdGet({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingcalendars/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Returns a list of options for expiring a filing calendar
     *
     * This API is available by invitation only.
     *
     * 
     * @return CycleExpireModel
     */
    cycleSafeExpiration({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingcalendars/{id}/cancel/options', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create a new filing request to cancel a filing calendar
     *
     * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     *
     * 
     * @param FilingRequestModel[] model The cancellation request for this filing calendar
     * @return FilingRequestModel
     */
    filingRequestsNewCancel({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingcalendars/{id}/cancel/request', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Indicates when changes are allowed to be made to a filing calendar.
     *
     * This API is available by invitation only.
     *
     * 
     * @param FilingCalendarEditModel[] model A list of filing calendar edits to be made
     * @return CycleEditOptionModel
     */
    cycleSafeEdit({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingcalendars/{id}/edit/options', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Create a new filing request to edit a filing calendar
     *
     * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     *
     * 
     * @param FilingRequestModel[] model A list of filing calendar edits to be made
     * @return FilingRequestModel
     */
    filingRequestsNewEdit({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingcalendars/{id}/edit/request', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Returns a list of options for adding the specified form.
     *
     * This API is available by invitation only.
     *
     * 
     * @param string formCode The unique code of the form
     * @return CycleAddOptionModel[]
     */
    cycleSafeAdd({ companyId, formCode }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingcalendars/add/options', { 
            "formCode": formCode 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create a new filing request to create a filing calendar
     *
     * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     *
     * 
     * @param FilingRequestModel[] model Information about the proposed new filing calendar
     * @return FilingRequestModel
     */
    filingRequestsAdd({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingcalendars/add/request', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Retrieve all filing requests for this company
     *
     * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     *
     * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    companiesByCompanyIdFilingrequestsGet({ companyId, filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingrequests', { 
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve a single filing request
     *
     * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     *
     * 
     * @return FilingRequestModel
     */
    filingRequests({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingrequests/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Edit existing Filing Request
     *
     * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     *
     * 
     * @param FilingRequestModel model A list of filing calendar edits to be made
     * @return FilingRequestModel
     */
    filingRequestsUpdate({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingrequests/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
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
     * @return FilingRequestModel
     */
    filingRequestsApprove({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingrequests/{id}/approve', { 
             
        });
        return this.restCall(path, 'post', null);
    }

    /**
     * Cancel existing Filing Request
     *
     * This API is available by invitation only.
     * A "filing request" represents a request to change an existing filing calendar. Filing requests
     * are reviewed and validated by Avalara Compliance before being implemented.
     *
     * 
     * @return FilingRequestModel
     */
    filingRequestsCancel({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filingrequests/{id}/cancel', { 
             
        });
        return this.restCall(path, 'post', null);
    }

    /**
     * Retrieve worksheet checkup report for company and filing period.
     *
     * This API is available by invitation only.
     *
     * 
     * @return FilingsCheckupModel
     */
    filingsCheckupReport({ worksheetId, companyId }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{worksheetid}/checkup', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve a list of filings for the specified company in the year and month of a given filing period.
     *
     * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
     *
     * 
     * @return FilingModel[]
     */
    getFilings({ companyId, year, month }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve a list of filings for the specified company in the given filing period and country.
     *
     * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
     *
     * 
     * @return FilingModel[]
     */
    getFilingsByCountry({ companyId, year, month, country }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve a list of filings for the specified company in the filing period, country and region.
     *
     * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
     *
     * 
     * @return FilingModel[]
     */
    getFilingsByCountryRegion({ companyId, year, month, country, region }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}/{region}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve a list of filings for the specified company in the given filing period, country, region and form.
     *
     * This API is available by invitation only.
     * A "filing period" is the year and month of the date of the latest customer transaction allowed to be reported on a filing, 
     * based on filing frequency of filing.
     *
     * 
     * @return FilingModel[]
     */
    getFilingsByReturnName({ companyId, year, month, country, region, formCode }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}/{region}/{formCode}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param FilingAdjustmentModel[] model A list of Adjustments to be created for the specified filing.
     * @return FilingAdjustmentModel[]
     */
    createReturnAdjustment({ companyId, year, month, country, region, formCode, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}/{region}/{formCode}/adjust', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param FilingAugmentationModel[] model A list of augmentations to be created for the specified filing.
     * @return FilingAugmentationModel[]
     */
    createReturnAugmentation({ companyId, year, month, country, region, formCode, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}/{region}/{formCode}/augment', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param ApproveFilingsModel model The approve request you wish to execute.
     * @return FilingModel[]
     */
    approveFilingsCountryRegion({ companyId, year, month, country, region, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}/{region}/approve', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param RebuildFilingsModel model The rebuild request you wish to execute.
     * @return FilingModel[]
     */
    rebuildFilingsByCountryRegion({ companyId, year, month, country, region, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}/{region}/rebuild', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param ApproveFilingsModel model The approve request you wish to execute.
     * @return FilingModel[]
     */
    approveFilingsCountry({ companyId, year, month, country, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}/approve', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param RebuildFilingsModel model The rebuild request you wish to execute.
     * @return FilingModel[]
     */
    rebuildFilingsByCountry({ companyId, year, month, country, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/{country}/rebuild', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param ApproveFilingsModel model The approve request you wish to execute.
     * @return FilingModel[]
     */
    approveFilings({ companyId, year, month, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/approve', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Retrieve worksheet checkup report for company and filing period.
     *
     * This API is available by invitation only.
     *
     * 
     * @return FilingsCheckupModel
     */
    filingsCheckupReports({ companyId, year, month }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/checkup', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param RebuildFilingsModel model The rebuild request you wish to execute.
     * @return FilingModel[]
     */
    rebuildFilings({ companyId, year, month, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/{year}/{month}/rebuild', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param FilingAdjustmentModel model The updated Adjustment.
     * @return FilingAdjustmentModel
     */
    updateReturnAdjustment({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/adjust/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
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
     * @return ErrorDetail[]
     */
    deleteReturnAdjustment({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/adjust/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @param FilingAugmentationModel model The updated Augmentation.
     * @return FilingAugmentationModel
     */
    updateReturnAugmentation({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/augment/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
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
     * @return ErrorDetail[]
     */
    deleteReturnAugmentation({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/filings/augment/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listItemsByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/items', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create a new item
     *
     * Creates one or more new item objects attached to this company.
     *
     * 
     * @param ItemModel[] model The item you wish to create.
     * @return ItemModel[]
     */
    createItems({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/items', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Retrieve a single item
     *
     * Get the item object identified by this URL.
     * An 'Item' represents a product or service that your company offers for sale.
     *
     * 
     * @return ItemModel
     */
    getItem({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/items/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Update a single item
     *
     * Replace the existing item object at this URL with an updated object.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     *
     * 
     * @param ItemModel model The item object you wish to update.
     * @return ItemModel
     */
    updateItem({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/items/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single item
     *
     * Marks the item object at this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteItem({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/items/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     *
     * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listLocationsByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/locations', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create a new location
     *
     * Create one or more new location objects attached to this company.
     *
     * 
     * @param LocationModel[] model The location you wish to create.
     * @return LocationModel[]
     */
    createLocations({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/locations', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * 
     * @return LocationModel
     */
    getLocation({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/locations/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Update a single location
     *
     * Replace the existing location object at this URL with an updated object.
     * All data from the existing object will be replaced with data in the object you PUT. 
     * To set a field's value to null, you may either set its value to null or omit that field from the object you post.
     *
     * 
     * @param LocationModel model The location you wish to update.
     * @return LocationModel
     */
    updateLocation({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/locations/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single location
     *
     * Mark the location object at this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteLocation({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/locations/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
    }

    /**
     * Point of sale data file generation
     *
     * Builds a point-of-sale data file containing tax rates and rules for this location, containing tax rates for all
     * items defined for this company. This data file can be used to correctly calculate tax in the event a 
     * point-of-sale device is not able to reach AvaTax.
     * This data file can be customized for specific partner devices and usage conditions.
     * The result of this API is the file you requested in the format you requested using the 'responseType' field.
     * This API builds the file on demand, and is limited to a maximum of 7500 items.
     *
     * 
     * @param string date The date for which point-of-sale data would be calculated (today by default)
     * @param string format The format of the file (JSON by default) (See PointOfSaleFileType::* for a list of allowable values)
     * @param int partnerId If specified, requests a custom partner-formatted version of the file.
     * @param boolean includeJurisCodes When true, the file will include jurisdiction codes in the result.
     * @return string
     */
    buildPointOfSaleDataForLocation({ companyId, id, date, format, partnerId, includeJurisCodes }) {
        var path = buildUrl('/api/v2/companies/{companyId}/locations/{id}/pointofsaledata', { 
            "date": date,
            "format": format,
            "partnerId": partnerId,
            "includeJurisCodes": includeJurisCodes 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Validate the location against local requirements
     *
     * Returns validation information for this location.
     * This API call is intended to compare this location against the currently known taxing authority rules and regulations,
     * and provide information about what additional work is required to completely setup this location.
     *
     * 
     * @return LocationValidationModel
     */
    validateLocation({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/locations/{id}/validate', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listNexusByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/nexus', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param NexusModel[] model The nexus you wish to create.
     * @return NexusModel[]
     */
    createNexus({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/nexus', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @return NexusModel
     */
    getNexus({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/nexus/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param NexusModel model The nexus object you wish to update.
     * @return NexusModel
     */
    updateNexus({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/nexus/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single nexus
     *
     * Marks the existing nexus object at this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteNexus({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/nexus/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listNoticesByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param NoticeModel[] model The notice object you wish to create.
     * @return NoticeModel[]
     */
    createNotices({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @return NoticeModel
     */
    getNotice({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param NoticeModel model The notice object you wish to update.
     * @return NoticeModel
     */
    updateNotice({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
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
     * @return ErrorDetail[]
     */
    deleteNotice({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @return FetchResult
     */
    getNoticeComments({ id, companyId }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}/comments', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param NoticeCommentModel[] model The notice comments you wish to create.
     * @return NoticeCommentModel[]
     */
    createNoticeComment({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}/comments', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @return FetchResult
     */
    getNoticeFinanceDetails({ id, companyId }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}/financedetails', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param NoticeFinanceModel[] model The notice finance details you wish to create.
     * @return NoticeFinanceModel[]
     */
    createNoticeFinanceDetails({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}/financedetails', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @return FetchResult
     */
    getNoticeResponsibilities({ id, companyId }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}/responsibilities', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param NoticeResponsibilityDetailModel[] model The notice responsibilities you wish to create.
     * @return NoticeResponsibilityDetailModel[]
     */
    createNoticeResponsibilities({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}/responsibilities', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @return FetchResult
     */
    getNoticeRootCauses({ id, companyId }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}/rootcauses', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param NoticeRootCauseDetailModel[] model The notice root causes you wish to create.
     * @return NoticeRootCauseDetailModel[]
     */
    createNoticeRootCauses({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/notices/{id}/rootcauses', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listSettingsByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/settings', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param SettingModel[] model The setting you wish to create.
     * @return SettingModel[]
     */
    createSettings({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/settings', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @return SettingModel
     */
    getSetting({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/settings/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param SettingModel model The setting you wish to update.
     * @return SettingModel
     */
    updateSetting({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/settings/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single setting
     *
     * Mark the setting object at this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteSetting({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/settings/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listTaxCodesByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxcodes', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param TaxCodeModel[] model The tax code you wish to create.
     * @return TaxCodeModel[]
     */
    createTaxCodes({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxcodes', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @return TaxCodeModel
     */
    getTaxCode({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxcodes/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param TaxCodeModel model The tax code you wish to update.
     * @return TaxCodeModel
     */
    updateTaxCode({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxcodes/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single tax code
     *
     * Marks the existing TaxCode object at this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteTaxCode({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxcodes/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listTaxRules({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxrules', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param TaxRuleModel[] model The tax rule you wish to create.
     * @return TaxRuleModel[]
     */
    createTaxRules({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxrules', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @return TaxRuleModel
     */
    getTaxRule({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxrules/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param TaxRuleModel model The tax rule you wish to update.
     * @return TaxRuleModel
     */
    updateTaxRule({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxrules/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single tax rule
     *
     * Mark the TaxRule identified by this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteTaxRule({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/taxrules/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    listUPCsByCompany({ companyId, filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/companies/{companyId}/upcs', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create a new UPC
     *
     * Create one or more new UPC objects attached to this company.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     *
     * 
     * @param UPCModel[] model The UPC you wish to create.
     * @return UPCModel[]
     */
    createUPCs({ companyId, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/upcs', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Retrieve a single UPC
     *
     * Get the UPC object identified by this URL.
     * A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
     *
     * 
     * @return UPCModel
     */
    getUPC({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/upcs/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param UPCModel model The UPC you wish to update.
     * @return UPCModel
     */
    updateUPC({ companyId, id, model }) {
        var path = buildUrl('/api/v2/companies/{companyId}/upcs/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single UPC
     *
     * Marks the UPC object identified by this URL as deleted.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteUPC({ companyId, id }) {
        var path = buildUrl('/api/v2/companies/{companyId}/upcs/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     *
     * 
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @return CompanyModel
     */
    getCompany({ id, include }) {
        var path = buildUrl('/api/v2/companies/{id}', { 
            "$include": include 
        });
        return this.restCall(path, 'get', null);
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
     * @param CompanyModel model The company object you wish to update.
     * @return CompanyModel
     */
    updateCompany({ id, model }) {
        var path = buildUrl('/api/v2/companies/{id}', { 
             
        });
        return this.restCall(path, 'put', model);
    }

    /**
     * Delete a single company
     *
     * Deleting a company will delete all child companies, and all users attached to this company.
     *
     * 
     * @return ErrorDetail[]
     */
    deleteCompanies({ id }) {
        var path = buildUrl('/api/v2/companies/{id}', { 
             
        });
        return this.restCall(path, 'delete', null);
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
     * @return FundingStatusModel[]
     */
    listFundingRequestsByCompany({ id }) {
        var path = buildUrl('/api/v2/companies/{id}/funding', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @param FundingInitiateModel model The funding initialization request
     * @return FundingStatusModel
     */
    createFundingRequest({ id, model }) {
        var path = buildUrl('/api/v2/companies/{id}/funding/setup', { 
             
        });
        return this.restCall(path, 'post', model);
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
     * @param CompanyInitializationModel model Information about the company you wish to create.
     * @return CompanyModel
     */
    companyInitialize({ model }) {
        var path = buildUrl('/api/v2/companies/initialize', { 
             
        });
        return this.restCall(path, 'post', model);
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
    queryContacts({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/contacts', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * List all ISO 3166 countries
     *
     * Returns a list of all ISO 3166 country codes, and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a country for 
     * a shipping address.
     *
     * 
     * @return FetchResult
     */
    listCountries({  }) {
        var path = buildUrl('/api/v2/definitions/countries', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * List all ISO 3166 regions for a country
     *
     * Returns a list of all ISO 3166 region codes for a specific country code, and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a region 
     * within the country for a shipping addresses.
     *
     * 
     * @return FetchResult
     */
    listRegionsByCountry({ country }) {
        var path = buildUrl('/api/v2/definitions/countries/{country}/regions', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return FetchResult
     */
    listEntityUseCodes({  }) {
        var path = buildUrl('/api/v2/definitions/entityusecodes', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * List all forms where logins can be verified automatically
     *
     * List all forms where logins can be verified automatically.
     * This API is intended to be useful to identify whether the user should be allowed
     * to automatically verify their login and password.
     *
     * 
     * @return FetchResult
     */
    listLoginVerifiers({  }) {
        var path = buildUrl('/api/v2/definitions/filingcalendars/loginverifiers', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Test whether a form supports online login verification
     *
     * This API is intended to be useful to identify whether the user should be allowed
     * to automatically verify their login and password.
     *
     * 
     * @return FetchResult
     */
    getLoginVerifierByForm({ form }) {
        var path = buildUrl('/api/v2/definitions/filingcalendars/loginverifiers/{form}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported filing frequencies.
     *
     * Returns the full list of Avalara-supported filing frequencies.
     * This API is intended to be useful to identify all the different filing frequencies that can be used in notices.
     *
     * 
     * @return FetchResult
     */
    listFilingFrequencies({  }) {
        var path = buildUrl('/api/v2/definitions/filingfrequencies', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return FetchResult
     */
    listLocationQuestionsByAddress({ line1, line2, line3, city, region, postalCode, country, latitude, longitude }) {
        var path = buildUrl('/api/v2/definitions/locationquestions', { 
            "line1": line1,
            "line2": line2,
            "line3": line3,
            "city": city,
            "region": region,
            "postalCode": postalCode,
            "country": country,
            "latitude": latitude,
            "longitude": longitude 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported nexus for all countries and regions.
     *
     * Returns the full list of all Avalara-supported nexus for all countries and regions. 
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus.
     *
     * 
     * @return FetchResult
     */
    definitionsNexusGet({  }) {
        var path = buildUrl('/api/v2/definitions/nexus', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported nexus for a country.
     *
     * Returns all Avalara-supported nexus for the specified country.
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by country.
     *
     * 
     * @return FetchResult
     */
    definitionsNexusByCountryGet({ country }) {
        var path = buildUrl('/api/v2/definitions/nexus/{country}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported nexus for a country and region.
     *
     * Returns all Avalara-supported nexus for the specified country and region.
     * This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by country and region.
     *
     * 
     * @return FetchResult
     */
    definitionsNexusByCountryByRegionGet({ country, region }) {
        var path = buildUrl('/api/v2/definitions/nexus/{country}/{region}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return FetchResult
     */
    listNexusByAddress({ line1, line2, line3, city, region, postalCode, country }) {
        var path = buildUrl('/api/v2/definitions/nexus/byaddress', { 
            "line1": line1,
            "line2": line2,
            "line3": line3,
            "city": city,
            "region": region,
            "postalCode": postalCode,
            "country": country 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice customer funding options.
     *
     * Returns the full list of Avalara-supported tax notice customer funding options.
     * This API is intended to be useful to identify all the different notice customer funding options that can be used in notices.
     *
     * 
     * @return FetchResult
     */
    listNoticeCustomerFundingOptions({  }) {
        var path = buildUrl('/api/v2/definitions/noticecustomerfundingoptions', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice customer types.
     *
     * Returns the full list of Avalara-supported tax notice customer types.
     * This API is intended to be useful to identify all the different notice customer types.
     *
     * 
     * @return FetchResult
     */
    listNoticeCustomerTypes({  }) {
        var path = buildUrl('/api/v2/definitions/noticecustomertypes', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice filing types.
     *
     * Returns the full list of Avalara-supported tax notice filing types.
     * This API is intended to be useful to identify all the different notice filing types that can be used in notices.
     *
     * 
     * @return FetchResult
     */
    listNoticeFilingtypes({  }) {
        var path = buildUrl('/api/v2/definitions/noticefilingtypes', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice priorities.
     *
     * Returns the full list of Avalara-supported tax notice priorities.
     * This API is intended to be useful to identify all the different notice priorities that can be used in notices.
     *
     * 
     * @return FetchResult
     */
    listNoticePriorities({  }) {
        var path = buildUrl('/api/v2/definitions/noticepriorities', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice reasons.
     *
     * Returns the full list of Avalara-supported tax notice reasons.
     * This API is intended to be useful to identify all the different tax notice reasons.
     *
     * 
     * @return FetchResult
     */
    listNoticeReasons({  }) {
        var path = buildUrl('/api/v2/definitions/noticereasons', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice responsibility ids
     *
     * Returns the full list of Avalara-supported tax notice responsibility ids
     * This API is intended to be useful to identify all the different tax notice responsibilities.
     *
     * 
     * @return FetchResult
     */
    listNoticeResponsibilities({  }) {
        var path = buildUrl('/api/v2/definitions/noticeresponsibilities', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice root causes
     *
     * Returns the full list of Avalara-supported tax notice root causes
     * This API is intended to be useful to identify all the different tax notice root causes.
     *
     * 
     * @return FetchResult
     */
    listNoticeRootCauses({  }) {
        var path = buildUrl('/api/v2/definitions/noticerootcauses', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice statuses.
     *
     * Returns the full list of Avalara-supported tax notice statuses.
     * This API is intended to be useful to identify all the different tax notice statuses.
     *
     * 
     * @return FetchResult
     */
    listNoticeStatuses({  }) {
        var path = buildUrl('/api/v2/definitions/noticestatuses', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax notice types.
     *
     * Returns the full list of Avalara-supported tax notice types.
     * This API is intended to be useful to identify all the different notice types that can be used in notices.
     *
     * 
     * @return FetchResult
     */
    listNoticeTypes({  }) {
        var path = buildUrl('/api/v2/definitions/noticetypes', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported extra parameters for creating transactions.
     *
     * Returns the full list of Avalara-supported extra parameters for the 'Create Transaction' API call.
     * This list of parameters is available for use when configuring your transaction.
     * Some parameters are only available for use if you have subscribed to certain features of AvaTax.
     *
     * 
     * @return FetchResult
     */
    listParameters({  }) {
        var path = buildUrl('/api/v2/definitions/parameters', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported permissions
     *
     * Returns the full list of Avalara-supported permission types.
     * This API is intended to be useful to identify the capabilities of a particular user logon.
     *
     * 
     * @return FetchResult
     */
    listPermissions({  }) {
        var path = buildUrl('/api/v2/definitions/permissions', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * List all ISO 3166 regions
     *
     * Returns a list of all ISO 3166 region codes and their US English friendly names.
     * This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a region 
     * within the country for a shipping addresses.
     *
     * 
     * @return FetchResult
     */
    listRegions({  }) {
        var path = buildUrl('/api/v2/definitions/regions', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported permissions
     *
     * Returns the full list of Avalara-supported permission types.
     * This API is intended to be useful when designing a user interface for selecting the security role of a user account.
     * Some security roles are restricted for Avalara internal use.
     *
     * 
     * @return FetchResult
     */
    listSecurityRoles({  }) {
        var path = buildUrl('/api/v2/definitions/securityroles', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return FetchResult
     */
    listSubscriptionTypes({  }) {
        var path = buildUrl('/api/v2/definitions/subscriptiontypes', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax authorities.
     *
     * Returns the full list of Avalara-supported tax authorities.
     * This API is intended to be useful to identify all the different authorities that receive tax.
     *
     * 
     * @return FetchResult
     */
    listTaxAuthorities({  }) {
        var path = buildUrl('/api/v2/definitions/taxauthorities', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return FetchResult
     */
    listTaxAuthorityForms({  }) {
        var path = buildUrl('/api/v2/definitions/taxauthorityforms', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax authority types.
     *
     * Returns the full list of Avalara-supported tax authority types.
     * This API is intended to be useful to identify all the different authority types.
     *
     * 
     * @return FetchResult
     */
    listTaxAuthorityTypes({  }) {
        var path = buildUrl('/api/v2/definitions/taxauthoritytypes', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return FetchResult
     */
    listTaxCodes({  }) {
        var path = buildUrl('/api/v2/definitions/taxcodes', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Retrieve the full list of Avalara-supported tax code types.
     *
     * Returns the full list of recognized tax code types.
     * A 'Tax Code Type' represents a broad category of tax codes, and is less detailed than a single TaxCode.
     * This API is intended to be useful for broadly searching for tax codes by tax code type.
     *
     * 
     * @return TaxCodeTypesModel
     */
    listTaxCodeTypes({  }) {
        var path = buildUrl('/api/v2/definitions/taxcodetypes', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return FetchResult
     */
    queryFilingCalendars({ filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/filingcalendars', { 
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Gets the request status and Login Result
     *
     * This API is available by invitation only.
     *
     * 
     * @return LoginVerificationOutputModel
     */
    loginVerificationGet({ jobId }) {
        var path = buildUrl('/api/v2/filingcalendars/credentials/{jobId}', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * New request for getting for validating customer's login credentials
     *
     * This API is available by invitation only.
     *
     * 
     * @param LoginVerificationInputModel model The model of the login information we are verifying
     * @return LoginVerificationOutputModel
     */
    loginVerificationPost({ model }) {
        var path = buildUrl('/api/v2/filingcalendars/credentials/verify', { 
             
        });
        return this.restCall(path, 'post', model);
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
    queryFilingRequests({ filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/filingrequests', { 
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @return FundingStatusModel
     */
    fundingRequestStatus({ id }) {
        var path = buildUrl('/api/v2/fundingrequests/{id}', { 
             
        });
        return this.restCall(path, 'get', null);
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
     * @return FundingStatusModel
     */
    activateFundingRequest({ id }) {
        var path = buildUrl('/api/v2/fundingrequests/{id}/widget', { 
             
        });
        return this.restCall(path, 'get', null);
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
    queryItems({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/items', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * 
     * @param string filter A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @param int top If nonzero, return no more than this number of results. Used with $skip to provide pagination for large datasets.
     * @param int skip If nonzero, skip this number of results before returning data. Used with $top to provide pagination for large datasets.
     * @param string orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @return FetchResult
     */
    queryLocations({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/locations', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
    queryNexus({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/nexus', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
    queryNotices({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/notices', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param PasswordChangeModel model An object containing your current password and the new password.
     * @return string
     */
    changePassword({ model }) {
        var path = buildUrl('/api/v2/passwords', { 
             
        });
        return this.restCall(path, 'put', model);
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
     * @param SetPasswordModel model The new password for this user
     * @return string
     */
    resetPassword({ userId, model }) {
        var path = buildUrl('/api/v2/passwords/{userId}/reset', { 
             
        });
        return this.restCall(path, 'post', model);
    }

    /**
     * Point of sale data file generation
     *
     * Builds a point-of-sale data file containing tax rates and rules for items and locations that can be used
     * to correctly calculate tax in the event a point-of-sale device is not able to reach AvaTax.
     * This data file can be customized for specific partner devices and usage conditions.
     * The result of this API is the file you requested in the format you requested using the 'responseType' field.
     * This API builds the file on demand, and is limited to files with no more than 7500 scenarios.
     *
     * 
     * @param PointOfSaleDataRequestModel model Parameters about the desired file format and report format, specifying which company, locations and TaxCodes to include.
     * @return string
     */
    buildPointOfSaleDataFile({ model }) {
        var path = buildUrl('/api/v2/pointofsaledata/build', { 
             
        });
        return this.restCall(path, 'post', model);
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
    querySettings({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/settings', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
    querySubscriptions({ filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/subscriptions', { 
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
    queryTaxCodes({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/taxcodes', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * FREE API - Sales tax rates for a specified address
     *
     * # Free-To-Use
     * 
     * The TaxRates API is a free-to-use, no cost option for estimating sales tax rates for general tangible personal property.
     * Any customer can request a free AvaTax account and make use of the TaxRates API.
     * 
     * Note that the TaxRates API only estimates general tangible personal property rates for a specified address.
     * Avalara provides the `CreateTransaction` API, which provides extensive tax calculation support for scenarios
     * including, but not limited to:
     * 
     * * Product types
     * * Nexus declarations that affect Sales vs Seller's Use
     * * Cross-border shipment rules affecting origin/destination states
     * * Customers who are exempt from certain taxes
     * * States that have dollar value thresholds for tax amounts
     * * Refunds for products purchased on a different date
     * * Detailed jurisdiction names and tax law names
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
     * @return TaxRateModel
     */
    taxRatesByAddress({ line1, line2, line3, city, region, postalCode, country }) {
        var path = buildUrl('/api/v2/taxrates/byaddress', { 
            "line1": line1,
            "line2": line2,
            "line3": line3,
            "city": city,
            "region": region,
            "postalCode": postalCode,
            "country": country 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * FREE API - Sales tax rates for a specified country and postal code
     *
     * # Free-To-Use
     * 
     * The TaxRates API is a free-to-use, no cost option for estimating sales tax rates for general tangible personal property.
     * Any customer can request a free AvaTax account and make use of the TaxRates API.
     * 
     * Note that the TaxRates API only estimates general tangible personal property rates for a specified address.
     * Avalara provides the `CreateTransaction` API, which provides extensive tax calculation support for scenarios
     * including, but not limited to:
     * 
     * * Product types
     * * Nexus declarations that affect Sales vs Seller's Use
     * * Cross-border shipment rules affecting origin/destination states
     * * Customers who are exempt from certain taxes
     * * States that have dollar value thresholds for tax amounts
     * * Refunds for products purchased on a different date
     * * Detailed jurisdiction names and tax law names
     * * And more!
     * 
     * Please see [Estimating Tax with REST v2](http://developer.avalara.com/blog/2016/11/04/estimating-tax-with-rest-v2/)
     * for information on how to upgrade to the full AvaTax CreateTransaction API.
     *
     * 
     * @param string country The two letter ISO-3166 country code.
     * @param string postalCode The postal code of the location.
     * @return TaxRateModel
     */
    taxRatesByPostalCode({ country, postalCode }) {
        var path = buildUrl('/api/v2/taxrates/bypostalcode', { 
            "country": country,
            "postalCode": postalCode 
        });
        return this.restCall(path, 'get', null);
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
    queryTaxRules({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/taxrules', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @param string include A comma separated list of child objects to return underneath the primary object.
     * @return TransactionModel
     */
    getTransactionById({ id, include }) {
        var path = buildUrl('/api/v2/transactions/{id}', { 
            "$include": include 
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Create a new transaction
     *
     * Records a new transaction in AvaTax.
     * The 'Create Transaction' endpoint uses the configuration values specified by your company to identify the correct tax rules
     * and rates to apply to all line items in this transaction, and reports the total tax calculated by AvaTax based on your
     * company's configuration and the data provided in this API call.
     * A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
     * sales, purchases, inventory transfer, and returns (also called refunds).
     *
     * 
     * @param CreateTransactionModel model The transaction you wish to create
     * @return TransactionModel
     */
    createTransaction({ model }) {
        var path = buildUrl('/api/v2/transactions/create', { 
             
        });
        return this.restCall(path, 'post', model);
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
    queryUPCs({ filter, include, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/upcs', { 
            "$filter": filter,
            "$include": include,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
    queryUsers({ include, filter, top, skip, orderBy }) {
        var path = buildUrl('/api/v2/users', { 
            "$include": include,
            "$filter": filter,
            "$top": top,
            "$skip": skip,
            "$orderBy": orderBy 
        });
        return this.restCall(path, 'get', null);
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
     * @return PingResultModel
     */
    ping({  }) {
        var path = buildUrl('/api/v2/utilities/ping', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * List all services to which the current user is subscribed
     *
     * Returns the list of all subscriptions enabled for the current account.
     * This API is intended to help you determine whether you have the necessary subscription to use certain API calls
     * within AvaTax.
     *
     * 
     * @return SubscriptionModel
     */
    listMySubscriptions({  }) {
        var path = buildUrl('/api/v2/utilities/subscriptions', { 
             
        });
        return this.restCall(path, 'get', null);
    }

    /**
     * Checks if the current user is subscribed to a specific service
     *
     * Returns a subscription object for the current account, or 404 Not Found if this subscription is not enabled for this account.
     * This API call is intended to allow you to identify whether you have the necessary account configuration to access certain
     * features of AvaTax, and would be useful in debugging access privilege problems.
     *
     * 
     * @return SubscriptionModel
     */
    getMySubscription({ serviceTypeId }) {
        var path = buildUrl('/api/v2/utilities/subscriptions/{serviceTypeId}', { 
             
        });
        return this.restCall(path, 'get', null);
    }
}
