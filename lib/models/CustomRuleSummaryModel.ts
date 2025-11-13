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
 * Base model for custom rules that can be either DynamicRuleModel or AdvancedRuleExecutionModel or TaxRuleModel
 * @export
 * @class CustomRuleSummaryModel
 */
 @JsonObject("CustomRuleSummaryModel")
 export class CustomRuleSummaryModel {
    /**
     * @type {string}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {Enums.CustomRuleStatus}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("status", Enums.CustomRuleStatusConverter, true)
   status?: Enums.CustomRuleStatus | undefined = undefined;
    /**
     * @type {Enums.CustomRuleType}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("type", Enums.CustomRuleTypeConverter, true)
   type?: Enums.CustomRuleType | undefined = undefined;
    /**
     * @type {Enums.CustomRuleSubtype}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("subtype", Enums.CustomRuleSubtypeConverter, true)
   subtype?: Enums.CustomRuleSubtype | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("subtypeDescription", [String], true)
   subtypeDescription?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("country", [String], true)
   country?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("region", [String], true)
   region?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("taxCode", [String], true)
   taxCode?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("taxType", [String], true)
   taxType?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("entityUseCode", [String], true)
   entityUseCode?: string[] | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("order", Number, true)
   order?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {object}
     * @memberof CustomRuleSummaryModel
     */
   @JsonProperty("ruleEntity", Object, true)
   ruleEntity?: object | undefined = undefined;
 }