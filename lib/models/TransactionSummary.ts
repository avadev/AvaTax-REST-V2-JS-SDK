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
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Summary information about an overall transaction.
 * @export
 * @class TransactionSummary
 */
 @JsonObject("TransactionSummary")
 export class TransactionSummary {
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof TransactionSummary
     */
   @JsonProperty("jurisType", Enums.JurisdictionTypeConverter, true)
   jurisType?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   @JsonProperty("taxAuthorityType", Number, true)
   taxAuthorityType?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("stateAssignedNo", String, true)
   stateAssignedNo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("taxType", String, true)
   taxType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("taxSubType", String, true)
   taxSubType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("taxName", String, true)
   taxName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("taxGroup", String, true)
   taxGroup?: string | undefined = undefined;
    /**
     * @type {Enums.RateType}
     * @memberof TransactionSummary
     */
   @JsonProperty("rateType", Enums.RateTypeConverter, true)
   rateType?: Enums.RateType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   @JsonProperty("taxable", Number, true)
   taxable?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   @JsonProperty("tax", Number, true)
   tax?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   @JsonProperty("taxCalculated", Number, true)
   taxCalculated?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   @JsonProperty("nonTaxable", Number, true)
   nonTaxable?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   @JsonProperty("exemption", Number, true)
   exemption?: number | undefined = undefined;
 }