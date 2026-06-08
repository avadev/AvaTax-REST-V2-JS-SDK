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
 * Describes a single rate override row for a custom tax.
<br>
This is the output variant returned by Custom Tax read endpoints. Each rate row specifies
a rate and a set of optional criteria (jurisdiction, tax code, tariff code, entity use
code, etc.) which determine when the rate applies.

 * @export
 * @class CustomTaxRateOutputModel
 */
 @JsonObject("CustomTaxRateOutputModel")
 export class CustomTaxRateOutputModel {
    /**
     * @type {number}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("cap", Number, true)
   cap?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("threshold", Number, true)
   threshold?: number | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("tariffCode", String, true)
   tariffCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("unitOfBasis", String, true)
   unitOfBasis?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("isAllJuris", Boolean, true)
   isAllJuris?: boolean | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomTaxRateOutputModel
     */
   @JsonProperty("options", [String], true)
   options?: string[] | undefined = undefined;
 }