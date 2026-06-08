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
<br>
This is the input variant used when creating or updating a custom tax. Each exemption row
defines whether a matching transaction line is exempt from the custom tax, optionally
scoped by jurisdiction, rate type, tax code, tariff code, or entity use code.

 * @export
 * @class CustomTaxExemptionsInputModel
 */
 @JsonObject("CustomTaxExemptionsInputModel")
 export class CustomTaxExemptionsInputModel {
    /**
     * @type {boolean}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("exempt", Boolean)
   exempt: boolean = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("tariffCode", String, true)
   tariffCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxExemptionsInputModel
     */
   @JsonProperty("isAllJuris", Boolean, true)
   isAllJuris?: boolean | undefined = undefined;
 }