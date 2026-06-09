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
This is the output variant returned by Custom Tax read endpoints. Each taxability row
defines whether an item is taxable or not, optionally scoped to a specific jurisdiction,
tax code, tariff code, or entity use code.

 * @export
 * @class CustomTaxTaxabilityOutputModel
 */
 @JsonObject("CustomTaxTaxabilityOutputModel")
 export class CustomTaxTaxabilityOutputModel {
    /**
     * @type {boolean}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("taxable", Boolean, true)
   taxable?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("cap", Number, true)
   cap?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("threshold", Number, true)
   threshold?: number | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("tariffCode", String, true)
   tariffCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("isAllJuris", Boolean, true)
   isAllJuris?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("sourcing", String, true)
   sourcing?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomTaxTaxabilityOutputModel
     */
   @JsonProperty("options", [String], true)
   options?: string[] | undefined = undefined;
 }