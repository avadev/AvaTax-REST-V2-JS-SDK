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
import { CustomRuleExportUser } from "./CustomRuleExportUser";
import { TaxRuleModel } from "./TaxRuleModel";
import { CustomRuleOutputModel } from "./CustomRuleOutputModel";
import { AdvancedRuleExecutionModel } from "./AdvancedRuleExecutionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A portable export envelope containing the custom rules (tax rules, custom rules, and
advanced rules) matched by an ExportCustomRules request. This envelope can be re-imported
into another company or account using the CreateCustomRulesBatch endpoint.
 * @export
 * @class CustomRulesExportModel
 */
 @JsonObject("CustomRulesExportModel")
 export class CustomRulesExportModel {
    /**
     * @type {string}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("kind", String, true)
   kind?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("schemaVersion", String, true)
   schemaVersion?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("exportedAt", DateConverter, true)
   exportedAt?: Date | undefined = undefined;
    /**
     * @type {CustomRuleExportUser}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("exportedBy", CustomRuleExportUser, true)
   exportedBy?: CustomRuleExportUser | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("sourceAccountId", Number, true)
   sourceAccountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("sourceCompanyId", Number, true)
   sourceCompanyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("filter", String, true)
   filter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("taxRuleFilter", String, true)
   taxRuleFilter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("advancedRuleFilter", String, true)
   advancedRuleFilter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("customRuleFilter", String, true)
   customRuleFilter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("orderBy", String, true)
   orderBy?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("top", Number, true)
   top?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("skip", Number, true)
   skip?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("totalCount", Number, true)
   totalCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("taxRuleCount", Number, true)
   taxRuleCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("customRuleCount", Number, true)
   customRuleCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("advancedRuleCount", Number, true)
   advancedRuleCount?: number | undefined = undefined;
    /**
     * @type {TaxRuleModel[]}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("taxRules", [TaxRuleModel], true)
   taxRules?: TaxRuleModel[] | undefined = undefined;
    /**
     * @type {CustomRuleOutputModel[]}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("customRules", [CustomRuleOutputModel], true)
   customRules?: CustomRuleOutputModel[] | undefined = undefined;
    /**
     * @type {AdvancedRuleExecutionModel[]}
     * @memberof CustomRulesExportModel
     */
   @JsonProperty("advancedRules", [AdvancedRuleExecutionModel], true)
   advancedRules?: AdvancedRuleExecutionModel[] | undefined = undefined;
 }