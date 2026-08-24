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
 * Describes a single exemption override row for a custom tax.
Pattern matching is performed on the optional criteria to map exemption values to jurisdictions,
where omitted values are treated as wildcards.
<br>
This is the output variant returned by Custom Tax read endpoints. Each exemption row
defines whether a matching transaction line is exempt from the custom tax, optionally
scoped by jurisdiction, rate type, tax code, tariff code, or entity use code.

 * @export
 * @class CustomTaxExemptionOutputModel
 */
 @JsonObject("CustomTaxExemptionOutputModel")
 export class CustomTaxExemptionOutputModel {
    /**
     * @type {boolean}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("exempt", Boolean, true)
   exempt?: boolean | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("tariffCode", String, true)
   tariffCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxExemptionOutputModel
     */
   @JsonProperty("isAllJuris", Boolean, true)
   isAllJuris?: boolean | undefined = undefined;
 }