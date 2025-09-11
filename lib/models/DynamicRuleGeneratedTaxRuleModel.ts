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
 * Represents a tax rule that is generated or affected by a dynamic rule.
This model mirrors structure of a standard tax rule with relevant fields.
 * @export
 * @class DynamicRuleGeneratedTaxRuleModel
 */
 @JsonObject("DynamicRuleGeneratedTaxRuleModel")
 export class DynamicRuleGeneratedTaxRuleModel {
    /**
     * @type {number}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("stateFIPS", String, true)
   stateFIPS?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxTypeCode", String, true)
   taxTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxRuleTypeId", String, true)
   taxRuleTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("isAllJuris", Boolean, true)
   isAllJuris?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("value", Number, true)
   value?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("cap", Number, true)
   cap?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("threshold", Number, true)
   threshold?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("sourcing", String, true)
   sourcing?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("countyFIPS", String, true)
   countyFIPS?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxTypeGroup", String, true)
   taxTypeGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("taxSubType", String, true)
   taxSubType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleGeneratedTaxRuleModel
     */
   @JsonProperty("options", String, true)
   options?: string | undefined = undefined;
 }