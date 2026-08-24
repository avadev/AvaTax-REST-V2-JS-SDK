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
 * Represents a tax rule that is generated or affected by a custom rule.
This model mirrors the structure of a standard tax rule with relevant fields.
 * @export
 * @class CustomRuleGeneratedTaxRuleModel
 */
 @JsonObject("CustomRuleGeneratedTaxRuleModel")
 export class CustomRuleGeneratedTaxRuleModel {
    /**
     * @type {number}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("stateFIPS", String, true)
   stateFIPS?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxTypeCode", String, true)
   taxTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxRuleTypeId", String, true)
   taxRuleTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("isAllJuris", Boolean, true)
   isAllJuris?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("value", Number, true)
   value?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("cap", Number, true)
   cap?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("threshold", Number, true)
   threshold?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("sourcing", String, true)
   sourcing?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("countyFIPS", String, true)
   countyFIPS?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxTypeGroup", String, true)
   taxTypeGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxSubType", String, true)
   taxSubType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("options", String, true)
   options?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("tariffCode", String, true)
   tariffCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleGeneratedTaxRuleModel
     */
   @JsonProperty("unitOfBasis", String, true)
   unitOfBasis?: string | undefined = undefined;
 }