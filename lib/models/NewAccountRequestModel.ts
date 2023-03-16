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
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import { CompanyAddress } from "./CompanyAddress";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a request for a new account with Avalara for a new subscriber.
Contains information about the account requested and the rate plan selected.
 * @export
 * @class NewAccountRequestModel
 */
 @JsonObject("NewAccountRequestModel")
 export class NewAccountRequestModel {
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("offer", String)
   offer: string = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("connectorId", String, true)
   connectorId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("campaign", String, true)
   campaign?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("leadSource", String, true)
   leadSource?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("accountName", String)
   accountName: string = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("website", String, true)
   website?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("paymentMethodId", String, true)
   paymentMethodId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("firstName", String)
   firstName: string = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("lastName", String)
   lastName: string = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("phoneNumber", String, true)
   phoneNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("email", String)
   email: string = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("username", String, true)
   username?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("userPassword", String, true)
   userPassword?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("welcomeEmail", String, true)
   welcomeEmail?: string | undefined = undefined;
    /**
     * @type {CompanyAddress}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("companyAddress", CompanyAddress)
   companyAddress: CompanyAddress = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("companyCode", String, true)
   companyCode?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("properties", [String], true)
   properties?: string[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("acceptAvalaraTermsAndConditions", Boolean, true)
   acceptAvalaraTermsAndConditions?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("haveReadAvalaraTermsAndConditions", Boolean, true)
   haveReadAvalaraTermsAndConditions?: boolean | undefined = undefined;
    /**
     * @type {object}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("marketingContext", Object, true)
   marketingContext?: object | undefined = undefined;
    /**
     * @type {Enums.AccountTypeId}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("accountType", Enums.AccountTypeIdConverter, true)
   accountType?: Enums.AccountTypeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   @JsonProperty("taxPayerIdNumber", String, true)
   taxPayerIdNumber?: string | undefined = undefined;
 }