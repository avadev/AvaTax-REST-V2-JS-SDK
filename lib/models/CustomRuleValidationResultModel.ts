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
import { CustomRuleValidationSummaryModel } from "./CustomRuleValidationSummaryModel";
import { CustomRuleValidationMessageModel } from "./CustomRuleValidationMessageModel";
import { CustomRuleValidationPlanStepModel } from "./CustomRuleValidationPlanStepModel";
import { CustomRuleGeneratedTaxRuleModel } from "./CustomRuleGeneratedTaxRuleModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents the complete validation result for a custom rule, including a summary,
individual messages, an execution plan, and affected tax rules.
 * @export
 * @class CustomRuleValidationResultModel
 */
 @JsonObject("CustomRuleValidationResultModel")
 export class CustomRuleValidationResultModel {
    /**
     * @type {CustomRuleValidationSummaryModel}
     * @memberof CustomRuleValidationResultModel
     */
   @JsonProperty("summary", CustomRuleValidationSummaryModel, true)
   summary?: CustomRuleValidationSummaryModel | undefined = undefined;
    /**
     * @type {CustomRuleValidationMessageModel[]}
     * @memberof CustomRuleValidationResultModel
     */
   @JsonProperty("messages", [CustomRuleValidationMessageModel], true)
   messages?: CustomRuleValidationMessageModel[] | undefined = undefined;
    /**
     * @type {CustomRuleValidationPlanStepModel[]}
     * @memberof CustomRuleValidationResultModel
     */
   @JsonProperty("executionPlan", [CustomRuleValidationPlanStepModel], true)
   executionPlan?: CustomRuleValidationPlanStepModel[] | undefined = undefined;
    /**
     * @type {CustomRuleGeneratedTaxRuleModel[]}
     * @memberof CustomRuleValidationResultModel
     */
   @JsonProperty("taxRules", [CustomRuleGeneratedTaxRuleModel], true)
   taxRules?: CustomRuleGeneratedTaxRuleModel[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleValidationResultModel
     */
   @JsonProperty("lookupFilesUsed", [String], true)
   lookupFilesUsed?: string[] | undefined = undefined;
 }