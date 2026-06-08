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
 * Describes a single taxability override row for a custom tax.
<br>
This is the input variant used when creating or updating a custom tax. Each taxability
row defines whether an item is taxable or not, optionally scoped to a specific
jurisdiction, tax code, tariff code, or entity use code.

 * @export
 * @class CustomTaxTaxabilityInputModel
 */
 @JsonObject("CustomTaxTaxabilityInputModel")
 export class CustomTaxTaxabilityInputModel {
    /**
     * @type {boolean}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("taxable", Boolean)
   taxable: boolean = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("cap", Number, true)
   cap?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("threshold", Number, true)
   threshold?: number | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("tariffCode", String, true)
   tariffCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("isAllJuris", Boolean, true)
   isAllJuris?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("sourcing", String, true)
   sourcing?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomTaxTaxabilityInputModel
     */
   @JsonProperty("options", [String], true)
   options?: string[] | undefined = undefined;
 }