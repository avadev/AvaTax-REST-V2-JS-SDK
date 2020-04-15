# Methods 
- [AvaTaxClient](#avataxclient)
- [withSecurity](#withsecurity)
- [restCall](#restcall)
- [buildUrl](#buildurl)
- [accountResetLicenseKey](#accountresetlicensekey)
- [activateAccount](#activateaccount)
- [auditAccount](#auditaccount)
- [getAccount](#getaccount)
- [getAccountConfiguration](#getaccountconfiguration)
- [queryAccounts](#queryaccounts)
- [setAccountConfiguration](#setaccountconfiguration)
- [resolveAddress](#resolveaddress)
- [resolveAddressPost](#resolveaddresspost)
- [createAvaFileForms](#createavafileforms)
- [deleteAvaFileForm](#deleteavafileform)
- [getAvaFileForm](#getavafileform)
- [queryAvaFileForms](#queryavafileforms)
- [updateAvaFileForm](#updateavafileform)
- [createBatches](#createbatches)
- [deleteBatch](#deletebatch)
- [downloadBatch](#downloadbatch)
- [getBatch](#getbatch)
- [listBatchesByCompany](#listbatchesbycompany)
- [queryBatches](#querybatches)
- [createCertExpressInvitation](#createcertexpressinvitation)
- [getCertExpressInvitation](#getcertexpressinvitation)
- [listCertExpressInvitations](#listcertexpressinvitations)
- [createCertificates](#createcertificates)
- [deleteCertificate](#deletecertificate)
- [downloadCertificateImage](#downloadcertificateimage)
- [getCertificate](#getcertificate)
- [getCertificateSetup](#getcertificatesetup)
- [linkAttributesToCertificate](#linkattributestocertificate)
- [linkCustomersToCertificate](#linkcustomerstocertificate)
- [listAttributesForCertificate](#listattributesforcertificate)
- [listCustomersForCertificate](#listcustomersforcertificate)
- [queryCertificates](#querycertificates)
- [requestCertificateSetup](#requestcertificatesetup)
- [unlinkAttributesFromCertificate](#unlinkattributesfromcertificate)
- [unlinkCustomersFromCertificate](#unlinkcustomersfromcertificate)
- [updateCertificate](#updatecertificate)
- [uploadCertificateImage](#uploadcertificateimage)
- [certifyIntegration](#certifyintegration)
- [changeFilingStatus](#changefilingstatus)
- [companyInitialize](#companyinitialize)
- [createCompanies](#createcompanies)
- [createFundingRequest](#createfundingrequest)
- [deleteCompany](#deletecompany)
- [fundingConfigurationByCompany](#fundingconfigurationbycompany)
- [fundingConfigurationsByCompanyAndCurrency](#fundingconfigurationsbycompanyandcurrency)
- [getCompany](#getcompany)
- [getCompanyConfiguration](#getcompanyconfiguration)
- [getFilingStatus](#getfilingstatus)
- [listFundingRequestsByCompany](#listfundingrequestsbycompany)
- [listMrsCompanies](#listmrscompanies)
- [queryCompanies](#querycompanies)
- [setCompanyConfiguration](#setcompanyconfiguration)
- [updateCompany](#updatecompany)
- [tagTransaction](#tagtransaction)
- [createContacts](#createcontacts)
- [deleteContact](#deletecontact)
- [getContact](#getcontact)
- [listContactsByCompany](#listcontactsbycompany)
- [queryContacts](#querycontacts)
- [updateContact](#updatecontact)
- [createCustomers](#createcustomers)
- [deleteCustomer](#deletecustomer)
- [getCustomer](#getcustomer)
- [linkAttributesToCustomer](#linkattributestocustomer)
- [linkCertificatesToCustomer](#linkcertificatestocustomer)
- [linkShipToCustomersToBillCustomer](#linkshiptocustomerstobillcustomer)
- [listAttributesForCustomer](#listattributesforcustomer)
- [listCertificatesForCustomer](#listcertificatesforcustomer)
- [listValidCertificatesForCustomer](#listvalidcertificatesforcustomer)
- [queryCustomers](#querycustomers)
- [unlinkAttributesFromCustomer](#unlinkattributesfromcustomer)
- [unlinkCertificatesFromCustomer](#unlinkcertificatesfromcustomer)
- [updateCustomer](#updatecustomer)
- [createDataSources](#createdatasources)
- [deleteDataSource](#deletedatasource)
- [getDataSourceById](#getdatasourcebyid)
- [listDataSources](#listdatasources)
- [queryDataSources](#querydatasources)
- [updateDataSource](#updatedatasource)
- [getCrossBorderCode](#getcrossbordercode)
- [getLoginVerifierByForm](#getloginverifierbyform)
- [listAvaFileForms](#listavafileforms)
- [listCertificateAttributes](#listcertificateattributes)
- [listCertificateExemptReasons](#listcertificateexemptreasons)
- [listCertificateExposureZones](#listcertificateexposurezones)
- [listCommunicationsServiceTypes](#listcommunicationsservicetypes)
- [listCommunicationsTransactionTypes](#listcommunicationstransactiontypes)
- [listCommunicationsTSPairs](#listcommunicationstspairs)
- [listCountries](#listcountries)
- [listCoverLetters](#listcoverletters)
- [listCrossBorderCodes](#listcrossbordercodes)
- [listCrossBorderSections](#listcrossbordersections)
- [listCurrencies](#listcurrencies)
- [listEntityUseCodes](#listentityusecodes)
- [listFilingFrequencies](#listfilingfrequencies)
- [listJurisdictions](#listjurisdictions)
- [listJurisdictionsByAddress](#listjurisdictionsbyaddress)
- [listLocationQuestionsByAddress](#listlocationquestionsbyaddress)
- [listLoginVerifiers](#listloginverifiers)
- [listMarketplaceLocations](#listmarketplacelocations)
- [listNexus](#listnexus)
- [listNexusByAddress](#listnexusbyaddress)
- [listNexusByCountry](#listnexusbycountry)
- [listNexusByCountryAndRegion](#listnexusbycountryandregion)
- [listNexusByFormCode](#listnexusbyformcode)
- [listNexusTaxTypeGroups](#listnexustaxtypegroups)
- [listNoticeCustomerFundingOptions](#listnoticecustomerfundingoptions)
- [listNoticeCustomerTypes](#listnoticecustomertypes)
- [listNoticeFilingtypes](#listnoticefilingtypes)
- [listNoticePriorities](#listnoticepriorities)
- [listNoticeReasons](#listnoticereasons)
- [listNoticeResponsibilities](#listnoticeresponsibilities)
- [listNoticeRootCauses](#listnoticerootcauses)
- [listNoticeStatuses](#listnoticestatuses)
- [listNoticeTypes](#listnoticetypes)
- [listParameters](#listparameters)
- [listParametersByItem](#listparametersbyitem)
- [listPermissions](#listpermissions)
- [listPostalCodes](#listpostalcodes)
- [listPreferredPrograms](#listpreferredprograms)
- [listProductClassificationSystems](#listproductclassificationsystems)
- [listProductClassificationSystemsByCompany](#listproductclassificationsystemsbycompany)
- [listRateTypesByCountry](#listratetypesbycountry)
- [listRegions](#listregions)
- [listRegionsByCountry](#listregionsbycountry)
- [listResourceFileTypes](#listresourcefiletypes)
- [listSecurityRoles](#listsecurityroles)
- [listSubscriptionTypes](#listsubscriptiontypes)
- [listTaxAuthorities](#listtaxauthorities)
- [listTaxAuthorityForms](#listtaxauthorityforms)
- [listTaxAuthorityTypes](#listtaxauthoritytypes)
- [listTaxCodes](#listtaxcodes)
- [listTaxCodeTypes](#listtaxcodetypes)
- [listTaxForms](#listtaxforms)
- [listTaxSubTypes](#listtaxsubtypes)
- [listTaxTypeGroups](#listtaxtypegroups)
- [listUnitOfMeasurement](#listunitofmeasurement)
- [createDistanceThreshold](#createdistancethreshold)
- [deleteDistanceThreshold](#deletedistancethreshold)
- [getDistanceThreshold](#getdistancethreshold)
- [listDistanceThresholds](#listdistancethresholds)
- [queryDistanceThresholds](#querydistancethresholds)
- [updateDistanceThreshold](#updatedistancethreshold)
- [getFiledReturns](#getfiledreturns)
- [approveFirmClientLinkage](#approvefirmclientlinkage)
- [createAndLinkNewFirmClientAccount](#createandlinknewfirmclientaccount)
- [createFirmClientLinkage](#createfirmclientlinkage)
- [deleteFirmClientLinkage](#deletefirmclientlinkage)
- [getFirmClientLinkage](#getfirmclientlinkage)
- [listFirmClientLinkage](#listfirmclientlinkage)
- [rejectFirmClientLinkage](#rejectfirmclientlinkage)
- [resetFirmClientLinkage](#resetfirmclientlinkage)
- [revokeFirmClientLinkage](#revokefirmclientlinkage)
- [requestFreeTrial](#requestfreetrial)
- [taxRatesByAddress](#taxratesbyaddress)
- [taxRatesByPostalCode](#taxratesbypostalcode)
- [activateFundingRequest](#activatefundingrequest)
- [fundingRequestStatus](#fundingrequeststatus)
- [batchDeleteItemClassifications](#batchdeleteitemclassifications)
- [batchDeleteItemParameters](#batchdeleteitemparameters)
- [createItemClassifications](#createitemclassifications)
- [createItemParameters](#createitemparameters)
- [createItems](#createitems)
- [deleteItem](#deleteitem)
- [deleteItemClassification](#deleteitemclassification)
- [deleteItemParameter](#deleteitemparameter)
- [getItem](#getitem)
- [getItemClassification](#getitemclassification)
- [getItemParameter](#getitemparameter)
- [listItemClassifications](#listitemclassifications)
- [listItemParameters](#listitemparameters)
- [listItemsByCompany](#listitemsbycompany)
- [queryItems](#queryitems)
- [syncItems](#syncitems)
- [updateItem](#updateitem)
- [updateItemClassification](#updateitemclassification)
- [updateItemParameter](#updateitemparameter)
- [createJurisdictionOverrides](#createjurisdictionoverrides)
- [deleteJurisdictionOverride](#deletejurisdictionoverride)
- [getJurisdictionOverride](#getjurisdictionoverride)
- [listJurisdictionOverridesByAccount](#listjurisdictionoverridesbyaccount)
- [queryJurisdictionOverrides](#queryjurisdictionoverrides)
- [updateJurisdictionOverride](#updatejurisdictionoverride)
- [createLocations](#createlocations)
- [deleteLocation](#deletelocation)
- [getLocation](#getlocation)
- [listLocationsByCompany](#listlocationsbycompany)
- [queryLocations](#querylocations)
- [updateLocation](#updatelocation)
- [validateLocation](#validatelocation)
- [adjustMultiDocumentTransaction](#adjustmultidocumenttransaction)
- [auditMultiDocumentTransaction](#auditmultidocumenttransaction)
- [commitMultiDocumentTransaction](#commitmultidocumenttransaction)
- [createMultiDocumentTransaction](#createmultidocumenttransaction)
- [getMultiDocumentTransactionByCodeAndType](#getmultidocumenttransactionbycodeandtype)
- [getMultiDocumentTransactionById](#getmultidocumenttransactionbyid)
- [listMultiDocumentTransactions](#listmultidocumenttransactions)
- [refundMultiDocumentTransaction](#refundmultidocumenttransaction)
- [verifyMultiDocumentTransaction](#verifymultidocumenttransaction)
- [voidMultiDocumentTransaction](#voidmultidocumenttransaction)
- [createNexus](#createnexus)
- [declareNexusByAddress](#declarenexusbyaddress)
- [deleteNexus](#deletenexus)
- [getNexus](#getnexus)
- [getNexusByFormCode](#getnexusbyformcode)
- [listNexusByCompany](#listnexusbycompany)
- [queryNexus](#querynexus)
- [updateNexus](#updatenexus)
- [dismissNotification](#dismissnotification)
- [getNotification](#getnotification)
- [listNotifications](#listnotifications)
- [requestNewAccount](#requestnewaccount)
- [requestNewEntitlement](#requestnewentitlement)
- [createAccount](#createaccount)
- [createNotifications](#createnotifications)
- [createSubscriptions](#createsubscriptions)
- [deleteAccount](#deleteaccount)
- [deleteNotification](#deletenotification)
- [deleteSubscription](#deletesubscription)
- [resetPassword](#resetpassword)
- [updateAccount](#updateaccount)
- [updateNotification](#updatenotification)
- [updateSubscription](#updatesubscription)
- [downloadReport](#downloadreport)
- [getReport](#getreport)
- [initiateExportDocumentLineReport](#initiateexportdocumentlinereport)
- [listReports](#listreports)
- [createSettings](#createsettings)
- [deleteSetting](#deletesetting)
- [getSetting](#getsetting)
- [listSettingsByCompany](#listsettingsbycompany)
- [querySettings](#querysettings)
- [updateSetting](#updatesetting)
- [getSubscription](#getsubscription)
- [listSubscriptionsByAccount](#listsubscriptionsbyaccount)
- [querySubscriptions](#querysubscriptions)
- [createTaxCodes](#createtaxcodes)
- [deleteTaxCode](#deletetaxcode)
- [getTaxCode](#gettaxcode)
- [listTaxCodesByCompany](#listtaxcodesbycompany)
- [queryTaxCodes](#querytaxcodes)
- [updateTaxCode](#updatetaxcode)
- [buildTaxContentFile](#buildtaxcontentfile)
- [buildTaxContentFileForLocation](#buildtaxcontentfileforlocation)
- [downloadTaxRatesByZipCode](#downloadtaxratesbyzipcode)
- [createTaxRules](#createtaxrules)
- [deleteTaxRule](#deletetaxrule)
- [getTaxRule](#gettaxrule)
- [listTaxRules](#listtaxrules)
- [queryTaxRules](#querytaxrules)
- [updateTaxRule](#updatetaxrule)
- [addLines](#addlines)
- [adjustTransaction](#adjusttransaction)
- [auditTransaction](#audittransaction)
- [auditTransactionWithType](#audittransactionwithtype)
- [bulkLockTransaction](#bulklocktransaction)
- [changeTransactionCode](#changetransactioncode)
- [commitTransaction](#committransaction)
- [createOrAdjustTransaction](#createoradjusttransaction)
- [createTransaction](#createtransaction)
- [deleteLines](#deletelines)
- [getTransactionByCode](#gettransactionbycode)
- [getTransactionByCodeAndType](#gettransactionbycodeandtype)
- [getTransactionById](#gettransactionbyid)
- [listTransactionsByCompany](#listtransactionsbycompany)
- [lockTransaction](#locktransaction)
- [refundTransaction](#refundtransaction)
- [settleTransaction](#settletransaction)
- [uncommitTransaction](#uncommittransaction)
- [unvoidTransaction](#unvoidtransaction)
- [verifyTransaction](#verifytransaction)
- [voidTransaction](#voidtransaction)
- [createUPCs](#createupcs)
- [deleteUPC](#deleteupc)
- [getUPC](#getupc)
- [listUPCsByCompany](#listupcsbycompany)
- [queryUPCs](#queryupcs)
- [updateUPC](#updateupc)
- [changePassword](#changepassword)
- [createUsers](#createusers)
- [deleteUser](#deleteuser)
- [getUser](#getuser)
- [getUserEntitlements](#getuserentitlements)
- [listUsersByAccount](#listusersbyaccount)
- [queryUsers](#queryusers)
- [updateUser](#updateuser)
- [getMySubscription](#getmysubscription)
- [listMySubscriptions](#listmysubscriptions)
- [ping](#ping)
 
 ## AvaTaxClient


  [Source: AvaTaxClient.js Line: 31](/lib/AvaTaxClient.js#L31)

 - `AvaTaxClient({ appName, appVersion, machineName, environment })` 

 ### Arguments
- **appName:** Specify the name of your application here.  Should not contain any semicolons.
- **appVersion:** Specify the version number of your application here.  Should not contain any semicolons.
- **machineName:** Specify the machine name of the machine on which this code is executing here.  Should not contain any semicolons.
- **environment:** Indicates which server to use; acceptable values are "sandbox" or "production", or the full URL of your AvaTax instance.
 

  Construct a new AvaTaxClient
 ## withSecurity


  [Source: AvaTaxClient.js Line: 59](/lib/AvaTaxClient.js#L59)

 - `client.withSecurity({ username, password, accountId, licenseKey, bearerToken })` 

 ### Arguments
- **username:** The username for your AvaTax user account
- **password:** The password for your AvaTax user account
- **accountId:** The account ID of your avatax account
- **licenseKey:** The license key of your avatax account
- **bearerToken:** The OAuth 2.0 token provided by Avalara Identity
 

  Configure this client to use the specified username/password security settings
 ## restCall


  [Source: AvaTaxClient.js Line: 77](/lib/AvaTaxClient.js#L77)

 - `client.restCall({ url, verb, payload })` 

 ### Arguments
- **url:** The relative path of the API on the server
- **verb:** The HTTP verb being used in this request
- **payload:** The request body, if this is being sent to a POST/PUT API call
 

  Make a single REST call to the AvaTax v2 API server
 ## buildUrl


  [Source: AvaTaxClient.js Line: 114](/lib/AvaTaxClient.js#L114)

 - `client.buildUrl({ url, parameters })` 

 ### Arguments
- **url:** The root URL of the API being called
- **parameters:** A list of name-value pairs in a javascript object to create as query string parameters
 

  Construct a URL with query string parameters
 ## accountResetLicenseKey


  [Source: AvaTaxClient.js Line: 155](/lib/AvaTaxClient.js#L155)

 - `client.accountResetLicenseKey({ id, model })` 

 ### Arguments
- **id:** The ID of the account you wish to update.
- **model:** A request confirming that you wish to reset the license key of this account.
 

  Reset this account's license key

Resets the existing license key for this account to a new key.
 
To reset your account, you must specify the ID of the account you wish to reset and confirm the action.
 
This API is only available to account administrators for the account in question, and may only be called after
an account has been activated by reading and accepting Avalara's terms and conditions. To activate your account
please log onto the AvaTax website or call the `ActivateAccount` API.
 
Resetting a license key cannot be undone. Any previous license keys will immediately cease to work when a new key is created.
 
When you call this API, all account administrators for this account will receive an email with the newly updated license key.
The email will specify which user reset the license key and it will contain the new key to use to update your connectors.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## activateAccount


  [Source: AvaTaxClient.js Line: 186](/lib/AvaTaxClient.js#L186)

 - `client.activateAccount({ id, model })` 

 ### Arguments
- **id:** The ID of the account to activate
- **model:** The activation request
 

  Activate an account by accepting terms and conditions

Activate the account specified by the unique accountId number.
 
This activation request can only be called by account administrators. You must indicate
that you have read and accepted Avalara's terms and conditions to call this API.
 
Once you have activated your account, use the `AccountResetLicenseKey` API to generate
a license key for your account.
 
If you have not read or accepted the terms and conditions, this API call will return the
unchanged account model.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## auditAccount


  [Source: AvaTaxClient.js Line: 224](/lib/AvaTaxClient.js#L224)

 - `client.auditAccount({ id, start, end, top, skip })` 

 ### Arguments
- **id:** The ID of the account you wish to audit.
- **start:** The start datetime of audit history you with to retrieve, e.g. "2018-06-08T17:00:00Z". Defaults to the past 15 minutes.
- **end:** The end datetime of audit history you with to retrieve, e.g. "2018-06-08T17:15:00Z. Defaults to the current time. Maximum of an hour after the start time.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
 

  Retrieve audit history for an account.

Retrieve audit trace history for an account.
 
Your audit trace history contains a record of all API calls made against the AvaTax REST API. You can use this API to investigate
problems and see exactly what information was sent back and forth between your code and AvaTax.
 
When specifying a start and end datetime, please include a valid timezone indicator, such as the "Z" present in the examples for the start and end query parameters.
You can learn more about valid time zone designators at https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators.
 
This API enforces limits to the amount of data retrieved. These limits are subject to change.
 
* You may request data from a maximum of a one-hour time period.
* The amount of data and number of API calls returned by this API are limited and may be adjusted at any time.
* Old records may be migrated out of immediately available storage. To request older data, please contact your account manager.
* New records must migrate to available storage before they can be retrieved. You may need to wait a period of time before newly created records can be fetched.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## getAccount


  [Source: AvaTaxClient.js Line: 255](/lib/AvaTaxClient.js#L255)

 - `client.getAccount({ id, include })` 

 ### Arguments
- **id:** The ID of the account to retrieve
- **include:** A comma separated list of special fetch options
 

  Retrieve a single account

Get the account object identified by this URL.
You may use the '$include' parameter to fetch additional nested data:
 
* Subscriptions
* Users

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## getAccountConfiguration


  [Source: AvaTaxClient.js Line: 289](/lib/AvaTaxClient.js#L289)

 - `client.getAccountConfiguration({ id })` 

 ### Arguments
- **id:** undefined
 

  Get configuration settings for this account

Retrieve a list of all configuration settings tied to this account.
 
Configuration settings provide you with the ability to control features of your account and of your
tax software. The category names `TaxServiceConfig` and `AddressServiceConfig` are reserved for
Avalara internal software configuration values; to store your own account-level settings, please
create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
 
Account settings are permanent settings that cannot be deleted. You can set the value of an
account setting to null if desired.
 
Avalara-based account settings for `TaxServiceConfig` and `AddressServiceConfig` affect your account's
tax calculation and address resolution, and should only be changed with care.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## queryAccounts


  [Source: AvaTaxClient.js Line: 325](/lib/AvaTaxClient.js#L325)

 - `client.queryAccounts({ include, filter, top, skip, orderBy })` 

 ### Arguments
- **include:** A comma separated list of objects to fetch underneath this account. Any object with a URL path underneath this account can be fetched by specifying its name.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptions, users
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all accounts

List all account objects that can be seen by the current user.
 
This API lists all accounts you are allowed to see. In general, most users will only be able to see their own account.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Subscriptions
* Users
 
For more information about filtering in REST, please see the documentation at http://developer.avalara.com/avatax/filtering-in-rest/ .

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## setAccountConfiguration


  [Source: AvaTaxClient.js Line: 364](/lib/AvaTaxClient.js#L364)

 - `client.setAccountConfiguration({ id, model })` 

 ### Arguments
- **id:** undefined
- **model:** undefined
 

  Change configuration settings for this account

Update configuration settings tied to this account.
 
Configuration settings provide you with the ability to control features of your account and of your
tax software. The category names `TaxServiceConfig` and `AddressServiceConfig` are reserved for
Avalara internal software configuration values; to store your own account-level settings, please
create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
 
Account settings are permanent settings that cannot be deleted. You can set the value of an
account setting to null if desired.
 
Avalara-based account settings for `TaxServiceConfig` and `AddressServiceConfig` affect your account's
tax calculation and address resolution, and should only be changed with care.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## resolveAddress


  [Source: AvaTaxClient.js Line: 403](/lib/AvaTaxClient.js#L403)

 - `client.resolveAddress({ line1, line2, line3, city, region, postalCode, country, textCase })` 

 ### Arguments
- **line1:** Line 1
- **line2:** Line 2
- **line3:** Line 3
- **city:** City
- **region:** State / Province / Region
- **postalCode:** Postal Code / Zip Code
- **country:** Two character ISO 3166 Country Code (see /api/v2/definitions/countries for a full list)
- **textCase:** selectable text case for address validation (See TextCase::* for a list of allowable values)
 

  Retrieve geolocation information for a specified address

Resolve an address against Avalara's address-validation system. If the address can be resolved, this API
provides the latitude and longitude of the resolved location. The value 'resolutionQuality' can be used
to identify how closely this address can be located. If the address cannot be clearly located, use the
'messages' structure to learn more about problems with this address.
This is the same API as the POST /api/v2/addresses/resolve endpoint.
Both verbs are supported to provide for flexible implementation.
 
Inorder to get any evaluation for an address please provide atleast one of the following fields/pairs:
1. postal code
2. line1 + city + region
3. line1 + postal code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AutoAddress.
 ## resolveAddressPost


  [Source: AvaTaxClient.js Line: 439](/lib/AvaTaxClient.js#L439)

 - `client.resolveAddressPost({ model })` 

 ### Arguments
- **model:** The address to resolve
 

  Retrieve geolocation information for a specified address

Resolve an address against Avalara's address-validation system. If the address can be resolved, this API
provides the latitude and longitude of the resolved location. The value 'resolutionQuality' can be used
to identify how closely this address can be located. If the address cannot be clearly located, use the
'messages' structure to learn more about problems with this address.
This is the same API as the GET /api/v2/addresses/resolve endpoint.
Both verbs are supported to provide for flexible implementation.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AutoAddress.
 ## createAvaFileForms


  [Source: AvaTaxClient.js Line: 462](/lib/AvaTaxClient.js#L462)

 - `client.createAvaFileForms({ model })` 

 ### Arguments
- **model:** The AvaFileForm you wish to create.
 

  Create a new AvaFileForm

Create one or more AvaFileForms
A 'AvaFileForm' represents a form supported by our returns team

### Security Policies

* This API requires the user role Compliance Root User.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## deleteAvaFileForm


  [Source: AvaTaxClient.js Line: 484](/lib/AvaTaxClient.js#L484)

 - `client.deleteAvaFileForm({ id })` 

 ### Arguments
- **id:** The ID of the AvaFileForm you wish to delete.
 

  Delete a single AvaFileForm

Marks the existing AvaFileForm object at this URL as deleted.

### Security Policies

* This API requires one of the following user roles: Compliance Root User, ComplianceUser, FirmAdmin.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## getAvaFileForm


  [Source: AvaTaxClient.js Line: 506](/lib/AvaTaxClient.js#L506)

 - `client.getAvaFileForm({ id })` 

 ### Arguments
- **id:** The primary key of this AvaFileForm
 

  Retrieve a single AvaFileForm

Get the AvaFileForm object identified by this URL.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CompanyUser, Compliance Root User, Compliance Temp User, ComplianceAdmin, ComplianceUser, FirmAdmin, FirmUser, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## queryAvaFileForms


  [Source: AvaTaxClient.js Line: 532](/lib/AvaTaxClient.js#L532)

 - `client.queryAvaFileForms({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* outletTypeId
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all AvaFileForms

Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CompanyUser, Compliance Root User, Compliance Temp User, ComplianceAdmin, ComplianceUser, FirmAdmin, FirmUser, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## updateAvaFileForm


  [Source: AvaTaxClient.js Line: 561](/lib/AvaTaxClient.js#L561)

 - `client.updateAvaFileForm({ id, model })` 

 ### Arguments
- **id:** The ID of the AvaFileForm you wish to update
- **model:** The AvaFileForm model you wish to update.
 

  Update a AvaFileForm

All data from the existing object will be replaced with data in the object you PUT.
To set a field's value to null, you may either set its value to null or omit that field from the object you post.

### Security Policies

* This API requires the user role Compliance Root User.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## createBatches


  [Source: AvaTaxClient.js Line: 601](/lib/AvaTaxClient.js#L601)

 - `client.createBatches({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this batch.
- **model:** The batch you wish to create.
 

  Create a new batch

Create one or more new batch objects attached to this company.
 
Each batch object may have one or more file objects (currently only one file is supported).
 
When a batch is created, it is added to the AvaTax Batch Queue and will be
processed as quickly as possible in the order it was received. To check the
status of a batch, fetch the batch and retrieve the results of the batch
operation.
 
Because the batch system processes with a degree of concurrency, and
because of batch sizes in the queue vary, AvaTax API is unable to accurately
predict when a batch will complete. If high performance processing is
required, please use the
[CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).
 
The maximum content length of the request body is limited to 28.6 MB. If this limit
is exceeded, a 404 Not Found status will be returned (possibly with a CORS error if
the API is called from a browser). In this situation, please split the request into
smaller batches.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin.
 ## deleteBatch


  [Source: AvaTaxClient.js Line: 632](/lib/AvaTaxClient.js#L632)

 - `client.deleteBatch({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this batch.
- **id:** The ID of the batch to delete.
 

  Delete a single batch

Marks the batch identified by this URL as deleted.
 
If you attempt to delete a batch that is being processed, you will receive an error message.
Deleting a batch does not delete any transactions that were created by importing the batch.
 
Because the batch system processes with a degree of concurrency, and
because of batch sizes in the queue vary, AvaTax API is unable to accurately
predict when a batch will complete. If high performance processing is
required, please use the
[CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).

### Security Policies

* This API requires one of the following user roles: CSPAdmin, CSPTester, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin.
 ## downloadBatch


  [Source: AvaTaxClient.js Line: 655](/lib/AvaTaxClient.js#L655)

 - `client.downloadBatch({ companyId, batchId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this batch
- **batchId:** The ID of the batch object
- **id:** The primary key of this batch file object
 

  Download a single batch file

Download a single batch file identified by this URL.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser.
 ## getBatch


  [Source: AvaTaxClient.js Line: 691](/lib/AvaTaxClient.js#L691)

 - `client.getBatch({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this batch
- **id:** The primary key of this batch
 

  Retrieve a single batch

Get the batch object identified by this URL. A batch object is a large
collection of API calls stored in a compact file.
 
Use this endpoint to retrieve the results or check the status of a batch.
 
When a batch is created, it is added to the AvaTax Batch Queue and will be
processed as quickly as possible in the order it was received. To check the
status of a batch, fetch the batch and retrieve the results of the batch
operation.
 
Because the batch system processes with a degree of concurrency, and
because of batch sizes in the queue vary, AvaTax API is unable to accurately
predict when a batch will complete. If high performance processing is
required, please use the
[CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listBatchesByCompany


  [Source: AvaTaxClient.js Line: 737](/lib/AvaTaxClient.js#L737)

 - `client.listBatchesByCompany({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that owns these batches
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* files
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all batches for this company

List all batch objects attached to the specified company.
 
A batch object is a large collection of API calls stored in a compact file.
 
Search for specific objects using the criteria in the `$filter` parameter;
full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate results using the `$top`, `$skip`, and `$orderby` parameters.
 
Use [GetBatch](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Batches/GetBatch/)
to retrieve the results, or check the status, of an individual batch.
 
When a batch is created, it is added to the AvaTax Batch Queue and will be
processed as quickly as possible in the order it was received. To check the
status of a batch, fetch the batch and retrieve the results of the batch
operation.
 
Because the batch system processes with a degree of concurrency, and
because of batch sizes in the queue vary, AvaTax API is unable to accurately
predict when a batch will complete. If high performance processing is
required, please use the
[CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser.
 ## queryBatches


  [Source: AvaTaxClient.js Line: 785](/lib/AvaTaxClient.js#L785)

 - `client.queryBatches({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* files
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all batches

Get multiple batch objects across all companies.
 
A batch object is a large collection of API calls stored in a compact file.
 
Search for specific objects using the criteria in the `$filter` parameter;
full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate results using the `$top`, `$skip`, and `$orderby` parameters.
 
When a batch is created, it is added to the AvaTax Batch Queue and will be
processed as quickly as possible in the order it was received. To check the
status of a batch, fetch the batch and retrieve the results of the batch
operation.
 
Because the batch system processes with a degree of concurrency, and
because of batch sizes in the queue vary, AvaTax API is unable to accurately
predict when a batch will complete. If high performance processing is
required, please use the
[CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser.
 ## createCertExpressInvitation


  [Source: AvaTaxClient.js Line: 829](/lib/AvaTaxClient.js#L829)

 - `client.createCertExpressInvitation({ companyId, customerCode, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that will record certificates
- **customerCode:** The number of the customer where the request is sent to
- **model:** the requests to send out to customers
 

  Create a CertExpress invitation

Creates an invitation for a customer to self-report certificates using the CertExpress website.
 
This invitation is delivered by your choice of method, or you can present a hyperlink to the user
directly in your connector. Your customer will be redirected to https://app.certexpress.com/ where
they can follow a step-by-step guide to enter information about their exemption certificates. The
certificates entered will be recorded and automatically linked to their customer record.
 
The [CertExpress website](https://app.certexpress.com/home) is available for customers to use at any time.
Using CertExpress with this API will ensure that your certificates are automatically linked correctly into
your company so that they can be used for tax exemptions.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getCertExpressInvitation


  [Source: AvaTaxClient.js Line: 868](/lib/AvaTaxClient.js#L868)

 - `client.getCertExpressInvitation({ companyId, customerCode, id, include })` 

 ### Arguments
- **companyId:** The unique ID number of the company that issued this invitation
- **customerCode:** The number of the customer where the request is sent to
- **id:** The unique ID number of this CertExpress invitation
- **include:** OPTIONAL: A comma separated list of special fetch options. No options are defined at this time.
 

  Retrieve a single CertExpress invitation

Retrieve an existing CertExpress invitation sent to a customer.
 
A CertExpression invitation allows a customer to follow a helpful step-by-step guide to provide information
about their certificates. This step by step guide allows the customer to complete and upload the full
certificate in a convenient, friendly web browser experience. When the customer completes their certificates,
they will automatically be recorded to your company and linked to the customer record.
 
The [CertExpress website](https://app.certexpress.com/home) is available for customers to use at any time.
Using CertExpress with this API will ensure that your certificates are automatically linked correctly into
your company so that they can be used for tax exemptions.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## listCertExpressInvitations


  [Source: AvaTaxClient.js Line: 911](/lib/AvaTaxClient.js#L911)

 - `client.listCertExpressInvitations({ companyId, include, filter, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The unique ID number of the company that issued this invitation
- **include:** OPTIONAL: A comma separated list of special fetch options.      No options are defined at this time.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* companyId, customer, coverLetter, exposureZones, exemptReasons, requestLink
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List CertExpress invitations

Retrieve CertExpress invitations sent by this company.
 
A CertExpression invitation allows a customer to follow a helpful step-by-step guide to provide information
about their certificates. This step by step guide allows the customer to complete and upload the full
certificate in a convenient, friendly web browser experience. When the customer completes their certificates,
they will automatically be recorded to your company and linked to the customer record.
 
The [CertExpress website](https://app.certexpress.com/home) is available for customers to use at any time.
Using CertExpress with this API will ensure that your certificates are automatically linked correctly into
your company so that they can be used for tax exemptions.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## createCertificates


  [Source: AvaTaxClient.js Line: 961](/lib/AvaTaxClient.js#L961)

 - `client.createCertificates({ companyId, preValidatedExemptionReason, model })` 

 ### Arguments
- **companyId:** The ID number of the company recording this certificate
- **preValidatedExemptionReason:** If set to true, the certificate will bypass the human verification process.
- **model:** Certificates to be created
 

  Create certificates for this company

Record one or more certificates document for this company.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
When you create a certificate, it will be processed by Avalara and will become available for use in
calculating tax exemptions when processing is complete. For a certificate to be used in calculating exemptions,
it must have the following:
 
* An exposure zone indicating where the certificate is valid
* A link to the customer that is allowed to use this certificate
* Your tax transaction must contain the correct customer code
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.
 
If the users specified in the certificates do not exist, the API will create the user and link them to the certificate

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## deleteCertificate


  [Source: AvaTaxClient.js Line: 998](/lib/AvaTaxClient.js#L998)

 - `client.deleteCertificate({ companyId, id })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
 

  Revoke and delete a certificate

Revoke the certificate identified by this URL, then delete it.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Revoked certificates can no longer be used.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## downloadCertificateImage


  [Source: AvaTaxClient.js Line: 1036](/lib/AvaTaxClient.js#L1036)

 - `client.downloadCertificateImage({ companyId, id, page, type })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **page:** If you choose `$type`=`Jpeg`, you must specify which page number to retrieve.
- **type:** The data format in which to retrieve the certificate image (See CertificatePreviewType::* for a list of allowable values)
 

  Download an image for this certificate

Download an image or PDF file for this certificate.
 
This API can be used to download either a single-page preview of the certificate or a full PDF document.
To retrieve a preview image, set the `$type` parameter to `Jpeg` and the `$page` parameter to `1`.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getCertificate


  [Source: AvaTaxClient.js Line: 1079](/lib/AvaTaxClient.js#L1079)

 - `client.getCertificate({ companyId, id, include })` 

 ### Arguments
- **companyId:** The ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **include:** OPTIONAL: A comma separated list of special fetch options. You can specify one or more of the following:      * customers - Retrieves the list of customers linked to the certificate.   * po_numbers - Retrieves all PO numbers tied to the certificate.   * attributes - Retrieves all attributes applied to the certificate.
 

  Retrieve a single certificate

Get the current certificate identified by this URL.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
You can use the `$include` parameter to fetch the following additional objects for expansion:
 
* customers - Retrieves the list of customers linked to the certificate.
* po_numbers - Retrieves all PO numbers tied to the certificate.
* attributes - Retrieves all attributes applied to the certificate.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getCertificateSetup


  [Source: AvaTaxClient.js Line: 1109](/lib/AvaTaxClient.js#L1109)

 - `client.getCertificateSetup({ companyId })` 

 ### Arguments
- **companyId:** The company ID to check
 

  Check a company's exemption certificate status.

Checks whether this company is configured to use exemption certificates in AvaTax.
 
Exemption certificates are tracked through a different auditable data store than the one that
holds AvaTax transactions. To use the AvaTax exemption certificate document store, please call
`GetCertificateSetup` to see if your company is configured to use the exemption certificate
document store. To request setup, please call `RequestCertificateSetup` and your company will
be configured with data storage in the auditable certificate system.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## linkAttributesToCertificate


  [Source: AvaTaxClient.js Line: 1146](/lib/AvaTaxClient.js#L1146)

 - `client.linkAttributesToCertificate({ companyId, id, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **model:** The list of attributes to link to this certificate.
 

  Link attributes to a certificate

Link one or many attributes to a certificate.
 
A certificate may have multiple attributes that control its behavior. You may link or unlink attributes to a
certificate at any time. The full list of defined attributes may be found using `ListCertificateAttributes`.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## linkCustomersToCertificate


  [Source: AvaTaxClient.js Line: 1184](/lib/AvaTaxClient.js#L1184)

 - `client.linkCustomersToCertificate({ companyId, id, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **model:** The list of customers needed be added to the Certificate for exemption
 

  Link customers to a certificate

Link one or more customers to an existing certificate.
 
Customers and certificates must be linked before a customer can make use of a certificate to obtain
a tax exemption in AvaTax. Since some certificates may cover more than one business entity, a certificate
can be connected to multiple customer records using the `LinkCustomersToCertificate` API.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## listAttributesForCertificate


  [Source: AvaTaxClient.js Line: 1220](/lib/AvaTaxClient.js#L1220)

 - `client.listAttributesForCertificate({ companyId, id })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
 

  List all attributes applied to this certificate

Retrieve the list of attributes that are linked to this certificate.
 
A certificate may have multiple attributes that control its behavior. You may link or unlink attributes to a
certificate at any time. The full list of defined attributes may be found using [ListCertificateAttributes](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListCertificateAttributes/) API.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## listCustomersForCertificate


  [Source: AvaTaxClient.js Line: 1257](/lib/AvaTaxClient.js#L1257)

 - `client.listCustomersForCertificate({ companyId, id, include })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **include:** OPTIONAL: A comma separated list of special fetch options.   No options are currently available when fetching customers.
 

  List customers linked to this certificate

List all customers linked to this certificate.
 
Customers must be linked to a certificate in order to make use of its tax exemption features. You
can link or unlink customers to a certificate at any time.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## queryCertificates


  [Source: AvaTaxClient.js Line: 1302](/lib/AvaTaxClient.js#L1302)

 - `client.queryCertificates({ companyId, include, filter, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID number of the company to search
- **include:** OPTIONAL: A comma separated list of special fetch options. You can specify one or more of the following:      * customers - Retrieves the list of customers linked to the certificate.   * po_numbers - Retrieves all PO numbers tied to the certificate.   * attributes - Retrieves all attributes applied to the certificate.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* exemptionNumber, status, ecmsId, ecmsStatus, pdf, pages
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all certificates for a company

List all certificates recorded by a company
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
You can use the `$include` parameter to fetch the following additional objects for expansion:
 
* customers - Retrieves the list of customers linked to the certificate.
* po_numbers - Retrieves all PO numbers tied to the certificate.
* attributes - Retrieves all attributes applied to the certificate.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## requestCertificateSetup


  [Source: AvaTaxClient.js Line: 1338](/lib/AvaTaxClient.js#L1338)

 - `client.requestCertificateSetup({ companyId })` 

 ### Arguments
- **companyId:** undefined
 

  Request setup of exemption certificates for this company.

Requests the setup of exemption certificates for this company.
 
Exemption certificates are tracked through a different auditable data store than the one that
holds AvaTax transactions. To use the AvaTax exemption certificate document store, please call
`GetCertificateSetup` to see if your company is configured to use the exemption certificate
document store. To request setup, please call `RequestCertificateSetup` and your company will
be configured with data storage in the auditable certificate system.
 
This API will return the current status of exemption certificate setup for this company.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## unlinkAttributesFromCertificate


  [Source: AvaTaxClient.js Line: 1375](/lib/AvaTaxClient.js#L1375)

 - `client.unlinkAttributesFromCertificate({ companyId, id, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **model:** The list of attributes to unlink from this certificate.
 

  Unlink attributes from a certificate

Unlink one or many attributes from a certificate.
 
A certificate may have multiple attributes that control its behavior. You may link or unlink attributes to a
certificate at any time. The full list of defined attributes may be found using `ListCertificateAttributes`.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## unlinkCustomersFromCertificate


  [Source: AvaTaxClient.js Line: 1414](/lib/AvaTaxClient.js#L1414)

 - `client.unlinkCustomersFromCertificate({ companyId, id, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **model:** The list of customers to unlink from this certificate
 

  Unlink customers from a certificate

Unlinks one or more customers from a certificate.
 
Unlinking a certificate from a customer will prevent the certificate from being used to generate
tax exemptions for the customer in the future. If any previous transactions for this customer had
used this linked certificate, those transactions will be unchanged and will still have a link to the
exemption certificate in question.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## updateCertificate


  [Source: AvaTaxClient.js Line: 1448](/lib/AvaTaxClient.js#L1448)

 - `client.updateCertificate({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **model:** The new certificate object that will replace the existing one
 

  Update a single certificate

Replace the certificate identified by this URL with a new one.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## uploadCertificateImage


  [Source: AvaTaxClient.js Line: 1485](/lib/AvaTaxClient.js#L1485)

 - `client.uploadCertificateImage({ companyId, id, file })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this certificate
- **id:** The unique ID number of this certificate
- **file:** The exemption certificate file you wanted to upload. Accepted formats are: PDF, JPEG, TIFF, PNG.
 

  Upload an image or PDF attachment for this certificate

Upload an image or PDF attachment for this certificate.
 
Image attachments can be of the format `PDF`, `JPEG`, `TIFF`, or `PNG`. To upload a multi-page image, please
use the `PDF` data type.
 
A certificate is a document stored in either AvaTax Exemptions or CertCapture. The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate. To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## certifyIntegration


  [Source: AvaTaxClient.js Line: 1528](/lib/AvaTaxClient.js#L1528)

 - `client.certifyIntegration({ id })` 

 ### Arguments
- **id:** The ID of the company to check if its integration is certified.
 

  Checks whether the integration being used to set up this company and run transactions onto this company is compliant to all requirements.

Examines the most recent 100 transactions or data from the last month when verifying transaction-related integrations.
For partners who write integrations against AvaTax for many clients, this API is a way to do a quick self testing to verify whether the
written integrations for a company are sufficient enough to be delivered to the respective customers to start using it.
 
This API provides messages specific enough (through predefined checks) to guide the partner on what integrations are still missing from the company to get fully certified.
The API makes the following checks to conclude if the company is NOT fully certified:
1. Any past month items contains generic tax code of P0000000.
2. All the companies on the requesting account are test companies.
3. No Voided/Cancelled documents in the past 30 days.
4. There are less than 2 committed documents.
5. Any documentCode is a generic GUID string.
6. Any customerCode on document is a generic GUID string.
7. No document has more than 1 documentLine.
8. All of the documents have missing exemptionNo, customerUsageType, taxDateOverride or negative amount.
9. Any document quantity is a negative number.
10. Any document have repeated lines.
11. No document has shipping charge.
12. All documents have same ItemCodes, descriptions and taxCodes.
13. Less than 2 addresses used across all documents.
14. Whether locationCode was used in documents.
15. Account with AvaGlobal subscription and no documents have VATBuyerId.
16. Any document has currencyCode not being USD for accounts with AvaGlobal subscription.
17. All documents have countryCode used for accounts with AvaGlobal subscription.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## changeFilingStatus


  [Source: AvaTaxClient.js Line: 1562](/lib/AvaTaxClient.js#L1562)

 - `client.changeFilingStatus({ id, model })` 

 ### Arguments
- **id:** undefined
- **model:** undefined
 

  Change the filing status of this company

Changes the current filing status of this company.
 
For customers using Avalara's Managed Returns Service, each company within their account can request
for Avalara to file tax returns on their behalf. Avalara compliance team members will review all
requested filing calendars prior to beginning filing tax returns on behalf of this company.
 
The following changes may be requested through this API:
 
* If a company is in `NotYetFiling` status, the customer may request this be changed to `FilingRequested`.
* Avalara compliance team members may change a company from `FilingRequested` to `FirstFiling`.
* Avalara compliance team members may change a company from `FirstFiling` to `Active`.
 
All other status changes must be requested through the Avalara customer support team.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## companyInitialize


  [Source: AvaTaxClient.js Line: 1594](/lib/AvaTaxClient.js#L1594)

 - `client.companyInitialize({ model })` 

 ### Arguments
- **model:** Information about the company you wish to create.
 

  Quick setup for a company with a single physical address

Shortcut to quickly setup a single-physical-location company with critical information and activate it.
This API provides quick and simple company setup functionality and does the following things:
 
* Create a company object with its own tax profile
* Add a key contact person for the company
* Set up one physical location for the main office
* Declare nexus in all taxing jurisdictions for that main office address
* Activate the company
 
This API only provides a limited subset of functionality compared to the 'Create Company' API call.
If you need additional features or options not present in this 'Quick Setup' API call, please use the full 'Create Company' call instead.
Please allow 1 minute before making transactions using the company.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## createCompanies


  [Source: AvaTaxClient.js Line: 1619](/lib/AvaTaxClient.js#L1619)

 - `client.createCompanies({ model })` 

 ### Arguments
- **model:** Either a single company object or an array of companies to create
 

  Create new companies

Create one or more new company objects.
A 'company' represents a single corporation or individual that is registered to handle transactional taxes.
You may attach nested data objects such as contacts, locations, and nexus with this CREATE call, and those objects will be created with the company.
 
NOTE: Please do not use these blacklisted characters in company name and code: ';', '\', '|'.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## createFundingRequest


  [Source: AvaTaxClient.js Line: 1651](/lib/AvaTaxClient.js#L1651)

 - `client.createFundingRequest({ id, model })` 

 ### Arguments
- **id:** The unique identifier of the company
- **model:** The funding initialization request
 

  Request managed returns funding setup for a company

This API is available by invitation only.
Companies that use the Avalara Managed Returns or the SST Certified Service Provider services are
required to setup their funding configuration before Avalara can begin filing tax returns on their
behalf.
Funding configuration for each company is set up by submitting a funding setup request, which can
be sent either via email or via an embedded HTML widget.
When the funding configuration is submitted to Avalara, it will be reviewed by treasury team members
before approval.
This API records that an ambedded HTML funding setup widget was activated.
This API requires a subscription to Avalara Managed Returns or SST Certified Service Provider.

### Security Policies

* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.
* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## deleteCompany


  [Source: AvaTaxClient.js Line: 1672](/lib/AvaTaxClient.js#L1672)

 - `client.deleteCompany({ id })` 

 ### Arguments
- **id:** The ID of the company you wish to delete.
 

  Delete a single company

Deleting a company will delete all child companies, and all users attached to this company.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
 ## fundingConfigurationByCompany


  [Source: AvaTaxClient.js Line: 1697](/lib/AvaTaxClient.js#L1697)

 - `client.fundingConfigurationByCompany({ companyId })` 

 ### Arguments
- **companyId:** The unique identifier of the company
 

  Check the funding configuration of a company

This API is available by invitation only.
Requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
Returns the funding configuration of the requested company.
.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## fundingConfigurationsByCompanyAndCurrency


  [Source: AvaTaxClient.js Line: 1723](/lib/AvaTaxClient.js#L1723)

 - `client.fundingConfigurationsByCompanyAndCurrency({ companyId, currency })` 

 ### Arguments
- **companyId:** The unique identifier of the company
- **currency:** The currency of the funding. USD and CAD are the only valid currencies
 

  Check the funding configuration of a company

This API is available by invitation only.
Requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
Returns the funding configuration of the requested company.
.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## getCompany


  [Source: AvaTaxClient.js Line: 1758](/lib/AvaTaxClient.js#L1758)

 - `client.getCompany({ id, include })` 

 ### Arguments
- **id:** The ID of the company to retrieve.
- **include:** OPTIONAL: A comma separated list of special fetch options.      * Child objects - Specify one or more of the following to retrieve objects related to each company: "Contacts", "FilingCalendars", "Items", "Locations", "Nexus", "TaxCodes", "NonReportingChildren" or "TaxRules".   * Deleted objects - Specify "FetchDeleted" to retrieve information about previously deleted objects.
 

  Retrieve a single company

Get the company object identified by this URL.
A 'company' represents a single corporation or individual that is registered to handle transactional taxes.
You may specify one or more of the following values in the '$include' parameter to fetch additional nested data, using commas to separate multiple values:
 
 * Contacts
 * Items
 * Locations
 * Nexus
 * Settings
 * TaxCodes
 * TaxRules
 * UPC

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## getCompanyConfiguration


  [Source: AvaTaxClient.js Line: 1792](/lib/AvaTaxClient.js#L1792)

 - `client.getCompanyConfiguration({ id })` 

 ### Arguments
- **id:** undefined
 

  Get configuration settings for this company

Retrieve a list of all configuration settings tied to this company.
 
Configuration settings provide you with the ability to control features of your account and of your
tax software. The category name `AvaCertServiceConfig` is reserved for
Avalara internal software configuration values; to store your own company-level settings, please
create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
 
Company settings are permanent settings that cannot be deleted. You can set the value of a
company setting to null if desired and if the particular setting supports it.
 
Avalara-based company settings for `AvaCertServiceConfig` affect your company's exemption certificate
processing, and should be changed with care.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## getFilingStatus


  [Source: AvaTaxClient.js Line: 1825](/lib/AvaTaxClient.js#L1825)

 - `client.getFilingStatus({ id })` 

 ### Arguments
- **id:** undefined
 

  Get this company's filing status

Retrieve the current filing status of this company.
 
For customers using Avalara's Managed Returns Service, each company within their account can request
for Avalara to file tax returns on their behalf. Avalara compliance team members will review all
requested filing calendars prior to beginning filing tax returns on behalf of this company.
 
A company's filing status can be one of the following values:
 
* `NoReporting` - This company is not configured to report tax returns; instead, it reports through a parent company.
* `NotYetFiling` - This company has not yet begun filing tax returns through Avalara's Managed Returns Service.
* `FilingRequested` - The company has requested to begin filing tax returns, but Avalara's compliance team has not yet begun filing.
* `FirstFiling` - The company has recently filing tax returns and is in a new status.
* `Active` - The company is currently active and is filing tax returns via Avalara Managed Returns.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listFundingRequestsByCompany


  [Source: AvaTaxClient.js Line: 1850](/lib/AvaTaxClient.js#L1850)

 - `client.listFundingRequestsByCompany({ id })` 

 ### Arguments
- **id:** The unique identifier of the company
 

  Check managed returns funding status for a company

This API is available by invitation only.
Requires a subscription to Avalara Managed Returns or SST Certified Service Provider.
Returns a list of funding setup requests and their current status.
Each object in the result is a request that was made to setup or adjust funding status for this company.

### Security Policies

* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.
* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listMrsCompanies


  [Source: AvaTaxClient.js Line: 1872](/lib/AvaTaxClient.js#L1872)

 - `client.listMrsCompanies()` 

  

  Retrieve a list of MRS Companies with account

This API is available by invitation only.
 
Get a list of companies with an active MRS service.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## queryCompanies


  [Source: AvaTaxClient.js Line: 1912](/lib/AvaTaxClient.js#L1912)

 - `client.queryCompanies({ include, filter, top, skip, orderBy })` 

 ### Arguments
- **include:** A comma separated list of objects to fetch underneath this company. Any object with a URL path underneath this company can be fetched by specifying its name.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* IsFein, contacts, items, locations, nexus, settings, taxCodes, taxRules, upcs, nonReportingChildCompanies, exemptCerts
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all companies

Get multiple company objects.
 
A `company` represents a single corporation or individual that is registered to handle transactional taxes.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Contacts
* Items
* Locations
* Nexus
* Settings
* TaxCodes
* TaxRules
* UPC

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## setCompanyConfiguration


  [Source: AvaTaxClient.js Line: 1951](/lib/AvaTaxClient.js#L1951)

 - `client.setCompanyConfiguration({ id, model })` 

 ### Arguments
- **id:** undefined
- **model:** undefined
 

  Change configuration settings for this company

Update configuration settings tied to this company.
 
Configuration settings provide you with the ability to control features of your account and of your
tax software. The category names `AvaCertServiceConfig` is reserved for
Avalara internal software configuration values; to store your own company-level settings, please
create a new category name that begins with `X-`, for example, `X-MyCustomCategory`.
 
Company settings are permanent settings that cannot be deleted. You can set the value of a
company setting to null if desired and if the particular setting supports it.
 
Avalara-based company settings for `AvaCertServiceConfig` affect your company's exemption certificate
processing, and should be changed with care.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## updateCompany


  [Source: AvaTaxClient.js Line: 1983](/lib/AvaTaxClient.js#L1983)

 - `client.updateCompany({ id, model })` 

 ### Arguments
- **id:** The ID of the company you wish to update.
- **model:** The company object you wish to update.
 

  Update a single company

Replace the existing company object at this URL with an updated object.
 
A `CompanyModel` represents a single corporation or individual that is registered to handle transactional taxes.
All data from the existing object will be replaced with data in the object you PUT.
 
When calling `UpdateCompany`, you are permitted to update the company itself. Updates to the nested objects
such as contacts, locations, or settings are not permitted. To update the nested objects
 
To set a field's value to `null`, you may either set its value to `null` or omit that field from the object you PUT.
 
NOTE: Please do not use these blacklisted characters in company name and code: ';', '\', '|'.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## tagTransaction


  [Source: AvaTaxClient.js Line: 2001](/lib/AvaTaxClient.js#L2001)

 - `client.tagTransaction({ companyId, model })` 

 ### Arguments
- **companyId:** undefined
- **model:** undefined
 

  API to modify the reference fields at the document and the line level.
 ## createContacts


  [Source: AvaTaxClient.js Line: 2025](/lib/AvaTaxClient.js#L2025)

 - `client.createContacts({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this contact.
- **model:** The contacts you wish to create.
 

  Create a new contact

Create one or more new contact objects.
A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
a tax collecting and filing entity.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
 ## deleteContact


  [Source: AvaTaxClient.js Line: 2047](/lib/AvaTaxClient.js#L2047)

 - `client.deleteContact({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this contact.
- **id:** The ID of the contact you wish to delete.
 

  Delete a single contact

Mark the existing contact object at this URL as deleted.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
 ## getContact


  [Source: AvaTaxClient.js Line: 2071](/lib/AvaTaxClient.js#L2071)

 - `client.getContact({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company for this contact
- **id:** The primary key of this contact
 

  Retrieve a single contact

Get the contact object identified by this URL.
A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
a tax collecting and filing entity.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listContactsByCompany


  [Source: AvaTaxClient.js Line: 2099](/lib/AvaTaxClient.js#L2099)

 - `client.listContactsByCompany({ companyId, filter, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that owns these contacts
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve contacts for this company

List all contact objects assigned to this company.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## queryContacts


  [Source: AvaTaxClient.js Line: 2133](/lib/AvaTaxClient.js#L2133)

 - `client.queryContacts({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all contacts

Get multiple contact objects across all companies.
A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
a tax collecting and filing entity.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## updateContact


  [Source: AvaTaxClient.js Line: 2165](/lib/AvaTaxClient.js#L2165)

 - `client.updateContact({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID of the company that this contact belongs to.
- **id:** The ID of the contact you wish to update
- **model:** The contact you wish to update.
 

  Update a single contact

Replace the existing contact object at this URL with an updated object.
A 'contact' is a person associated with a company who is designated to handle certain responsibilities of
a tax collecting and filing entity.
All data from the existing object will be replaced with data in the object you PUT.
To set a field's value to null, you may either set its value to null or omit that field from the object you post.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, SSTAdmin, TechnicalSupportAdmin.
 ## createCustomers


  [Source: AvaTaxClient.js Line: 2202](/lib/AvaTaxClient.js#L2202)

 - `client.createCustomers({ companyId, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **model:** The list of customer objects to be created
 

  Create customers for this company

Create one or more customers for this company.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
A nested object such as CustomFields could be specified and created along with the customer object. To fetch the
nested object, please call 'GetCustomer' API with appropriate $include parameters.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## deleteCustomer


  [Source: AvaTaxClient.js Line: 2236](/lib/AvaTaxClient.js#L2236)

 - `client.deleteCustomer({ companyId, customerCode })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **customerCode:** The unique code representing this customer
 

  Delete a customer record

Deletes the customer object referenced by this URL.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getCustomer


  [Source: AvaTaxClient.js Line: 2277](/lib/AvaTaxClient.js#L2277)

 - `client.getCustomer({ companyId, customerCode, include })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **customerCode:** The unique code representing this customer
- **include:** Specify optional additional objects to include in this fetch request
 

  Retrieve a single customer

Retrieve the customer identified by this URL.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this customer object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
You can use the `$include` parameter to fetch the following additional objects for expansion:
 
* Certificates - Fetch a list of certificates linked to this customer.
* CustomFields - Fetch a list of custom fields associated to this customer.
* attributes - Retrieves all attributes applied to the customer.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## linkAttributesToCustomer


  [Source: AvaTaxClient.js Line: 2317](/lib/AvaTaxClient.js#L2317)

 - `client.linkAttributesToCustomer({ companyId, customerCode, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded the provided customer
- **customerCode:** The unique code representing the current customer
- **model:** The list of attributes to link to the customer.
 

  Link attributes to a customer

Link one or many attributes to a customer.
 
A customer may have multiple attributes that control its behavior. You may link or unlink attributes to a
customer at any time. The full list of defined attributes may be found using `QueryCompanyCustomerAttributes` API.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this customer object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## linkCertificatesToCustomer


  [Source: AvaTaxClient.js Line: 2352](/lib/AvaTaxClient.js#L2352)

 - `client.linkCertificatesToCustomer({ companyId, customerCode, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **customerCode:** The unique code representing this customer
- **model:** The list of certificates to link to this customer
 

  Link certificates to a customer

Link one or more certificates to a customer.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## linkShipToCustomersToBillCustomer


  [Source: AvaTaxClient.js Line: 2388](/lib/AvaTaxClient.js#L2388)

 - `client.linkShipToCustomersToBillCustomer({ companyId, code, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company defining customers.
- **code:** The code of the bill-to customer to link.
- **model:** A list of information about ship-to customers to link to this bill-to customer.
 

  Link two customer records together

Links a Ship-To customer record with a Bill-To customer record.
 
Customer records represent businesses or individuals who can provide exemption certificates. Some customers
may have certificates that are linked to their shipping address or their billing address. To group these
customer records together, you may link multiple bill-to and ship-to addresses together to represent a single
entity that has multiple different addresses of different kinds.
 
In general, a customer will have only one primary billing address and multiple ship-to addresses, representing
all of the different locations where they receive goods. To facilitate this type of customer, you can send in
one bill-to customer code and multiple ship-to customer codes in a single API call.
 
Note that you can only link a ship-to customer record to a bill-to customer record. You may not link two customers
of the same kind together.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## listAttributesForCustomer


  [Source: AvaTaxClient.js Line: 2425](/lib/AvaTaxClient.js#L2425)

 - `client.listAttributesForCustomer({ companyId, customerCode })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded the provided customer
- **customerCode:** The unique code representing the current customer
 

  Retrieve a customer's attributes

Retrieve the attributes linked to the customer identified by this URL.
 
A customer may have multiple attributes that control its behavior. You may link or unlink attributes to a
customer at any time. The full list of defined attributes may be found using `QueryCompanyCustomerAttributes` API.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this customer object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## listCertificatesForCustomer


  [Source: AvaTaxClient.js Line: 2464](/lib/AvaTaxClient.js#L2464)

 - `client.listCertificatesForCustomer({ companyId, customerCode, include, filter, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **customerCode:** The unique code representing this customer
- **include:** OPTIONAL: A comma separated list of special fetch options. You can specify one or more of the following:      * customers - Retrieves the list of customers linked to the certificate.   * po_numbers - Retrieves all PO numbers tied to the certificate.   * attributes - Retrieves all attributes applied to the certificate.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* exemptionNumber, status, ecmsId, ecmsStatus, pdf, pages
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List certificates linked to a customer

List all certificates linked to a customer.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## listValidCertificatesForCustomer


  [Source: AvaTaxClient.js Line: 2509](/lib/AvaTaxClient.js#L2509)

 - `client.listValidCertificatesForCustomer({ companyId, customerCode, country, region })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **customerCode:** The unique code representing this customer
- **country:** Search for certificates matching this country. Uses the ISO 3166 two character country code.
- **region:** Search for certificates matching this region. Uses the ISO 3166 two or three character state, region, or province code.
 

  List valid certificates for a location

List valid certificates linked to a customer in a particular country and region.
 
This API is intended to help identify whether a customer has already provided a certificate that
applies to a particular country and region. This API is intended to help you remind a customer
when they have or have not provided copies of their exemption certificates to you during the sales
order process.
 
If a customer does not have a certificate on file and they wish to provide one, you should send the customer
a CertExpress invitation link so that the customer can upload proof of their exemption certificate. Please
see the `CreateCertExpressInvitation` API to create an invitation link for this customer.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## queryCustomers


  [Source: AvaTaxClient.js Line: 2552](/lib/AvaTaxClient.js#L2552)

 - `client.queryCustomers({ companyId, include, filter, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **include:** OPTIONAL - You can specify the value `certificates` to fetch information about certificates linked to the customer.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* shipTos
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all customers for this company

List all customers recorded by this company matching the specified criteria.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
You can use the `$include` parameter to fetch the following additional objects for expansion:
 
* Certificates - Fetch a list of certificates linked to this customer.
* attributes - Retrieves all attributes applied to the customer.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## unlinkAttributesFromCustomer


  [Source: AvaTaxClient.js Line: 2596](/lib/AvaTaxClient.js#L2596)

 - `client.unlinkAttributesFromCustomer({ companyId, customerCode, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded the customer
- **customerCode:** The unique code representing the current customer
- **model:** The list of attributes to unlink from the customer.
 

  Unlink attributes from a customer

Unlink one or many attributes from a customer.
 
A customer may have multiple attributes that control its behavior. You may link or unlink attributes to a
customer at any time. The full list of defined attributes may be found using `QueryCompanyCustomerAttributes` API.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this customer object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## unlinkCertificatesFromCustomer


  [Source: AvaTaxClient.js Line: 2631](/lib/AvaTaxClient.js#L2631)

 - `client.unlinkCertificatesFromCustomer({ companyId, customerCode, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **customerCode:** The unique code representing this customer
- **model:** The list of certificates to link to this customer
 

  Unlink certificates from a customer

Remove one or more certificates to a customer.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## updateCustomer


  [Source: AvaTaxClient.js Line: 2666](/lib/AvaTaxClient.js#L2666)

 - `client.updateCustomer({ companyId, customerCode, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that recorded this customer
- **customerCode:** The unique code representing this customer
- **model:** The new customer model that will replace the existing record at this URL
 

  Update a single customer

Replace the customer object at this URL with a new record.
 
A customer object defines information about a person or business that purchases products from your
company. When you create a tax transaction in AvaTax, you can use the `customerCode` from this
record in your `CreateTransaction` API call. AvaTax will search for this `customerCode` value and
identify any certificates linked to this `customer` object. If any certificate applies to the transaction,
AvaTax will record the appropriate elements of the transaction as exempt and link it to the `certificate`.
 
Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error `CertCaptureNotConfiguredError` when they call exemption
certificate related APIs. To check if this company is set up, call `GetCertificateSetup`. To request setup of the auditable document
storage for this company, call `RequestCertificateSetup`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## createDataSources


  [Source: AvaTaxClient.js Line: 2689](/lib/AvaTaxClient.js#L2689)

 - `client.createDataSources({ companyId, model })` 

 ### Arguments
- **companyId:** The id of the company you which to create the datasources
- **model:** undefined
 

  Create and store new datasources for the respective companies.

Create one or more datasource objects.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## deleteDataSource


  [Source: AvaTaxClient.js Line: 2712](/lib/AvaTaxClient.js#L2712)

 - `client.deleteDataSource({ companyId, id })` 

 ### Arguments
- **companyId:** The id of the company the datasource belongs to.
- **id:** The id of the datasource you wish to delete.
 

  Delete a datasource by datasource id for a company.

Marks the existing datasource for a company as deleted.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getDataSourceById


  [Source: AvaTaxClient.js Line: 2735](/lib/AvaTaxClient.js#L2735)

 - `client.getDataSourceById({ companyId, id })` 

 ### Arguments
- **companyId:** undefined
- **id:** data source id
 

  Get data source by data source id

Retrieve the data source by its unique ID number.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## listDataSources


  [Source: AvaTaxClient.js Line: 2761](/lib/AvaTaxClient.js#L2761)

 - `client.listDataSources({ companyId, filter, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The id of the company you wish to retrieve the datasources.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* isEnabled, isSynced, isAuthorized
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all datasources for this company

Gets multiple datasource objects for a given company.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## queryDataSources


  [Source: AvaTaxClient.js Line: 2794](/lib/AvaTaxClient.js#L2794)

 - `client.queryDataSources({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* isEnabled, isSynced, isAuthorized
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all datasources

Get multiple datasource objects across all companies.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## updateDataSource


  [Source: AvaTaxClient.js Line: 2823](/lib/AvaTaxClient.js#L2823)

 - `client.updateDataSource({ companyId, id, model })` 

 ### Arguments
- **companyId:** The id of the company the datasource belongs to.
- **id:** The id of the datasource you wish to delete.
- **model:** undefined
 

  Update a datasource identified by id for a company

Updates a datasource for a company.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getCrossBorderCode


  [Source: AvaTaxClient.js Line: 2854](/lib/AvaTaxClient.js#L2854)

 - `client.getCrossBorderCode({ country, hsCode })` 

 ### Arguments
- **country:** The name or code of the destination country.
- **hsCode:** The partial or full HS Code for which you would like to view all of the parents.
 

  Lists all parents of an HS Code.

Retrieves the specified HS code and all of its parents, reflecting all sections, chapters, headings, and subheadings
 
a list of HS Codes that are the parents and information branches of the HS Code for the given
destination country, if lower detail is available.
 
This API will include information branches if applicable. These do not have HS Codes and cannot be referenced,
but can contain information relevant to deciding the correct HS Code.
 
This API is intended to be useful to review the descriptive hierarchy of an HS Code, which can be particularly helpful
when HS Codes can have multiple levels of generic descriptions.

### Security Policies

* This API depends on the following active services<br />*Required* (all): AvaTaxGlobal.
 ## getLoginVerifierByForm


  [Source: AvaTaxClient.js Line: 2876](/lib/AvaTaxClient.js#L2876)

 - `client.getLoginVerifierByForm({ form, filter, top, skip, orderBy })` 

 ### Arguments
- **form:** The name of the form you would like to verify. This is the tax form code
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxFormCodes, scraperType, expectedResponseTime, requiredFilingCalendarDataFields
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Test whether a form supports online login verification

This API is intended to be useful to identify whether the user should be allowed
to automatically verify their login and password. This API will provide a result only if the form supports automatic online login verification.
 ## listAvaFileForms


  [Source: AvaTaxClient.js Line: 2906](/lib/AvaTaxClient.js#L2906)

 - `client.listAvaFileForms({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* outletTypeId
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of the AvaFile Forms available

This API is deprecated.
 
Please use the ListTaxForms API.
 
Returns the full list of Avalara-supported AvaFile Forms
This API is intended to be useful to identify all the different AvaFile Forms
 ## listCertificateAttributes


  [Source: AvaTaxClient.js Line: 2938](/lib/AvaTaxClient.js#L2938)

 - `client.listCertificateAttributes({ companyid, filter, top, skip, orderBy })` 

 ### Arguments
- **companyid:** Id of the company the user wish to fetch the certificates' attributes from. If not specified the API will use user's default company.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List certificate attributes used by a company

List the certificate attributes defined by a company either specified by the user or the user's default company.
 
A certificate may have multiple attributes that control its behavior. You may apply or remove attributes to a
certificate at any time.
 
If you see the 'CertCaptureNotConfiguredError', please use CheckProvision and RequestProvision endpoints to
check and provision account.
 ## listCertificateExemptReasons


  [Source: AvaTaxClient.js Line: 2970](/lib/AvaTaxClient.js#L2970)

 - `client.listCertificateExemptReasons({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List the certificate exempt reasons defined by a company

List the certificate exempt reasons defined by a company.
 
An exemption reason defines why a certificate allows a customer to be exempt
for purposes of tax calculation.
 
If you see the 'CertCaptureNotConfiguredError', please use CheckProvision and RequestProvision endpoints to
check and provision account.
 ## listCertificateExposureZones


  [Source: AvaTaxClient.js Line: 3001](/lib/AvaTaxClient.js#L3001)

 - `client.listCertificateExposureZones({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* id, companyId, name, tag, description, created, modified, region, country
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List certificate exposure zones used by a company

List the certificate exposure zones defined by a company.
 
An exposure zone is a location where a certificate can be valid. Exposure zones may indicate a taxing
authority or other legal entity to which a certificate may apply.
 
If you see the 'CertCaptureNotConfiguredError', please use CheckProvision and RequestProvision endpoints to
check and provision account.
 ## listCommunicationsServiceTypes


  [Source: AvaTaxClient.js Line: 3027](/lib/AvaTaxClient.js#L3027)

 - `client.listCommunicationsServiceTypes({ id, filter, top, skip, orderBy })` 

 ### Arguments
- **id:** The transaction type ID to examine
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* requiredParameters
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of communications service types

Returns full list of service types for a given transaction type ID.
 ## listCommunicationsTransactionTypes


  [Source: AvaTaxClient.js Line: 3053](/lib/AvaTaxClient.js#L3053)

 - `client.listCommunicationsTransactionTypes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of communications transactiontypes

Returns full list of communications transaction types which
are accepted in communication tax calculation requests.
 ## listCommunicationsTSPairs


  [Source: AvaTaxClient.js Line: 3079](/lib/AvaTaxClient.js#L3079)

 - `client.listCommunicationsTSPairs({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* requiredParameters
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of communications transaction/service type pairs

Returns full list of communications transaction/service type pairs which
are accepted in communication tax calculation requests.
 ## listCountries


  [Source: AvaTaxClient.js Line: 3106](/lib/AvaTaxClient.js#L3106)

 - `client.listCountries({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* alpha3Code, isEuropeanUnion, localizedNames, addressesRequireRegion
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all ISO 3166 countries

Returns a list of all ISO 3166 country codes, and their US English friendly names.
This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a country for
a shipping address.
 ## listCoverLetters


  [Source: AvaTaxClient.js Line: 3138](/lib/AvaTaxClient.js#L3138)

 - `client.listCoverLetters({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* id, companyId, subject, description, createdDate, modifiedDate, pageCount, templateFilename, version
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List certificate exposure zones used by a company

List available cover letters that can be used when sending invitation to use CertExpress to upload certificates.
 
The CoverLetter model represents a message sent along with an invitation to use CertExpress to
upload certificates. An invitation allows customers to use CertExpress to upload their exemption
certificates directly; this cover letter explains why the invitation was sent.
 
If you see the 'CertCaptureNotConfiguredError', please use CheckProvision and RequestProvision endpoints to
check and provision account.
 ## listCrossBorderCodes


  [Source: AvaTaxClient.js Line: 3176](/lib/AvaTaxClient.js#L3176)

 - `client.listCrossBorderCodes({ country, hsCode, filter, top, skip, orderBy })` 

 ### Arguments
- **country:** The name or code of the destination country.
- **hsCode:** The Section or partial HS Code for which you would like to view the next level of HS Code detail, if more detail is available.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* hsCodeSource, system, destinationCountry, isDecisionNode, zeroPaddingCount, isSystemDefined, isTaxable, effDate, endDate, hsCodeSourceLength
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Lists the next level of HS Codes given a destination country and HS Code prefix.

Retrieves a list of HS Codes that are the children of the prefix for the given destination country, if
additional children are available.
 
HS Code is interchangeable with "tariff code" and definitions are generally unique to a destination country.
An HS Code describes an item and its eligibility/rate for tariffs. HS Codes are organized by
Section/Chapter/Heading/Subheading/Classification.
 
This API is intended to be useful to identify the correct HS Code to use for your item.

### Security Policies

* This API depends on the following active services<br />*Required* (all): AvaTaxGlobal.
 ## listCrossBorderSections


  [Source: AvaTaxClient.js Line: 3206](/lib/AvaTaxClient.js#L3206)

 - `client.listCrossBorderSections()` 

  

  List top level HS Code Sections.

Returns the full list of top level HS Code Sections. Sections are the broadest level of detail for
classifying tariff codes and the items to which they apply. HS Codes are organized
by Section/Chapter/Heading/Subheading/Classification.
 
This API is intended to be useful to identify the top level Sections for
further LandedCost HS Code lookups.

### Security Policies

* This API depends on the following active services<br />*Required* (all): AvaTaxGlobal.
 ## listCurrencies


  [Source: AvaTaxClient.js Line: 3229](/lib/AvaTaxClient.js#L3229)

 - `client.listCurrencies({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all ISO 4217 currencies supported by AvaTax.

Lists all ISO 4217 currencies supported by AvaTax.
 
This API produces a list of currency codes that can be used when calling AvaTax. The values from this API can be used to fill out the
`currencyCode` field in a `CreateTransactionModel`.
 ## listEntityUseCodes


  [Source: AvaTaxClient.js Line: 3258](/lib/AvaTaxClient.js#L3258)

 - `client.listEntityUseCodes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* validCountries
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported entity use codes

Returns the full list of Avalara-supported entity use codes.
Entity/Use Codes are definitions of the entity who is purchasing something, or the purpose for which the transaction
is occurring. This information is generally used to determine taxability of the product.
In order to facilitate correct reporting of your taxes, you are encouraged to select the proper entity use codes for
all transactions that are exempt.
 ## listFilingFrequencies


  [Source: AvaTaxClient.js Line: 3284](/lib/AvaTaxClient.js#L3284)

 - `client.listFilingFrequencies({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported filing frequencies.

Returns the full list of Avalara-supported filing frequencies.
This API is intended to be useful to identify all the different filing frequencies that can be used in notices.
 ## listJurisdictions


  [Source: AvaTaxClient.js Line: 3314](/lib/AvaTaxClient.js#L3314)

 - `client.listJurisdictions({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* rate, salesRate, signatureCode, useRate
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List jurisdictions based on the filter provided

Returns a list of all Avalara-supported taxing jurisdictions.
 
This API allows you to examine all Avalara-supported jurisdictions. You can filter your search by supplying
SQL-like query for fetching only the ones you concerned about. For example: effectiveDate &gt; '2016-01-01'
 
The rate, salesRate, and useRate fields are not available on the JurisdictionModels returned by this API.
 ## listJurisdictionsByAddress


  [Source: AvaTaxClient.js Line: 3352](/lib/AvaTaxClient.js#L3352)

 - `client.listJurisdictionsByAddress({ line1, line2, line3, city, region, postalCode, country, filter, top, skip, orderBy })` 

 ### Arguments
- **line1:** The first address line portion of this address.
- **line2:** The second address line portion of this address.
- **line3:** The third address line portion of this address.
- **city:** The city portion of this address.
- **region:** The region, state, or province code portion of this address.
- **postalCode:** The postal code or zip code portion of this address.
- **country:** The two-character ISO-3166 code of the country portion of this address.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* country, Jurisdictions
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List jurisdictions near a specific address

Returns a list of all Avalara-supported taxing jurisdictions that apply to this address.
 
This API allows you to identify which jurisdictions are nearby a specific address according to the best available geocoding information.
It is intended to allow you to create a "Jurisdiction Override", which allows an address to be configured as belonging to a nearby
jurisdiction in AvaTax.
 
The results of this API call can be passed to the `CreateJurisdictionOverride` API call.
 ## listLocationQuestionsByAddress


  [Source: AvaTaxClient.js Line: 3398](/lib/AvaTaxClient.js#L3398)

 - `client.listLocationQuestionsByAddress({ line1, line2, line3, city, region, postalCode, country, latitude, longitude, filter, top, skip, orderBy })` 

 ### Arguments
- **line1:** The first line of this location's address.
- **line2:** The second line of this location's address.
- **line3:** The third line of this location's address.
- **city:** The city part of this location's address.
- **region:** The region, state, or province part of this location's address.
- **postalCode:** The postal code of this location's address.
- **country:** The country part of this location's address.
- **latitude:** Optionally identify the location via latitude/longitude instead of via address.
- **longitude:** Optionally identify the location via latitude/longitude instead of via address.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the list of questions that are required for a tax location

Returns the list of additional questions you must answer when declaring a location in certain taxing jurisdictions.
Some tax jurisdictions require that you register or provide additional information to configure each physical place where
your company does business.
This information is not usually required in order to calculate tax correctly, but is almost always required to file your tax correctly.
You can call this API call for any address and obtain information about what questions must be answered in order to properly
file tax in that location.
 ## listLoginVerifiers


  [Source: AvaTaxClient.js Line: 3434](/lib/AvaTaxClient.js#L3434)

 - `client.listLoginVerifiers({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxFormCodes, scraperType, expectedResponseTime, requiredFilingCalendarDataFields
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all forms where logins can be verified automatically

List all forms where logins can be verified automatically.
This API is intended to be useful to identify whether the user should be allowed
to automatically verify their login and password.
 ## listMarketplaceLocations


  [Source: AvaTaxClient.js Line: 3459](/lib/AvaTaxClient.js#L3459)

 - `client.listMarketplaceLocations({ marketplaceId, top, skip, orderBy })` 

 ### Arguments
- **marketplaceId:** MarketplaceId of a marketplace
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the list of locations for a marketplace.

Retrieves the list of suggested locations for a marketplace.
 ## listNexus


  [Source: AvaTaxClient.js Line: 3486](/lib/AvaTaxClient.js#L3486)

 - `client.listNexus({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxAuthorityId
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported nexus for all countries and regions.

Returns the full list of all Avalara-supported nexus for all countries and regions.
 
This API is intended to be useful if your user interface needs to display a selectable list of nexus.
 ## listNexusByAddress


  [Source: AvaTaxClient.js Line: 3522](/lib/AvaTaxClient.js#L3522)

 - `client.listNexusByAddress({ line1, line2, line3, city, region, postalCode, country, filter, top, skip, orderBy })` 

 ### Arguments
- **line1:** The first address line portion of this address.
- **line2:** The first address line portion of this address.
- **line3:** The first address line portion of this address.
- **city:** The city portion of this address.
- **region:** Name or ISO 3166 code identifying the region portion of the address.      This field supports many different region identifiers:   * Two and three character ISO 3166 region codes   * Fully spelled out names of the region in ISO supported languages   * Common alternative spellings for many regions      For a full list of all supported codes and names, please see the Definitions API `ListRegions`.
- **postalCode:** The postal code or zip code portion of this address.
- **country:** Name or ISO 3166 code identifying the country portion of this address.      This field supports many different country identifiers:   * Two character ISO 3166 codes   * Three character ISO 3166 codes   * Fully spelled out names of the country in ISO supported languages   * Common alternative spellings for many countries      For a full list of all supported codes and names, please see the Definitions API `ListCountries`.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxAuthorityId
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all nexus that apply to a specific address.

Returns a list of all Avalara-supported taxing jurisdictions that apply to this address.
This API allows you to identify which tax authorities apply to a physical location, salesperson address, or point of sale.
In general, it is usually expected that a company will declare nexus in all the jurisdictions that apply to each physical address
where the company does business.
The results of this API call can be passed to the 'Create Nexus' API call to declare nexus for this address.
 ## listNexusByCountry


  [Source: AvaTaxClient.js Line: 3557](/lib/AvaTaxClient.js#L3557)

 - `client.listNexusByCountry({ country, filter, top, skip, orderBy })` 

 ### Arguments
- **country:** The country in which you want to fetch the system nexus
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxAuthorityId
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported nexus for a country.

Returns all Avalara-supported nexus for the specified country.
 
This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by country.
 ## listNexusByCountryAndRegion


  [Source: AvaTaxClient.js Line: 3586](/lib/AvaTaxClient.js#L3586)

 - `client.listNexusByCountryAndRegion({ country, region, filter, top, skip, orderBy })` 

 ### Arguments
- **country:** The two-character ISO-3166 code for the country.
- **region:** The two or three character region code for the region.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxAuthorityId
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported nexus for a country and region.

Returns all Avalara-supported nexus for the specified country and region.
 
This API is intended to be useful if your user interface needs to display a selectable list of nexus filtered by country and region.
 ## listNexusByFormCode


  [Source: AvaTaxClient.js Line: 3622](/lib/AvaTaxClient.js#L3622)

 - `client.listNexusByFormCode({ formCode })` 

 ### Arguments
- **formCode:** The form code that we are looking up the nexus for
 

  List nexus related to a tax form

Retrieves a list of nexus related to a tax form.
 
The concept of `Nexus` indicates a place where your company has sufficient physical presence and is obligated
to collect and remit transaction-based taxes.
 
When defining companies in AvaTax, you must declare nexus for your company in order to correctly calculate tax
in all jurisdictions affected by your transactions.
 
This API is intended to provide useful information when examining a tax form. If you are about to begin filing
a tax form, you may want to know whether you have declared nexus in all the jurisdictions related to that tax
form in order to better understand how the form will be filled out.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listNexusTaxTypeGroups


  [Source: AvaTaxClient.js Line: 3643](/lib/AvaTaxClient.js#L3643)

 - `client.listNexusTaxTypeGroups({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptionTypeId, subscriptionDescription, tabName, showColumn
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of nexus tax type groups

Returns the full list of Avalara-supported nexus tax type groups
This API is intended to be useful to identify all the different tax sub-types.
 ## listNoticeCustomerFundingOptions


  [Source: AvaTaxClient.js Line: 3669](/lib/AvaTaxClient.js#L3669)

 - `client.listNoticeCustomerFundingOptions({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* activeFlag, sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice customer funding options.

Returns the full list of Avalara-supported tax notice customer funding options.
This API is intended to be useful to identify all the different notice customer funding options that can be used in notices.
 ## listNoticeCustomerTypes


  [Source: AvaTaxClient.js Line: 3695](/lib/AvaTaxClient.js#L3695)

 - `client.listNoticeCustomerTypes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* activeFlag, sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice customer types.

Returns the full list of Avalara-supported tax notice customer types.
This API is intended to be useful to identify all the different notice customer types.
 ## listNoticeFilingtypes


  [Source: AvaTaxClient.js Line: 3721](/lib/AvaTaxClient.js#L3721)

 - `client.listNoticeFilingtypes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* description, activeFlag, sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice filing types.

Returns the full list of Avalara-supported tax notice filing types.
This API is intended to be useful to identify all the different notice filing types that can be used in notices.
 ## listNoticePriorities


  [Source: AvaTaxClient.js Line: 3747](/lib/AvaTaxClient.js#L3747)

 - `client.listNoticePriorities({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* activeFlag, sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice priorities.

Returns the full list of Avalara-supported tax notice priorities.
This API is intended to be useful to identify all the different notice priorities that can be used in notices.
 ## listNoticeReasons


  [Source: AvaTaxClient.js Line: 3773](/lib/AvaTaxClient.js#L3773)

 - `client.listNoticeReasons({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* description, activeFlag, sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice reasons.

Returns the full list of Avalara-supported tax notice reasons.
This API is intended to be useful to identify all the different tax notice reasons.
 ## listNoticeResponsibilities


  [Source: AvaTaxClient.js Line: 3799](/lib/AvaTaxClient.js#L3799)

 - `client.listNoticeResponsibilities({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice responsibility ids

Returns the full list of Avalara-supported tax notice responsibility ids
This API is intended to be useful to identify all the different tax notice responsibilities.
 ## listNoticeRootCauses


  [Source: AvaTaxClient.js Line: 3825](/lib/AvaTaxClient.js#L3825)

 - `client.listNoticeRootCauses({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice root causes

Returns the full list of Avalara-supported tax notice root causes
This API is intended to be useful to identify all the different tax notice root causes.
 ## listNoticeStatuses


  [Source: AvaTaxClient.js Line: 3851](/lib/AvaTaxClient.js#L3851)

 - `client.listNoticeStatuses({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* isOpen, sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice statuses.

Returns the full list of Avalara-supported tax notice statuses.
This API is intended to be useful to identify all the different tax notice statuses.
 ## listNoticeTypes


  [Source: AvaTaxClient.js Line: 3877](/lib/AvaTaxClient.js#L3877)

 - `client.listNoticeTypes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* activeFlag, sortOrder
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax notice types.

Returns the full list of Avalara-supported tax notice types.
This API is intended to be useful to identify all the different notice types that can be used in notices.
 ## listParameters


  [Source: AvaTaxClient.js Line: 3904](/lib/AvaTaxClient.js#L3904)

 - `client.listParameters({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* serviceTypes, regularExpression, values
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported extra parameters for creating transactions.

Returns the full list of Avalara-supported extra parameters for the 'Create Transaction' API call.
This list of parameters is available for use when configuring your transaction.
Some parameters are only available for use if you have subscribed to certain features of AvaTax.
 ## listParametersByItem


  [Source: AvaTaxClient.js Line: 3935](/lib/AvaTaxClient.js#L3935)

 - `client.listParametersByItem({ companyCode, itemCode, filter, top, skip, orderBy })` 

 ### Arguments
- **companyCode:** Company code.
- **itemCode:** Item code.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* serviceTypes, regularExpression, values
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the parameters by companyCode and itemCode.

Returns the list of parameters based on the company country and state jurisdiction and the item code.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listPermissions


  [Source: AvaTaxClient.js Line: 3959](/lib/AvaTaxClient.js#L3959)

 - `client.listPermissions({ top, skip })` 

 ### Arguments
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
 

  Retrieve the full list of Avalara-supported permissions

Returns the full list of Avalara-supported permission types.
This API is intended to be useful to identify the capabilities of a particular user logon.
 ## listPostalCodes


  [Source: AvaTaxClient.js Line: 3982](/lib/AvaTaxClient.js#L3982)

 - `client.listPostalCodes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported postal codes.

Retrieves the list of Avalara-supported postal codes.
 ## listPreferredPrograms


  [Source: AvaTaxClient.js Line: 4015](/lib/AvaTaxClient.js#L4015)

 - `client.listPreferredPrograms({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* effectiveDate, endDate
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all customs duty programs recognized by AvaTax

List all preferred customs duty programs recognized by AvaTax.
 
A customs duty program is an optional program you can use to obtain favorable treatment from customs and duty agents.
An example of a preferred program is NAFTA, which provides preferential rates for products being shipped from neighboring
countries.
 
To select a preferred program for calculating customs and duty rates, call this API to find the appropriate code for your
preferred program. Next, set the parameter `AvaTax.LC.PreferredProgram` in your `CreateTransaction` call to the code of
the program.
 ## listProductClassificationSystems


  [Source: AvaTaxClient.js Line: 4043](/lib/AvaTaxClient.js#L4043)

 - `client.listProductClassificationSystems({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* countries
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all available product classification systems.

List all available product classification systems.
 
Tax authorities use product classification systems as a way to identify products and associate them with a tax rate.
More than one tax authority might use the same product classification system, but they might charge different tax rates for products.
 ## listProductClassificationSystemsByCompany


  [Source: AvaTaxClient.js Line: 4072](/lib/AvaTaxClient.js#L4072)

 - `client.listProductClassificationSystemsByCompany({ companyCode, filter, top, skip, orderBy })` 

 ### Arguments
- **companyCode:** The company code.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* countries
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all product classification systems available to a company based on its nexus.

Lists all product classification systems available to a company based on its nexus.
 
Tax authorities use product classification systems as a way to identify products and associate them with a tax rate.
More than one tax authority might use the same product classification system, but they might charge different tax rates for products.
 ## listRateTypesByCountry


  [Source: AvaTaxClient.js Line: 4099](/lib/AvaTaxClient.js#L4099)

 - `client.listRateTypesByCountry({ country, filter, top, skip, orderBy })` 

 ### Arguments
- **country:** The country to examine for rate types
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of rate types for each country

Returns the full list of Avalara-supported rate type file types
This API is intended to be useful to identify all the different rate types.
 ## listRegions


  [Source: AvaTaxClient.js Line: 4126](/lib/AvaTaxClient.js#L4126)

 - `client.listRegions({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* localizedNames
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all ISO 3166 regions

Returns a list of all ISO 3166 region codes and their US English friendly names.
This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a region
within the country for a shipping addresses.
 ## listRegionsByCountry


  [Source: AvaTaxClient.js Line: 4154](/lib/AvaTaxClient.js#L4154)

 - `client.listRegionsByCountry({ country, filter, top, skip, orderBy })` 

 ### Arguments
- **country:** The country of which you want to fetch ISO 3166 regions
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* localizedNames
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all ISO 3166 regions for a country

Returns a list of all ISO 3166 region codes for a specific country code, and their US English friendly names.
This API is intended to be useful when presenting a dropdown box in your website to allow customers to select a region
within the country for a shipping addresses.
 ## listResourceFileTypes


  [Source: AvaTaxClient.js Line: 4180](/lib/AvaTaxClient.js#L4180)

 - `client.listResourceFileTypes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported resource file types

Returns the full list of Avalara-supported resource file types
This API is intended to be useful to identify all the different resource file types.
 ## listSecurityRoles


  [Source: AvaTaxClient.js Line: 4207](/lib/AvaTaxClient.js#L4207)

 - `client.listSecurityRoles({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported permissions

Returns the full list of Avalara-supported permission types.
This API is intended to be useful when designing a user interface for selecting the security role of a user account.
Some security roles are restricted for Avalara internal use.
 ## listSubscriptionTypes


  [Source: AvaTaxClient.js Line: 4235](/lib/AvaTaxClient.js#L4235)

 - `client.listSubscriptionTypes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported subscription types

Returns the full list of Avalara-supported subscription types.
This API is intended to be useful for identifying which features you have added to your account.
You may always contact Avalara's sales department for information on available products or services.
You cannot change your subscriptions directly through the API.
 ## listTaxAuthorities


  [Source: AvaTaxClient.js Line: 4261](/lib/AvaTaxClient.js#L4261)

 - `client.listTaxAuthorities({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax authorities.

Returns the full list of Avalara-supported tax authorities.
This API is intended to be useful to identify all the different authorities that receive tax.
 ## listTaxAuthorityForms


  [Source: AvaTaxClient.js Line: 4289](/lib/AvaTaxClient.js#L4289)

 - `client.listTaxAuthorityForms({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported forms for each tax authority.

Returns the full list of Avalara-supported forms for each tax authority.
This list represents tax forms that Avalara recognizes.
Customers who subscribe to Avalara Managed Returns Service can request these forms to be filed automatically
based on the customer's AvaTax data.
 ## listTaxAuthorityTypes


  [Source: AvaTaxClient.js Line: 4315](/lib/AvaTaxClient.js#L4315)

 - `client.listTaxAuthorityTypes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax authority types.

Returns the full list of Avalara-supported tax authority types.
This API is intended to be useful to identify all the different authority types.
 ## listTaxCodes


  [Source: AvaTaxClient.js Line: 4348](/lib/AvaTaxClient.js#L4348)

 - `client.listTaxCodes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of Avalara-supported tax codes.

Retrieves the list of Avalara-supported system tax codes.
A 'TaxCode' represents a uniquely identified type of product, good, or service.
Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
taxability rules for this product in all supported jurisdictions.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listTaxCodeTypes


  [Source: AvaTaxClient.js Line: 4373](/lib/AvaTaxClient.js#L4373)

 - `client.listTaxCodeTypes({ top, skip })` 

 ### Arguments
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
 

  Retrieve the full list of Avalara-supported tax code types.

Returns the full list of recognized tax code types.
A 'Tax Code Type' represents a broad category of tax codes, and is less detailed than a single TaxCode.
This API is intended to be useful for broadly searching for tax codes by tax code type.
 ## listTaxForms


  [Source: AvaTaxClient.js Line: 4397](/lib/AvaTaxClient.js#L4397)

 - `client.listTaxForms({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of the Tax Forms available

Returns the full list of Avalara-supported Tax Forms
This API is intended to be useful to identify all the different Tax Forms
 ## listTaxSubTypes


  [Source: AvaTaxClient.js Line: 4423](/lib/AvaTaxClient.js#L4423)

 - `client.listTaxSubTypes({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of tax sub types

Returns the full list of Avalara-supported tax sub-types
This API is intended to be useful to identify all the different tax sub-types.
 ## listTaxTypeGroups


  [Source: AvaTaxClient.js Line: 4449](/lib/AvaTaxClient.js#L4449)

 - `client.listTaxTypeGroups({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptionTypeId, subscriptionDescription, tabName, showColumn, displaySequence
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve the full list of tax type groups

Returns the full list of Avalara-supported tax type groups
This API is intended to be useful to identify all the different tax type groups.
 ## listUnitOfMeasurement


  [Source: AvaTaxClient.js Line: 4476](/lib/AvaTaxClient.js#L4476)

 - `client.listUnitOfMeasurement({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* id
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all defined units of measurement

List all units of measurement systems defined by Avalara.
 
A unit of measurement system is a method of measuring a quantity, such as distance, mass, or others.
 ## createDistanceThreshold


  [Source: AvaTaxClient.js Line: 4507](/lib/AvaTaxClient.js#L4507)

 - `client.createDistanceThreshold({ companyId, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that owns this DistanceThreshold
- **model:** The DistanceThreshold object or objects you wish to create.
 

  Create one or more DistanceThreshold objects

Create one or more DistanceThreshold objects for this company.
 
A company-distance-threshold model indicates the distance between a company
and the taxing borders of various countries. Distance thresholds are necessary
to correctly calculate some value-added taxes.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## deleteDistanceThreshold


  [Source: AvaTaxClient.js Line: 4533](/lib/AvaTaxClient.js#L4533)

 - `client.deleteDistanceThreshold({ companyId, id })` 

 ### Arguments
- **companyId:** The unique ID number of the company that owns this DistanceThreshold
- **id:** The unique ID number of the DistanceThreshold object you wish to delete.
 

  Delete a single DistanceThreshold object

Marks the DistanceThreshold object identified by this URL as deleted.
 
A company-distance-threshold model indicates the distance between a company
and the taxing borders of various countries. Distance thresholds are necessary
to correctly calculate some value-added taxes.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## getDistanceThreshold


  [Source: AvaTaxClient.js Line: 4559](/lib/AvaTaxClient.js#L4559)

 - `client.getDistanceThreshold({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this DistanceThreshold object
- **id:** The unique ID number referring to this DistanceThreshold object
 

  Retrieve a single DistanceThreshold

Retrieves a single DistanceThreshold object defined by this URL.
 
A company-distance-threshold model indicates the distance between a company
and the taxing borders of various countries. Distance thresholds are necessary
to correctly calculate some value-added taxes.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listDistanceThresholds


  [Source: AvaTaxClient.js Line: 4589](/lib/AvaTaxClient.js#L4589)

 - `client.listDistanceThresholds({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company whose DistanceThreshold objects you wish to list.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all DistanceThresholds for this company.

Lists all DistanceThreshold objects that belong to this company.
 
A company-distance-threshold model indicates the distance between a company
and the taxing borders of various countries. Distance thresholds are necessary
to correctly calculate some value-added taxes.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## queryDistanceThresholds


  [Source: AvaTaxClient.js Line: 4627](/lib/AvaTaxClient.js#L4627)

 - `client.queryDistanceThresholds({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all DistanceThreshold objects

Lists all DistanceThreshold objects that belong to this account.
 
A company-distance-threshold model indicates the distance between a company
and the taxing borders of various countries. Distance thresholds are necessary
to correctly calculate some value-added taxes.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## updateDistanceThreshold


  [Source: AvaTaxClient.js Line: 4663](/lib/AvaTaxClient.js#L4663)

 - `client.updateDistanceThreshold({ companyId, id, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company that owns this DistanceThreshold object.
- **id:** The unique ID number of the DistanceThreshold object to replace.
- **model:** The new DistanceThreshold object to store.
 

  Update a DistanceThreshold object

Replace the existing DistanceThreshold object at this URL with an updated object.
 
A company-distance-threshold model indicates the distance between a company
and the taxing borders of various countries. Distance thresholds are necessary
to correctly calculate some value-added taxes.
 
All data from the existing object will be replaced with data in the object you PUT.
To set a field's value to null, you may either set its value to null or omit that field from the object you post.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## getFiledReturns


  [Source: AvaTaxClient.js Line: 4692](/lib/AvaTaxClient.js#L4692)

 - `client.getFiledReturns({ companyId, endPeriodMonth, endPeriodYear, frequency, status, country, region, filingCalendarId, taxformCode })` 

 ### Arguments
- **companyId:** The ID of the company that owns these batches
- **endPeriodMonth:** The month of the period you are trying to retrieve
- **endPeriodYear:** The year of the period you are trying to retrieve
- **frequency:** The frequency of the return you are trying to retrieve (See FilingFrequencyId::* for a list of allowable values)
- **status:** The status of the return(s) you are trying to retrieve (See FilingStatusId::* for a list of allowable values)
- **country:** The country of the return(s) you are trying to retrieve
- **region:** The region of the return(s) you are trying to retrieve
- **filingCalendarId:** The filing calendar id of the return you are trying to retrieve
- **taxformCode:** The unique tax form code of the form.
 

  Retrieve a list of filed returns for the specified company in the year and month of a given filing period.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API is available by invitation only.<br />*Exempt security roles*: ComplianceRootUser, ComplianceAdmin, ComplianceUser, TechnicalSupportAdmin, TechnicalSupportUser, CompanyUser, AccountUser, CompanyAdmin, AccountAdmin.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## approveFirmClientLinkage


  [Source: AvaTaxClient.js Line: 4722](/lib/AvaTaxClient.js#L4722)

 - `client.approveFirmClientLinkage({ id })` 

 ### Arguments
- **id:** undefined
 

  Approves linkage to a firm for a client account

This API enables the account admin of a client account to approve linkage request by a firm.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## createAndLinkNewFirmClientAccount


  [Source: AvaTaxClient.js Line: 4752](/lib/AvaTaxClient.js#L4752)

 - `client.createAndLinkNewFirmClientAccount({ model })` 

 ### Arguments
- **model:** Information about the account you wish to create.
 

  Request a new FirmClient account and create an approved linkage to it

This API is for use by Firms only.
 
Avalara allows firms to manage returns for clients without the clients needing to use AvaTax service.
Firms can create accounts of FirmClient for customers they are managing using this API.
 
Calling this API creates an account with the specified product subscriptions, but without a new user for account.
Account is then linked to the Firm so they can managed their returns.
You should call this API when a customer does not have an AvaTax account and is to be managed only by the firm.
 
The created account will be created in `Active` status but there will be no user or license key associated with account.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SystemAdmin.
 ## createFirmClientLinkage


  [Source: AvaTaxClient.js Line: 4773](/lib/AvaTaxClient.js#L4773)

 - `client.createFirmClientLinkage({ model })` 

 ### Arguments
- **model:** FirmClientLinkageInputModel
 

  Links a firm account with the client account

This API enables the firm admins/firm users to request the linkage of a firm account and a client account.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## deleteFirmClientLinkage


  [Source: AvaTaxClient.js Line: 4794](/lib/AvaTaxClient.js#L4794)

 - `client.deleteFirmClientLinkage({ id })` 

 ### Arguments
- **id:** undefined
 

  Delete a linkage

This API marks a linkage between a firm and client as deleted.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## getFirmClientLinkage


  [Source: AvaTaxClient.js Line: 4815](/lib/AvaTaxClient.js#L4815)

 - `client.getFirmClientLinkage({ id })` 

 ### Arguments
- **id:** undefined
 

  Get linkage between a firm and client by id

This API enables the firm admins/firm users to request the linkage of a firm account and a client account.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listFirmClientLinkage


  [Source: AvaTaxClient.js Line: 4836](/lib/AvaTaxClient.js#L4836)

 - `client.listFirmClientLinkage({ filter })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* firmAccountName, clientAccountName
 

  List client linkages for a firm or client

This API enables the firm or account users to request the associated linkages to the account.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## rejectFirmClientLinkage


  [Source: AvaTaxClient.js Line: 4859](/lib/AvaTaxClient.js#L4859)

 - `client.rejectFirmClientLinkage({ id })` 

 ### Arguments
- **id:** undefined
 

  Rejects linkage to a firm for a client account

This API enables the account admin of a client account to reject linkage request by a firm.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## resetFirmClientLinkage


  [Source: AvaTaxClient.js Line: 4880](/lib/AvaTaxClient.js#L4880)

 - `client.resetFirmClientLinkage({ id })` 

 ### Arguments
- **id:** undefined
 

  Reset linkage status between a client and firm back to requested

This API enables the firm admin of a client account to reset a previously created linkage request by a firm.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## revokeFirmClientLinkage


  [Source: AvaTaxClient.js Line: 4901](/lib/AvaTaxClient.js#L4901)

 - `client.revokeFirmClientLinkage({ id })` 

 ### Arguments
- **id:** undefined
 

  Revokes previously approved linkage to a firm for a client account

This API enables the account admin of a client account to revoke a previously approved linkage request by a firm.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## requestFreeTrial


  [Source: AvaTaxClient.js Line: 4931](/lib/AvaTaxClient.js#L4931)

 - `client.requestFreeTrial({ model })` 

 ### Arguments
- **model:** Required information to provision a free trial account.
 

  FREE API - Request a free trial of AvaTax

Call this API to obtain a free AvaTax account.
 
This API is free to use. No authentication credentials are required to call this API. You must read and
accept [Avalara's terms and conditions](https://www1.avalara.com/us/en/legal/terms.html) for the account to be
created.
 
If all conditions are met, this API will grant a free trial version of AvaTax. For a list of functionality
available in the free trial and its limitations, please see the [AvaTax Developer Website Free Trial page](https://developer.avalara.com/avatax/signup/).
 
After your free trial concludes, you will still be able to use the [Free AvaTax API Suite](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/).

### Security Policies

* This API may be called without providing authentication credentials.
 ## taxRatesByAddress


  [Source: AvaTaxClient.js Line: 4978](/lib/AvaTaxClient.js#L4978)

 - `client.taxRatesByAddress({ line1, line2, line3, city, region, postalCode, country })` 

 ### Arguments
- **line1:** The street address of the location.
- **line2:** The street address of the location.
- **line3:** The street address of the location.
- **city:** The city name of the location.
- **region:** Name or ISO 3166 code identifying the region within the country.     This field supports many different region identifiers:   * Two and three character ISO 3166 region codes   * Fully spelled out names of the region in ISO supported languages   * Common alternative spellings for many regions     For a full list of all supported codes and names, please see the Definitions API `ListRegions`.
- **postalCode:** The postal code of the location.
- **country:** Name or ISO 3166 code identifying the country.     This field supports many different country identifiers:   * Two character ISO 3166 codes   * Three character ISO 3166 codes   * Fully spelled out names of the country in ISO supported languages   * Common alternative spellings for many countries     For a full list of all supported codes and names, please see the Definitions API `ListCountries`.
 

  FREE API - Sales tax rates for a specified address

# Free-To-Use
 
The TaxRates API is a free-to-use, no cost option for estimating sales tax rates.
Any customer can request a free AvaTax account and make use of the TaxRates API.
 
Usage of this API is subject to rate limits. Users who exceed the rate limit will receive HTTP
response code 429 - `Too Many Requests`.
 
This API assumes that you are selling general tangible personal property at a retail point-of-sale
location in the United States only.
 
For more powerful tax calculation, please consider upgrading to the `CreateTransaction` API,
which supports features including, but not limited to:
 
* Nexus declarations
* Taxability based on product/service type
* Sourcing rules affecting origin/destination states
* Customers who are exempt from certain taxes
* States that have dollar value thresholds for tax amounts
* Refunds for products purchased on a different date
* Detailed jurisdiction names and state assigned codes
* And more!
 
Please see [Estimating Tax with REST v2](http://developer.avalara.com/blog/2016/11/04/estimating-tax-with-rest-v2/)
for information on how to upgrade to the full AvaTax CreateTransaction API.
 ## taxRatesByPostalCode


  [Source: AvaTaxClient.js Line: 5030](/lib/AvaTaxClient.js#L5030)

 - `client.taxRatesByPostalCode({ country, postalCode })` 

 ### Arguments
- **country:** Name or ISO 3166 code identifying the country.     This field supports many different country identifiers:   * Two character ISO 3166 codes   * Three character ISO 3166 codes   * Fully spelled out names of the country in ISO supported languages   * Common alternative spellings for many countries     For a full list of all supported codes and names, please see the Definitions API `ListCountries`.
- **postalCode:** The postal code of the location.
 

  FREE API - Sales tax rates for a specified country and postal code. This API is only available for US postal codes.

# Free-To-Use
 
This API is only available for a US postal codes.
 
The TaxRates API is a free-to-use, no cost option for estimating sales tax rates.
Any customer can request a free AvaTax account and make use of the TaxRates API.
 
Usage of this API is subject to rate limits. Users who exceed the rate limit will receive HTTP
response code 429 - `Too Many Requests`.
 
This API assumes that you are selling general tangible personal property at a retail point-of-sale
location in the United States only.
 
For more powerful tax calculation, please consider upgrading to the `CreateTransaction` API,
which supports features including, but not limited to:
 
* Nexus declarations
* Taxability based on product/service type
* Sourcing rules affecting origin/destination states
* Customers who are exempt from certain taxes
* States that have dollar value thresholds for tax amounts
* Refunds for products purchased on a different date
* Detailed jurisdiction names and state assigned codes
* And more!
 
Please see [Estimating Tax with REST v2](http://developer.avalara.com/blog/2016/11/04/estimating-tax-with-rest-v2/)
for information on how to upgrade to the full AvaTax CreateTransaction API.
 ## activateFundingRequest


  [Source: AvaTaxClient.js Line: 5066](/lib/AvaTaxClient.js#L5066)

 - `client.activateFundingRequest({ id })` 

 ### Arguments
- **id:** The unique ID number of this funding request
 

  Request the javascript for a funding setup widget

This API is available by invitation only.
Companies that use the Avalara Managed Returns or the SST Certified Service Provider services are
required to setup their funding configuration before Avalara can begin filing tax returns on their
behalf.
Funding configuration for each company is set up by submitting a funding setup request, which can
be sent either via email or via an embedded HTML widget.
When the funding configuration is submitted to Avalara, it will be reviewed by treasury team members
before approval.
This API returns back the actual javascript code to insert into your application to render the
JavaScript funding setup widget inline.
Use the 'methodReturn.javaScript' return value to insert this widget into your HTML page.
This API requires a subscription to Avalara Managed Returns or SST Certified Service Provider.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## fundingRequestStatus


  [Source: AvaTaxClient.js Line: 5097](/lib/AvaTaxClient.js#L5097)

 - `client.fundingRequestStatus({ id })` 

 ### Arguments
- **id:** The unique ID number of this funding request
 

  Retrieve status about a funding setup request

This API is available by invitation only.
Companies that use the Avalara Managed Returns or the SST Certified Service Provider services are
required to setup their funding configuration before Avalara can begin filing tax returns on their
behalf.
Funding configuration for each company is set up by submitting a funding setup request, which can
be sent either via email or via an embedded HTML widget.
When the funding configuration is submitted to Avalara, it will be reviewed by treasury team members
before approval.
This API checks the status on an existing funding request.
This API requires a subscription to Avalara Managed Returns or SST Certified Service Provider.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## batchDeleteItemClassifications


  [Source: AvaTaxClient.js Line: 5123](/lib/AvaTaxClient.js#L5123)

 - `client.batchDeleteItemClassifications({ companyId, itemId })` 

 ### Arguments
- **companyId:** The ID of the company that owns this item.
- **itemId:** The ID of the item you wish to delete the classifications.
 

  Delete all classifications for an item

Delete all the classifications for a given item.
 
A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
 
When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## batchDeleteItemParameters


  [Source: AvaTaxClient.js Line: 5151](/lib/AvaTaxClient.js#L5151)

 - `client.batchDeleteItemParameters({ companyId, itemId })` 

 ### Arguments
- **companyId:** The ID of the company that owns this item.
- **itemId:** The ID of the item you wish to delete the parameters.
 

  Delete all parameters for an item

Delete all the parameters for a given item.
 
Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
 
A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
 
A parameter specified on a transaction line will override an item parameter if they share the same parameter name.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## createItemClassifications


  [Source: AvaTaxClient.js Line: 5180](/lib/AvaTaxClient.js#L5180)

 - `client.createItemClassifications({ companyId, itemId, model })` 

 ### Arguments
- **companyId:** The company id.
- **itemId:** The item id.
- **model:** The item classifications you wish to create.
 

  Add classifications to an item.

Add classifications to an item.
 
A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
 
When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
 
An item may only have one classification per tax system.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## createItemParameters


  [Source: AvaTaxClient.js Line: 5213](/lib/AvaTaxClient.js#L5213)

 - `client.createItemParameters({ companyId, itemId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this item parameter.
- **itemId:** The item id.
- **model:** The item parameters you wish to create.
 

  Add parameters to an item.

Add parameters to an item.
 
Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
 
A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
 
A parameter specified on a transaction line will override an item parameter if they share the same parameter name.
 
To see available parameters for this item, call `/api/v2/definitions/parameters?$filter=attributeType eq Product`
 
Some parameters are only available for use if you have subscribed to specific AvaTax services. To see which parameters you are able to use, add the query parameter "$showSubscribed=true" to the parameter definition call above.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## createItems


  [Source: AvaTaxClient.js Line: 5243](/lib/AvaTaxClient.js#L5243)

 - `client.createItems({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this item.
- **model:** The item you wish to create.
 

  Create a new item

Creates one or more new item objects attached to this company.
 
Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
 
The tax code takes precedence over the tax code id if both are provided.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## deleteItem


  [Source: AvaTaxClient.js Line: 5273](/lib/AvaTaxClient.js#L5273)

 - `client.deleteItem({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this item.
- **id:** The ID of the item you wish to delete.
 

  Delete a single item

Deletes the item object at this URL.
 
Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
 
Deleting an item will also delete the parameters and classifications associated with that item.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## deleteItemClassification


  [Source: AvaTaxClient.js Line: 5300](/lib/AvaTaxClient.js#L5300)

 - `client.deleteItemClassification({ companyId, itemId, id })` 

 ### Arguments
- **companyId:** The company id.
- **itemId:** The item id.
- **id:** The item classification id.
 

  Delete a single item classification.

Delete a single item classification.
 
A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
 
When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## deleteItemParameter


  [Source: AvaTaxClient.js Line: 5329](/lib/AvaTaxClient.js#L5329)

 - `client.deleteItemParameter({ companyId, itemId, id })` 

 ### Arguments
- **companyId:** The company id
- **itemId:** The item id
- **id:** The parameter id
 

  Delete a single item parameter

Delete a single item parameter.
 
Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
 
A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
 
A parameter specified on a transaction line will override an item parameter if they share the same parameter name.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## getItem


  [Source: AvaTaxClient.js Line: 5358](/lib/AvaTaxClient.js#L5358)

 - `client.getItem({ companyId, id, include })` 

 ### Arguments
- **companyId:** The ID of the company that owns this item object
- **id:** The primary key of this item
- **include:** A comma separated list of additional data to retrieve.
 

  Retrieve a single item

Get the `Item` object identified by this URL.
 
Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
team can manage your item catalog and adjust the tax behavior of items without having to modify your software.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## getItemClassification


  [Source: AvaTaxClient.js Line: 5387](/lib/AvaTaxClient.js#L5387)

 - `client.getItemClassification({ companyId, itemId, id })` 

 ### Arguments
- **companyId:** The company id.
- **itemId:** The item id.
- **id:** The item classification id.
 

  Retrieve a single item classification.

Retrieve a single item classification.
 
A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
 
When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## getItemParameter


  [Source: AvaTaxClient.js Line: 5416](/lib/AvaTaxClient.js#L5416)

 - `client.getItemParameter({ companyId, itemId, id })` 

 ### Arguments
- **companyId:** The company id
- **itemId:** The item id
- **id:** The parameter id
 

  Retrieve a single item parameter

Retrieve a single item parameter.
 
Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
 
A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
 
A parameter specified on a transaction line will override an item parameter if they share the same parameter name.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listItemClassifications


  [Source: AvaTaxClient.js Line: 5449](/lib/AvaTaxClient.js#L5449)

 - `client.listItemClassifications({ companyId, itemId, filter, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The company id.
- **itemId:** The item id.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* productCode, systemCode
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve classifications for an item.

List classifications for an item.
 
A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
 
When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
 
Search for specific objects using the criteria in the `$filter` classification; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` classifications.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listItemParameters


  [Source: AvaTaxClient.js Line: 5489](/lib/AvaTaxClient.js#L5489)

 - `client.listItemParameters({ companyId, itemId, filter, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The company id
- **itemId:** The item id
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* name, unit
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve parameters for an item

List parameters for an item.
 
Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
 
A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
 
A parameter specified on a transaction line will override an item parameter if they share the same parameter name.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listItemsByCompany


  [Source: AvaTaxClient.js Line: 5535](/lib/AvaTaxClient.js#L5535)

 - `client.listItemsByCompany({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that defined these items
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, classifications, parameters
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve items for this company

List all items defined for the current company.
 
Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
 
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Parameters
* Classifications

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## queryItems


  [Source: AvaTaxClient.js Line: 5576](/lib/AvaTaxClient.js#L5576)

 - `client.queryItems({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, classifications, parameters
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all items

Get multiple item objects across all companies.
 
Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
 
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## syncItems


  [Source: AvaTaxClient.js Line: 5615](/lib/AvaTaxClient.js#L5615)

 - `client.syncItems({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this item.
- **model:** The request object.
 

  Sync items from a product catalog

Syncs a list of items with AvaTax without waiting for them to be created. It is ideal for syncing large product catalogs
with AvaTax.
 
Any invalid or duplicate items will be ignored. To diagnose why an item is not created, use the normal create transaction API to receive validation information.
 
This API is currently limited to 1000 items per call (the limit is subject to change).
 
Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
team can manage your item catalog and adjust the tax behavior of items without having to modify your software.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## updateItem


  [Source: AvaTaxClient.js Line: 5649](/lib/AvaTaxClient.js#L5649)

 - `client.updateItem({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID of the company that this item belongs to.
- **id:** The ID of the item you wish to update
- **model:** The item object you wish to update.
 

  Update a single item

Replace the existing `Item` object at this URL with an updated object.
 
Items are a way of separating your tax calculation process from your tax configuration details. If you choose, you
can provide `itemCode` values for each `CreateTransaction()` API call rather than specifying tax codes, parameters, descriptions,
and other data fields. AvaTax will automatically look up each `itemCode` and apply the correct tax codes and parameters
from the item table instead. This allows your CreateTransaction call to be as simple as possible, and your tax compliance
team can manage your item catalog and adjust the tax behavior of items without having to modify your software.
 
All data from the existing object will be replaced with data in the object you PUT. To set a field's value to null,
you may either set its value to null or omit that field from the object you post.
 
The tax code takes precedence over the tax code id if both are provided.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## updateItemClassification


  [Source: AvaTaxClient.js Line: 5679](/lib/AvaTaxClient.js#L5679)

 - `client.updateItemClassification({ companyId, itemId, id, model })` 

 ### Arguments
- **companyId:** The company id.
- **itemId:** The item id.
- **id:** The item classification id.
- **model:** The item object you wish to update.
 

  Update an item classification.

Update an item classification.
 
A classification is the code for a product in a particular tax system. Classifications enable an item to be used in multiple tax systems which may have different tax rates for a product.
 
When an item is used in a transaction, the applicable classification will be used to determine the appropriate tax rate.
 
An item may only have one classification per tax system.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## updateItemParameter


  [Source: AvaTaxClient.js Line: 5709](/lib/AvaTaxClient.js#L5709)

 - `client.updateItemParameter({ companyId, itemId, id, model })` 

 ### Arguments
- **companyId:** The company id.
- **itemId:** The item id
- **id:** The item parameter id
- **model:** The item object you wish to update.
 

  Update an item parameter

Update an item parameter.
 
Some items can be taxed differently depending on the properties of that item, such as the item grade or by a particular measurement of that item. In AvaTax, these tax-affecting properties are called "parameters".
 
A parameter added to an item will be used by default in tax calculation but will not show on the transaction line referencing the item .
 
A parameter specified on a transaction line will override an item parameter if they share the same parameter name.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## createJurisdictionOverrides


  [Source: AvaTaxClient.js Line: 5736](/lib/AvaTaxClient.js#L5736)

 - `client.createJurisdictionOverrides({ accountId, model })` 

 ### Arguments
- **accountId:** The ID of the account that owns this override
- **model:** The jurisdiction override objects to create
 

  Create one or more overrides

Creates one or more jurisdiction override objects for this account.
 
A Jurisdiction Override is a configuration setting that allows you to select the taxing
jurisdiction for a specific address. If you encounter an address that is on the boundary
between two different jurisdictions, you can choose to set up a jurisdiction override
to switch this address to use different taxing jurisdictions.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## deleteJurisdictionOverride


  [Source: AvaTaxClient.js Line: 5758](/lib/AvaTaxClient.js#L5758)

 - `client.deleteJurisdictionOverride({ accountId, id })` 

 ### Arguments
- **accountId:** The ID of the account that owns this override
- **id:** The ID of the override you wish to delete
 

  Delete a single override

Marks the item object at this URL as deleted.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## getJurisdictionOverride


  [Source: AvaTaxClient.js Line: 5785](/lib/AvaTaxClient.js#L5785)

 - `client.getJurisdictionOverride({ accountId, id })` 

 ### Arguments
- **accountId:** The ID of the account that owns this override
- **id:** The primary key of this override
 

  Retrieve a single override

Get the item object identified by this URL.
 
A Jurisdiction Override is a configuration setting that allows you to select the taxing
jurisdiction for a specific address. If you encounter an address that is on the boundary
between two different jurisdictions, you can choose to set up a jurisdiction override
to switch this address to use different taxing jurisdictions.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listJurisdictionOverridesByAccount


  [Source: AvaTaxClient.js Line: 5819](/lib/AvaTaxClient.js#L5819)

 - `client.listJurisdictionOverridesByAccount({ accountId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **accountId:** The ID of the account that owns this override
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* country, Jurisdictions
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve overrides for this account

List all jurisdiction override objects defined for this account.
 
A Jurisdiction Override is a configuration setting that allows you to select the taxing
jurisdiction for a specific address. If you encounter an address that is on the boundary
between two different jurisdictions, you can choose to set up a jurisdiction override
to switch this address to use different taxing jurisdictions.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## queryJurisdictionOverrides


  [Source: AvaTaxClient.js Line: 5858](/lib/AvaTaxClient.js#L5858)

 - `client.queryJurisdictionOverrides({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* country, Jurisdictions
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all overrides

Get multiple jurisdiction override objects across all companies.
 
A Jurisdiction Override is a configuration setting that allows you to select the taxing
jurisdiction for a specific address. If you encounter an address that is on the boundary
between two different jurisdictions, you can choose to set up a jurisdiction override
to switch this address to use different taxing jurisdictions.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## updateJurisdictionOverride


  [Source: AvaTaxClient.js Line: 5887](/lib/AvaTaxClient.js#L5887)

 - `client.updateJurisdictionOverride({ accountId, id, model })` 

 ### Arguments
- **accountId:** The ID of the account that this jurisdictionoverride belongs to.
- **id:** The ID of the jurisdictionoverride you wish to update
- **model:** The jurisdictionoverride object you wish to update.
 

  Update a single jurisdictionoverride

Replace the existing jurisdictionoverride object at this URL with an updated object.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## createLocations


  [Source: AvaTaxClient.js Line: 5909](/lib/AvaTaxClient.js#L5909)

 - `client.createLocations({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this location.
- **model:** The location you wish to create.
 

  Create a new location

Create one or more new location objects attached to this company.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## deleteLocation


  [Source: AvaTaxClient.js Line: 5931](/lib/AvaTaxClient.js#L5931)

 - `client.deleteLocation({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this location.
- **id:** The ID of the location you wish to delete.
 

  Delete a single location

Mark the location object at this URL as deleted.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## getLocation


  [Source: AvaTaxClient.js Line: 5962](/lib/AvaTaxClient.js#L5962)

 - `client.getLocation({ companyId, id, include })` 

 ### Arguments
- **companyId:** The ID of the company that owns this location
- **id:** The primary key of this location
- **include:** A comma separated list of additional data to retrieve. You may specify `LocationSettings` to retrieve location settings.
 

  Retrieve a single location

Get the location object identified by this URL.
An 'Location' represents a physical address where a company does business.
Many taxing authorities require that you define a list of all locations where your company does business.
These locations may require additional custom configuration or tax registration with these authorities.
For more information on metadata requirements, see the '/api/v2/definitions/locationquestions' API.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* LocationSettings

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listLocationsByCompany


  [Source: AvaTaxClient.js Line: 6000](/lib/AvaTaxClient.js#L6000)

 - `client.listLocationsByCompany({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that owns these locations
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* settings
- **include:** A comma separated list of additional data to retrieve. You may specify `LocationSettings` to retrieve location settings.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve locations for this company

List all location objects defined for this company.
An 'Location' represents a physical address where a company does business.
Many taxing authorities require that you define a list of all locations where your company does business.
These locations may require additional custom configuration or tax registration with these authorities.
For more information on metadata requirements, see the '/api/v2/definitions/locationquestions' API.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* LocationSettings

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## queryLocations


  [Source: AvaTaxClient.js Line: 6042](/lib/AvaTaxClient.js#L6042)

 - `client.queryLocations({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* settings
- **include:** A comma separated list of additional data to retrieve. You may specify `LocationSettings` to retrieve location settings.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all locations

Get multiple location objects across all companies.
An 'Location' represents a physical address where a company does business.
Many taxing authorities require that you define a list of all locations where your company does business.
These locations may require additional custom configuration or tax registration with these authorities.
For more information on metadata requirements, see the '/api/v2/definitions/locationquestions' API.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* LocationSettings

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## updateLocation


  [Source: AvaTaxClient.js Line: 6073](/lib/AvaTaxClient.js#L6073)

 - `client.updateLocation({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID of the company that this location belongs to.
- **id:** The ID of the location you wish to update
- **model:** The location you wish to update.
 

  Update a single location

Replace the existing location object at this URL with an updated object.
All data from the existing object will be replaced with data in the object you PUT.
To set a field's value to null, you may either set its value to null or omit that field from the object you post.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## validateLocation


  [Source: AvaTaxClient.js Line: 6097](/lib/AvaTaxClient.js#L6097)

 - `client.validateLocation({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this location
- **id:** The primary key of this location
 

  Validate the location against local requirements

Returns validation information for this location.
This API call is intended to compare this location against the currently known taxing authority rules and regulations,
and provide information about what additional work is required to completely setup this location.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, FirmAdmin, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## adjustMultiDocumentTransaction


  [Source: AvaTaxClient.js Line: 6131](/lib/AvaTaxClient.js#L6131)

 - `client.adjustMultiDocumentTransaction({ code, type, include, model })` 

 ### Arguments
- **code:** The transaction code for this MultiDocument transaction
- **type:** The transaction type for this MultiDocument transaction (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
- **model:** The adjust request you wish to execute
 

  Adjust a MultiDocument transaction

Adjusts the current MultiDocument transaction uniquely identified by this URL.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
When you adjust a transaction, that transaction's status is recorded as `Adjusted`.
 
Both the revisions will be available for retrieval based on their code and ID numbers. Only transactions in Committed status can be reported on a tax filing by Avalara's Managed Returns Service.
 
Transactions that have been previously reported to a tax authority by Avalara Managed Returns are considered locked and are no longer available for adjustments.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## auditMultiDocumentTransaction


  [Source: AvaTaxClient.js Line: 6169](/lib/AvaTaxClient.js#L6169)

 - `client.auditMultiDocumentTransaction({ code, type })` 

 ### Arguments
- **code:** The transaction code for this MultiDocument transaction
- **type:** The transaction type for this MultiDocument transaction (See DocumentType::* for a list of allowable values)
 

  Get audit information about a MultiDocument transaction

Retrieve audit information about a MultiDocument transaction stored in AvaTax.
 
The audit API retrieves audit information related to a specific MultiDocument transaction. This audit
information includes the following:
 
* The `code` of the MultiDocument transaction
* The `type` of the MultiDocument transaction
* The server timestamp representing the exact server time when the transaction was created
* The server duration - how long it took to process this transaction
* Whether exact API call details were logged
* A reconstructed API call showing what the original create call looked like
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## commitMultiDocumentTransaction


  [Source: AvaTaxClient.js Line: 6198](/lib/AvaTaxClient.js#L6198)

 - `client.commitMultiDocumentTransaction({ model })` 

 ### Arguments
- **model:** The commit request you wish to execute
 

  Commit a MultiDocument transaction

Marks a list of transactions by changing its status to `Committed`.
 
Transactions that are committed are available to be reported to a tax authority by Avalara Managed Returns.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
Any changes made to a committed transaction will generate a transaction history.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## createMultiDocumentTransaction


  [Source: AvaTaxClient.js Line: 6252](/lib/AvaTaxClient.js#L6252)

 - `client.createMultiDocumentTransaction({ include, model })` 

 ### Arguments
- **include:** Specifies objects to include in the response after transaction is created
- **model:** the multi document transaction model
 

  Create a new MultiDocument transaction

Records a new MultiDocument transaction in AvaTax.
 
A traditional transaction requires exactly two parties: a seller and a buyer. MultiDocument transactions can
involve a marketplace of vendors, each of which contributes some portion of the final transaction. Within
a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
document. This separation of documents allows each seller to file their taxes separately.
 
This API will report an error if you attempt to create a transaction when one already exists with the specified `code`.
If you would like the API to automatically update the transaction when it already exists, please set the `allowAdjust`
value to `true`.
 
To generate a refund for a transaction, use the `RefundTransaction` API.
 
The field `type` identifies the kind of transaction - for example, a sale, purchase, or refund. If you do not specify
a `type` value, you will receive an estimate of type `SalesOrder`, which will not be recorded.
 
The origin and destination locations for a transaction must be identified by either address or geocode. For address-based transactions, please
provide addresses in the fields `line`, `city`, `region`, `country` and `postalCode`. For geocode-based transactions, please provide the geocode
information in the fields `latitude` and `longitude`. If either `latitude` or `longitude` or both are null, the transaction will be calculated
using the best available address location information.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* ForceTimeout - Simulates a timeout. This adds a 30 second delay and error to your API call. This can be used to test your code to ensure it can respond correctly in the case of a dropped connection.
 
If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getMultiDocumentTransactionByCodeAndType


  [Source: AvaTaxClient.js Line: 6289](/lib/AvaTaxClient.js#L6289)

 - `client.getMultiDocumentTransactionByCodeAndType({ code, type, include })` 

 ### Arguments
- **code:** undefined
- **type:** (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in the response after transaction is created
 

  Retrieve a MultiDocument transaction

Get the current MultiDocument transaction identified by this URL.
 
If this transaction was adjusted, the return value of this API will be the current transaction with this code.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getMultiDocumentTransactionById


  [Source: AvaTaxClient.js Line: 6334](/lib/AvaTaxClient.js#L6334)

 - `client.getMultiDocumentTransactionById({ id, include })` 

 ### Arguments
- **id:** The unique ID number of the MultiDocument transaction to retrieve
- **include:** Specifies objects to include in the response after transaction is created
 

  Retrieve a MultiDocument transaction by ID

Get the unique MultiDocument transaction identified by this URL.
 
A traditional transaction requires exactly two parties: a seller and a buyer. MultiDocument transactions can
involve a marketplace of vendors, each of which contributes some portion of the final transaction. Within
a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
document. This separation of documents allows each seller to file their taxes separately.
 
This endpoint retrieves the exact transaction identified by this ID number even if that transaction was later adjusted
by using the `AdjustTransaction` endpoint.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## listMultiDocumentTransactions


  [Source: AvaTaxClient.js Line: 6380](/lib/AvaTaxClient.js#L6380)

 - `client.listMultiDocumentTransactions({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* documents
- **include:** Specifies objects to include in the response after transaction is created
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all MultiDocument transactions

List all MultiDocument transactions within this account.
 
This endpoint is limited to returning 1,000 MultiDocument transactions at a time. To retrieve more than 1,000 MultiDocument
transactions, please use the pagination features of the API.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## refundMultiDocumentTransaction


  [Source: AvaTaxClient.js Line: 6446](/lib/AvaTaxClient.js#L6446)

 - `client.refundMultiDocumentTransaction({ code, type, include, model })` 

 ### Arguments
- **code:** The code of this MultiDocument transaction
- **type:** The type of this MultiDocument transaction (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in the response after transaction is created
- **model:** Information about the refund to create
 

  Create a refund for a MultiDocument transaction

Create a refund for a MultiDocument transaction.
 
A traditional transaction requires exactly two parties: a seller and a buyer. MultiDocument transactions can
involve a marketplace of vendors, each of which contributes some portion of the final transaction. Within
a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
document. This separation of documents allows each seller to file their taxes separately.
 
The `RefundTransaction` API allows you to quickly and easily create a `ReturnInvoice` representing a refund
for a previously created `SalesInvoice` transaction. You can choose to create a full or partial refund, and
specify individual line items from the original sale for refund.
 
The `RefundTransaction` API ensures that the tax amount you refund to the customer exactly matches the tax that
was calculated during the original transaction, regardless of any changes to your company's configuration, rules,
nexus, or any other setting.
 
This API is intended to be a shortcut to allow you to quickly and accurately generate a refund for the following
common refund scenarios:
 
* A full refund of a previous sale
* Refunding the tax that was charged on a previous sale, when the customer provides an exemption certificate after the purchase
* Refunding one or more items (lines) from a previous sale
* Granting a customer a percentage refund of a previous sale
 
For more complex scenarios than the ones above, please use `CreateTransaction` with document type `ReturnInvoice` to
create a custom refund transaction.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
 
If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## verifyMultiDocumentTransaction


  [Source: AvaTaxClient.js Line: 6475](/lib/AvaTaxClient.js#L6475)

 - `client.verifyMultiDocumentTransaction({ model })` 

 ### Arguments
- **model:** Information from your accounting system to verify against this MultiDocument transaction as it is stored in AvaTax
 

  Verify a MultiDocument transaction

Verifies that the MultiDocument transaction uniquely identified by this URL matches certain expected values.
 
If the transaction does not match these expected values, this API will return an error code indicating which value did not match.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## voidMultiDocumentTransaction


  [Source: AvaTaxClient.js Line: 6507](/lib/AvaTaxClient.js#L6507)

 - `client.voidMultiDocumentTransaction({ code, type, model })` 

 ### Arguments
- **code:** The transaction code for this MultiDocument transaction
- **type:** The transaction type for this MultiDocument transaction (See DocumentType::* for a list of allowable values)
- **model:** The void request you wish to execute
 

  Void a MultiDocument transaction

Voids the current transaction uniquely identified by this URL.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
When you void a transaction, that transaction's status is recorded as `DocVoided`.
 
Transactions that have been previously reported to a tax authority by Avalara Managed Returns Service are considered `locked`,
and they are no longer available to be voided.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## createNexus


  [Source: AvaTaxClient.js Line: 6547](/lib/AvaTaxClient.js#L6547)

 - `client.createNexus({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this nexus.
- **model:** The nexus you wish to create.
 

  Create a new nexus

Creates one or more new nexus declarations attached to this company.
 
The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
accountant or lawyer prior to declaring nexus.
 
To create a nexus declaration for your company, you must first call the Definitions API `ListNexus` to obtain a
list of Avalara-defined nexus. Once you have determined which nexus you wish to declare, you should customize
only the user-selectable fields in this object.
 
The user selectable fields for the nexus object are `companyId`, `effectiveDate`, `endDate`, `localNexusTypeId`,
`taxId`, `nexusTypeId`, `hasPermanentEstablishment`, and `isSellerImporterOfRecord`.
 
When calling `CreateNexus` or `UpdateNexus`, all values in your nexus object except for the user-selectable fields
must match an Avalara-defined system nexus object. You can retrieve a list of Avalara-defined system nexus objects
by calling `ListNexus`. If any data does not match, AvaTax may not recognize your nexus declaration.
 
Please note that nexus changes may not take effect immediately and you should plan to update your nexus settings in advance
of calculating tax for a location.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## declareNexusByAddress


  [Source: AvaTaxClient.js Line: 6583](/lib/AvaTaxClient.js#L6583)

 - `client.declareNexusByAddress({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that will own this nexus.
- **model:** The nexus you wish to create.
 

  Creates nexus for a list of addresses.

This call is intended to simplify adding all applicable nexus to a company, for an address or addresses. Calling this
API declares nexus for this company, for the list of addresses provided,
for the date range provided. You may also use this API to extend effective date on an already-declared nexus.
 
The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
accountant or lawyer prior to declaring nexus.
 
Note that not all fields within a nexus can be updated; Avalara publishes a list of all defined nexus at the
'/api/v2/definitions/nexus' endpoint.
 
You may only define nexus matching the official list of declared nexus.
 
Please note that nexus changes may not take effect immediately and you should plan to update your nexus settings in advance
of calculating tax for a location.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## deleteNexus


  [Source: AvaTaxClient.js Line: 6612](/lib/AvaTaxClient.js#L6612)

 - `client.deleteNexus({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this nexus.
- **id:** The ID of the nexus you wish to delete.
 

  Delete a single nexus

Marks the existing nexus object at this URL as deleted.
 
The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
accountant or lawyer prior to declaring nexus.
 
Please note that nexus changes may not take effect immediately and you should plan to update your nexus settings in advance
of calculating tax for a location.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## getNexus


  [Source: AvaTaxClient.js Line: 6638](/lib/AvaTaxClient.js#L6638)

 - `client.getNexus({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this nexus object
- **id:** The primary key of this nexus
 

  Retrieve a single nexus

Get the nexus object identified by this URL.
 
The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
accountant or lawyer prior to declaring nexus.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## getNexusByFormCode


  [Source: AvaTaxClient.js Line: 6668](/lib/AvaTaxClient.js#L6668)

 - `client.getNexusByFormCode({ companyId, formCode })` 

 ### Arguments
- **companyId:** The ID of the company that owns this nexus object
- **formCode:** The form code that we are looking up the nexus for
 

  List company nexus related to a tax form

Retrieves a list of nexus related to a tax form.
 
The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
accountant or lawyer prior to declaring nexus.
 
This API is intended to provide useful information when examining a tax form. If you are about to begin filing
a tax form, you may want to know whether you have declared nexus in all the jurisdictions related to that tax
form in order to better understand how the form will be filled out.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listNexusByCompany


  [Source: AvaTaxClient.js Line: 6701](/lib/AvaTaxClient.js#L6701)

 - `client.listNexusByCompany({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that owns these nexus objects
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxAuthorityId
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve nexus for this company

List all nexus objects defined for this company.
 
The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
accountant or lawyer prior to declaring nexus.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## queryNexus


  [Source: AvaTaxClient.js Line: 6739](/lib/AvaTaxClient.js#L6739)

 - `client.queryNexus({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* streamlinedSalesTax, isSSTActive, taxAuthorityId
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all nexus

Get multiple nexus objects across all companies.
 
The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
accountant or lawyer prior to declaring nexus.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## updateNexus


  [Source: AvaTaxClient.js Line: 6786](/lib/AvaTaxClient.js#L6786)

 - `client.updateNexus({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID of the company that this nexus belongs to.
- **id:** The ID of the nexus you wish to update
- **model:** The nexus object you wish to update.
 

  Update a single nexus

Replace the existing nexus declaration object at this URL with an updated object.
 
The concept of Nexus indicates a place where your company is legally obligated to collect and remit transactional
taxes. The legal requirements for nexus may vary per country and per jurisdiction; please seek advice from your
accountant or lawyer prior to declaring nexus.
 
To create a nexus declaration for your company, you must first call the Definitions API `ListNexus` to obtain a
list of Avalara-defined nexus. Once you have determined which nexus you wish to declare, you should customize
only the user-selectable fields in this object.
 
The user selectable fields for the nexus object are `companyId`, `effectiveDate`, `endDate`, `localNexusTypeId`,
`taxId`, `nexusTypeId`, `hasPermanentEstablishment`, and `isSellerImporterOfRecord`.
 
When calling `CreateNexus` or `UpdateNexus`, all values in your nexus object except for the user-selectable fields
must match an Avalara-defined system nexus object. You can retrieve a list of Avalara-defined system nexus objects
by calling `ListNexus`. If any data does not match, AvaTax may not recognize your nexus declaration.
 
Please note that nexus changes may not take effect immediately and you should plan to update your nexus settings in advance
of calculating tax for a location.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## dismissNotification


  [Source: AvaTaxClient.js Line: 6820](/lib/AvaTaxClient.js#L6820)

 - `client.dismissNotification({ id })` 

 ### Arguments
- **id:** The id of the notification you wish to mark as dismissed.
 

  Mark a single notification as dismissed.

Marks the notification identified by this URL as dismissed.
 
A notification is a message from Avalara that may have relevance to your business. You may want
to regularly review notifications and then dismiss them when you are certain that you have addressed
any relevant concerns raised by this notification.
 
An example of a notification would be a message about new software, or a change to AvaTax that may
affect you, or a potential issue with your company's tax profile.
 
When you dismiss a notification, the notification will track the user and time when it was
dismissed. You can then later review which employees of your company dismissed notifications to
determine if they were resolved appropriately.
 
A Global notification with null accountId and companyId cannot be dismissed and will expire within a given time span.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## getNotification


  [Source: AvaTaxClient.js Line: 6848](/lib/AvaTaxClient.js#L6848)

 - `client.getNotification({ id })` 

 ### Arguments
- **id:** The id of the notification to retrieve.
 

  Retrieve a single notification.

Retrieve a single notification by its unique ID number.
 
A notification is a message from Avalara that may have relevance to your business. You may want
to regularly review notifications and then dismiss them when you are certain that you have addressed
any relevant concerns raised by this notification.
 
An example of a notification would be a message about new software, or a change to AvaTax that may
affect you, or a potential issue with your company's tax profile.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listNotifications


  [Source: AvaTaxClient.js Line: 6882](/lib/AvaTaxClient.js#L6882)

 - `client.listNotifications({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  List all notifications.

List all notifications.
 
A notification is a message from Avalara that may have relevance to your business. You may want
to regularly review notifications and then dismiss them when you are certain that you have addressed
any relevant concerns raised by this notification.
 
An example of a notification would be a message about new software, or a change to AvaTax that may
affect you, or a potential issue with your company's tax profile.
 
You may search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## requestNewAccount


  [Source: AvaTaxClient.js Line: 6923](/lib/AvaTaxClient.js#L6923)

 - `client.requestNewAccount({ model })` 

 ### Arguments
- **model:** Information about the account you wish to create and the selected product offerings.
 

  Request a new Avalara account

This API is for use by partner provisioning services customers only.
 
Avalara invites select partners to refer new customers to the AvaTax service using the onboarding features
of AvaTax. These partners can create accounts for new customers using this API.
 
Calling this API creates an account with the specified product subscriptions, but does not configure billing.
The customer will receive information from Avalara about how to configure billing for their account.
You should call this API when a customer has requested to begin using Avalara services.
 
If the newly created account owner wishes, they can confirm that they have read and agree to the Avalara
terms and conditions. If they do so, they can receive a license key as part of this API and their
API will be created in `Active` status. If the customer has not yet read and accepted these terms and
conditions, the account will be created in `New` status and they can receive a license key by logging
onto the AvaTax website and reviewing terms and conditions online.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API is available by invitation only.
* This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [Provisioning:RequestNewAccount].
 ## requestNewEntitlement


  [Source: AvaTaxClient.js Line: 6948](/lib/AvaTaxClient.js#L6948)

 - `client.requestNewEntitlement({ id, offer })` 

 ### Arguments
- **id:** The avatax account id of the customer
- **offer:** The offer to be added to an already existing customer
 

  Request a new entitilement to an existing customer

This API is for use by partner provisioning services customers only. This will allow the partners to allow
the add new entitlement to an existing customer

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API is available by invitation only.
* This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [Provisioning:RequestNewAccount].
 ## createAccount


  [Source: AvaTaxClient.js Line: 6973](/lib/AvaTaxClient.js#L6973)

 - `client.createAccount({ model })` 

 ### Arguments
- **model:** The account you wish to create.
 

  Create a new account

# For Registrar Use Only
This API is for use by Avalara Registrar administrative users only.
 
Create a single new account object.
When creating an account object you may attach subscriptions and users as part of the 'Create' call.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## createNotifications


  [Source: AvaTaxClient.js Line: 7007](/lib/AvaTaxClient.js#L7007)

 - `client.createNotifications({ model })` 

 ### Arguments
- **model:** The notifications you wish to create.
 

  Create new notifications.

This API is available by invitation only.
 
Create a single notification.
 
A notification is a message from Avalara that may have relevance to your business. You may want
to regularly review notifications and then dismiss them when you are certain that you have addressed
any relevant concerns raised by this notification.
 
A Global notification is a message which is directed to all the accounts and is set to expire within
a certain time and cannot be dismissed by the user. Make accountId and companyId null to create a global notification.
 
An example of a notification would be a message about new software, or a change to AvaTax that may
affect you, or a potential issue with your company's tax profile.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [NotificationsAPI:Create].
 ## createSubscriptions


  [Source: AvaTaxClient.js Line: 7033](/lib/AvaTaxClient.js#L7033)

 - `client.createSubscriptions({ accountId, model })` 

 ### Arguments
- **accountId:** The ID of the account that owns this subscription.
- **model:** The subscription you wish to create.
 

  Create a new subscription

This API is for use by Avalara Registrar administrative users only.
 
Create one or more new subscription objects attached to this account.
A 'subscription' indicates a licensed subscription to a named Avalara service.
To request or remove subscriptions, please contact Avalara sales or your customer account manager.

### Security Policies

* This API requires one of the following user roles: Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## deleteAccount


  [Source: AvaTaxClient.js Line: 7058](/lib/AvaTaxClient.js#L7058)

 - `client.deleteAccount({ id })` 

 ### Arguments
- **id:** The ID of the account you wish to delete.
 

  Delete a single account

# For Registrar Use Only
This API is for use by Avalara Registrar administrative users only.
 
Delete an account.
Deleting an account will delete all companies and all account level users attached to this account.

### Security Policies

* This API requires the user role SystemAdmin.
 ## deleteNotification


  [Source: AvaTaxClient.js Line: 7089](/lib/AvaTaxClient.js#L7089)

 - `client.deleteNotification({ id })` 

 ### Arguments
- **id:** The id of the notification you wish to delete.
 

  Delete a single notification.

This API is available by invitation only.
 
Delete the existing notification identified by this URL.
 
A notification is a message from Avalara that may have relevance to your business. You may want
to regularly review notifications and then dismiss them when you are certain that you have addressed
any relevant concerns raised by this notification.
 
An example of a notification would be a message about new software, or a change to AvaTax that may
affect you, or a potential issue with your company's tax profile.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [NotificationsAPI:Create].
 ## deleteSubscription


  [Source: AvaTaxClient.js Line: 7114](/lib/AvaTaxClient.js#L7114)

 - `client.deleteSubscription({ accountId, id })` 

 ### Arguments
- **accountId:** The ID of the account that owns this subscription.
- **id:** The ID of the subscription you wish to delete.
 

  Delete a single subscription

# For Registrar Use Only
This API is for use by Avalara Registrar administrative users only.
 
Mark the existing account identified by this URL as deleted.

### Security Policies

* This API requires one of the following user roles: Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## resetPassword


  [Source: AvaTaxClient.js Line: 7143](/lib/AvaTaxClient.js#L7143)

 - `client.resetPassword({ userId, unmigrateFromAi, model })` 

 ### Arguments
- **userId:** The unique ID of the user whose password will be changed
- **unmigrateFromAi:** If user's password was migrated to AI, undo this.
- **model:** The new password for this user
 

  Reset a user's password programmatically

# For Registrar Use Only
This API is for use by Avalara Registrar administrative users only.
 
Allows a system admin to reset the password for a specific user via the API.
This API is only available for Avalara Registrar Admins, and can be used to reset the password of any
user based on internal Avalara business processes.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API is available to Avalara system-level (registrar-level) users only.
 ## updateAccount


  [Source: AvaTaxClient.js Line: 7170](/lib/AvaTaxClient.js#L7170)

 - `client.updateAccount({ id, model })` 

 ### Arguments
- **id:** The ID of the account you wish to update.
- **model:** The account object you wish to update.
 

  Update a single account

# For Registrar Use Only
This API is for use by Avalara Registrar administrative users only.
 
Replace an existing account object with an updated account object.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## updateNotification


  [Source: AvaTaxClient.js Line: 7202](/lib/AvaTaxClient.js#L7202)

 - `client.updateNotification({ id, model })` 

 ### Arguments
- **id:** The id of the notification you wish to update.
- **model:** The notification object you wish to update.
 

  Update a single notification.

This API is available by invitation only.
 
Replaces the notification identified by this URL with a new notification.
 
A notification is a message from Avalara that may have relevance to your business. You may want
to regularly review notifications and then dismiss them when you are certain that you have addressed
any relevant concerns raised by this notification.
 
An example of a notification would be a message about new software, or a change to AvaTax that may
affect you, or a potential issue with your company's tax profile.

### Security Policies

* This API requires one of the following user roles: FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
* This API is available by invitation only. To request access to this feature, please speak to a business development manager and request access to [NotificationsAPI:Create].
 ## updateSubscription


  [Source: AvaTaxClient.js Line: 7232](/lib/AvaTaxClient.js#L7232)

 - `client.updateSubscription({ accountId, id, model })` 

 ### Arguments
- **accountId:** The ID of the account that this subscription belongs to.
- **id:** The ID of the subscription you wish to update
- **model:** The subscription you wish to update.
 

  Update a single subscription

# For Registrar Use Only
This API is for use by Avalara Registrar administrative users only.
 
Replace the existing subscription object at this URL with an updated object.
A 'subscription' indicates a licensed subscription to a named Avalara service.
To request or remove subscriptions, please contact Avalara sales or your customer account manager.
All data from the existing object will be replaced with data in the object you PUT.
To set a field's value to null, you may either set its value to null or omit that field from the object you post.

### Security Policies

* This API requires one of the following user roles: Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## downloadReport


  [Source: AvaTaxClient.js Line: 7266](/lib/AvaTaxClient.js#L7266)

 - `client.downloadReport({ id })` 

 ### Arguments
- **id:** The unique ID number of this report
 

  Download a report

This API downloads the file associated with a report.
 
If the report is not yet complete, you will receive a `ReportNotFinished` error. To check if a report is complete,
use the `GetReport` API.
 
Reports are run as asynchronous report tasks on the server. When complete, the report file will be available for download
for up to 30 days after completion. To run an asynchronous report, you should follow these steps:
 
* Begin a report by calling the report's Initiate API. There is a separate initiate API call for each report type.
* In the result of the Initiate API, you receive back a report's `id` value.
* Check the status of a report by calling `GetReport` and passing in the report's `id` value.
* When a report's status is `Completed`, call `DownloadReport` to retrieve the file.
 
This API works for all report types.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## getReport


  [Source: AvaTaxClient.js Line: 7293](/lib/AvaTaxClient.js#L7293)

 - `client.getReport({ id })` 

 ### Arguments
- **id:** The unique ID number of the report to retrieve
 

  Retrieve a single report

Retrieve a single report by its unique ID number.
 
Reports are run as asynchronous report tasks on the server. When complete, the report file will be available for download
for up to 30 days after completion. To run an asynchronous report, you should follow these steps:
 
* Begin a report by calling the report's Initiate API. There is a separate initiate API call for each report type.
* In the result of the Initiate API, you receive back a report's `id` value.
* Check the status of a report by calling `GetReport` and passing in the report's `id` value.
* When a report's status is `Completed`, call `DownloadReport` to retrieve the file.
 
This API call returns information about any report type.
 ## initiateExportDocumentLineReport


  [Source: AvaTaxClient.js Line: 7325](/lib/AvaTaxClient.js#L7325)

 - `client.initiateExportDocumentLineReport({ companyId, model })` 

 ### Arguments
- **companyId:** The unique ID number of the company to report on.
- **model:** Options that may be configured to customize the report.
 

  Initiate an ExportDocumentLine report task

Begins running an `ExportDocumentLine` report task and returns the identity of the report.
 
Reports are run as asynchronous report tasks on the server. When complete, the report file will be available for download
for up to 30 days after completion. To run an asynchronous report, you should follow these steps:
 
* Begin a report by calling the report's Initiate API. There is a separate initiate API call for each report type.
* In the result of the Initiate API, you receive back a report's `id` value.
* Check the status of a report by calling `GetReport` and passing in the report's `id` value.
* When a report's status is `Completed`, call `DownloadReport` to retrieve the file.
 
The `ExportDocumentLine` report produces information about invoice lines recorded within your account.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listReports


  [Source: AvaTaxClient.js Line: 7359](/lib/AvaTaxClient.js#L7359)

 - `client.listReports({ companyId, pageKey, skip, top })` 

 ### Arguments
- **companyId:** The id of the company for which to get reports.
- **pageKey:** Provide a page key to retrieve the next page of results.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
 

  List all report tasks for account

List all report tasks for your account.
 
Reports are run as asynchronous report tasks on the server. When complete, the report file will be available for download
for up to 30 days after completion. To run an asynchronous report, you should follow these steps:
 
* Begin a report by calling the report's Initiate API. There is a separate initiate API call for each report type.
* In the result of the Initiate API, you receive back a report's `id` value.
* Check the status of a report by calling `GetReport` and passing in the report's `id` value.
* When a report's status is `Completed`, call `DownloadReport` to retrieve the file.
 
This API call returns information about all report types across your entire account.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## createSettings


  [Source: AvaTaxClient.js Line: 7395](/lib/AvaTaxClient.js#L7395)

 - `client.createSettings({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this setting.
- **model:** The setting you wish to create.
 

  Create a new setting

Create one or more new setting objects attached to this company.
 
The company settings system is a metadata system that you can use to store extra information
about a company. Your integration or connector could use this data storage to keep track of
preference information, reminders, or any other storage that would need to persist even if
the customer uninstalls your application.
 
A setting can refer to any type of data you need to remember about this company object.
When creating this object, you may define your own `set`, `name`, and `value` parameters.
To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## deleteSetting


  [Source: AvaTaxClient.js Line: 7426](/lib/AvaTaxClient.js#L7426)

 - `client.deleteSetting({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this setting.
- **id:** The ID of the setting you wish to delete.
 

  Delete a single setting

Mark the setting object at this URL as deleted.
 
The company settings system is a metadata system that you can use to store extra information
about a company. Your integration or connector could use this data storage to keep track of
preference information, reminders, or any other storage that would need to persist even if
the customer uninstalls your application.
 
A setting can refer to any type of data you need to remember about this company object.
When creating this object, you may define your own `set`, `name`, and `value` parameters.
To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, FirmAdmin, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## getSetting


  [Source: AvaTaxClient.js Line: 7457](/lib/AvaTaxClient.js#L7457)

 - `client.getSetting({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this setting
- **id:** The primary key of this setting
 

  Retrieve a single setting

Get a single setting object by its unique ID.
 
The company settings system is a metadata system that you can use to store extra information
about a company. Your integration or connector could use this data storage to keep track of
preference information, reminders, or any other storage that would need to persist even if
the customer uninstalls your application.
 
A setting can refer to any type of data you need to remember about this company object.
When creating this object, you may define your own `set`, `name`, and `value` parameters.
To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listSettingsByCompany


  [Source: AvaTaxClient.js Line: 7495](/lib/AvaTaxClient.js#L7495)

 - `client.listSettingsByCompany({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that owns these settings
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all settings for this company

List all setting objects attached to this company.
 
The company settings system is a metadata system that you can use to store extra information
about a company. Your integration or connector could use this data storage to keep track of
preference information, reminders, or any other storage that would need to persist even if
the customer uninstalls your application.
 
A setting can refer to any type of data you need to remember about this company object.
When creating this object, you may define your own `set`, `name`, and `value` parameters.
To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## querySettings


  [Source: AvaTaxClient.js Line: 7538](/lib/AvaTaxClient.js#L7538)

 - `client.querySettings({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all settings

Get multiple setting objects across all companies.
 
The company settings system is a metadata system that you can use to store extra information
about a company. Your integration or connector could use this data storage to keep track of
preference information, reminders, or any other storage that would need to persist even if
the customer uninstalls your application.
 
A setting can refer to any type of data you need to remember about this company object.
When creating this object, you may define your own `set`, `name`, and `value` parameters.
To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## updateSetting


  [Source: AvaTaxClient.js Line: 7580](/lib/AvaTaxClient.js#L7580)

 - `client.updateSetting({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID of the company that this setting belongs to.
- **id:** The ID of the setting you wish to update
- **model:** The setting you wish to update.
 

  Update a single setting

Replace the existing setting object at this URL with an updated object.
 
The company settings system is a metadata system that you can use to store extra information
about a company. Your integration or connector could use this data storage to keep track of
preference information, reminders, or any other storage that would need to persist even if
the customer uninstalls your application.
 
A setting can refer to any type of data you need to remember about this company object.
When creating this object, you may define your own `set`, `name`, and `value` parameters.
To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
 
All data from the existing object will be replaced with data in the object you `PUT`.
 
To set a field's value to `null`, you may either set its value to `null` or omit that field from the object when calling update.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin.
 ## getSubscription


  [Source: AvaTaxClient.js Line: 7604](/lib/AvaTaxClient.js#L7604)

 - `client.getSubscription({ accountId, id })` 

 ### Arguments
- **accountId:** The ID of the account that owns this subscription
- **id:** The primary key of this subscription
 

  Retrieve a single subscription

Get the subscription object identified by this URL.
A 'subscription' indicates a licensed subscription to a named Avalara service.
To request or remove subscriptions, please contact Avalara sales or your customer account manager.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listSubscriptionsByAccount


  [Source: AvaTaxClient.js Line: 7634](/lib/AvaTaxClient.js#L7634)

 - `client.listSubscriptionsByAccount({ accountId, filter, top, skip, orderBy })` 

 ### Arguments
- **accountId:** The ID of the account that owns these subscriptions
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptionDescription
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve subscriptions for this account

List all subscription objects attached to this account.
A 'subscription' indicates a licensed subscription to a named Avalara service.
To request or remove subscriptions, please contact Avalara sales or your customer account manager.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## querySubscriptions


  [Source: AvaTaxClient.js Line: 7668](/lib/AvaTaxClient.js#L7668)

 - `client.querySubscriptions({ filter, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* subscriptionDescription
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all subscriptions

Get multiple subscription objects across all accounts.
A 'subscription' indicates a licensed subscription to a named Avalara service.
To request or remove subscriptions, please contact Avalara sales or your customer account manager.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## createTaxCodes


  [Source: AvaTaxClient.js Line: 7699](/lib/AvaTaxClient.js#L7699)

 - `client.createTaxCodes({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this tax code.
- **model:** The tax code you wish to create.
 

  Create a new tax code

Create one or more new taxcode objects attached to this company.
A 'TaxCode' represents a uniquely identified type of product, good, or service.
Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
taxability rules for this product in all supported jurisdictions.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## deleteTaxCode


  [Source: AvaTaxClient.js Line: 7721](/lib/AvaTaxClient.js#L7721)

 - `client.deleteTaxCode({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this tax code.
- **id:** The ID of the tax code you wish to delete.
 

  Delete a single tax code

Marks the existing TaxCode object at this URL as deleted.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## getTaxCode


  [Source: AvaTaxClient.js Line: 7747](/lib/AvaTaxClient.js#L7747)

 - `client.getTaxCode({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this tax code
- **id:** The primary key of this tax code
 

  Retrieve a single tax code

Get the taxcode object identified by this URL.
A 'TaxCode' represents a uniquely identified type of product, good, or service.
Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
taxability rules for this product in all supported jurisdictions.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listTaxCodesByCompany


  [Source: AvaTaxClient.js Line: 7780](/lib/AvaTaxClient.js#L7780)

 - `client.listTaxCodesByCompany({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that owns these tax codes
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve tax codes for this company

List all taxcode objects attached to this company.
A 'TaxCode' represents a uniquely identified type of product, good, or service.
Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
taxability rules for this product in all supported jurisdictions.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## queryTaxCodes


  [Source: AvaTaxClient.js Line: 7818](/lib/AvaTaxClient.js#L7818)

 - `client.queryTaxCodes({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all tax codes

Get multiple taxcode objects across all companies.
A 'TaxCode' represents a uniquely identified type of product, good, or service.
Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
taxability rules for this product in all supported jurisdictions.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## updateTaxCode


  [Source: AvaTaxClient.js Line: 7853](/lib/AvaTaxClient.js#L7853)

 - `client.updateTaxCode({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID of the company that this tax code belongs to.
- **id:** The ID of the tax code you wish to update
- **model:** The tax code you wish to update.
 

  Update a single tax code

Replace the existing taxcode object at this URL with an updated object.
A 'TaxCode' represents a uniquely identified type of product, good, or service.
Avalara supports correct tax rates and taxability rules for all TaxCodes in all supported jurisdictions.
If you identify your products by tax code in your 'Create Transacion' API calls, Avalara will correctly calculate tax rates and
taxability rules for this product in all supported jurisdictions.
All data from the existing object will be replaced with data in the object you PUT.
To set a field's value to null, you may either set its value to null or omit that field from the object you post.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## buildTaxContentFile


  [Source: AvaTaxClient.js Line: 7897](/lib/AvaTaxClient.js#L7897)

 - `client.buildTaxContentFile({ model })` 

 ### Arguments
- **model:** Parameters about the desired file format and report format, specifying which company, locations and TaxCodes to include.
 

  Build a multi-location tax content file

Builds a tax content file containing information useful for a retail point-of-sale solution.
 
Since tax rates may change based on decisions made by a variety of tax authorities, we recommend
that users of this tax content API download new data every day. Many tax authorities may finalize
decisions on tax changes at unexpected times and may make changes in response to legal issues or
governmental priorities. Any tax content downloaded for future time periods is subject to change
if tax rates or tax laws change.
 
A TaxContent file contains a matrix of the taxes that would be charged when you sell any of your
Items at any of your Locations. To create items, use `CreateItems()`. To create locations, use
`CreateLocations()`. The file is built by looking up the tax profile for your location and your
item and calculating taxes for each in turn. To include a custom `TaxCode` in this tax content
file, first create the custom tax code using `CreateTaxCodes()` to create the custom tax code,
then use `CreateItems()` to create an item that uses the custom tax code.
 
This data file can be customized for specific partner devices and usage conditions.
 
The result of this API is the file you requested in the format you requested using the `responseType` field.
 
This API builds the file on demand, and is limited to files with no more than 7500 scenarios. To build a tax content
file for a single location at a time, please use `BuildTaxContentFileForLocation`.
 
NOTE: This API does not work for Tennessee tax holiday scenarios.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## buildTaxContentFileForLocation


  [Source: AvaTaxClient.js Line: 7946](/lib/AvaTaxClient.js#L7946)

 - `client.buildTaxContentFileForLocation({ companyId, id, date, format, partnerId, includeJurisCodes })` 

 ### Arguments
- **companyId:** The ID number of the company that owns this location.
- **id:** The ID number of the location to retrieve point-of-sale data.
- **date:** The date for which point-of-sale data would be calculated (today by default)
- **format:** The format of the file (JSON by default) (See PointOfSaleFileType::* for a list of allowable values)
- **partnerId:** If specified, requests a custom partner-formatted version of the file. (See PointOfSalePartnerId::* for a list of allowable values)
- **includeJurisCodes:** When true, the file will include jurisdiction codes in the result.
 

  Build a tax content file for a single location

Builds a tax content file containing information useful for a retail point-of-sale solution.
 
Since tax rates may change based on decisions made by a variety of tax authorities, we recommend
that users of this tax content API download new data every day. Many tax authorities may finalize
decisions on tax changes at unexpected times and may make changes in response to legal issues or
governmental priorities. Any tax content downloaded for future time periods is subject to change
if tax rates or tax laws change.
 
A TaxContent file contains a matrix of the taxes that would be charged when you sell any of your
Items at any of your Locations. To create items, use `CreateItems()`. To create locations, use
`CreateLocations()`. The file is built by looking up the tax profile for your location and your
item and calculating taxes for each in turn. To include a custom `TaxCode` in this tax content
file, first create the custom tax code using `CreateTaxCodes()` to create the custom tax code,
then use `CreateItems()` to create an item that uses the custom tax code.
 
This data file can be customized for specific partner devices and usage conditions.
 
The result of this API is the file you requested in the format you requested using the `responseType` field.
 
This API builds the file on demand, and is limited to files with no more than 7500 scenarios. To build a tax content
file for a multiple locations in a single file, please use `BuildTaxContentFile`.
 
NOTE: This API does not work for Tennessee tax holiday scenarios.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## downloadTaxRatesByZipCode


  [Source: AvaTaxClient.js Line: 8012](/lib/AvaTaxClient.js#L8012)

 - `client.downloadTaxRatesByZipCode({ date, region })` 

 ### Arguments
- **date:** The date for which point-of-sale data would be calculated (today by default). Example input: 2016-12-31
- **region:** A two character region code which limits results to a specific region.
 

  Download a file listing tax rates by postal code

Download a CSV file containing all five digit postal codes in the United States and their sales
and use tax rates for tangible personal property.
 
Since tax rates may change based on decisions made by a variety of tax authorities, we recommend
that users of this tax content API download new data every day. Many tax authorities may finalize
decisions on tax changes at unexpected times and may make changes in response to legal issues or
governmental priorities. Any tax content downloaded for future time periods is subject to change
if tax rates or tax laws change.
 
This rates file is intended to be used as a default for tax calculation when your software cannot
call the `CreateTransaction` API call. When using this file, your software will be unable to
handle complex tax rules such as:
 
* Zip+4 - This tax file contains five digit zip codes only.
* Different product types - This tax file contains tangible personal property tax rates only.
* Mixed sourcing - This tax file cannot be used to resolve origin-based taxes.
* Threshold-based taxes - This tax file does not contain information about thresholds.
 
If you use this file to provide default tax rates, please ensure that your software calls `CreateTransaction`
to reconcile the actual transaction and determine the difference between the estimated general tax
rate and the final transaction tax.
 
The file provided by this API is in CSV format with the following columns:
 
* ZIP_CODE - The five digit zip code for this record.
* STATE_ABBREV - A valid two character US state abbreviation for this record. Zip codes may span multiple states.
* COUNTY_NAME - A valid county name for this record. Zip codes may span multiple counties.
* CITY_NAME - A valid city name for this record. Zip codes may span multiple cities.
* STATE_SALES_TAX - The state component of the sales tax rate.
* STATE_USE_TAX - The state component of the use tax rate.
* COUNTY_SALES_TAX - The county component of the sales tax rate.
* COUNTY_USE_TAX - The county component of the use tax rate.
* CITY_SALES_TAX - The city component of the sales tax rate.
* CITY_USE_TAX - The city component of the use tax rate.
* TOTAL_SALES_TAX - The total tax rate for sales tax for this postal code. This value may not equal the sum of the state/county/city due to special tax jurisdiction rules.
* TOTAL_USE_TAX - The total tax rate for use tax for this postal code. This value may not equal the sum of the state/county/city due to special tax jurisdiction rules.
* TAX_SHIPPING_ALONE - This column contains 'Y' if shipping is taxable.
* TAX_SHIPPING_AND_HANDLING_TOGETHER - This column contains 'Y' if shipping and handling are taxable when sent together.
 
For more detailed tax content, please use the `BuildTaxContentFile` API which allows usage of exact items and exact locations.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## createTaxRules


  [Source: AvaTaxClient.js Line: 8048](/lib/AvaTaxClient.js#L8048)

 - `client.createTaxRules({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this tax rule.
- **model:** The tax rule you wish to create.
 

  Create a new tax rule

Create one or more custom tax rules attached to this company.
 
A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
with the transaction.
 
You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
custom tax rules to redefine the behavior for your company or item.
 
Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
auditor, legal representative, and accounting team.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## deleteTaxRule


  [Source: AvaTaxClient.js Line: 8082](/lib/AvaTaxClient.js#L8082)

 - `client.deleteTaxRule({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this tax rule.
- **id:** The ID of the tax rule you wish to delete.
 

  Delete a single tax rule

Mark the custom tax rule identified by this URL as deleted.
 
A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
with the transaction.
 
You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
custom tax rules to redefine the behavior for your company or item.
 
Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
auditor, legal representative, and accounting team.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## getTaxRule


  [Source: AvaTaxClient.js Line: 8116](/lib/AvaTaxClient.js#L8116)

 - `client.getTaxRule({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this tax rule
- **id:** The primary key of this tax rule
 

  Retrieve a single tax rule

Get the taxrule object identified by this URL.
 
A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
with the transaction.
 
You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
custom tax rules to redefine the behavior for your company or item.
 
Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
auditor, legal representative, and accounting team.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## listTaxRules


  [Source: AvaTaxClient.js Line: 8157](/lib/AvaTaxClient.js#L8157)

 - `client.listTaxRules({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that owns these tax rules
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, rateTypeCode, taxTypeGroup, taxSubType
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve tax rules for this company

List all taxrule objects attached to this company.
 
A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
with the transaction.
 
You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
custom tax rules to redefine the behavior for your company or item.
 
Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
auditor, legal representative, and accounting team.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## queryTaxRules


  [Source: AvaTaxClient.js Line: 8203](/lib/AvaTaxClient.js#L8203)

 - `client.queryTaxRules({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* taxCode, rateTypeCode, taxTypeGroup, taxSubType
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all tax rules

Get multiple taxrule objects across all companies.
 
A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
with the transaction.
 
You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
custom tax rules to redefine the behavior for your company or item.
 
Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
auditor, legal representative, and accounting team.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
 ## updateTaxRule


  [Source: AvaTaxClient.js Line: 8244](/lib/AvaTaxClient.js#L8244)

 - `client.updateTaxRule({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID of the company that this tax rule belongs to.
- **id:** The ID of the tax rule you wish to update
- **model:** The tax rule you wish to update.
 

  Update a single tax rule

Replace the existing custom tax rule object at this URL with an updated object.
 
A tax rule represents a rule that changes the default AvaTax behavior for a product or jurisdiction. Custom tax rules
can be used to change the taxability of an item, to change the tax base of an item, or to change the tax rate
charged when selling an item. Tax rules can also change tax behavior depending on the `entityUseCode` value submitted
with the transaction.
 
You can create custom tax rules to customize the behavior of AvaTax to match specific rules that are custom to your
business. If you have obtained a ruling from a tax auditor that requires custom tax calculations, you can use
custom tax rules to redefine the behavior for your company or item.
 
Please use custom tax rules carefully and ensure that these tax rules match the behavior agreed upon with your
auditor, legal representative, and accounting team.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
 ## addLines


  [Source: AvaTaxClient.js Line: 8286](/lib/AvaTaxClient.js#L8286)

 - `client.addLines({ include, model })` 

 ### Arguments
- **include:** Specifies objects to include in the response after transaction is created
- **model:** information about the transaction and lines to be added
 

  Add lines to an existing unlocked transaction

Add lines to an existing unlocked transaction.
 
 The `AddLines` API allows you to add additional transaction lines to existing transaction, so that customer will
 be able to append multiple calls together and form an extremely large transaction. If customer does not specify line number
 in the lines to be added, a new random Guid string will be generated for line number. If customer are not satisfied with
 the line number for the transaction lines, they can turn on the renumber switch to have REST v2 automatically renumber all
 transaction lines for them, in this case, the line number becomes: "1", "2", "3", ...
 
 A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
 sales, purchases, inventory transfer, and returns (also called refunds).
 You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
 * Lines
 * Details (implies lines)
 * Summary (implies details)
 * Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
 
 If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## adjustTransaction


  [Source: AvaTaxClient.js Line: 8339](/lib/AvaTaxClient.js#L8339)

 - `client.adjustTransaction({ companyCode, transactionCode, documentType, include, model })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to adjust
- **documentType:** (Optional): The document type of the transaction to adjust. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
- **model:** The adjustment you wish to make
 

  Correct a previously created transaction

Replaces the current transaction uniquely identified by this URL with a new transaction.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
When you adjust a committed transaction, the original transaction will be updated with the status code `Adjusted`, and
both revisions will be available for retrieval based on their code and ID numbers.
Only transactions in `Committed` status are reported by Avalara Managed Returns.
 
Transactions that have been previously reported to a tax authority by Avalara Managed Returns are considered `locked` and are
no longer available for adjustments.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## auditTransaction


  [Source: AvaTaxClient.js Line: 8384](/lib/AvaTaxClient.js#L8384)

 - `client.auditTransaction({ companyCode, transactionCode })` 

 ### Arguments
- **companyCode:** The code identifying the company that owns this transaction
- **transactionCode:** The code identifying the transaction
 

  Get audit information about a transaction

Retrieve audit information about a transaction stored in AvaTax.
 
The `AuditTransaction` API retrieves audit information related to a specific transaction. This audit
information includes the following:
 
* The `CompanyId` of the company that created the transaction
* The server timestamp representing the exact server time when the transaction was created
* The server duration - how long it took to process this transaction
* Whether exact API call details were logged
* A reconstructed API call showing what the original CreateTransaction call looked like
 
This API can be used to examine information about a previously created transaction.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## auditTransactionWithType


  [Source: AvaTaxClient.js Line: 8427](/lib/AvaTaxClient.js#L8427)

 - `client.auditTransactionWithType({ companyCode, transactionCode, documentType })` 

 ### Arguments
- **companyCode:** The code identifying the company that owns this transaction
- **transactionCode:** The code identifying the transaction
- **documentType:** The document type of the original transaction (See DocumentType::* for a list of allowable values)
 

  Get audit information about a transaction

Retrieve audit information about a transaction stored in AvaTax.
 
The `AuditTransaction` API retrieves audit information related to a specific transaction. This audit
information includes the following:
 
* The `CompanyId` of the company that created the transaction
* The server timestamp representing the exact server time when the transaction was created
* The server duration - how long it took to process this transaction
* Whether exact API call details were logged
* A reconstructed API call showing what the original CreateTransaction call looked like
 
This API can be used to examine information about a previously created transaction.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## bulkLockTransaction


  [Source: AvaTaxClient.js Line: 8455](/lib/AvaTaxClient.js#L8455)

 - `client.bulkLockTransaction({ model })` 

 ### Arguments
- **model:** bulk lock request
 

  Lock a set of documents

This API is available by invitation only.
 
Lock a set of transactions uniquely identified by DocumentIds provided. This API allows locking multiple documents at once.
After this API call succeeds, documents will be locked and can't be voided.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).

### Security Policies

* This API requires the user role Compliance Root User.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## changeTransactionCode


  [Source: AvaTaxClient.js Line: 8506](/lib/AvaTaxClient.js#L8506)

 - `client.changeTransactionCode({ companyCode, transactionCode, documentType, include, model })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to change
- **documentType:** (Optional): The document type of the transaction to change document code. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
- **model:** The code change request you wish to execute
 

  Change a transaction's code

Renames a transaction uniquely identified by this URL by changing its `code` value.
 
This API is available as long as the transaction is in `saved` or `posted` status. When a transaction
is `committed`, it can be modified by using the [AdjustTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/) method.
 
After this API call succeeds, the transaction will have a new URL matching its new `code`.
 
If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## commitTransaction


  [Source: AvaTaxClient.js Line: 8558](/lib/AvaTaxClient.js#L8558)

 - `client.commitTransaction({ companyCode, transactionCode, documentType, include, model })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to commit
- **documentType:** (Optional): The document type of the transaction to commit. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
- **model:** The commit request you wish to execute
 

  Commit a transaction for reporting

Marks a transaction by changing its status to `Committed`.
 
Transactions that are committed are available to be reported to a tax authority by Avalara Managed Returns.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
 
Any changes made to a committed transaction will generate a transaction history.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
 ## createOrAdjustTransaction


  [Source: AvaTaxClient.js Line: 8616](/lib/AvaTaxClient.js#L8616)

 - `client.createOrAdjustTransaction({ include, model })` 

 ### Arguments
- **include:** Specifies objects to include in the response after transaction is created
- **model:** The transaction you wish to create or adjust
 

  Create or adjust a transaction

Records a new transaction or adjust an existing transaction in AvaTax.
 
The `CreateOrAdjustTransaction` endpoint is used to create a new transaction or update an existing one. This API
can help you create an idempotent service that creates transactions
If there exists a transaction identified by code, the original transaction will be adjusted by using the meta data
in the input transaction.
 
The `CreateOrAdjustTransaction` API cannot modify any transaction that has been reported to a tax authority using
the Avalara Managed Returns Service or any other tax filing service. If you call this API to attempt to modify
a transaction that has been reported on a tax filing, you will receive the error `CannotModifyLockedTransaction`.
 
To generate a refund for a transaction, use the `RefundTransaction` API.
 
If you don't specify the field `type` in your request, you will get an estimate of type `SalesOrder`, which will not be recorded in the database.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* ForceTimeout - Simulates a timeout. This adds a 30 second delay and error to your API call. This can be used to test your code to ensure it can respond correctly in the case of a dropped connection.
 
If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
 
NOTE: Avoid using the following strings in your transaction codes as they are encoding strings and will be interpreted differently:
* \_-ava2f-\_
* \_-ava2b-\_
* \_-ava3f-\_

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro, BasicReturns.
 ## createTransaction


  [Source: AvaTaxClient.js Line: 8680](/lib/AvaTaxClient.js#L8680)

 - `client.createTransaction({ include, model })` 

 ### Arguments
- **include:** Specifies objects to include in the response after transaction is created
- **model:** The transaction you wish to create
 

  Create a new transaction

Records a new transaction in AvaTax.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
The `CreateTransaction` endpoint uses the tax profile of your company to identify the correct tax rules
and rates to apply to all line items in this transaction. The end result will be the total tax calculated by AvaTax based on your
company's configuration and the data provided in this API call.
 
The `CreateTransaction` API will report an error if a committed transaction already exists with the same `code`. To
avoid this error, use the `CreateOrAdjustTransaction` API - it will create the transaction if it does not exist, or
update it if it does exist.
 
To generate a refund for a transaction, use the `RefundTransaction` API.
 
The field `type` identifies the kind of transaction - for example, a sale, purchase, or refund. If you do not specify
a `type` value, you will receive an estimate of type `SalesOrder`, which will not be recorded.
 
The origin and destination locations for a transaction must be identified by either address or geocode. For address-based transactions, please
provide addresses in the fields `line`, `city`, `region`, `country` and `postalCode`. For geocode-based transactions, please provide the geocode
information in the fields `latitude` and `longitude`. If either `latitude` or `longitude` or both are null, the transaction will be calculated
using the best available address location information.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* ForceTimeout - Simulates a timeout. This adds a 30 second delay and error to your API call. This can be used to test your code to ensure it can respond correctly in the case of a dropped connection.
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
 
NOTE: Avoid using the following strings in your transaction codes as they are encoding strings and will be interpreted differently:
* \_-ava2f-\_
* \_-ava2b-\_
* \_-ava3f-\_

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro, BasicReturns.
 ## deleteLines


  [Source: AvaTaxClient.js Line: 8721](/lib/AvaTaxClient.js#L8721)

 - `client.deleteLines({ include, model })` 

 ### Arguments
- **include:** Specifies objects to include in the response after transaction is created
- **model:** information about the transaction and lines to be removed
 

  Remove lines from an existing unlocked transaction

Remove lines to an existing unlocked transaction.
 
 The `DeleteLines` API allows you to remove transaction lines from existing unlocked transaction, so that customer will
 be able to delete transaction lines and adjust original transaction the way they like
 
 A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
 sales, purchases, inventory transfer, and returns (also called refunds).
 You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
 * Lines
 * Details (implies lines)
 * Summary (implies details)
 * Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
 
 If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## getTransactionByCode


  [Source: AvaTaxClient.js Line: 8770](/lib/AvaTaxClient.js#L8770)

 - `client.getTransactionByCode({ companyCode, transactionCode, documentType, include })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to retrieve
- **documentType:** (Optional): The document type of the transaction to retrieve (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
 

  Retrieve a single transaction by code

Get the current transaction identified by this company code, transaction code, and document type.
 
A transaction is uniquely identified by `companyCode`, `code` (often called Transaction Code), and `documentType`.
 
For compatibility purposes, when this API finds multiple transactions with the same transaction code, and if you have not specified
the `type` parameter to this API, it will default to selecting the `SalesInvoices` transaction. To change this behavior, use the
optional `documentType` parameter to specify the specific document type you wish to find.
 
If this transaction was adjusted, the return value of this API will be the current transaction with this code.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro, BasicReturns.
 ## getTransactionByCodeAndType


  [Source: AvaTaxClient.js Line: 8803](/lib/AvaTaxClient.js#L8803)

 - `client.getTransactionByCodeAndType({ companyCode, transactionCode, documentType, include })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to retrieve
- **documentType:** The transaction type to retrieve (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
 

  Retrieve a single transaction by code

DEPRECATED: Please use the `GetTransactionByCode` API instead.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro, BasicReturns.
 ## getTransactionById


  [Source: AvaTaxClient.js Line: 8844](/lib/AvaTaxClient.js#L8844)

 - `client.getTransactionById({ id, include })` 

 ### Arguments
- **id:** The unique ID number of the transaction to retrieve
- **include:** Specifies objects to include in this fetch call
 

  Retrieve a single transaction by ID

Get the unique transaction identified by this URL.
 
This endpoint retrieves the exact transaction identified by this ID number even if that transaction was later adjusted
by using the `AdjustTransaction` endpoint.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro, BasicReturns.
 ## listTransactionsByCompany


  [Source: AvaTaxClient.js Line: 8899](/lib/AvaTaxClient.js#L8899)

 - `client.listTransactionsByCompany({ companyCode, dataSourceId, include, filter, top, skip, orderBy })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **dataSourceId:** Optionally filter transactions to those from a specific data source.
- **include:** Specifies objects to include in this fetch call
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).<br />*Not filterable:* totalDiscount, lines, addresses, locationTypes, summary, taxDetailsByTaxType, parameters, messages, invoiceMessages, isFakeTransaction
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all transactions

List all transactions attached to this company.
 
This endpoint is limited to returning 1,000 transactions at a time maximum.
 
When listing transactions, you must specify a `date` range filter. If you do not specify a `$filter` that includes a `date` field
criteria, the query will default to looking at only those transactions with `date` in the past 30 days.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, ProStoresOperator, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro, BasicReturns.
 ## lockTransaction


  [Source: AvaTaxClient.js Line: 8957](/lib/AvaTaxClient.js#L8957)

 - `client.lockTransaction({ companyCode, transactionCode, documentType, include, model })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to lock
- **documentType:** (Optional): The document type of the transaction to lock. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
- **model:** The lock request you wish to execute
 

  Lock a single transaction

Lock a transaction uniquely identified by this URL.
 
This API is mainly used for connector developer to simulate what happens when Returns product locks a document.
After this API call succeeds, the document will be locked and can't be voided or adjusted.
 
This API is only available to customers in Sandbox with AvaTaxPro subscription. On production servers, this API is available by invitation only.
 
If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Returns* (at least one of): Mrs, MRSComplianceManager, AvaTaxCsp.<br />*Firm Managed* (for accounts managed by a firm): ARA, ARAManaged.
 ## refundTransaction


  [Source: AvaTaxClient.js Line: 9022](/lib/AvaTaxClient.js#L9022)

 - `client.refundTransaction({ companyCode, transactionCode, include, documentType, useTaxDateOverride, model })` 

 ### Arguments
- **companyCode:** The code of the company that made the original sale
- **transactionCode:** The transaction code of the original sale
- **include:** Specifies objects to include in the response after transaction is created
- **documentType:** (Optional): The document type of the transaction to refund. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **useTaxDateOverride:** (Optional): If set to true, processes refund using taxDateOverride rather than taxAmountOverride (Note: taxAmountOverride is not allowed for SST states).
- **model:** Information about the refund to create
 

  Create a refund for a transaction

Create a refund for a transaction.
 
The `RefundTransaction` API allows you to quickly and easily create a `ReturnInvoice` representing a refund
for a previously created `SalesInvoice` transaction. You can choose to create a full or partial refund, and
specify individual line items from the original sale for refund.
 
The `RefundTransaction` API ensures that the tax amount you refund to the customer exactly matches the tax that
was calculated during the original transaction, regardless of any changes to your company's configuration, rules,
nexus, or any other setting.
 
This API is intended to be a shortcut to allow you to quickly and accurately generate a refund for the following
common refund scenarios:
 
* A full refund of a previous sale
* Refunding the tax that was charged on a previous sale, when the customer provides an exemption certificate after the purchase
* Refunding one or more items (lines) from a previous sale
* Granting a customer a percentage refund of a previous sale
 
For more complex scenarios than the ones above, please use `CreateTransaction` with document type `ReturnInvoice` to
create a custom refund transaction.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
If you omit the `$include` parameter, the API will assume you want `Summary,Addresses`.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## settleTransaction


  [Source: AvaTaxClient.js Line: 9075](/lib/AvaTaxClient.js#L9075)

 - `client.settleTransaction({ companyCode, transactionCode, documentType, include, model })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to settle
- **documentType:** (Optional): The document type of the transaction to settle. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
- **model:** The data from an external system to reconcile against AvaTax
 

  Perform multiple actions on a transaction

Performs one or more actions against the current transaction uniquely identified by this URL.
 
The `SettleTransaction` API call can perform the work of `ChangeCode`, `VerifyTransaction`, and `CommitTransaction`.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
 
This API is available for users who want to execute more than one action at a time.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
 ## uncommitTransaction


  [Source: AvaTaxClient.js Line: 9121](/lib/AvaTaxClient.js#L9121)

 - `client.uncommitTransaction({ companyCode, transactionCode, documentType, include })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to Uncommit
- **documentType:** (Optional): The document type of the transaction to Uncommit. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
 

  Uncommit a transaction for reporting

Adjusts a transaction by changing it to an uncommitted status.
 
Transactions that have been previously reported to a tax authority by Avalara Managed Returns are considered `locked` and are
no longer available to be uncommitted.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## unvoidTransaction


  [Source: AvaTaxClient.js Line: 9164](/lib/AvaTaxClient.js#L9164)

 - `client.unvoidTransaction({ companyCode, transactionCode, documentType, include })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to commit
- **documentType:** (Optional): The document type of the transaction to commit. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
 

  Unvoids a transaction

Unvoids a voided transaction
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## verifyTransaction


  [Source: AvaTaxClient.js Line: 9215](/lib/AvaTaxClient.js#L9215)

 - `client.verifyTransaction({ companyCode, transactionCode, documentType, include, model })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to settle
- **documentType:** (Optional): The document type of the transaction to verify. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
- **model:** The data from an external system to reconcile against AvaTax
 

  Verify a transaction

Verifies that the transaction uniquely identified by this URL matches certain expected values.
 
If the transaction does not match these expected values, this API will return an error code indicating which value did not match.
 
If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## voidTransaction


  [Source: AvaTaxClient.js Line: 9268](/lib/AvaTaxClient.js#L9268)

 - `client.voidTransaction({ companyCode, transactionCode, documentType, include, model })` 

 ### Arguments
- **companyCode:** The company code of the company that recorded this transaction
- **transactionCode:** The transaction code to void
- **documentType:** (Optional): The document type of the transaction to void. If not provided, the default is SalesInvoice. (See DocumentType::* for a list of allowable values)
- **include:** Specifies objects to include in this fetch call
- **model:** The void request you wish to execute. To void a transaction the code must be set to 'DocVoided'
 

  Void a transaction

Voids the current transaction uniquely identified by this URL.
 
A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).
 
When you void a transaction, that transaction's status is recorded as `DocVoided`.
 
If you have more than one document with the same `code`, specify the `documentType` parameter to choose between them.
 
Transactions that have been previously reported to a tax authority by Avalara Managed Returns are no longer available to be voided.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* Lines
* Details (implies lines)
* Summary (implies details)
* Addresses
* SummaryOnly (omit lines and details - reduces API response size)
* LinesOnly (omit details - reduces API response size)
* TaxDetailsByTaxType - Includes the aggregated tax, exempt tax, taxable and non-taxable for each tax type returned in the transaction summary.
 
NOTE: If your companyCode or transactionCode contains any of these characters /, + or ? please use the following encoding before making a request:
* Replace '/' with '\_-ava2f-\_' For example: document/Code becomes document_-ava2f-_Code
* Replace '+' with '\_-ava2b-\_' For example: document+Code becomes document_-ava2b-_Code
* Replace '?' with '\_-ava3f-\_' For example: document?Code becomes document_-ava3f-_Code

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, CompanyAdmin, CSPTester, ProStoresOperator, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaTaxPro.
 ## createUPCs


  [Source: AvaTaxClient.js Line: 9295](/lib/AvaTaxClient.js#L9295)

 - `client.createUPCs({ companyId, model })` 

 ### Arguments
- **companyId:** The ID of the company that owns this UPC.
- **model:** The UPC you wish to create.
 

  Create a new UPC

Create one or more new UPC objects attached to this company.
A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaUpc.
 ## deleteUPC


  [Source: AvaTaxClient.js Line: 9318](/lib/AvaTaxClient.js#L9318)

 - `client.deleteUPC({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this UPC.
- **id:** The ID of the UPC you wish to delete.
 

  Delete a single UPC

Marks the UPC object identified by this URL as deleted.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaUpc.
 ## getUPC


  [Source: AvaTaxClient.js Line: 9342](/lib/AvaTaxClient.js#L9342)

 - `client.getUPC({ companyId, id })` 

 ### Arguments
- **companyId:** The ID of the company that owns this UPC
- **id:** The primary key of this UPC
 

  Retrieve a single UPC

Get the UPC object identified by this URL.
A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaUpc.
 ## listUPCsByCompany


  [Source: AvaTaxClient.js Line: 9373](/lib/AvaTaxClient.js#L9373)

 - `client.listUPCsByCompany({ companyId, filter, include, top, skip, orderBy })` 

 ### Arguments
- **companyId:** The ID of the company that owns these UPCs
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve UPCs for this company

List all UPC objects attached to this company.
A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaUpc.
 ## queryUPCs


  [Source: AvaTaxClient.js Line: 9409](/lib/AvaTaxClient.js#L9409)

 - `client.queryUPCs({ filter, include, top, skip, orderBy })` 

 ### Arguments
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **include:** A comma separated list of additional data to retrieve.
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all UPCs

Get multiple UPC objects across all companies.
A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, CSPAdmin, CSPTester, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser.
* This API depends on the following active services<br />*Required* (all): AvaUpc.
 ## updateUPC


  [Source: AvaTaxClient.js Line: 9442](/lib/AvaTaxClient.js#L9442)

 - `client.updateUPC({ companyId, id, model })` 

 ### Arguments
- **companyId:** The ID of the company that this UPC belongs to.
- **id:** The ID of the UPC you wish to update
- **model:** The UPC you wish to update.
 

  Update a single UPC

Replace the existing UPC object at this URL with an updated object.
A UPC represents a single UPC code in your catalog and matches this product to the tax code identified by this UPC.
All data from the existing object will be replaced with data in the object you PUT.
To set a field's value to null, you may either set its value to null or omit that field from the object you post.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, CSPTester, SSTAdmin, TechnicalSupportAdmin.
* This API depends on the following active services<br />*Required* (all): AvaUpc.
 ## changePassword


  [Source: AvaTaxClient.js Line: 9469](/lib/AvaTaxClient.js#L9469)

 - `client.changePassword({ model })` 

 ### Arguments
- **model:** An object containing your current password and the new password.
 

  Change Password

Allows a user to change their password via an API call.
 
This API allows an authenticated user to change their password via an API call. This feature is only available
for accounts that do not use SAML integrated password validation.
 
This API only allows the currently authenticated user to change their password; it cannot be used to apply to a
different user than the one authenticating the current API call.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## createUsers


  [Source: AvaTaxClient.js Line: 9499](/lib/AvaTaxClient.js#L9499)

 - `client.createUsers({ accountId, model })` 

 ### Arguments
- **accountId:** The unique ID number of the account where these users will be created.
- **model:** The user or array of users you wish to create.
 

  Create new users

Create one or more new user objects attached to this account.
 
A user represents one person with access privileges to make API calls and work with a specific account.
 
Users who are account administrators or company users are permitted to create user records to invite
additional team members to work with AvaTax.
 
A newly created user will receive an email inviting them to create their password. This means that you
must provide a valid email address for all user accounts created.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## deleteUser


  [Source: AvaTaxClient.js Line: 9526](/lib/AvaTaxClient.js#L9526)

 - `client.deleteUser({ id, accountId })` 

 ### Arguments
- **id:** The ID of the user you wish to delete.
- **accountId:** The accountID of the user you wish to delete.
 

  Delete a single user

Mark the user object identified by this URL as deleted.
 
This API is available for use by account and company administrators only.
 
Account and company administrators may only delete users within the appropriate organizations
they control.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, CompanyAdmin, Compliance Root User, CSPTester, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TreasuryAdmin.
 ## getUser


  [Source: AvaTaxClient.js Line: 9554](/lib/AvaTaxClient.js#L9554)

 - `client.getUser({ id, accountId, include })` 

 ### Arguments
- **id:** The ID of the user to retrieve.
- **accountId:** The accountID of the user you wish to get.
- **include:** Optional fetch commands.
 

  Retrieve a single user

Get the user object identified by this URL.
A user represents one person with access privileges to make API calls and work with a specific account.
 
 You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* FetchDeleted

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## getUserEntitlements


  [Source: AvaTaxClient.js Line: 9592](/lib/AvaTaxClient.js#L9592)

 - `client.getUserEntitlements({ id, accountId })` 

 ### Arguments
- **id:** The ID of the user to retrieve.
- **accountId:** The accountID of the user you wish to get.
 

  Retrieve all entitlements for a single user

Return a list of all entitlements to which this user has rights to access.
Entitlements are a list of specified API calls the user is permitted to make, a list of identifier numbers for companies the user is
allowed to use, and an access level identifier that indicates what types of access roles the user is allowed to use.
This API call is intended to provide a validation endpoint to determine, before making an API call, whether this call is likely to succeed.
For example, if user 567 within account 999 is attempting to create a new child company underneath company 12345, you could preview the user's
entitlements and predict whether this call would succeed:
 
* Retrieve entitlements by calling '/api/v2/accounts/999/users/567/entitlements' . If the call fails, you do not have accurate
 credentials for this user.
* If the 'accessLevel' field within entitlements is 'None', the call will fail.
* If the 'accessLevel' field within entitlements is 'SingleCompany' or 'SingleAccount', the call will fail if the companies
 table does not contain the ID number 12345.
* If the 'permissions' array within entitlements does not contain 'AccountSvc.CompanySave', the call will fail.
 
For a full list of defined permissions, please use '/api/v2/definitions/permissions' .

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## listUsersByAccount


  [Source: AvaTaxClient.js Line: 9629](/lib/AvaTaxClient.js#L9629)

 - `client.listUsersByAccount({ accountId, include, filter, top, skip, orderBy })` 

 ### Arguments
- **accountId:** The accountID of the user you wish to list.
- **include:** Optional fetch commands.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve users for this account

List all user objects attached to this account.
A user represents one person with access privileges to make API calls and work with a specific account.
 
When an API is called using a legacy AvaTax License Key, the API log entry is recorded as being performed by a special user attached to that license key.
By default, this API will not return a listing of license key users. Users with registrar-level security may call this API to list license key users.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* FetchDeleted

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## queryUsers


  [Source: AvaTaxClient.js Line: 9673](/lib/AvaTaxClient.js#L9673)

 - `client.queryUsers({ include, filter, top, skip, orderBy })` 

 ### Arguments
- **include:** Optional fetch commands.
- **filter:** A filter statement to identify specific records to retrieve. For more information on filtering, see [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/).
- **top:** If nonzero, return no more than this number of results. Used with `$skip` to provide pagination for large datasets. Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
- **skip:** If nonzero, skip this number of results before returning data. Used with `$top` to provide pagination for large datasets.
- **orderBy:** A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
 

  Retrieve all users

Get multiple user objects across all accounts.
 
A user represents one person or set of credentials with access privileges to make API calls and work with a specific account. A user can be authenticated
via either username / password authentication, an OpenID / OAuth Bearer Token, or a legacy AvaTax License Key.
 
When an API is called using a legacy AvaTax License Key, the API log entry is recorded as being performed by a special user attached to that license key.
By default, this API will not return a listing of license key users. Users with registrar-level security may call this API to list license key users.
 
Search for specific objects using the criteria in the `$filter` parameter; full documentation is available on [Filtering in REST](http://developer.avalara.com/avatax/filtering-in-rest/) .
Paginate your results using the `$top`, `$skip`, and `$orderby` parameters.
 
You may specify one or more of the following values in the `$include` parameter to fetch additional nested data, using commas to separate multiple values:
 
* FetchDeleted

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountOperator, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPAdmin, CSPTester, FirmAdmin, FirmUser, ProStoresOperator, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, SystemOperator, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## updateUser


  [Source: AvaTaxClient.js Line: 9705](/lib/AvaTaxClient.js#L9705)

 - `client.updateUser({ id, accountId, model })` 

 ### Arguments
- **id:** The ID of the user you wish to update.
- **accountId:** The accountID of the user you wish to update.
- **model:** The user object you wish to update.
 

  Update a single user

Replace the existing user object at this URL with an updated object.
A user represents one person with access privileges to make API calls and work with a specific account.
All data from the existing object will be replaced with data in the object you PUT.
To set a field's value to null, you may either set its value to null or omit that field from the object you post.

### Security Policies

* This API requires one of the following user roles: AccountAdmin, AccountUser, CompanyAdmin, CompanyUser, Compliance Root User, ComplianceAdmin, ComplianceUser, CSPTester, FirmAdmin, FirmUser, Registrar, SiteAdmin, SSTAdmin, SystemAdmin, TechnicalSupportAdmin, TechnicalSupportUser, TreasuryAdmin, TreasuryUser.
 ## getMySubscription


  [Source: AvaTaxClient.js Line: 9729](/lib/AvaTaxClient.js#L9729)

 - `client.getMySubscription({ serviceTypeId })` 

 ### Arguments
- **serviceTypeId:** The service to check
 

  Checks if the current user is subscribed to a specific service

Returns a subscription object for the current account, or 404 Not Found if this subscription is not enabled for this account.
 
This API will return an error if it is called with invalid authentication credentials.
 
This API is intended to help you determine whether you have the necessary subscription to use certain API calls
within AvaTax. You can examine the subscriptions returned from this API call to look for a particular product
or subscription to provide useful information to the current user as to whether they are entitled to use
specific features of AvaTax.
 ## listMySubscriptions


  [Source: AvaTaxClient.js Line: 9752](/lib/AvaTaxClient.js#L9752)

 - `client.listMySubscriptions()` 

  

  List all services to which the current user is subscribed

Returns the list of all subscriptions enabled for the currently logged in user.
 
This API will return an error if it is called with invalid authentication credentials.
 
This API is intended to help you determine whether you have the necessary subscription to use certain API calls
within AvaTax. You can examine the subscriptions returned from this API call to look for a particular product
or subscription to provide useful information to the current user as to whether they are entitled to use
specific features of AvaTax.
 ## ping


  [Source: AvaTaxClient.js Line: 9787](/lib/AvaTaxClient.js#L9787)

 - `client.ping()` 

  

  Tests connectivity and version of the service

Check connectivity to AvaTax and return information about the AvaTax API server.
 
This API is intended to help you verify that your connection is working. This API will always succeed and will
never return a error. It provides basic information about the server you connect to:
 
* `version` - The version number of the AvaTax API server that responded to your request. The AvaTax API version number is updated once per month during Avalara's update process.
* `authenticated` - A boolean flag indicating whether or not you sent valid credentials with your API request.
* `authenticationType` - If you provided valid credentials to the API, this field will tell you whether you used Bearer, Username, or LicenseKey authentication.
* `authenticatedUserName` - If you provided valid credentials to the API, this field will tell you the username of the currently logged in user.
* `authenticatedUserId` - If you provided valid credentials to the API, this field will tell you the user ID of the currently logged in user.
* `authenticatedAccountId` - If you provided valid credentials to the API, this field will contain the account ID of the currently logged in user.
 
This API helps diagnose connectivity problems between your application and AvaTax; you may call this API even
if you do not have verified connection credentials. If this API fails, either your computer is not connected to
the internet, or there is a routing problem between your office and Avalara, or the Avalara server is not available.
For more information on the uptime of AvaTax, please see [Avalara's AvaTax Status Page](https://status.avalara.com/).

### Security Policies

* This API may be called without providing authentication credentials.
